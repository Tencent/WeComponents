import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Radio from '../src/components/radio/radio.vue';
import sinon from 'sinon';

describe('Radio.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_radio-wraper]', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_radio-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Radio, {
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
    it('[props]id: gen class [${id}_radio]', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('.test_radio').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').text()).to.equal('test');
    });

    // name
    // value - 元素同时绑定了 :bind 和 v-model 指令; 只能测试 items

    /**
     * @param {Array} items - [{ value: 'testItem' }]
     * @returns {Boolean} isTextExist - true
     */
    it('[props]items: gen text', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                items: [{ value: 'test' }]
            }
        });
        expect(wrapper.find('.wg-radio-input').attributes('value')).to.be.equal('test');
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide radio', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {Boolean} disabled - true
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isDisabledExist - true
     */
    it('[props]disabled: gen disabled', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                items: [{ label: 'test' }],
                disabled: true
            }
        });
        expect(wrapper.find('.wg-radio-input').attributes('disabled')).to.be.equal('disabled');
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Array} items - [{ value: 'testItem' }]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]readonly: relative class exist', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                items: [{ value: 'test' }],
                readonly: true
            }
        });

        expect(wrapper.find('.wg-radio-input').attributes('disabled')).to.be.equal('disabled');
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Radio, {
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
    it('[props]animated: gen class [${animated}]', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {Number} labelWidth - 200
     * @param {String} label - 'test'
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]labelWidth: gen style', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });
        expect(wrapper.find('.wg-component-label').attributes('style')).to.be.equal('width: 200px;');
    });

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    // changeEventName - 模板不存在

    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('.wg-component-required').html()).to.be.exist;
    });

    // format

    /**
     * @param {String} _validityErrorMessage - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]_validityErrorMessage: gen text', () => {
        const wrapper = shallowMount(Radio, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    // _tableData - 内部属性

    // _parentContainerAttributes

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: trigger event on .wg-radio-input', () => {
        const spy = sinon.spy(Radio.methods, 'handleClick');
        const wrapper = shallowMount(Radio, {
            propsData: {
                items: [{ lable: 'test' }]
            }
        });
        wrapper.find('.wg-radio-input').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} readonly - true
     * @returns {Boolean} isEditableTrigger - true
     */
    it('[event]_editable: trigger event on ".wg-input-icon-readonly"', () => {
        const spy = sinon.spy(Radio.methods, '_editable');
        const wrapper = shallowMount(Radio, {
            propsData: {
                readonly: true
            }
        });
        wrapper.find('.wg-input-icon_readonly').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
