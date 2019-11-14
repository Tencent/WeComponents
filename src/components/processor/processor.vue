<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_processor-wraper' : ''
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
                <div class="wg-component-entity wg-component-processor">
                    <template v-for="(item, index) in items">
                        <div
                            class="wg-processor-item"
                            :key="index"
                            @click="handleClick($event, item)"
                        >
                            <div
                                :class="[
                                    index !== items.length - 1
                                        ? 'wg-processor-item_main'
                                        : 'wg-processor-item_main-last'
                                ]"
                            >
                                <span
                                    class="wg-processor-item_index"
                                    :class="val === item.value ? 'wg-processor-item_index-active' : ''"
                                >{{ index + 1 }}</span>
                                <span
                                    class="wg-processor-item_label"
                                    :class="val === item.value ? 'wg-processor-item_label-active' : ''"
                                >{{ item.label }}</span>
                            </div>
                            <span class="wg-processor-item_extra" v-html="item.help"></span>
                        </div>
                    </template>
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
/**
 * @displayName Processor
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VProcessor',

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
            type: [String, Number]
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
         * 组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String,
            default: 'onProcessClick'
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onProcessChange'
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
            componentReadonly: this.readonly || undefined,
            componentDisabled: this.disabled || undefined
        };
    },

    watch: {
        value(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.val = this.value;
            }
        },
        val(newVal, oldVal) {
            // 当processor值改变时(不论是输入还是赋值)，抛出事件
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: newVal,
                target: this,
                nativeEvent: null
            });
        },
        disabled(newVal, oldVal) {
            this.componentDisabled = newVal;
        }
    },

    computed: {
        _disabled() {
            if (this.componentDisabled !== undefined) {
                // 子组件属性优先
                return this.componentDisabled;
            } else if (this.componentReadonly !== undefined) {
                return this.componentReadonly;
            } else {
                // 若子组件本身没有设置值，则
                if (this._parentContainerAttributes && this._parentContainerAttributes.disabled) {
                    return this._parentContainerAttributes.disabled;
                } else if (this._parentContainerAttributes && this._parentContainerAttributes.readonly) {
                    return this._parentContainerAttributes.readonly;
                } else {
                    return false;
                }
            }
        }
    },

    methods: {
        /**
         * Processor组件选项点击事件
         * <event>onProcessClick</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleClick(event, item) {
            if (!this._disabled) {
                this.val = item.value;
                this.id && this._currentPageInstance.container.setValue(this.id, this.val);
                this._currentPageInstance.collectEvent({
                    type: this.clickEventName,
                    data: this.val,
                    target: this,
                    nativeEvent: event
                });
            }
        }
    }
};
</script>
<style lang='less'>
@import './processor.less';
</style>
