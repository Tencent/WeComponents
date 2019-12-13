<template>
    <div
        class="wg-upload-item"
        @dragover="handleDragOver"
        @drop="handleDrop"
        @mouseenter="showFoot = true"
        @mouseleave="showFoot = false"
    >
        <div class="wg-upload-item_file-wraper">
            <template v-if="isAdd">
                <img
                    class="wg-upload-item_file"
                    :src="imgUrl ? imgUrl : require('../../assets/icon-plus.png')"
                    @click="originImage(imgUrl)"
                />
            </template>
            <template v-else>
                <template v-if="fileType === 'image'">
                    <img class="wg-upload-item_file" :src="imgUrl" @click="originImage(imgUrl)" />
                </template>
                <template v-if="fileType === 'video'">
                    <video
                        muted="muted"
                        class="wg-upload-item_file"
                        :src="imgUrl"
                        @click="originImage(imgUrl)"
                    />
                </template>
                <template v-if="fileType === 'file'">
                    <div
                        class="wg-upload-item_file wg-upload-item_file-file"
                        @click="originImage(imgUrl)"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="file-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            class="svg-inline--fa fa-file-alt fa-w-12 fa-3x"
                        >
                            <path
                                fill="currentColor"
                                d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
                            />
                        </svg>
                    </div>
                </template>
            </template>
            <div class="wg-upload-item_loading" v-show="isLoading"></div>
            <input
                :type="clickEventName ? 'button' : 'file'"
                title
                v-if="isAdd"
                class="wg-upload-item_foot-input-hide"
                :multiple="multiple"
                ref="addInput"
                @click="handleInputClick"
                @change="handleInputChange"
            />
        </div>
        <div
            class="wg-upload-item_foot"
            v-if="(isAdd || (showFoot && _options.length > 0)) && !disabled && !readonly"
        >
            <template v-for="(option, index) in _options">
                <div :key="option.label || '' + index" class="wg-upload-item_foot-item">
                    <template v-if="option.type && option.type === '_onUploadEdit'">
                        <!-- 原生编辑事件，唤起本地上传 -->
                        <input
                            :type="clickEventName ? 'button' : 'file'"
                            title
                            class="wg-upload-item_foot-input-hide"
                            :multiple="multiple"
                            @click="handleInputClick"
                            @change="handleInputChange"
                        />
                        {{ option.label }}
                    </template>
                    <template v-else>
                        <span
                            class="wg-upload-item_foot-item-span"
                            @click="handleCustomOptionClick($event, option, index)"
                        >{{ option.label }}</span>
                    </template>
                </div>
            </template>
        </div>
        <div class="wg-upload-item_label" v-if="fileName">{{fileName}}</div>
    </div>
</template>
<script>
export default {
    props: {
        src: {
            default: ''
        },
        fileName: {
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        editable: {
            type: Boolean,
            default: true
        },
        deletable: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        onOptionClick: {
            type: Function
        },
        isAdd: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object
        },
        index: {
            type: Number
        },
        multiple: {
            type: Boolean
        },
        clickEventName: {
            type: String
        },
        finishEventName: {
            type: String
        },
        uploadEventName: {
            type: String
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        upload: {
            type: Function
        },
        size: {
            type: Number
        },
        fileType: {
            type: String,
            default: 'image',
            validator: function (type) {
                return ['image', 'file', 'video'].indexOf(type) !== -1;
            }
        },
        accept: {
            type: Array
        }
    },
    inject: {
        _currentPageInstance: {
            default: {}
        }
    },
    data() {
        return {
            showFoot: false,
            imgUrl: typeof this.src === 'string' ? this.src : '', // src为string时返回src，否则返回默认的file图片
            isLoading: false
        };
    },
    watch: {
        src(newVal, oldVal) {
            this.imgUrl = newVal;
        }
    },
    computed: {
        _options() {
            let editOption = {
                label: '编辑',
                type: '_onUploadEdit'
            },
                deleteOption = {
                    label: '删除',
                    type: '_onUploadDelete'
                },
                res = [];
            if (this.editable) {
                res.push(editOption);
            }
            if (this.options.length > 0) {
                res = res.concat(this.options);
            }
            if (this.deletable) {
                res.push(deleteOption);
            }
            return res;
        }
    },
    methods: {
        handleDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.handleInputChange(e);
        },
        handleDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        handleInputClick(event) {
            if (typeof this.clickEventName === 'string' && this.clickEventName.length > 0) {
                this._currentPageInstance.collectEvent({
                    type: this.clickEventName,
                    data: {
                        src: this.src,
                        index: this.index
                    },
                    target: this,
                    nativeEvent: event
                });
            }
        },
        handleCustomOptionClick(event, option, index) {
            this.$emit('optionClick', {
                event: event,
                option: option,
                index: index
            });
        },
        async handleInputChange(event) {
            if (!this.clickEventName) {
                let target = event.type === 'drop' ? event.dataTransfer : event.currentTarget,
                    files = target.files,
                    promiseList = [],
                    self = this;

                if (!files.length) return;

                for (let i = 0; i < files.length; i++) {
                    let currentFile = files[i],
                        currentFileName = currentFile.name,
                        currentFileSize = currentFile.size,
                        fileTypeCheckResult = self._checkFileType(self.accept, currentFileName);

                    if (!fileTypeCheckResult) {
                        promiseList.push(
                            Promise.resolve({
                                errmsg: '文件格式不符合要求',
                                filename: currentFileName
                            })
                        );
                        continue;
                    }

                    // 文件大小检测
                    if (self.size && currentFileSize > self.size * 1024) {
                        promiseList.push(
                            Promise.resolve({
                                errmsg: `文件超过最大限制，当前大小：${currentFileSize &&
                                    (currentFileSize / 1024).toFixed(2)}kb`,
                                filename: currentFileName
                            })
                        );
                        continue;
                    }

                    // 文件宽高检测
                    let checkDimensionResult = await self._checkFileDimension(currentFile, self.fileType);

                    if (!checkDimensionResult.result) {
                        promiseList.push(
                            Promise.resolve({
                                errmsg: `文件尺寸不符合要求，当前尺寸：${checkDimensionResult.width} x ${checkDimensionResult.height}`,
                                filename: currentFileName
                            })
                        );
                        continue;
                    }

                    self.isLoading = true;

                    if (self.uploadEventName) {
                        // 优先支持静态配置
                        let vm = ((this._currentPageInstance || {}).container || {}).vm,
                            customUpload = null;

                        if (Object.prototype.toString.call(vm) === "[object Object]") {
                            customUpload = vm[self.uploadEventName];
                        }

                        if (typeof customUpload === 'function') {
                            customUpload = customUpload.bind(this._currentPageInstance.container.vm)
                        }

                        let _reader = new FileReader();
                        _reader.readAsDataURL(currentFile);
                        _reader.onload = function (e) {
                            customUpload({
                                file: currentFile,
                                fileName: currentFile.name,
                                fileType: currentFile.type,
                                size: currentFile.size / 1024,
                                buffer: e.currentTarget.result,
                                container: self._currentPageInstance.container
                            });
                            self.isLoading = false;
                        }
                    } else if (self.upload) {
                        let _reader = new FileReader();
                        _reader.readAsDataURL(currentFile);
                        _reader.onload = function (e) {
                            Promise.resolve(
                                self.upload({
                                    file: currentFile,
                                    fileName: currentFile.name,
                                    fileType: currentFile.type,
                                    size: currentFile.size / 1024,
                                    buffer: e.currentTarget.result,
                                    container: self._currentPageInstance.container
                                })
                            ).then(res => {
                                self.isLoading = false;
                            }).catch(e => {
                                self.isLoading = false;
                            });
                        };
                    }
                }
                // 返回上传过程信息
                Promise.all(promiseList).then(res => {
                    this._currentPageInstance.collectEvent({
                        type: this.finishEventName,
                        data: res,
                        target: this,
                        nativeEvent: null
                    });
                });

                // 手动将input value设置为空，避免上传相同文件时无法触发change事件
                if (event.target && event.target.value) {
                    event.target.value = null;
                }
            }
        },
        originImage(src) {
            !this.isAdd && window.open(src);
        },
        async _checkFileDimension(file, fileType) {
            let URL = window.URL || window.webkitURL,
                self = this;

            if (!URL)
                return {
                    result: true
                };

            if (fileType === 'image') {
                return new Promise((resolve, reject) => {
                    let img = new Image();
                    img.onload = () => {
                        let width = img.naturalWidth || img.width,
                            height = img.naturalHeight || img.height;

                        if ((self.width && self.width !== width) || (self.height && self.height !== height)) {
                            resolve({
                                width: width,
                                height: height,
                                result: false
                            });
                        } else {
                            resolve({
                                result: true
                            });
                        }
                        URL.revokeObjectURL(file);
                    };
                    img.src = URL.createObjectURL(file);
                });
            } else if (fileType === 'video') {
                return new Promise((resolve, reject) => {
                    let video = document.createElement('video');
                    video.style.display = 'none';
                    document.body.appendChild(video);

                    video.addEventListener('loadedmetadata', function (e) {
                        let width = video.videoWidth || video.width,
                            height = video.videoHeight || video.height;

                        if ((self.width && width !== self.width) || (self.height && height !== self.height)) {
                            resolve({
                                width: width,
                                height: height,
                                result: false
                            });
                        } else {
                            resolve({
                                result: true
                            });
                        }
                        URL.revokeObjectURL(file);
                    });

                    video.src = URL.createObjectURL(file);
                });
            }

            return {
                result: true
            };
        },
        _checkFileType(accept, fileName) {
            // 若设置了accept，则判断accept与文件后缀是否匹配；否则，判断文件后缀与fileType是否一致
            if (Array.isArray(accept) && accept.length > 0) {
                return this._typeChecker(accept, fileName)
            } else {
                let videoFormat = ["mp4", "avi", "mpeg", "mpg", "dat", "3gp"],
                    imgFormat = [
                        "jpg",
                        "jpeg",
                        "png",
                        "webp",
                        "gif",
                        "tga",
                        "svg",
                        "psd",
                        "hdri"
                    ],
                    fileType = "file";

                if (this._typeChecker(videoFormat, fileName)) {
                    fileType = "video";
                } else if (this._typeChecker(imgFormat, fileName)) {
                    fileType = "image";
                }

                return fileType === this.fileType;
            }
        },
        _typeChecker(array, name) {
            let checker = array.join('|'),
                regx = new RegExp(`.(${checker})$`, 'i');

            if (!regx.test(name.toLowerCase())) {
                return false;
            }

            return true;
        }
    }
};
</script>
<style lang="less">
@import './upload-item.less';
</style>
