<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_button-wraper' : ''
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
            <div :class="['wg-button-wraper']">
                <div
                    @click="handleClick"
                    :class="['wg-button',
                        getButtonTypeClass(type),
                        _disabled ? 'wg-button-disabled' : '',
                        buttonLoading ? 'wg-button-loading': '',
                        id ? (id + '_button') : '']"
                >
                    <i v-if="buttonLoading" class="icon icon-loading"></i>
                    <span class="wg-button-label" v-html="label"></span>
                </div>
                <span
                    v-if="suffix"
                    class="wg-button-suffix"
                    v-html="suffix"
                    @click="handleSuffixClick"
                ></span>
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
import util from '../../utils/util';
/**
 * @displayName Button
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VButton',

    props: {
        /**
         * 组件id
         */
        id: {
            type: String
        },

        /**
         * Button组件展示文案
         */
        label: {
            type: String,
            default: 'button'
        },

        /**
         * 控制Button组件展示/隐藏
         * @property attributes
         */
        hide: {
            type: Boolean,
            default: false
        },

        /**
         * 控制Button组件是否可点击
         * @property attributes
         */
        disabled: {
            type: Boolean
        },

        /**
         * Button组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String,
            default: 'onButtonClick'
        },

        /**
         * Button组件suffix点击事件名称
         * @property attributes
         */
        suffixClickEventName: {
            type: String,
            default: 'onButtonSuffixClick'
        },

        /**
         * Button组件样式类别
         * 可选值: default, primary, danger, link
         * @property attributes
         */
        type: {
            type: String,
            default: 'default',
            validator: function(_type) {
                return ['default', 'primary', 'danger', 'link'].indexOf(_type) !== -1;
            }
        },

        /**
         * Button组件点击事件间隔时间
         * 若设置，则会对Button点击事件进行节流处理
         * @property attributes
         */
        throttleTime: {
            type: Number,
            default: 0
        },

        /**
         * 控制Button组件是否展示加载中的样式
         * @property attributes
         */
        loading: {
            type: Boolean,
            default: false
        },

        /**
         * Button组件顶层自定义class名称
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
         * Button组件自定义拓展HTML内容的富文本
         * @property attributes
         */
        suffix: {
            type: String
        },

        /**
         * @ignore
         */
        submit: {
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
        },
        _currentContainerId: {
            default: ''
        }
    },

    data() {
        return {
            lastTime: null,
            buttonLoading: this.loading,
            buttonDisabled: this.disabled,
            checkFlag: true
        };
    },

    watch: {
        loading(newVal, oldVal) {
            this.buttonLoading = newVal;
        },
        disabled(newVal, oldVal) {
            this.buttonDisabled = newVal;
        }
    },

    computed: {
        _disabled() {
            if (this.buttonDisabled !== undefined) {
                // 子组件属性优先
                return this.buttonDisabled;
            } else {
                if (this._parentContainerAttributes && this._parentContainerAttributes.disabled) {
                    return this._parentContainerAttributes.disabled;
                } else {
                    return false;
                }
            }
        }
    },

    methods: {
        handleSuffixClick(event) {
            this._currentPageInstance.collectEvent({
                type: this.suffixClickEventName,
                data: null,
                target: this,
                nativeEvent: event
            });
        },

        /**
         * Button事件
         * <event>onButtonClick</event>
         *
         * <customParam>
         *  type{string}  事件名称;
         *  data{null/object}  若事件名称包含submit文本，则data为button组件所在container的全部数据，否则为null;
         *  target{object} 触发事件的组件的vm实例;
         *  nativeEvent{object} 原生事件对象
         * </cutomParam>
         * @public
         */
        handleClick(event) {
            if (this.clickEventName && this.clickEventName === '__filterTableFilterColumns') {
                let parentContainer = this.$parent;
                parentContainer.getContainerValue(parentContainer.$children);
                this.$emit('wgCloseFilterModal', parentContainer.valResult);
                return;
            }
            if (!this._disabled) {
                if (this.throttleTime && this.throttleTime > 0) {
                    //节流，每个周期内仅emit一次
                    if (this.lastTime) {
                        let nowTime = +new Date();

                        if (nowTime >= this.lastTime + this.throttleTime) {
                            toggleButtonStatus(this);
                            emitClickEvent(this);
                            // 重置lastTime
                            this.lastTime = nowTime;
                        }
                    } else {
                        this.lastTime = +new Date();
                        toggleButtonStatus(this);
                        emitClickEvent(this);
                    }
                } else {
                    emitClickEvent(this);
                }
            }

            function toggleButtonStatus(self) {
                self.buttonLoading = true;
                self.buttonDisabled = true;
                setTimeout(() => {
                    self.buttonLoading = false;
                    self.buttonDisabled = false;
                }, self.throttleTime);
            }

            function emitClickEvent(self) {
                let _data = null; // button点击默认没有数据

                if (self.submit) {
                    let _items = self._currentPageInstance.container.getItem(self._currentContainerId).items;
                    self.checkValue(_items, self._currentPageInstance.container);
                    // 找到当前button所在的container，拿到container.value
                    if (self.checkFlag) {
                        _data = self._currentPageInstance.container._queryContainerValue(_items);
                    }
                }

                if (util.findComponentUpward(self, 'VTable')) {
                    // table中的data为该行数据
                    _data = self._tableData;
                }

                if (self.checkFlag) {
                    self._currentPageInstance.collectEvent({
                        type: self.clickEventName,
                        data: _data, // button点击默认没有数据
                        target: self,
                        nativeEvent: event
                    });
                }

                // 每次检验完成后，重置checkFlag状态
                self.checkFlag = true;
            }
        },
        checkValue(items, container) {
            if (Array.isArray(items) && items.length > 0) {
                items.forEach(item => {
                    let error = container.validity(item);
                    if (error.message.length > 0) {
                        this.checkFlag = false;
                    }
                    // 设置错误提示，若已修正，则设置错误提示为空字符串
                    container.setAttribute(item.id, '_validityErrorMessage', error.message);
                    if (item.items && item.items.length > 0) {
                        this.checkValue(item.items, container);
                    }
                });
            }
        },
        getButtonTypeClass(type) {
            return `wg-button-${type}`;
        }
    },

    components: {}
};
</script>
<style lang='less'>
@import './button.less';
</style>
