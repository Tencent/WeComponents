<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_input-wraper' : ''
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
                        <div class="wg-input__prefix" v-if="$slots.prefix">
                            <!-- @slot 组件前缀插槽 -->
                            <slot name="prefix"></slot>
                        </div>
                        <calendar
                            calendarType="begin"
                            :value="pickRange ? beginDate : value"
                            :disabled="_disabled"
                            :pickTime="pickTime"
                            :format="format"
                            :range="range"
                            :resetable="resetable"
                            @change="handleDateChange"
                        ></calendar>
                        <template v-if="pickRange">
                            -
                            <calendar
                                calendarType="end"
                                :value="endDate"
                                :disabled="_disabled"
                                :pickTime="pickTime"
                                :format="format"
                                :range="range"
                                :resetable="resetable"
                                @change="handleDateChange"
                            ></calendar>
                        </template>
                        <div class="wg-input__suffix" v-if="$slots.suffix">
                            <!-- @slot 组件后缀插槽 -->
                            <slot name="suffix"></slot>
                        </div>
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
    </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import util from '../../utils/util.js';
import calendar from './originCalendar.vue';
import Dialog from '../dialog/index.js'
import Tips from '../tips/index.js'

const dialog = new Dialog();
const tips = new Tips();
/**
 * @displayName Calendar
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VCalendar',
    mixins: [Emitter],
    components: { calendar },
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
         * 组件承载数据的key
         */
        name: {
            type: String
        },

        /**
         * 组件承载数据
         */
        value: {
            type: [Number, String, Array]
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
         * 组件值是否可重置
         * @property attributes
         */
        resetable: {
            type: Boolean,
            default: true
        },

        /**
         * 组件是否只读
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
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onCalendarChange'
        },

        /**
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String,
            default: ''
        },

        /**
         * 是否选择时分秒，若为true，则可同时选择日期与具体时分秒
         * @property attributes
         */
        pickTime: {
            type: Boolean,
            default: false
        },

        /**
         * 是否选择时间区间，若为true，则提供第二个日期选择器以支持时间区间选择
         * @property attributes
         */
        pickRange: {
            type: Boolean,
            default: false
        },

        /**
         * 可选时间区间，区间外日期禁止选择
         * @property attributes
         */
        range: {
            type: Array,
            default: () => []
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
         * 可选值：yyyy-MM, yyyy-MM-dd, yyyy-MM-dd HH, yyyy-MM-dd HH:mm, yyyy-MM-dd HH:mm:ss
         * @property validity
         */
        format: {
            type: String,
            validator: function (type) {
                return (
                    ['yyyy-MM', 'yyyy-MM-dd', 'yyyy-MM-dd HH', 'yyyy-MM-dd HH:mm', 'yyyy-MM-dd HH:mm:ss'].indexOf(
                        type
                    ) !== -1
                );
            }
        },

        /**
         * 保存validity产生的错误信息
         * @ignore
         */
        _validityErrorMessage: {
            type: String
        },

        /**
         * @ignore
         */
        _tableData: {
            type: Object
        },

        /**
         * 保存父容器组件attributes对象
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
            componentDisabled: this.disabled
        };
    },

    watch: {
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.val = this.value;
            }
        },
        val(newVal, oldVal) {
            // 当input值改变时(不论是输入还是赋值)，抛出事件
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: util.findComponentUpward(this, 'VTable')
                    ? Object.assign({ value: newVal, tableData: this._tableData })
                    : newVal,
                target: this,
                nativeEvent: null
            });

            if (util.findComponentUpward(this, 'VTable')) {
                this.dispatch('VTable', 'tableItemValueChange', {
                    value: newVal,
                    name: this.name,
                    tableData: this._tableData
                });
            }
        },
        disabled(newVal, oldVal) {
            this.componentDisabled = newVal;
        },
        readonly(newVal, oldVal) {
            this.componentReadonly = newVal;
        },
        _validityErrorMessage(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.errorMessage = newVal;
            }
        }
    },

    computed: {
        beginDate() {
            let date = '';
            if (this.pickRange) {
                if (util.isDefined(this.val) && Array.isArray(this.val)) {
                    if (this.val.length > 0) {
                        date = this.val[0];
                    }
                }
            }
            return date;
        },
        endDate() {
            let date = '';
            if (this.pickRange) {
                if (util.isDefined(this.val) && Array.isArray(this.val)) {
                    if (this.val.length > 1) {
                        date = this.val[1];
                    }
                }
            }
            return date;
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
        }
    },

    created() {
        if (Array.isArray(this.value) && !this.pickRange) {
            tips.error('当选择日期区间时，需设置attributes.pickRange为true');
        }
    },

    methods: {
        handleDateChange(date, type) {
            let value = this.val;
            if (this.pickRange) {
                if (type === 'end') {
                    if (Array.isArray(value) && value.length > 1) {
                        value[1] = date;
                    } else if (Array.isArray(value) && value.length === 1) {
                        value.push(date);
                    } else {
                        value = ['', date];
                    }
                } else {
                    if (Array.isArray(value) && value.length > 0) {
                        value[0] = date;
                    } else {
                        value = [date, ''];
                    }
                }
            } else {
                value = date;
            }
            this.val = value;
            this.id && this._currentPageInstance.container.setValue(this.id, value);
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
@import './calendar.less';
</style>
