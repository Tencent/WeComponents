<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_select-wraper' : ''
        ]"
        :data-id="id"
    >
        <div class="wg-decoration-top" v-if="$slots.top">
            <!-- @slot 组件顶部的组件组合 -->
            <slot name="top"></slot>
        </div>
        <!-- main中的内容需要控制下样式，在一行展示 -->
        <div class="wg-component-main">
            <div class="wg-decoration-left" v-if="$slots.left">
                <!-- @slot 组件左侧的组件组合 -->
                <slot name="left"></slot>
            </div>
            <div class="wg-component-wraper">
                <!-- 组件label -->
                <div
                    :class="[ label ? 'wg-component-label' : '', required ? 'wg-component-required' : '']"
                    :style="{ width: labelWidth > 0 ? `${labelWidth}px` : '' }"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-component-entity_main">
                        <div :class="['wg-select', id ? id + '_select' : '']">
                            <div
                                :class="['wg-select-chosen', _disabled || _readonly ? 'wg-select-chosen_disabled' : '']"
                                @click="toggleShowList($event)"
                            >
                                <div
                                    :class="['wg-select-chosen_label', id ? id + '_select-chosen_label' : '']"
                                    :id="'select_chosen_label_' + id"
                                >
                                    <img
                                        v-if="chosenItem.labelIcon"
                                        :src="chosenItem.labelIcon"
                                        class="wg-select-chosen_label-icon"
                                    />
                                    {{ chosenItem.label }}
                                </div>
                                <i
                                    :class="[
                                        'wg-select-chosen_arrow',
                                        showList ? 'wg-select-chosen_arrow-up' : 'wg-select-chosen_arrow-down'
                                    ]"
                                ></i>
                            </div>
                            <div class="wg-select-list" v-show="showList" :id="id">
                                <div class="wg-select-list_search" v-if="searchable">
                                    <input
                                        type="text"
                                        class="wg-select-list_search-input"
                                        ref="searchInput"
                                        @input="handleInput"
                                    />
                                    <svg
                                        width="20"
                                        height="20"
                                        class="wg-select-list_search-icon"
                                        viewBox="-10,-10,20,20"
                                    >
                                        <circle
                                            x="10"
                                            y="10"
                                            stroke="#c6c6c6"
                                            stroke-width="2"
                                            r="4"
                                            fill="white"
                                        />
                                        <line
                                            x1="3"
                                            y1="3"
                                            x2="8"
                                            y2="8"
                                            stroke="#c6c6c6"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </div>
                                <ul class="wg-select-list_content">
                                    <li
                                        :class="['wg-select-list_item-add wg-select-list_item-add-input-wraper', id]"
                                        v-if="addable"
                                    >
                                        <input
                                            :class="['wg-select-list_item-add-input', id]"
                                            type="text"
                                            placeholder="新增选项"
                                            ref="addInput"
                                        />
                                        <span
                                            :class="['wg-select-list_item-add-icon', id]"
                                            @click="handleAdd"
                                        >+</span>
                                    </li>
                                    <li
                                        v-for="(item,index) in searchResult"
                                        :key="index"
                                        :class="[
                                            'wg-select-list_item-wraper',
                                            (item.attributes && item.attributes.disabled)
                                                ? 'wg-select-list_item-wraper-disabled' : ''
                                        ]"
                                        @click="handleClick($event, item, index, items)"
                                    >
                                        <div
                                            :class="[
                                                'wg-select-list_item',
                                                (item.attributes && item.attributes.disabled)
                                                    ? 'wg-select-list_item-disabled' : ''
                                            ]"
                                        >
                                            <img
                                                v-if="item.labelIcon"
                                                :src="item.labelIcon"
                                                class="wg-select-list_item-label-icon"
                                            />
                                            <span
                                                v-if="item.label"
                                                class="wg-select-list_item-label"
                                            >{{ item.label }}</span>
                                            <div
                                                v-if="item.content"
                                                :class="[
                                                    'wg-select-list_item-content',
                                                    (item.attributes && item.attributes.disabled)
                                                        ? 'wg-select-list_item-content-disabled' : ''
                                                ]"
                                            >{{ item.content }}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span
                            class="wg-input-icon_readonly"
                            v-if="_readonly && !_disabled"
                            title="点击可修改"
                            @click="_editable"
                        >
                            <svg
                                version="1.1"
                                role="presentation"
                                width="16"
                                height="16"
                                viewBox="0 0 1792 1792"
                                class="fa-icon"
                                style="color: rgb(85, 85, 85);"
                            >
                                <!-- eslint-disable -->
                                <path
                                    d="M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
                                />
                                <!-- eslint-enable -->
                            </svg>
                        </span>
                    </div>
                    <div class="wg-component-entity_bottom">
                        <div class="wg-component-validity_error">{{errorMessage}}</div>
                        <div class="wg-component-help">{{help}}</div>
                    </div>
                </div>
            </div>
            <div class="wg-decoration-right" v-if="$slots.right">
                <!-- @slot 组件右侧的组件组合 -->
                <slot name="right"></slot>
            </div>
        </div>
        <div class="wg-decoration-bottom" v-if="$slots.bottom">
            <!-- @slot 组件底部的组件组合 -->
            <slot name="bottom"></slot>
        </div>
        <div v-if="multiple" class="wg-select-chosen_labels">
            <template v-for="(item, index) in multipleChosenList">
                <span class="wg-select-chosen_label" :key="index">
                    {{ item.label }}
                    <i class="wg-select-chosen_remove" @click="removeChosen(item)">x</i>
                </span>
            </template>
        </div>
    </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import util from '../../utils/util.js';
import _ from 'lodash';
import Dialog from '../dialog/index.js'
import Tips from '../tips/index.js'

const dialog = new Dialog();
const tips = new Tips();
/**
 * @displayName Select
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VSelect',
    mixins: [Emitter],

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
         * 组件承载数据的key
         */
        name: {
            type: String
        },

        /**
         * 组件承载数据
         */
        value: {
            type: [String, Number, Array]
        },

        /**
         * select组件选项数组
         */
        items: {
            type: Array,
            default: []
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
         * 组件是否禁用
         * @property attributes
         */
        disabled: {
            type: Boolean
        },

        /**
         * 组件是否可搜索
         * @property attributes
         */
        searchable: {
            type: Boolean,
            default: true
        },

        /**
         * 组件是否可多选
         * @property attributes
         */
        multiple: {
            type: Boolean,
            default: false
        },

        /**
         * 组件是否仅只读
         * @property attributes
         */
        readonly: {
            type: Boolean
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
         * 组件label宽度，单位为px
         * @property attributes
         */
        labelWidth: {
            type: Number
        },

        /**
         * Select组件搜索框输入事件名称
         * @property attributes
         */
        inputEventName: {
            type: String,
            default: 'onSelectInput'
        },

        /**
         * 组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String,
            default: 'onSelectClick'
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onSelectChange'
        },

        /**
         * 组件items是否可动态增加
         * @property attributes
         */
        addable: {
            type: Boolean,
            default: false
        },

        /**
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String
        },

        /**
         * 组件值是否必填
         * @property validity
         */
        required: {
            type: Boolean
        },

        /**
         * 组件值类型
         * 可选值：String, Number
         * @property validity
         */
        format: {
            type: String,
            default: 'String',
            validator: function (type) {
                return ['String', 'Number'].indexOf(type) !== -1;
            }
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
        _validityErrorMessage: {
            type: String
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
            val: this.value,
            errorMessage: this._validityErrorMessage,
            componentReadonly: this.readonly,
            componentDisabled: this.disabled,
            showList: false,
            searchResult: this.items
        };
    },

    watch: {
        _validityErrorMessage(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.errorMessage = newVal;
            }
        },
        value(newVal, oldVal) {
            if (!_.isEqual(newVal, oldVal)) {
                this.val = this.value;
            }
        },
        val(newVal, oldVal) {
            if (!_.isEqual(newVal, oldVal)) {
                let _data = newVal;
                if (util.findComponentUpward(this, 'VTable')) {
                    _data = {
                        value: newVal,
                        tableData: this._tableData
                    };
                    this.dispatch('VTable', 'tableItemValueChange', _data);
                }
                // 当input值改变时(不论是输入还是赋值)，同步更新container.items，并抛出事件
                this._currentPageInstance.collectEvent({
                    type: this.changeEventName,
                    data: _data,
                    target: this,
                    nativeEvent: null
                });
            }
        },
        items(newVal, oldVal) {
            this.searchResult = newVal;
        },
        disabled(newVal, oldVal) {
            this.componentDisabled = newVal;
        },
        readonly(newVal, oldVal) {
            this.componentReadonly = newVal;
        }
    },

    computed: {
        multipleChosenList() {
            let labelList = [];
            if (Array.isArray(this.val)) {
                this.val.forEach(_value => {
                    this.items.some(item => {
                        if (item.value === _value) {
                            labelList.push(item);
                            return true;
                        }
                    });
                });
            }
            return labelList;
        },

        /**
         * 子组件属性优先
         * 若子组件本身没有设置值，则继承容器组件attributes设置
         */
        _disabled() {
            if (this.componentDisabled !== undefined) {
                return this.componentDisabled;
            } else {
                if (this._parentContainerAttributes && this._parentContainerAttributes.disabled) {
                    return this._parentContainerAttributes.disabled;
                } else if (this._parentContainerAttributes && this._parentContainerAttributes.readonly) {
                    return this._parentContainerAttributes.readonly;
                } else {
                    return false;
                }
            }
        },
        _readonly() {
            if (this.componentReadonly !== undefined) {
                return this.componentReadonly;
            } else {
                if (this._parentContainerAttributes && this._parentContainerAttributes.readonly) {
                    return this._parentContainerAttributes.readonly;
                } else {
                    return false;
                }
            }
        },
        showResetIcon() {
            return this.val && !this._disabled && this.resetable;
        },
        chosenItem() {
            let _item = {
                label: '请选择',
                value: '',
                labelIcon: ''
            };

            this.items.some(item => {
                if (item.value === this.val) {
                    _item = item;
                }
            });

            return _item;
        }
    },

    created() {
        window.addEventListener('scroll', function (e) {
            let selectList = document.querySelectorAll('.wg-select-list');
            for (let i = 0, len = selectList.length; i < len; i++) {
                selectList[i].style.display = 'none';
            }
        });
    },

    mounted() {
        // 监听全局页面点击事件，若页面点击事件的target非select，则隐藏select下拉框
        this.$on('_pageClick', params => {
            let target = params.target,
                className = '';

            target && (className = target.className);
            // select组件外或label点击，自动隐藏list
            if (
                typeof className === 'string' &&
                className.indexOf(this.id) === -1 &&
                className.indexOf('wg-select-list_item-disabled') === -1
            ) {
                this.toggleShowList(params, false);
            }
        });
    },

    methods: {
        handleAdd() {
            let addInputValue = this.$refs.addInput.value,
                items = this.items;

            let flag = items.some(item => {
                if (String(item.value) === addInputValue) {
                    tips.error(`输入的值已被${item.label}对应的选项占用啦`);
                    return true;
                }
            });

            if (!flag) {
                items.push({
                    label: addInputValue,
                    value: addInputValue
                });

                this.id && this._currentPageInstance.container.setAttribute(this.id, 'items', items);
                this.$refs.addInput.value = '';
            }
        },
        toggleShowList(e, isShowList) {
            if (!this._disabled && !this._readonly) {
                let target = event.target;
                let bound = target.getBoundingClientRect();
                let selectList = document.querySelectorAll('.wg-select-list');
                for (let i = 0, len = selectList.length; i < len; i++) {
                    if (selectList[i].id === this.id && this.id === target.id.slice(20)) {
                        selectList[i].style.top = bound.y + bound.height + 'px';
                        selectList[i].style.left = bound.x + 'px';
                        selectList[i].style.width = bound.width + 'px';
                    }
                }
                this.showList = typeof isShowList === 'boolean' ? isShowList : !this.showList;

                if (this.showList) {
                    // 在下一帧自动聚焦搜索框
                    this.$nextTick(() => {
                        this.$refs.searchInput && this.$refs.searchInput.focus();
                    });
                }
            }
        },
        showPanelEvent: function (event) {
            if (this.disabled) return;

            var target = event.target;
            var bound = target.getBoundingClientRect();

            var dateList = document.querySelectorAll('.wg-select-list');
            for (var i = 0, len = dateList.length; i < len; i++) {
                if (dateList[i].id == this.random) {
                    if (dateList[i].style.display == 'none') {
                        this.showPanel = true;
                        dateList[i].style.display = '';
                        dateList[i].style.top = bound.y + bound.height + 10 + 'px';
                        dateList[i].style.left = bound.x + 'px';
                    } else {
                        this.showPanel = false;
                    }
                } else {
                    dateList[i].style.display = 'none';
                }
            }
        },

        /**
         * Select组件搜索框输入事件
         * <event>onSelectInput</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleInput(event) {
            let inputValue = this.$refs.searchInput.value,
                searchResult = [];

            if (this.items.length > 0) {
                this.items.forEach(item => {
                    if (!item.customEventName) {
                        let _text = '';
                        // 同时搜索标题和内容
                        item.label && (_text += item.label);
                        item.content && (_text += item.content);

                        if (_text.indexOf(inputValue) > -1) {
                            searchResult.push(item);
                        }
                    }
                });
            }

            this.searchResult = searchResult;

            this._currentPageInstance.collectEvent({
                type: this.inputEventName,
                data: inputValue,
                target: this,
                nativeEvent: event
            });
        },

        /**
         * Select组件选项点击事件
         * <event>onSelectClick</event>
         *
         * 若点击对象为组件自定义事件选项，则抛出事件名称为customEventName
         * 若点击对象为组件数据选项，则抛出事件名称为clickEventName
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleClick(event, item, index, items) {
            if (!(item.attributes && item.attributes.disabled)) {
                if (!item.customEventName) {
                    if (this.multiple) {
                        if (Array.isArray(this.val)) {
                            let _flag = this.val.some(_val => _val === item.value);
                            if (!_flag) {
                                this.val.push(item.value);
                                this._currentPageInstance.collectEvent({
                                    type: this.changeEventName,
                                    data: util.findComponentUpward(this, 'VTable')
                                        ? Object.assign({
                                            value: this.val,
                                            tableData: this._tableData
                                        })
                                        : this.val,
                                    target: this,
                                    nativeEvent: event
                                });
                            }
                        } else {
                            this.val = [item.value];
                        }
                    } else {
                        this.val = item.value;
                    }
                    this.id && this._currentPageInstance.container.setValue(this.id, this.val);
                    this._currentPageInstance.collectEvent({
                        type: this.clickEventName,
                        data: util.findComponentUpward(this, 'VTable')
                            ? Object.assign({
                                value: this.val,
                                tableData: this._tableData
                            })
                            : this.val,
                        target: this,
                        nativeEvent: event
                    });
                } else {
                    this._currentPageInstance.collectEvent({
                        type: item.customEventName,
                        data: util.findComponentUpward(this, 'VTable')
                            ? Object.assign({
                                value: this.val,
                                tableData: this._tableData
                            })
                            : this.val,
                        target: this,
                        nativeEvent: event
                    });
                }
                // 单选则直接隐藏list
                this.showList = false;
            }
        },
        removeChosen(item) {
            if (this.multiple && Array.isArray(this.val)) {
                let index = this.val.findIndex(_val => _val === item.value);
                this.val.splice(index, 1);
                this.id && this._currentPageInstance.container.setValue(this.id, this.val);
            }
        },
        _editable() {
            dialog.confirm('确定编辑此字段吗？', rt => {
                if (rt) {
                    this.componentReadonly = false;
                }
            });
        }
    }
};
</script>
<style lang='less'>
@import './select.less';
</style>
