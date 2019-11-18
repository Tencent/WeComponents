<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_checkbox-wraper' : ''
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
            <div :class="['wg-component-wraper', required ? 'wg-component-required' : '']">
                <!-- 组件label -->
                <div
                    :class="[ label ? 'wg-component-label' : '', required ? 'wg-component-required' : '']"
                    :style="{ width: labelWidth > 0 ? `${labelWidth}px` : '' }"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-component-entity_main">
                        <span :class="['wg-checkbox', id ? id + '_checkbox' : '']">
                            <label
                                v-for="(item, index) in checkboxItems"
                                :key="index"
                                class="wg-checkbox-item"
                            >
                                <!-- eslint-disable -->
                                <input
                                    type="checkbox"
                                    :class="['wg-checkbox-input',
                                        (_disabled || (item.attributes && item.attributes.disabled) || _readonly) ?
                                        'wg-checkbox-input_disabled' : '']"
                                    v-model="val"
                                    :disabled="_disabled || (item.attributes && item.attributes.disabled) || _readonly"
                                    :value="item.value"
                                />
                                <!-- eslint-enable -->
                                <span class="wg-checkbox-span">
                                    {{ item.label }}
                                    <i
                                        class="wg-help-icon"
                                        v-if="item.attributes && item.attributes.helpIcon"
                                        :title="item.attributes.helpIcon"
                                    ></i>
                                </span>
                            </label>
                        </span>
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
    </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import util from '../../utils/util';
import Dialog from '../dialog/index.js'

const dialog = new Dialog();
/**
 * @displayName Checkbox
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VCheckbox',
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
            type: Array,
            default: () => []
        },

        /**
         * 组件选项数组
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
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onCheckboxChange'
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
        extra: {
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
            checkboxItems: this.items,
            errorMessage: this._validityErrorMessage,
            componentReadonly: this.readonly,
            componentDisabled: this.disabled
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
                this.val = newVal;
            }
        },
        val(newVal, oldVal) {
            if (!_.isEqual(newVal, oldVal)) {
                this.id && this._currentPageInstance.container.setValue(this.id, newVal);

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
                        tableData: this._tableData
                    });
                }
            }
        },
        items: {
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.checkboxItems = newVal;
                }
            },
            deep: true
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
        }
    },

    methods: {
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
@import './checkbox.less';
</style>
