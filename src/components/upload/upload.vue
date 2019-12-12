<template>
    <div
        v-if="!hide"
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_upload-wraper' : ''
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
            <div
                :class="['wg-component-wraper wg-component-wraper_upload', required ? 'wg-component-required' : '']"
            >
                <!-- 组件label -->
                <div
                    :class="[ label ? 'wg-component-label' : '', required ? 'wg-component-required' : '']"
                    :style="{ width: labelWidth > 0 ? `${labelWidth}px` : '' }"
                >{{label}}</div>
                <!-- 组件实体 -->
                <div class="wg-component-entity">
                    <div class="wg-upload-item_wraper">
                        <upload-item
                            v-if="showAdd"
                            :deletable="false"
                            :editable="false"
                            :isAdd="true"
                            :upload="upload"
                            :clickEventName="clickEventName"
                            :finishEventName="finishEventName"
                            :uploadEventName="uploadEventName"
                            :multiple="multiple"
                            :fileType="fileType"
                            :width="width"
                            :height="height"
                            :size="size"
                            @add="handleAddNewFile"
                        />
                        <template v-if="val.length > 0">
                            <template v-for="(item, index) in val">
                                <upload-item
                                    :key="index"
                                    :src="item.src"
                                    :fileName="item.label"
                                    :options="options"
                                    :editable="editable"
                                    :deletable="deletable"
                                    :disabled="_disabled"
                                    :readonly="_readonly"
                                    :item="item"
                                    :index="index"
                                    :multiple="multiple"
                                    :upload="upload"
                                    :fileType="fileType"
                                    :clickEventName="clickEventName"
                                    :finishEventName="finishEventName"
                                    :uploadEventName="uploadEventName"
                                    :width="width"
                                    :height="height"
                                    :size="size"
                                    @modify="handleModifyFile($event, item, index)"
                                    @optionClick="handleOptionClick($event, item, index)"
                                />
                            </template>
                        </template>
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
import uploadItem from './upload-item.vue';
import util from '../../utils/util';
import Dialog from '../dialog/index.js'

const dialog = new Dialog();
/**
 * @displayName Upload
 * @groupName 表单类
 * @icon 'http://'
 */
export default {
    name: 'VUpload',

    components: {
        uploadItem
    },

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
         * 组件是否禁用
         * @property attributes
         */
        disabled: {
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
         * 组件是否只读
         * @property attributes
         */
        readonly: {
            type: Boolean
        },

        /**
         * 组件点击事件名称
         * @property attributes
         */
        clickEventName: {
            type: String
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onUploadChange'
        },

        /**
         * 上传完成事件名称，无论上传成功还是失败，都会触发该事件
         * 为兼容之前版本，默认事件名称不包含on
         * ___attributes___
         */
        finishEventName: {
            type: String,
            default: "uploadFinish"
        },

        /**
         * 自定义上传事件名称，若设置，则可在指向的方法中自定义上传逻辑
         * ___attributes___
         */
        uploadEventName: {
            type: String
        },

        /**
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String
        },

        /**
         * 控制是否显示编辑按钮
         * @property attributes
         */
        editable: {
            type: Boolean,
            default: true
        },

        /**
         * 控制是否显示删除按钮
         * @property attributes
         */
        deletable: {
            type: Boolean,
            default: true
        },

        /**
         * 自定义操作按钮
         * option: { label, type }
         * @property attributes
         */
        options: {
            type: Array,
            default: () => []
        },

        /**
         * 控制是否允许多图上传
         * @property attributes
         */
        multiple: {
            type: Boolean,
            default: true
        },

        /**
         * 自定义文件上传逻辑
         * @property attributes
         */
        upload: {
            type: Function
        },

        /**
         * 文件类型
         * 可选值：image/file/video
         * @property attributes
         */
        fileType: {
            type: String,
            default: 'image',
            validator: function (type) {
                return ['image', 'file', 'video'].indexOf(type) !== -1;
            }
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
         * 在upload组件中，format为必填值
         * 可选值：String, StringArray, StringArrayCommas, Blob, BlobArray, Object, ObjectArray
         * 仅当format字段包含“Array”时，upload组件才可以展示多个文件
         * 当需要同时展示文件与文件名称时，可设置format为Object或ObjectArray。此时，Object.src会被取为文件链接，Object.label会被取为文件标题
         * @property validity
         */
        format: {
            type: String,
            required: true,
            default: 'String',
            validator: function (type) {
                return (
                    [
                        'String',
                        'StringArray',
                        'StringArrayCommas',
                        'Blob',
                        'BlobArray',
                        'Object',
                        'ObjectArray'
                    ].indexOf(type) !== -1
                );
            }
        },

        /**
         * value的最小数量
         * @property validity
         */
        min: {
            type: Number,
            default: 0,
            validator: function (min) {
                return min >= 0;
            }
        },

        /**
         * value的最大数量，默认为1，即单图/单视频
         * @property validity
         */
        max: {
            type: Number,
            validator: function (max) {
                return max <= Number.MAX_VALUE;
            }
        },

        /**
         * 文件/视频的指定宽度
         * @property validity
         */
        width: {
            type: Number
        },

        /**
         * 文件/视频的指定高度
         * @property validity
         */
        height: {
            type: Number
        },

        /**
         * 文件/视频的限制大小
         * @property validity
         */
        size: {
            type: Number
        },

        /**
         * 文件/视频的限制格式
         * @property validity
         */
        accept: {
            type: Array,
            default: () => []
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
            uploadValue: this.getValidValue(this.value),
            errorMessage: this._validityErrorMessage,
            componentReadonly: this.readonly || undefined,
            componentDisabled: this.disabled || undefined,
            showFoot: false
        };
    },

    watch: {
        _validityErrorMessage(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.errorMessage = newVal;
            }
        },
        value: {
            handler(newVal, oldVal) {
                this.uploadValue = this.getValidValue(newVal);
            },
            deep: true
        },
        disabled(newVal, oldVal) {
            this.componentDisabled = newVal;
        }
    },

    computed: {
        // 用于遍历生成upload-item的数组
        val() {
            let res = [];
            switch (this.format) {
                case 'StringArray':
                case 'BlobArray':
                    this._formatArray(this.uploadValue, res);
                    break;
                case 'StringArrayCommas':
                    this._formatArray(this.uploadValue.split(','), res);
                    break;
                case 'Object':
                    if (this.uploadValue) {
                        res.push(this.uploadValue);
                    }
                    break;
                case 'ObjectArray':
                    res = [].concat(this.uploadValue);
                    break;
                default:
                    if (this.uploadValue) {
                        res.push({
                            src: this.uploadValue
                        });
                    }
            }

            if (this.max) {
                res = res.slice(0, this.max);
            }
            return res;
        },
        showAdd() {
            // disabled/readonly/val.length > max时，返回false
            if (this._disabled || this._readonly || (this.max && this.val.length >= this.max)) {
                return false;
            }
            return true;
        },
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
        handleOptionClick(event, item, index) {
            const option = event.option;

            if (option.type && option.type === '_onUploadDelete') {
                switch (this.format) {
                    case 'StringArray':
                    case 'BlobArray':
                    case 'ObjectArray':
                        this.uploadValue.splice(index, 1);
                        break;

                    case 'StringArrayCommas':
                        {
                            let _split = this.uploadValue.split(',');
                            _split.splice(index, 1);
                            this.uploadValue = _split.join(',');
                        }
                        break;

                    case 'Object':
                        this.uploadValue = null;
                        break;

                    default:
                        this.uploadValue = '';
                }
                this._currentPageInstance.container.setValue(this.id, this.uploadValue);
                // 抛出值变更事件
                this._currentPageInstance.collectEvent({
                    type: this.changeEventName,
                    data: {
                        value: this.uploadValue,
                        changeValue: item.src,
                        changeIndex: index
                    },
                    target: this,
                    nativeEvent: null
                });
            } else if (option.type && option.type !== '_onUploadEdit') {
                this._currentPageInstance.collectEvent({
                    type: option.type,
                    data: item.src,
                    target: this,
                    nativeEvent: event.event
                });
            }
        },
        handleAddNewFile(data) {
            let index = 0;
            switch (this.format) {
                case 'StringArray':
                case 'BlobArray':
                    {
                        if (!Array.isArray(this.uploadValue)) {
                            this.uploadValue = [];
                        }
                        this.uploadValue.push(data.src);
                        index = this.uploadValue.length - 1;
                    }
                    break;

                case 'ObjectArray':
                    {
                        if (!Array.isArray(this.uploadValue)) {
                            this.uploadValue = [];
                        }
                        this.uploadValue.push(data);
                        index = this.uploadValue.length - 1;
                    }
                    break;

                case 'StringArrayCommas':
                    {
                        if (typeof this.uploadValue !== 'string') {
                            this.uploadValue = '';
                        }
                        let _split = this.uploadValue.split(',').map(val => {
                            if (val) return val;
                        });
                        // 去掉空值
                        _split = _split.filter(_item => util.isDefined(_item));
                        _split.push(data.src);
                        index = _split.length - 1;
                        this.uploadValue = _split.join(',');
                    }
                    break;

                case 'Object':
                    this.uploadValue = data;
                    break;

                default: {
                    if (typeof this.uploadValue !== 'string') {
                        this.uploadValue = '';
                    }
                    this.uploadValue = data.src;
                }
            }
            this._currentPageInstance.container.setValue(this.id, this.uploadValue);
            // 抛出值变更事件
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: {
                    value: this.uploadValue,
                    changeValue: data.src,
                    changeIndex: index
                },
                target: this,
                nativeEvent: null
            });
        },
        handleModifyFile(event, item, index) {
            switch (this.format) {
                case 'StringArray':
                case 'BlobArray':
                    this.uploadValue[index] = event.src;
                    break;

                case 'ObjectArray':
                    this.uploadValue[index] = event;
                    break;

                case 'StringArrayCommas':
                    {
                        let _split = this.uploadValue.split(',');
                        _split[index] = event.src;
                        this.uploadValue = _split.join(',');
                    }
                    break;

                case 'Object':
                    this.uploadValue = event;
                    break;

                default:
                    this.uploadValue = event.src;
            }
            this._currentPageInstance.container.setValue(this.id, this.uploadValue);
            // 抛出值变更事件
            this._currentPageInstance.collectEvent({
                type: this.changeEventName,
                data: {
                    value: this.uploadValue,
                    changeValue: event.src,
                    changeIndex: index
                },
                target: this,
                nativeEvent: null
            });
        },
        // 将uploadValue格式化为对象数组格式
        _formatArray(originArray, targetArray) {
            if (Array.isArray(originArray) && originArray.length > 0) {
                originArray.forEach(_val => {
                    if (_val) {
                        targetArray.push({
                            src: _val
                        });
                    }
                });
            }
        },
        _editable() {
            dialog.confirm('确定编辑此字段吗？', rt => {
                if (rt) {
                    this.componentReadonly = false;
                }
            });
        },
        // 根据validity.max截取值的长度
        getValidValue(value) {
            let res;

            let max = this.max;
            switch (this.format) {
                case 'StringArray':
                case 'BlobArray':
                case 'ObjectArray':
                    res = max ? value.slice(0, max) : value;
                    break;

                case 'StringArrayCommas':
                    {
                        let _value = max ? value.split(',').slice(0, max) : value.split(',');
                        res = _value.join(',');
                    }
                    break;

                default:
                    res = value;
            }

            return res;
        }
    }
};
</script>
<style lang='less'>
@import './upload.less';
</style>
