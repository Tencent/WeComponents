<template>
    <div
        v-if="!hide"
        :class="['wg-group-wraper', animated ? `animated ${animated}` : '', wraperClass ? wraperClass : '', flexItemWrap ? 'wg-group-wraper_wrap' : '', id ? id + '_tag-wraper' : '']"
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
            <div class="wg-component-wraper wg-component-wraper_tag">
                <!-- 组件label -->
                <div
                    :class="[ label ? 'wg-component-label' : '', required ? 'wg-component-required' : '']"
                    :style="{ width: labelWidth > 0 ? `${labelWidth}px` : '' }"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-component-entity_main">
                        <div class="wg-tag">
                            <template v-for="(tag, index) in tagsArray">
                                <div class="wg-tag-item" :key="index">
                                    <span class="wg-tag-item_text">{{ tag }}</span>
                                    <span
                                        class="wg-tag-item_close"
                                        v-if="!disabled"
                                        @click="deleteTag($event, tag, index)"
                                    ></span>
                                </div>
                            </template>
                            <div class="wg-tag-item" v-if="!_disabled && _showAddButton">
                                <input class="wg-tag-item_input" type="text" v-model="newTagValue" />
                                <span class="wg-tag-item_add" @click="addTag">添加</span>
                            </div>
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
import Emitter from "../../mixins/emitter.js";
import util from "../../utils/util.js";
/**
 * @displayName Tag
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: "VTag",
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
            default: ""
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
            type: [String, Array]
        },
        /**
         * 组件是否隐藏
         * ___attributes___
         */
        hide: {
            type: Boolean,
            default: false
        },
        /**
         * 组件占位符
         * ___attributes___
         */
        placeholder: {
            type: String
        },
        /**
         * 组件是否禁用
         * ___attributes___
         */
        disabled: {
            type: Boolean
        },
        /**
         * 组件是否只读
         * ___attributes___
         */
        readonly: {
            type: Boolean
        },
        /**
         * 组件顶层class
         * ___attributes___
         */
        wraperClass: {
            type: String
        },
        /**
         * 动画名称
         * ___attributes___
         */
        animated: {
            type: String
        },
        /**
         * 组件label宽度，单位为px
         * ___attributes___
         */
        labelWidth: {
            type: Number
        },
        /**
         * 组件值变更事件名称
         * ___attributes___
         */
        changeEventName: {
            type: String,
            default: "onTagChange"
        },
        /**
         * 组件值补充文案
         * ___attributes___
         */
        help: {
            type: String,
            default: ""
        },
        /**
         * 若为true，当组件所在容器采用flex布局时，当前组件强制占用一行
         * ___attributes___
         */
        flexItemWrap: {
            type: Boolean,
            default: false
        },
        /**
         * 组件值是否必填
         * ___validity___
         */
        required: {
            type: Boolean
        },
        /**
         * 组件值类型
         * 可选值：String, Number
         * ___validity___
         */
        format: {
            type: String,
            default: "StringArray",
            validator: function (type) {
                return ["StringArray", "StringArrayCommas"].indexOf(type) !== -1;
            }
        },
        /**
         * tag的最大个数
         * ___validity___
         */
        max: {
            type: Number
        },
        /**
         * tag的最小个数
         * ___validity___
         */
        min: {
            type: Number
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
            componentDisabled: this.disabled,
            tagsArray: [],
            newTagValue: ""
        };
    },

    watch: {
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.val = this.value;
            }
        },
        val(newVal, oldVal) {
            let _data;
            if (this.format === "StringArray") {
                _data = newVal;
            } else if (this.format === "StringArrayCommas") {
                _data = newVal.split(",").filter(_val => _val !== "");
            }
            this.tagsArray = _data;
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
        /**
         * 子组件属性优先
         * 若子组件本身没有设置值，则继承容器组件attributes设置
         */
        _disabled() {
            if (this.componentDisabled !== undefined) {
                return this.componentDisabled;
            } else {
                if (
                    this._parentContainerAttributes &&
                    this._parentContainerAttributes.disabled
                ) {
                    return this._parentContainerAttributes.disabled;
                } else if (
                    this._parentContainerAttributes &&
                    this._parentContainerAttributes.readonly
                ) {
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
                if (
                    this._parentContainerAttributes &&
                    this._parentContainerAttributes.readonly
                ) {
                    return this._parentContainerAttributes.readonly;
                } else {
                    return false;
                }
            }
        },
        _showAddButton() {
            let flag = true;

            if (this.max && this.tagsArray.length >= this.max) {
                flag = false;
            }
            return flag;
        }
    },

    created() {
        /**
         * 首次赋值时，检测value与format是否相符
         */
        if ((this.format === 'StringArray' && !Array.isArray(this.value)) || (this.format === 'StringArrayCommas' && typeof this.value !== 'string')) {
            this.errorMessage = `初始值类型与指定的类型不符，请检查格式声明与初始值`;
        } else {
            this.tagsArray = this.getTagsArray(this.val)
        }
    },

    mounted() { },

    methods: {
        getTagsArray() {
            let _data = [];
            if (this.format === "StringArray") {
                _data = this.val;
            } else if (this.format === "StringArrayCommas") {
                _data = this.val.split(",").filter(_val => _val !== '');
            }
            return _data;
        },
        getOriginValue(value) {
            let originValue = value;

            if (this.format === "StringArrayCommas") {
                originValue = value.join(",");
            }

            return originValue;
        },
        addTag(event) {
            if (this.newTagValue) {
                this.tagsArray.push(this.newTagValue);

                let originValue = this.getOriginValue(this.tagsArray);
                this.id && this._currentPageInstance.container.setValue(this.id, originValue);
                this._currentPageInstance.collectEvent({
                    type: this.changeEventName,
                    data: {
                        changed: this.newTagValue,
                        value: originValue
                    },
                    target: this,
                    nativeEvent: event
                });
                this.newTagValue = '';
            }
        },
        deleteTag(event, tag, index) {
            this.tagsArray.splice(index, 1);

            let originValue = this.getOriginValue(this.tagsArray);
            this.id && this._currentPageInstance.container.setValue(this.id, this.getOriginValue(this.tagsArray));
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: {
                    changed: tag,
                    value: originValue
                },
                target: this,
                nativeEvent: event
            });
        }
    }
};
</script>
<style lang='less'>
@import './tag.less';
</style>
