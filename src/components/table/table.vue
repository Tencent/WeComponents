<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_table-wraper' : ''
        ]"
        :data-id="id"
    >
        <div class="wg-decoration-top" v-if="$slots.top">
            <!-- @slot 组件顶部的组件组合 -->
            <slot name="top"></slot>
        </div>
        <div class="wg-table-label_wraper">
            <div class="wg-table-label">{{ label }}</div>
            <div class="wg-table-option_wraper">
                <span
                    class="wg-table-option"
                    v-if="Array.isArray(filterItems)"
                    @click="toggleShowFilterModal($event, true)"
                >筛选表格字段</span>
                <span class="wg-table-option" v-if="exportData">导出excel</span>
            </div>
        </div>
        <div
            class="wg-table-wraper"
            v-if="Array.isArray(filterColumns) && filterColumns.length > 0"
            :style="{ height: height > 0 ? `${height}px` : '' }"
        >
            <table class="wg-table" frame="border" rules="all">
                <thead class="wg-table-head">
                    <tr class="wg-table-head_tr">
                        <th
                            v-if="showSelection"
                            class="wg-table-th wg-table-cell wg-table-th_selection"
                        >
                            <input
                                type="checkbox"
                                @click="handleSelectAllTr"
                                :checked="detectInputAllChecked()"
                            />
                        </th>
                        <th v-if="showIndex" class="wg-table-th wg-table-cell wg-table-th_index">#</th>
                        <template v-for="(column, index) in filterColumns">
                            <th
                                v-if="!(column.attributes && column.attributes.hide)"
                                :key="index"
                                :class="['wg-table-th wg-table-cell', wrap ? 'wg-table-td_wrap' : 'wg-table-td_no-wrap', getItemSortClass(column._sort), getColumnDirectionClass((column.attributes || {}).textAlign, (column.validity || {}).format)]"
                                :style="{ width: (column.attributes && column.attributes.width) ? `${column.attributes.width}px` : '' }"
                            >
                                <template
                                    v-if="Object.prototype.toString.call(column.label) !== '[object Object]'"
                                >
                                    <span v-html="column.label"></span>
                                </template>
                                <template v-else>
                                    <tableItem
                                        :props="Object.assign(_getThLabel(column, index), { _tableData: { columnIndex: index, rowIndex: -1 }})"
                                    ></tableItem>
                                </template>
                                <span
                                    class="wg-table-th_sort"
                                    v-if="column.attributes && column.attributes.sort"
                                >
                                    <i
                                        class="wg-table-th_sort-ascend"
                                        @click="sortColumn(column, index, 'ascend')"
                                    ></i>
                                    <i
                                        class="wg-table-th_sort-descend"
                                        @click="sortColumn(column, index, 'descend')"
                                    ></i>
                                </span>
                            </th>
                        </template>
                    </tr>
                </thead>
                <tbody class="wg-table-body">
                    <template v-if="_getCurrentTableValue(tableValue).length > 0">
                        <template v-for="(tr, index) in _getCurrentTableValue(tableValue)">
                            <tr
                                :key="index"
                                class="wg-table-body_tr"
                                @mouseenter="_handleMouseEnter($event, tr, index)"
                                @mouseleave="_handleMouseLeave($event, tr, index)"
                            >
                                <td
                                    v-if="showSelection"
                                    class="wg-table-td wg-table-cell wg-table-cell_horizontal-center"
                                >
                                    <input
                                        type="checkbox"
                                        @click="handleSelectTr(tr, index)"
                                        :checked="detectInputChecked(tr, index)"
                                    />
                                </td>
                                <td
                                    v-if="showIndex"
                                    class="wg-table-td wg-table-cell wg-table-cell_horizontal-center"
                                >{{ tr._originIndex + 1 }}</td>
                                <template v-for="(column, _index) in filterColumns">
                                    <td
                                        v-if="!(column.attributes && column.attributes.hide)"
                                        :class="['wg-table-td wg-table-cell', wrap ? 'wg-table-td_wrap' : 'wg-table-td_no-wrap', getColumnDirectionClass((column.attributes || {}).textAlign, (column.validity || {}).format)]"
                                        :key="'td' + _index"
                                    >
                                        <i
                                            v-if="Array.isArray(tr.children) && tr.children.length > 0 && _index === 0"
                                            :class="['wg-table-td_arrow', tr._showChildren ? 'wg-table-td_arrow-90deg' : '']"
                                            @click="toggleShowChildren(tr, tr._originIndex)"
                                        ></i>
                                        <template
                                            v-if="typeof column.value !== 'function' && !column.valueFilterName"
                                        >{{ tr[column.name] }}</template>
                                        <template v-else>
                                            <template
                                                v-if="Object.prototype.toString.call(_getTdValue(tr, index, column, _index)) !== '[object Object]'"
                                            >
                                                <span
                                                    v-html="_bindPageVm(column, tr[column.name], index, tr)"
                                                ></span>
                                            </template>
                                            <template v-else>
                                                <tableItem
                                                    :props="Object.assign({ id: _getTableItemId() }, _getTdValue(tr, index, column, _index), { _tableData: { column: column, columnIndex: _index, row: tr, rowIndex: index }})"
                                                ></tableItem>
                                            </template>
                                        </template>
                                    </td>
                                </template>
                            </tr>
                            <template
                                v-if="Array.isArray(tr.children) && tr.children.length > 0 && tr._showChildren"
                            >
                                <template v-for="(childTr, childIndex) in tr.children">
                                    <tr
                                        :key="'child_tr_' + childIndex"
                                        class="wg-table-body_tr wg-table-body_tr-child"
                                    >
                                        <td
                                            v-if="showSelection"
                                            class="wg-table-td wg-table-cell wg-table-cell_horizontal-center"
                                        >
                                            <input
                                                type="checkbox"
                                                @click="handleSelectTr(childTr, childIndex, tr, index)"
                                                :checked="detectInputChecked(childTr, childIndex, tr, index)"
                                            />
                                        </td>
                                        <td
                                            v-if="showIndex"
                                            class="wg-table-td wg-table-cell wg-table-cell_horizontal-center"
                                        >{{ `${tr._originIndex + 1}.${childIndex + 1}` }}</td>
                                        <template
                                            v-for="(childColumn, _childIndex) in filterColumns"
                                        >
                                            <td
                                                v-if="!(childColumn.attributes && childColumn.attributes.hide)"
                                                :class="['wg-table-th wg-table-cell', wrap ? 'wg-table-td_wrap' : 'wg-table-td_no-wrap', getColumnDirectionClass((childColumn.attributes || {}).textAlign, (childColumn.validity || {}).format)]"
                                                :key="'child_td_' + _childIndex"
                                            >
                                                <template
                                                    v-if="typeof childColumn.value !== 'function'"
                                                >{{ childTr[childColumn.name ]}}</template>
                                                <template v-else>
                                                    <template
                                                        v-if="Object.prototype.toString.call(_getTdValue(childTr, childIndex, childColumn, _childIndex)) !== '[object Object]'"
                                                    >
                                                        <span
                                                            v-html="_bindPageVm(childColumn, childTr[childColumn.name], childIndex, childTr)"
                                                        ></span>
                                                    </template>
                                                    <template v-else>
                                                        <tableItem
                                                            :props="Object.assign({ id: _getTableItemId() }, _getTdValue(childTr, childIndex, childColumn, _childIndex), { _tableData: { column: childColumn, columnIndex: _childIndex, row: childTr, rowIndex: childIndex }})"
                                                        ></tableItem>
                                                    </template>
                                                </template>
                                            </td>
                                        </template>
                                    </tr>
                                </template>
                            </template>
                        </template>
                    </template>
                    <template v-else>
                        <tr>
                            <td
                                class="wg-table-body_placeholder"
                                :colspan="filterColumns.length + (showIndex ? 1 : 0) + (showSelection ? 1 : 0)"
                            >{{ placeholder }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <pagination
            v-if="pagination"
            :pageIndex="pageIndex"
            :pageSize="pageSize"
            :total="autoPaging ? tableValue.length : pageTotal ? pageTotal : tableValue.length"
            :pagination="pagination"
            @pageChange="handlePageChange"
        ></pagination>
        <div class="wg-decoration-bottom" v-if="$slots.bottom">
            <!-- @slot 组件底部的组件组合 -->
            <slot name="bottom"></slot>
        </div>
        <container id="__tableFilterModal" v-if="showFilterModal" label="选择要隐藏的列" :modal="true">
            <wgCheckbox
                name="__tableFilterCheckboxValue"
                :items="filterCheckboxItems"
                :value="chosenFilterItems"
            ></wgCheckbox>
            <wgButton
                wraperClass="wg-modal-button_center"
                label="确定"
                type="primary"
                clickEventName="__filterTableFilterColumns"
                @wgCloseFilterModal="toggleShowFilterModal($event, false)"
            ></wgButton>
        </container>
    </div>
</template>

<script>
import util from '../../utils/util';
import pagination from '../pagination/pagination.vue';
import container from '../container/container.vue';
import wgCheckbox from '../checkbox/checkbox.vue';
import wgButton from '../button/button.vue';

const { isDefined } = util;
/**
 * @displayName Table
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VTable',

    props: {
        /**
         * 组件id
         */
        id: {
            type: String
        },

        /**
         * 组件标题
         */
        label: {
            type: String
        },

        /**
         * 组件承载数据
         */
        value: {
            type: Array,
            default: () => []
        },

        /**
         * 表格列配置
         * item配置:
         * name{string}: 列值的key;
         * label{string}: 列标题;
         * sort{boolean/function(a, b)}: 列排序，若为boolean，则默认按照return a-b进行排序，若为function，则按照function的返回数值进行排序；
         * value{function(v, row)}: 列值展示前对列值进行处理，并展示函数返回值
         */
        items: {
            type: Array,
            default: () => []
        },

        /**
         * 组件顶层class
         * @property attributes
         */
        wraperClass: {
            type: String
        },

        /**
         * 动画名称
         * @property attributes
         */
        animated: {
            type: String
        },

        /**
         * 组件是否隐藏
         * @property attributes
         */
        hide: {
            type: Boolean,
            default: false
        },

        /**
         * 表格无数据时的展示文案
         * @property attributes
         */
        placeholder: {
            type: String,
            default: '暂无数据'
        },

        /**
         * 是否展示表格行索引
         * @property attributes
         */
        showIndex: {
            type: Boolean,
            default: false
        },

        /**
         * 是否支持行选择
         * @property attributes
         */
        showSelection: {
            type: Boolean,
            default: false
        },

        /**
         * 是否允许表格内容换行
         * @property attributes
         */
        wrap: {
            type: Boolean,
            default: true
        },

        /**
         * 需要被隐藏的列的name数组，若设置，则显示筛选表格字段按钮
         * @property attributes
         */
        filterItems: {
            type: Array
        },

        /**
         * 当filterItems对应的checkbox值改变时，抛出的事件名称
         * @property attributes
         */
        filterEventName: {
            type: String,
            default: 'onTableFilter'
        },

        /**
         * 导出表格数据
         * @property attributes
         */
        exportData: {
            type: Boolean,
            default: false
        },

        /**
         * 表格当前页序列
         * @property attributes
         */
        pageIndex: {
            type: Number,
            default: 0
        },

        /**
         * 表格每页最大行数
         * @property attributes
         */
        pageSize: {
            type: Number
        },

        /**
         * 表格行数，分页组件会自动根据pageTotal/pageSize计算出总页数
         * @property attributes
         */
        pageTotal: {
            type: Number
        },

        /**
         * 分页组件类型，若设置，则表格展示分页组件
         * 可选值：default, simple（不展示首尾页/跳转按钮）
         * @property attributes
         */
        pagination: {
            type: String,
            validator: function (type) {
                return ['default', 'simple'].indexOf(type) !== -1;
            }
        },

        /**
         * 是否自动分页
         * @property attributes
         */
        autoPaging: {
            type: Boolean,
            default: true
        },

        /**
         * 表格高度，若设置，则当表格内容高度大于设置高度时，固定表头
         * @property attributes
         */
        height: {
            type: Number
        },

        /**
         * 表格排序事件名称
         * @property attributes
         */
        sortEventName: {
            type: String,
            default: 'onTableSort'
        },

        /**
         * 表格行展开事件名称
         * @property attributes
         */
        collapseEventName: {
            type: String,
            default: 'onTableRowCollapse'
        },

        /**
         * 表格行选择事件名称
         * @property attributes
         */
        selectRowEventName: {
            type: String,
            default: 'onTableRowSelected'
        },

        /**
         * 表格行全选事件名称
         * @property attributes
         */
        selectAllEventName: {
            type: String,
            default: 'onTableAllSelected'
        },

        /**
         * 表格翻页事件名称
         * @property attributes
         */
        paginationEventName: {
            type: String,
            default: 'onTablePagination'
        },

        /**
         * @ignore
         */
        _parentContainerAttributes: {
            type: Object
        }
    },

    inject: {
        _currentPageInstance: {
            default: {}
        }
    },

    data() {
        return {
            tableItems: this.items,
            tableValue: this.value.map((tr, index) => {
                tr._originIndex = index;
                return tr;
            }),
            //tableItemValue: [], // 保存table常规value与嵌套组件value的混合，用于在getValue(tableId)时返回
            tableItemArray: [], // 保存table嵌套组件的位置以及值
            selectedTr: [],
            tablePageIndex: this.pageIndex,
            showFilterModal: false,
            customLabelCount: 0,
            chosenFilterItems: Array.isArray(this.filterItems) ? this.filterItems : []
        };
    },

    watch: {
        items: {
            handler(newVal, oldVal) {
                this.tableItems = newVal;
            },
            deep: true
        },
        filterItems: {
            handler(newVal, oldVal) {
                this.chosenFilterItems = newVal;
            },
            deep: true
        },
        value: {
            handler(newVal, oldVal) {
                if (!_.isEqual(newVal, oldVal)) {
                    this.tableValue = this.value.map((tr, index) => {
                        tr._originIndex = index;
                        return tr;
                    });
                }
            },
            deep: true
        },
        pageIndex(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.tablePageIndex = newVal;
            }
        }
    },

    computed: {
        filterCheckboxItems() {
            let array = this.tableItems.map((item, index) => {
                if (Object.prototype.toString.call(item.label) === '[object Object]') {
                    this.customLabelCount++;
                    return {
                        label: `自定义标题${this.customLabelCount}`,
                        value: item.name
                    };
                } else {
                    return {
                        label: item.label,
                        value: item.name
                    };
                }
            });
            return array;
        },
        filterColumns() {
            let array = this.tableItems.filter((item, index) => {
                let flag = this.chosenFilterItems.some(chosen => {
                    if (chosen === item.name) {
                        return true;
                    }
                });
                return !flag;
            });
            return array;
        }
    },

    mounted() {
        this.$on('tableItemValueChange', params => {
            // 根据name保存container数据
            let { value, tableData } = params;
            if (tableData) {
                let { column, columnIndex, row, rowIndex } = tableData;

                // 更新tableItemArray
                let flag = this.tableItemArray.some(_tableItem => {
                    if (_tableItem.columnIndex === columnIndex && _tableItem.rowIndex === rowIndex) {
                        _tableItem.value = value;
                        return true;
                    }
                });
                if (!flag) {
                    this.tableItemArray.push({
                        columnIndex,
                        rowIndex,
                        value
                    });
                }
            }
        });
    },

    methods: {
        _getCurrentTableValue(array) {
            let _tablePageIndex = this.tablePageIndex,
                _pageSize = this.pageSize;

            if (this.autoPaging) {
                // 前端自动分页
                return array.slice(
                    _tablePageIndex * (_pageSize || 0),
                    _pageSize ? _tablePageIndex * _pageSize + _pageSize : array.length
                );
            } else {
                return array;
            }
        },
        _handleMouseEnter(e, row, rowIndex) {
            e.target.style.backgroundColor = '#f4f5f7';
        },
        _handleMouseLeave(e, row, rowIndex) {
            e.target.style.backgroundColor = '#fff';
        },
        toggleShowFilterModal(e, isShow) {
            if (e && !isShow) {
                this.chosenFilterItems = e.__tableFilterCheckboxValue || [];
                this._currentPageInstance.collectEvent({
                    type: this.filterEventName,
                    data: this.chosenFilterItems,
                    target: this,
                    nativeEvent: null
                });
            }
            this.showFilterModal = isShow;
        },
        getItemSortClass(sort) {
            let res = '';

            if (typeof sort === 'string' && sort.length > 0) {
                res = `wg-table-th_${sort}`;
            }

            return res;
        },
        handlePageChange(pageNumber) {
            this.tablePageIndex = pageNumber;
            this._currentPageInstance.container.setAttribute(this.id, 'attributes.pageIndex', pageNumber);
            this._currentPageInstance.collectEvent({
                type: this.paginationEventName,
                data: {
                    items: this.tableItems,
                    value: this.tableValue,
                    pageNumber: pageNumber
                },
                target: this,
                nativeEvent: null
            });
        },
        getColumnDirectionClass(direction, format) {
            let _class = 'wg-table-cell_horizontal-left';
            if (direction) {
                _class = `wg-table-cell_horizontal-${direction}`;
            } else if (format === 'Number') {
                // 数字类型默认右对齐
                _class = 'wg-table-cell_horizontal-right';
            }
            return _class;
        },

        /**
         * 表格排序
         * <event>onTableSort</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{Object}  事件数据, items: 表格列配置, value：表格数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        sortColumn(column, index, type) {
            // 数据变更驱动视图更新
            let resetOriginIndex = false;

            this.tableItems.forEach((_column, _index) => {
                if (_index === index) {
                    if (_column._sort === type) {
                        this.tableItems[_index]._sort = '';
                        resetOriginIndex = true;
                    } else {
                        this.tableItems[_index]._sort = type;
                    }
                } else {
                    // 同一时间只允许单列排序
                    this.tableItems[_index]._sort = '';
                }
            });

            if (!resetOriginIndex) {
                let name = column.name;

                if (column.attributes && column.attributes.sort && typeof column.attributes.sort === 'boolean') {
                    // sort为布尔值则按默认逻辑排序
                    this.tableValue.sort((a, b) => {
                        return type === 'ascend' ? a[name] - b[name] : b[name] - a[name];
                    });
                } else if (
                    column.attributes &&
                    column.attributes.sort &&
                    typeof column.attributes.sort === 'function'
                ) {
                    this.tableValue.sort((a, b) => {
                        return type === 'ascend'
                            ? column.attributes.sort(a[name], b[name])
                            : -column.attributes.sort(a[name], b[name]);
                    });
                }
            } else {
                this.tableValue.sort((a, b) => {
                    return a._originIndex - b._originIndex;
                });
            }

            this._currentPageInstance.collectEvent({
                type: this.sortEventName,
                data: {
                    items: this.tableItems,
                    value: this.tableValue
                },
                target: this,
                nativeEvent: null
            });

            this._currentPageInstance.container.setAttributes(this.id, {
                items: this.tableItems,
                value: this.tableValue
            });
        },

        /**
         * 表格展开
         * <event>onTableRowCollapse</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{Object}  事件数据, items: 表格列配置, value：表格数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        toggleShowChildren(tr, index) {
            if (!tr._showChildren) {
                this.tableValue[index]._showChildren = true;
            } else {
                this.tableValue[index]._showChildren = false;
            }

            this._currentPageInstance.collectEvent({
                type: this.collapseEventName,
                data: {
                    items: this.tableItems,
                    value: this.tableValue
                },
                target: this,
                nativeEvent: null
            });

            this._currentPageInstance.container.setValue(this.id, this.tableValue);
        },

        /**
         * 表格行全选
         * <event>onTableRowSelected</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{Object}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleSelectTr(tr, index, parent, parentIndex) {
            if (isDefined(parent) && isDefined(parentIndex)) {
                // 二级行点击，仅标记当前行选择状态
                let deletedIndex = -1;
                let flag = this.selectedTr.some((_tr, _index) => {
                    if (_tr.path === `${parentIndex}-${index}`) {
                        deletedIndex = _index;
                        return true;
                    }
                });

                if (flag) {
                    // 已选中，需反选。取消二级行选中标记，并修改selectedTr和tableValue
                    parent.children[index]._selected = false;
                    this.selectedTr.splice(deletedIndex, 1);
                } else {
                    // 未选中，设置选中标记，并修改selectedTr和tableValue
                    parent.children[index]._selected = true;
                    this.selectedTr.push({
                        row: tr,
                        rowIndex: index,
                        parent: parent,
                        parentIndex: parentIndex,
                        path: `${parentIndex}-${index}`
                    });
                }
                this.tableValue[parentIndex] = parent;

                this._currentPageInstance.container.setValue(this.id, this.tableValue);
            } else {
                // 一级行点击，联动子项
                let flag = tr._selected;
                if (flag) {
                    // 已选中，取消当前项及子项选中标记，并修改selectedTr和tableValue
                    tr._selected = false;
                    this.selectedTr.splice(index, 1);
                    if (Array.isArray(tr.children) && tr.children.length > 0) {
                        tr.children.forEach((_child, _index) => {
                            _child._selected = false;
                        });
                    }
                    let _selectedTr = [];
                    this.selectedTr.forEach((_child, _index) => {
                        if (!(_child.path && _child.path.split('-')[0] === index)) {
                            _selectedTr.push(_child);
                        }
                    });
                    this.selectedTr = _selectedTr;
                } else {
                    // 未选中，设置当前项及子项选中标记，并修改selectedTr和tableValue
                    tr._selected = true;
                    this.selectedTr.push({
                        row: tr,
                        rowIndex: index
                    });
                    if (Array.isArray(tr.children) && tr.children.length > 0) {
                        tr.children.forEach((_child, _index) => {
                            _child._selected = true;
                            this.selectedTr.push({
                                row: _child,
                                rowIndex: _index,
                                parent: tr,
                                parentIndex: index,
                                path: `${index}-${_index}`
                            });
                        });
                    }
                }
                this.tableValue[index] = tr;
                this._currentPageInstance.container.setValue(this.id, this.tableValue);
            }

            this._currentPageInstance.collectEvent({
                type: this.selectRowEventName,
                data: {
                    items: this.tableItems,
                    value: this.tableValue,
                    selectedRow: this.selectedTr
                },
                target: this,
                nativeEvent: null
            });
        },

        detectInputChecked(tr, index, parent, parentIndex) {
            let res = false;
            if (isDefined(parent) && isDefined(parentIndex)) {
                res = tr._selected;
            } else {
                res = tr._selected;
                if (Array.isArray(tr.children) && tr.children.length > 0) {
                    let hasChildrenNoSelected = tr.children.some(child => {
                        if (!child._selected) {
                            // 子项有未选择的，则父项取消勾选
                            res = false;
                            return true;
                        }
                    });
                    if (!hasChildrenNoSelected) {
                        res = true;
                    }
                }
            }

            return res;
        },

        /**
         * 表格行选中
         * <event>onTableAllSelected</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{Object}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleSelectAllTr() {
            if (this.detectInputAllChecked()) {
                this.tableValue.forEach(tr => {
                    tr._selected = false;
                    if (tr.children) {
                        tr.children.forEach(_tr => {
                            _tr._selected = false;
                        });
                    }
                });
                this.selectedTr = [];
            } else {
                this.tableValue.forEach((tr, index) => {
                    tr._selected = true;
                    this.selectedTr.push({
                        row: tr,
                        rowIndex: index
                    });
                    if (tr.children) {
                        tr.children.forEach((_tr, _index) => {
                            _tr._selected = true;
                            this.selectedTr.push({
                                row: _tr,
                                rowIndex: _index,
                                parent: tr,
                                parentIndex: index,
                                path: `${index}-${_index}`
                            });
                        });
                    }
                });
            }

            this._currentPageInstance.collectEvent({
                type: this.selectAllEventName,
                data: {
                    items: this.tableItems,
                    value: this.tableValue,
                    selectedRow: this.selectedTr
                },
                target: this,
                nativeEvent: null
            });

            this._currentPageInstance.container.setValue(this.id, this.tableValue);
        },
        detectInputAllChecked() {
            let res = true;
            this.tableValue.forEach(tr => {
                if (!tr._selected) {
                    res = false;
                }
                if (tr.children) {
                    tr.children.forEach(_tr => {
                        if (!_tr._selected) {
                            res = false;
                        }
                    });
                }
            });
            return res;
        },
        _getThLabel(column, columnIndex) {
            let label = column.label,
                _value = label.value;

            let flag = this.tableItemArray.some(item => {
                if (item.columnIndex === columnIndex && item.rowIndex === -1) {
                    _value = item.value;
                    return true;
                }
            });
            if (flag) {
                label.value = _value;
            }
            return label;
        },
        // 当column.value返回组件配置的Object时，获取当前td的值
        _getTdValue(row, rowIndex, column, columnIndex) {
            let func = null;
            if (typeof column.value === 'function') {
                func = column.value;
            } else if (column.valueFilterName && this._currentPageInstance.container.vm[column.valueFilterName]) {
                func = this._currentPageInstance.container.vm[column.valueFilterName];
            }

            let bindFunc = func.bind(this._currentPageInstance.container.vm),
                value = row[column.name],
                result = bindFunc(value, rowIndex, row),
                _value = value;
            // getTdValue需要区分当前值变化的来源
            // 若来自props中value的改变，则getTdValue无需对value函数返回的component进行value的注入
            // 若来自table嵌套组件操作抛出事件，则将value函数返回的component.value修改为事件的value
            let flag = this.tableItemArray.some(item => {
                if (item.columnIndex === columnIndex && item.rowIndex === rowIndex) {
                    _value = item.value;
                    return true;
                }
            });
            if (Object.prototype.toString.call(result) === '[object Object]' && flag) {
                row[column.name] = _value;
                result = func(_value, rowIndex, row);
                result.value = _value;
            }

            return result;
        },
        // getValue时返回table的值
        _getTableValue() {
            let res = [];

            this._getCurrentTableValue(this.tableValue).forEach((row, rowIndex) => {
                let tr = {};
                this.tableItems.forEach((column, columnIndex) => {
                    let td = row[column.name];
                    if (column.value && typeof column.value === 'function') {
                        let flag = this.tableItemArray.some(item => {
                            if (item.columnIndex === columnIndex && item.rowIndex === rowIndex) {
                                td = item.value;
                                return true;
                            }
                        });
                        if (!flag) {
                            let result = this._getTdValue(row, rowIndex, column, columnIndex);
                            if (Object.prototype.toString.call(result) === '[object Object]') {
                                td = result.value;
                            } else {
                                td = result;
                            }
                        }
                    }

                    column.name && (tr[column.name] = td);
                });
                res.push(tr);
            });

            return res;
        },
        _getTableItemId() {
            return util.getUid();
        },
        _bindPageVm(column, value, index, tr) {
            let fn = typeof column.value === 'function' ? column.value : this._currentPageInstance.container.vm[column.valueFilterName];
            // 允许table的value函数中使用当前页面vm的上下文
            let bindFn = fn.bind(this._currentPageInstance.container.vm)
            return bindFn(value, index, tr)
        }
    },

    components: {
        // 存在循环引用的情况，需异步引用
        tableItem: () => import('../../item.vue'),
        pagination,
        container,
        wgCheckbox,
        wgButton
    }
};
</script>

<style lang="less">
@import './table.less';
</style>


