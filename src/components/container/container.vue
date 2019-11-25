<template>
    <div
        v-if="showContainer"
        :class="['wg-container',
            modal ? 'wg-container-modal_wraper' : '',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '', id ? id + '_container' : '']"
        :style="{ width: width > 0 ? `${width}px` : '' }"
        :data-id="id"
    >
        <template v-if="!modal">
            <div class="wg-decoration-top" v-if="$slots.top">
                <!-- @slot 组件顶部的组件组合 -->
                <slot name="top"></slot>
            </div>
            <div
                v-if="copyable || collapse || deletable || label"
                :class="['wg-container-head', collapse ? 'wg-container-head_padding-right' : '']"
            >
                <div class="wg-container-head_title">{{ label }}</div>
                <div class="wg-container-head_options">
                    <span
                        v-if="copyable"
                        @click="copyContainer"
                        class="wg-container-head_copy"
                    >&#10010;</span>
                    <span
                        v-if="deletable"
                        @click="deleteContainer"
                        :class="['wg-container-head_delete']"
                    >&#10005;</span>
                    <span
                        v-if="collapse"
                        @click="handleCollapseClick"
                        :class="['wg-container-head_arrow', showContent ? 'wg-container-head_arrow-active' : '']"
                    ></span>
                </div>
            </div>
            <div
                v-show="showContent"
                :class="['wg-container-content',
                    (collapse || deletable || label) ? 'wg-container-content_border' : '',
                    layoutClass]"
                :style="{ height: height > 0 ? `${height}px` : '' }"
            >
                <slot></slot>
            </div>
            <div class="wg-decoration-bottom" v-if="$slots.bottom">
                <slot name="bottom"></slot>
            </div>
        </template>
        <template v-else>
            <div class="wg-container-modal">
                <div class="wg-decoration-top" v-if="$slots.top">
                    <slot name="top"></slot>
                </div>
                <div v-if="label" class="wg-container-head">
                    <div class="wg-container-head_title">{{ label }}</div>
                    <div class="wg-container-head_options">
                        <span @click="closeModal" :class="['wg-container-head_delete']">&#10005;</span>
                    </div>
                </div>
                <div
                    :class="['wg-container-content', label ? 'wg-container-content_border' : '', layoutClass]"
                    :style="{ height: height > 0 ? `${height}px` : '' }"
                >
                    <slot></slot>
                </div>
                <div class="wg-decoration-bottom" v-if="$slots.bottom">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import utils from '../../utils/util';
import Dialog from '../dialog/index.js'
import Tips from '../tips/index.js'

const dialog = new Dialog();
const tips = new Tips();
/**
 * @displayName Container
 * @groupName 表单类
 * @icon 'http://'
 */

export default {
    name: 'VContainer',

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
            type: String,
            default: ''
        },

        /**
         * 组件子项
         */
        items: {
            type: Array
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
         * 组件顶层class
         * @property attributes
         */
        wraperClass: {
            type: String,
            default: ''
        },

        /**
         * 动画名称
         * @property attributes
         */
        animated: {
            type: String
        },

        /**
         * 容器宽度
         * @property attributes
         */
        width: {
            type: Number
        },

        /**
         * 容器高度
         * @property attributes
         */
        height: {
            type: Number
        },

        /**
         * 组件是否展示为弹窗
         * @property attributes
         */
        modal: {
            type: Boolean,
            default: false
        },

        /**
         * 组件是否可展开
         * @property attributes
         */
        collapse: {
            type: Boolean,
            default: false
        },

        /**
         * 组件是否可删除
         * @property attributes
         */
        deletable: {
            type: Boolean,
            default: false
        },

        /**
         * 组件是否可复制
         * @property attributes
         */
        copyable: {
            type: Boolean,
            default: false
        },

        /**
         * 容器组件专属，若设置，则组件内部采用flex布局
         * 控制组件内部flex布局方向
         * 可选值：row, row-reverse, column, column-reverse
         * @property attributes
         */
        layout: {
            type: String,
            validator: function (type) {
                return ['inherit', 'row', 'row-reverse', 'column', 'column-reverse'].indexOf(type) !== -1;
            }
        },

        /**
         * 容器组件专属，若设置，则组件内部采用flex布局
         * 控制组件内部flex主轴方向
         * 可选值：flex-start, center, flex-end, space-around, space-between
         * @property attributes
         */
        flexJustify: {
            type: String,
            validator: function (type) {
                return (
                    ['inherit', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'].indexOf(type) !==
                    -1
                );
            }
        },

        /**
         * 容器组件专属，若设置，则组件内部采用flex布局
         * 控制组件内部flex交叉轴方向
         * 可选值：flex-start, center, flex-end
         * @property attributes
         */
        flexAlign: {
            type: String,
            validator: function (type) {
                return ['inherit', 'flex-start', 'flex-end', 'center'].indexOf(type) !== -1;
            }
        },

        /**
         * 容器组件专属，若设置，则组件内部采用flex布局
         * 控制组件内部flex元素是否换行
         * 可选值：nowrap, wrap, wrap-reverse
         * @property attributes
         */
        flexWrap: {
            type: String,
            validator: function (type) {
                return ['inherit', 'nowrap', 'wrap', 'wrap-reverse'].indexOf(type) !== -1;
            }
        },

        /**
         * 容器展开事件名称
         * @property attributes
         */
        collapseEventName: {
            type: String,
            default: 'onContainerCollapse'
        },

        /**
         * 容器删除事件名称
         * @property attributes
         */
        deleteEventName: {
            type: String,
            default: 'onContainerDelete'
        },

        /**
         * 容器复制事件名称
         * @property attributes
         */
        copyEventName: {
            type: String,
            default: 'onContainerCopy'
        },

        /**
         * modal为true时，弹窗关闭事件名称
         * @property attributes
         */
        closeEventName: {
            type: String,
            default: 'onModalClose'
        },

        /**
         * @ignore
         */
        _tableData: {
            type: Object
        },

        /**
         * @ignore
         */
        _parentAttributes: {
            type: Object
        }
    },

    provide() {
        return {
            _currentContainerId: this.id
        };
    },

    inject: {
        _currentPageInstance: {
            default: {}
        }
    },

    data() {
        return {
            validityResult: [],
            valResult: {},
            shouldTurnValToArray: {},
            showContent: this.collapse ? this.collapse : true,
            showContainer: this.hide ? !this.hide : true
        };
    },

    watch: {
        collapse(newVal, oldVal) {
            this.showContent = newVal;
        },
        hide(newVal, oldVal) {
            this.showContainer = !newVal;
        },
        showContainer(newVal, oldVal) {
            if (this.modal) {
                if (newVal) {
                    this.stopBodyScroll(true);
                } else {
                    this.stopBodyScroll(false);
                }
            }
        }
    },

    computed: {
        layoutClass: function () {
            let justify = this.flexJustify,
                align = this.flexAlign,
                direction = this.layout,
                wrap = this.flexWrap,
                res = '';

            // 优先使用flex布局
            if (
                (justify && justify !== 'inherit') ||
                (align && align !== 'inherit') ||
                (direction && direction !== 'inherit') ||
                (wrap && wrap !== 'inherit')
            ) {
                res += 'wg-container-flex ';
                if (justify) {
                    switch (justify) {
                        case 'space-around':
                            res += ' wg-container-flex_justify-space-around ';
                            break;
                        case 'space-between':
                            res += ' wg-container-flex_justify-space-between ';
                            break;
                        case 'center':
                            res += ' wg-container-flex_justify-center ';
                            break;
                        case 'flex-end':
                            res += ' wg-container-flex_justify-flex-end ';
                            break;
                    }
                }
                if (align) {
                    switch (align) {
                        case 'center':
                            res += ' wg-container-flex_align-center ';
                            break;
                        case 'flex-end':
                            res += ' wg-container-flex_align-flex-end ';
                            break;
                        case 'baseline':
                            res += ' wg-container-flex_align-baseline ';
                            break;
                        case 'stretch':
                            res += ' wg-container-flex_align-stretch ';
                            break;
                    }
                }
                if (direction) {
                    switch (direction) {
                        case 'row-reverse':
                            res += ' wg-container-flex_row-reverse ';
                            break;
                        case 'column':
                            res += ' wg-container-flex_column ';
                            break;
                        case 'column-reverse':
                            res += ' wg-container-flex_column-reverse ';
                            break;
                    }
                }
                if (wrap) {
                    switch (wrap) {
                        case 'wrap':
                            res += ' wg-container-flex_wrap ';
                            break;
                        case 'nowrap':
                            res += ' wg-container-flex_nowrap ';
                            break;
                        case 'wrap-reverse':
                            res += ' wg-container-flex_wrap-reverse ';
                            break;
                    }
                }
            }

            return res;
        }
    },

    methods: {
        closeModal() {
            this._currentPageInstance.collectEvent({
                type: this.closeEventName,
                data: null,
                target: this,
                nativeEvent: null
            });
            this._currentPageInstance.container.setAttribute(this.id, 'attributes.hide', true);
            if (this.$parent.$options.name === 'VTable') {
                this.$parent.toggleShowFilterModal(null, false);
            }
        },
        stopBodyScroll(isFixed) {
            let bodyEl = document.body;

            if (isFixed) {
                bodyEl.style.height = '100%';
                bodyEl.style.overflow = 'hidden';
            } else {
                bodyEl.style.height = 'auto';
                bodyEl.style.overflow = 'scroll';
            }
        },
        formValidity(children = []) {
            // 表格递归验证
            let result = [],
                self = this;
            children.forEach(_child => {
                let { val, validity } = _child;
                if (_child.$children.length > 0) {
                    self.formValidity(_child.$children);
                } else if (typeof validity === 'function') {
                    self.validityResult.push(validity(val));
                }
            });
        },
        getContainerValue(children = []) {
            // 获取container的值
            let result = [],
                self = this;
            children.forEach(_child => {
                let { val, name } = _child;
                if (_child.$children.length > 0) {
                    self.getContainerValue(_child.$children);
                } else if (utils.isDefined(name)) {
                    if (utils.isDefined(self.valResult[name])) {
                        if (!self.shouldTurnValToArray[name]) {
                            // 首次遇到name重复时，将name对应的值转为数组存储
                            self.valResult[name] = [self.valResult[name]];
                            // 标记当前name已被转为数组
                            self.shouldTurnValToArray[name] = true;
                        }
                        self.valResult[name].push(val);
                    } else {
                        self.valResult[name] = val;
                    }
                }
            });
        },

        /**
         * 容器展开/收起
         * <event>onContainerCollapse</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleCollapseClick() {
            this._currentPageInstance.collectEvent({
                type: this.collapseEventName,
                data: null,
                target: this,
                nativeEvent: null
            });
            this.showContent = !this.showContent;
        },

        /**
         * 容器删除
         * <event>onContainerDelete</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        deleteContainer() {
            // 调用container方法，从pagefields.json中删除container
            dialog.confirm('确定要删除当前container么', confirm => {
                if (confirm) {
                    this.id && this._currentPageInstance.container.removeItem(this.id);
                }

                this._currentPageInstance.collectEvent({
                    type: this.deleteEventName,
                    data: {
                        deleted: confirm
                    },
                    target: this,
                    nativeEvent: null
                });
            });
        },

        /**
         * 容器复制
         * <event>onContainerCopy</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{null} 原生事件对象
         * </cutomParam>
         * @public
         */
        copyContainer() {
            this._currentPageInstance.collectEvent({
                type: this.copyEventName,
                data: null,
                target: this,
                nativeEvent: null
            });
            // 参考appendfieldset，复制当前container，并添加到页面json中
            // 需要注意的是，复制过程中，id/name/事件名称的重复问题
            // 以及复制项copy、deleteable、collapse的设置问题
            let item = this._currentPageInstance.container.getItem(this.id),
                parent = this._currentPageInstance.container.getParent(this.id);

            let indexInParent = -1,
                parentItem = null;

            if (parent && parent._uid) {
                // 若parent为vue实例，则当前container为顶层container
                parentItem = this._currentPageInstance.container;
            } else {
                parentItem = parent;
            }

            if (parentItem) {
                parentItem.items.some((item, index) => {
                    if (item.id === this.id) {
                        indexInParent = index;
                    }
                });

                if (indexInParent > -1) {
                    let copyItem = _.cloneDeep(item);
                    // resetId会重置id和value属性
                    copyItem = this._currentPageInstance.container._resetId(copyItem);
                    parentItem.items.splice(indexInParent + 1, 0, copyItem);
                } else {
                    tips.error('找不到当前id的container，若使用容器复制功能，则必须设置id');
                }
            }
        }
    },

    components: {}
};
</script>
<style lang="less">
@import './container.less';
</style>
