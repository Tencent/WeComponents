import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Upload from '../src/components/upload/upload.vue';
import sinon from 'sinon';

describe('Upload.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_upload-wraper]', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('.test_upload-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist- true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div[data-id="test"]').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isElementExist- true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isTextExist- true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').text()).to.equal('test');
    });

    // name
    // value - 模板不存在

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist- true
     */
    it('[props]hide: hide uplaod', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    // [props]disabled - upload-item

    /**
     * @param {wraperClass} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]wraperClass: gen class [${wraperClass}]', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                wraperClass: 'test'
            }
        });

        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String} animated - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]animated: gen class [${animated}]', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test
     * @param {Number} labelWidth - 200
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]labelWidth: gen style "width: ${labelWidth}px"', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });

        expect(wrapper.find('div.wg-component-label').attributes('style')).to.equal('width: 200px;');
    });

    // readonly - upload-item

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isElementExist- true
     */
    it('[props]readonly: relative element exist', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                readonly: true
            }
        });

        expect(wrapper.find('.wg-input-icon_readonly').html()).to.be.exist;
    });

    // [props]clickEventName - upload-item

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isTextExist- true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                help: 'test'
            }
        });

        expect(wrapper.find('.wg-component-help').text()).to.equal('test');
    });

    // [props]editable - upload-item
    // [props]deletable - upload-item
    // [props]options - upload-item
    // [props]multiple - upload-item
    // [props]upload - upload-item
    // [props]fileType - upload-item

    /**
     * @param {String} required - true
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('div.wg-component-required')).to.be.exist;
    });

    /**
     * @param {String} _validityErrorMessage - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]required: gen text', () => {
        const wrapper = shallowMount(Upload, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    //[pros] format - 模板不存在
    //[props] min - 模板不存在
    //[props] max - 模板不存在
    //[props] accept - 模板不存在
    // _tableData

    // _parentContainerAttributes

    //[props] width - upload-item
    //[props] height - upload-item
    //[props] size - upload-item
    //[event] handleOptionClick - upload-item
    //[event] handleAddNewFile - upload-item

    //[event]_formatArray、getValidValue - 内部函数
    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} readonly -true
     * @returns {Boolean} isEditableTrigger - true
     */
    it('[event]_editable: trigger event on ".wg-input-icon_readonly"', () => {
        const spy = sinon.spy(Upload.methods, '_editable');
        const wrapper = shallowMount(Upload, {
            propsData: {
                readonly: true
            }
        });
        wrapper.find('.wg-input-icon_readonly').trigger('click');
        expect(spy.callCount).to.equal(1);
    });
});
