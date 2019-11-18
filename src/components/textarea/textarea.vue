<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_textarea-wraper' : ''
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
            <div class="wg-component-wraper wg-component-wraper_text">
                <!-- 组件label -->
                <div
                    :class="[ label ? 'wg-component-label' : '', required ? 'wg-component-required' : '']"
                    :style="{ width: labelWidth > 0 ? `${labelWidth}px` : '' }"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-component-entity_main">
                        <!-- eslint-disable -->
                        <textarea
                            :class="[
                                'wg-textarea',
                                _disabled || _readonly ? 'wg-textarea-disabled' : '',
                                id ? id + '_textarea' : ''
                            ]"
                            v-model="val"
                            @click="handleClick"
                            @input="handleInput"
                            @dblclick="handleDblClick"
                            :placeholder="placeholder"
                            :disabled="_disabled"
                            :readonly="_readonly"
                            ref="textarea"
                        ></textarea>
                        <!-- eslint-enable -->
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
                        <i
                            v-if="showResetIcon"
                            class="icon icon-cancel wg-textarea-clear"
                            @click="resetValue"
                        ></i>
                        <i v-if="max" class="wg-textarea-num">{{String(val).length}}/{{max}}</i>
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
import Dialog from '../dialog/index.js'

const dialog = new Dialog();
/**
 * @displayName Textarea
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VTextarea',

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
            type: [String, Number]
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
         * 组件占位符
         * @property attributes
         */
        placeholder: {
            type: String
        },

        /**
         * 组件是否禁用
         * @property attributes
         */
        disabled: {
            type: Boolean
        },

        /**
         * 组件是否只读
         * @property attributes
         */
        readonly: {
            type: Boolean
        },

        /**
         * Textarea组件值是否支持一键清空
         * @property attributes
         */
        resetable: {
            type: Boolean,
            default: true
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
         * 组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String,
            default: 'onTextareaClick'
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onTextareaChange'
        },

        /**
         * 组件双击事件名称
         * @property attributes
         */
        dblClickEventName: {
            type: String,
            default: 'onTextareaDblClick'
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
         * 组件数据允许的最大值
         * 若format为String，则最大值与value.length比较
         * 若format为Number，则最大值与value比较
         * @property validity
         */
        max: {
            type: Number
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
        _tableData: {
            type: Object
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
            componentReadonly: this.readonly || undefined,
            componentDisabled: this.disabled || undefined
        };
    },

    watch: {
        _validityErrorMessage(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.errorMessage = newVal;
            }
        },
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.val = this.value;
            }
        },
        val(newVal, oldVal) {
            // 当input值改变时(不论是输入还是赋值)，同步更新container.items，并抛出事件
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: newVal,
                target: this,
                nativeEvent: null
            });
        },
        disabled(newVal, oldVal) {
            this.componentDisabled = newVal;
        },
        readonly(newVal, oldVal) {
            this.componentReadonly = newVal;
        }
    },

    computed: {
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
            return this.val && !this._disabled && !this._readonly && this.resetable;
        }
    },

    methods: {
        resetValue() {
            this.val = '';
        },

        /**
         * Textarea输入事件
         * <event>onTextareaChange</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前Textarea数据;
         *  target{object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleInput(event) {
            this.id && this._currentPageInstance.container.setValue(this.id, this.val);
            if (this.max) {
                if (this.val.length > this.max) {
                    this.val = this.val.slice(0, this.max);
                }
            }
        },

        /**
         * Textarea点击事件
         * <event>onTextareaClick</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前Textarea数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleClick(event) {
            this._currentPageInstance.collectEvent({
                type: this.clickEventName,
                data: this.val,
                target: this,
                nativeEvent: event
            });
        },

        /**
         * Textarea组件双击事件
         * <event>onTextareaDblClick</event>
         *
         * 监听并抛出双击事件
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前Textarea数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{Object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleDblClick(event) {
            this._currentPageInstance.collectEvent({
                type: this.dblClickEventName,
                data: this.val,
                target: this,
                nativeEvent: event
            });
        },

        _editable() {
            dialog.confirm('确定编辑此字段吗？', rt => {
                if (rt) {
                    this.componentReadonly = false;
                    if (this.$refs && this.$refs.textarea) {
                        this.$refs.textarea.focus();
                    }
                }
            });
        }
    },

    components: {}
};
</script>
<style lang='less'>
@import './textarea.less';
</style>
