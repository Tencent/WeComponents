import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';

import UploadItem from '../src/components/upload/upload-item.vue';

describe('UploadItem.vue', () => {
    /**
     * @param {String} src - 'test'
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isSrcExist - true
     */
    it('[props]src: gen src when isAdd is true', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                src: 'test',
                isAdd: true
            }
        });
        expect(wrapper.find('.wg-upload-item_file').attributes('src')).to.be.equal('test');
    });

    /**
     * @param {String} src - 'test'
     * @param {String} fileType - 'image'
     * @returns {Boolean} isSrcExist - true
     */
    it('[props]src: gen src when fileType is "image"', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                fileType: 'image',
                src: 'test'
            }
        });
        expect(wrapper.find('.wg-upload-item_file').attributes('src')).to.be.equal('test');
    });

    /**
     * @param {String} src - 'test'
     * @param {String} fileName - 'video'
     * @returns {Boolean} isSrcExist - true
     */
    it('[props]src: gen src when fileType is "video"', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                fileType: 'video',
                src: 'test'
            }
        });
        expect(wrapper.find('.wg-upload-item_file').attributes('src')).to.be.equal('test');
    });

    /**
     * @param {String} fileName - 'test'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]fileName: relative element exist', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                fileName: 'test'
            }
        });
        expect(wrapper.find('.wg-upload-item_label').html()).to.be.exist;
    });

    /**
     * @param {String} fileName - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]fileName: gen text', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                fileName: 'test'
            }
        });
        expect(wrapper.find('.wg-upload-item_label').text()).to.be.equal('test');
    });

    // options
    // editable
    // deletable
    // disabled
    // readonly
    // onOptionClick

    // /**
    //  * @param {Boolean} isAdd - true
    //  * @returns {Boolean} isElementExist - true
    //  */
    // it('[props]isAdd: relative element exist', () => {
    //     const wrapper = shallowMount(UploadItem, {
    //         propsData: {
    //             isAdd: true
    //         }
    //     });
    //     expect(wrapper.find('.wg-upload-item_file').attributes('src'))
    //     .to.be.equal('/img/_/src/assets/icon-plus.png');
    // });

    /**
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]isAdd: relative element exist', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true
            }
        });
        expect(wrapper.find('.wg-upload-item_foot-input-hide').html()).to.be.exist;
    });

    /**
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]isAdd: relative element exist', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true
            }
        });
        expect(wrapper.find('.wg-upload-item_foot').html()).to.be.exist;
    });

    // multipie
    // item

    /**
     * @param {Boolean} multiple - true
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isMultipleExist - true
     */
    it('[props]multiple: gen multiple', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                multiple: true
            }
        });
        expect(wrapper.find('.wg-upload-item_foot-input-hide').attributes('multiple')).to.be.equal('multiple');
    });

    /**
     * @param {Boolean} multiple - true
     * @param {Boolean} isAdd - true
     * @param {Array} option - [{type: '_onUploadEdit'}]
     * @returns {Boolean} isMultipleExist - true
     */
    it('[props]multiple: gen multiple when option is exist', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                option: [{ type: '_onUploadEdit' }],
                multiple: true
            }
        });
        expect(
            wrapper.find('.wg-upload-item_foot-item .wg-upload-item_foot-input-hide').attributes('multiple')
        ).to.be.equal('multiple');
    });

    /**
     * @param {String} clickEventName - 'test'
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isTypeExist - true
     */
    it('[props]clickEventName: gen type', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                clickEventName: 'test'
            }
        });
        expect(wrapper.find('.wg-upload-item_foot-input-hide').attributes('type')).to.be.equal('button');
    });

    /**
     * @param {String} clickEventName - 'test'
     * @param {Boolean} isAdd - true
     * @param {Array} option - [{type: '_onUploadEdit'}]
     * @returns {Boolean} isTypeExist - true
     */
    it('[props]clickEventName: gen type', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                option: [{ type: '_onUploadEdit' }],
                clickEventName: true
            }
        });
        expect(wrapper.find('.wg-upload-item_foot .wg-upload-item_foot-input-hide').attributes('type')).to.be.equal(
            'button'
        );
    });

    // width
    // height
    // upload
    // size

    /**
     * @param {String} fileType - 'video'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]fileType: relative element exist', () => {
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                fileType: 'video'
            }
        });
        expect(wrapper.find('video.wg-upload-item_file').html()).to.be.exist;
    });

    /**
     * @param {Boolean} isDrop - true
     * @returns {Boolean} isDropTrigger - true
     */
    it('[event]handleDrop: trigger event on ".wg-upload-item"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleDrop');
        const wrapper = shallowMount(UploadItem);
        wrapper.find('.wg-upload-item').trigger('drop');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isDropOver - true
     * @returns {Boolean} isHandleDropOverTrigger - true
     */
    it('[event]handleDragOver: trigger event on ".wg-upload-item"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleDragOver');
        const wrapper = shallowMount(UploadItem);
        wrapper.find('.wg-upload-item').trigger('dragover');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isHandleInputTrigger - true
     */
    it('[event]handleInputClick: trigger event on ".wg-upload-item_foot-input-hide"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleInputClick');
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true
            }
        });
        wrapper.find('.wg-upload-item_foot-input-hide').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} isAdd - true
     * @param {Array} option - [{type: '_onUploadEdit'}]
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]handleInputClick: trigger event on ".wg-upload-item_foot-input-hide"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleInputClick');
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                option: [{ type: '_onUploadEdit' }]
            }
        });
        wrapper.find('.wg-upload-item_foot .wg-upload-item_foot-input-hide').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} isAdd - true
     * @param {Array} option - []
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]handleCustomOptionClick: trigger event on ".wg-upload-item_foot-item-span"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleCustomOptionClick');
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                option: []
            }
        });
        wrapper.find('.wg-upload-item_foot-item-span').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isChange - true
     * @param {Boolean} isAdd - true
     * @returns {Boolean} isChangeTrigger - true
     */
    it('[event]handleInputChange: trigger event on ".wg-upload-item_foot-input-hide"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleInputChange');
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true
            }
        });
        wrapper.find('.wg-upload-item_foot-input-hide').trigger('change');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isChange - true
     * @param {Boolean} isAdd - true
     * @param {Array} option - [{type: '_onUploadEdit'}]
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]handleInputChange: trigger event on ".wg-upload-item_foot-input-hide"', () => {
        const spy = sinon.spy(UploadItem.methods, 'handleInputChange');
        const wrapper = shallowMount(UploadItem, {
            propsData: {
                isAdd: true,
                option: [{ type: '_onUploadEdit' }]
            }
        });
        wrapper.find('.wg-upload-item_foot .wg-upload-item_foot-input-hide').trigger('change');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    // /**
    //  * @param {Boolean} isClick - true
    //  * @param {Boolean} isAdd - true
    //  * @returns {Boolean} isOriginImageTrigger - true
    //  */
    // it('[event]originImage: trigger event on ".wg-upload-item_file" when isAdd is true ', () => {
    //     const spy = sinon.spy(UploadItem.methods, 'originImage');
    //     const wrapper = shallowMount(UploadItem, {
    //         propsData: {
    //             isAdd: true
    //         }
    //     });
    //     wrapper.find('.wg-upload-item_file[src="/img/_/src/assets/icon-plus.png"]').trigger('click');
    //     expect(spy.callCount).to.equal(1);
    //     spy.restore();
    // });
    // /**
    //  * @param {Boolean} isClick - true
    //  * @param {String} fileType - 'image'
    //  * @returns {Boolean} isOriginImageTrigger - true
    //  */
    // it('[event]originImage: trigger event on ".wg-upload-item_file" when fileType is "image"', () => {
    //     const spy = sinon.spy(UploadItem.methods, 'originImage');
    //     const wrapper = shallowMount(UploadItem, {
    //         propsData: {
    //             fileType: 'image'
    //         }
    //     });
    //     wrapper.find('.wg-upload-item_file').trigger('click');
    //     expect(spy.callCount).to.equal(1);
    //     spy.restore();
    // });
    // /**
    //  * @param {Boolean} isClick - true
    //  * @param {String} fileType - 'video'
    //  * @returns {Boolean} isOriginImageTrigger - true
    //  */
    // it('[event]originImage: trigger event on "video.wg-upload-itme_file" when fileType is "video"', () => {
    //     const spy = sinon.spy(UploadItem.methods, 'originImage');
    //     const wrapper = shallowMount(UploadItem, {
    //         propsData: {
    //             fileType: 'video'
    //         }
    //     });
    //     wrapper.find('video.wg-upload-item_file').trigger('click');
    //     expect(spy.callCount).to.equal(1);
    //     spy.restore();
    // });
    // /**
    //  * @param {Boolean} isClick - true
    //  * @param {String} fileType - 'file'
    //  * @returns {Boolean} isOriginImageTrigger - true
    //  */
    // it('[event]originImage: trigger event on ".wg-upload-itme_file" when fileType is "file"', () => {
    //     const spy = sinon.spy(UploadItem.methods, 'originImage');
    //     const wrapper = shallowMount(UploadItem, {
    //         propsData: {
    //             fileType: 'file'
    //         }
    //     });
    //     wrapper.find('.wg-upload-item_file.wg-upload-item_file-file').trigger('click');
    //     expect(spy.callCount).to.equal(1);
    //     spy.restore();
    // });

    // _checkFileDimension
    // _checkFileType
    // _typeChecker
});
