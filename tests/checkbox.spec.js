import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';

import Checkbox from '../src/components/checkbox/checkbox.vue';

describe('Checkbox.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_checkbox-wraper]', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('.test_checkbox-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div[data-id="test"]').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_checkbox]', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('.test_checkbox').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').text()).to.be.equal('test');
    });

    // name
    // value - v-model、:value 混用

    /**
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isElementExist - true
     */
    it('[props]items: relative element exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                items: [{ label: 'test' }]
            }
        });
        expect(wrapper.find('.wg-checkbox-input').html()).to.be.exist;
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide checkbox', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {Boolean} disabled - true
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]disabled: relative class exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                items: [{ label: 'test' }],
                disabled: true
            }
        });

        expect(wrapper.find('.wg-checkbox-input_disabled').html()).to.be.exist;
    });

    /**
     * @param {Boolean} disabled - true
     * @param {Array} items - [{lable: 'test'}]
     * @returns {Boolean} isDisabledExist - true
     */
    it('[props]disabled: gen disabled', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                items: [{ label: 'test' }],
                disabled: true
            }
        });
        expect(wrapper.find('.wg-checkbox-input').attributes('disabled')).to.be.equal('disabled');
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Array} items -  [{label: 'test'}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]readonly: relative class exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                items: [{ label: 'test' }],
                readonly: true
            }
        });

        expect(wrapper.find('.wg-checkbox-input_disabled').html()).to.be.exist;
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Array} items - [{lable: 'test'}]
     * @returns {Boolean} isDisabledExist - true
     */
    it('[props]readonly: gen disabled', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                items: [{ label: 'test' }],
                readonly: true
            }
        });
        expect(wrapper.find('.wg-checkbox-input').attributes('disabled')).to.be.equal('disabled');
    });
    
    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]readonly: relative element exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-input-icon_readonly').html()).to.be.exist;
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                wraperClass: 'test'
            }
        });

        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String} animated - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]animated: gen class [$animated]', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.test')).to.be.exist;
    });

    /**
     * @param {Number} labelWidth - 200
     * @param {String} label - 'test'
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]labelWidth: gen style "width: ${labelWidth}px"', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });

        expect(wrapper.find('div.wg-component-label').attributes('style')).to.equal('width: 200px;');
    });

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    // changeEventName

    /**
     * @param {String} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                required: true
            }
        });

        expect(wrapper.find('div.wg-component-required').html()).to.be.exist;
    });

    // format
    // extra - 不存在调用

    /**
     * @param {String} _validityErrorMessage - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]_validityErrorMessage: gen text', () => {
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    // _tableData
    // _parentContainerAttributes

    /**
     * @param {Boolean} readonly
     * @param {Boolean} isClick - true
     * @returns {Boolean} isEditableTrigger - true
     */
    it('[event]_editable: listen click event', () => {
        const spy = sinon.spy(Checkbox.methods, '_editable');
        const wrapper = shallowMount(Checkbox, {
            propsData: {
                readonly: true
            }
        });
        wrapper.find('.wg-input-icon_readonly').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
