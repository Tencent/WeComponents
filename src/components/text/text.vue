<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_text-wraper' : ''
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
                    v-if="label"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-component-entity_main">
                        <div class="wg-text__prefix" v-if="$slots.prefix">
                            <slot name="prefix"></slot>
                        </div>
                        <template v-if="enableHtml">
                            <span
                                :class="['wg-text', id ? id + '_text' : '', fontStyleClass]"
                                v-html="val"
                                @click="handleClick"
                                @mouseenter="handleMouseEnter"
                                @mouseleave="handleMouseLeave"
                            ></span>
                        </template>
                        <template v-else>
                            <span
                                :class="['wg-text', id ? id + '_text' : '', fontStyleClass]"
                                @click="handleClick"
                                @mouseenter="handleMouseEnter"
                                @mouseleave="handleMouseLeave"
                            >{{ val }}</span>
                        </template>
                    </div>
                    <div class="wg-component-entity_bottom">
                        <div class="wg-component-help">{{help}}</div>
                    </div>
                    <div class="wg-text__suffix" v-if="$slots.suffix">
                        <slot name="suffix"></slot>
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
/**
 * @displayName Text
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VText',

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
            type: [String, Number],
            default: ''
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
         * 文本是否加粗
         * @property attributes
         */
        bold: {
            type: Boolean,
            default: false
        },

        /**
         * 文本大小
         * 可选值: large, medium, small
         * @property attributes
         */
        size: {
            type: String,
            default: 'small',
            validator: function (type) {
                return ['large', 'medium', 'small'].indexOf(type) !== -1;
            }
        },

        /**
         * 组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String,
            default: 'onTextClick'
        },

        /**
         * 鼠标移入文本区域事件名称
         * @property attributes
         */
        mouseEnterEventName: {
            type: String,
            default: 'onTextMouseEnter'
        },

        /**
         * 鼠标移出文本区域事件名称
         * @property attributes
         */
        mouseLeaveEventName: {
            type: String,
            default: 'onTextMouseLeave'
        },

        /**
         * 组件值是否必填
         * @property validity
         */
        required: {
            type: Boolean
        },

        /**
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String
        },
        extra: {
            type: Object
        },

        /**
         * 组件是否支持富文本展示
         * @ignore
         */
        enableHtml: {
            type: Boolean,
            default: false
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
            val: this.value
        };
    },

    computed: {
        fontStyleClass() {
            let _class = '',
                map = new Map([['small', 'wg-text-small'], ['medium', 'wg-text-medium'], ['large', 'wg-text-large']]);
            this.bold && (_class += 'wg-text-bold ');
            _class += map.get(this.size) + ' ';
            return _class;
        }
    },

    watch: {
        value: {
            handler(newVal, oldVal) {
                this.val = this.value;
            },
            immediate: true
        }
    },

    methods: {
        /**
         * Text组件点击事件
         * <event>onTextClick</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
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
         * Text组件mouseenter事件
         * <event>onTextMouseEnter</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleMouseEnter(event) {
            this._currentPageInstance.collectEvent({
                type: this.mouseEnterEventName,
                data: this.val,
                target: this,
                nativeEvent: event
            });
        },

        /**
         * Text组件mouseleave事件
         * <event>onTextMouseLeave</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{string/number}  当前组件数据;
         *  target{Object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleMouseLeave(event) {
            this._currentPageInstance.collectEvent({
                type: this.mouseLeaveEventName,
                data: this.val,
                target: this,
                nativeEvent: event
            });
        }
    },

    components: {}
};
</script>
<style lang='less'>
@import './text.less';
</style>
