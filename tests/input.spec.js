import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Input from '../src/components/input/input.vue';
import sinon from 'sinon';

describe('Input.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_input-wraper]', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_input-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div[data-id="test"]').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').text()).to.equal('test');
    });

    /**
     * @param {String}  - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    // name - slot
    // value - 模板不存在

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide input', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {String} placeholder - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]placeholder: gen text', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                placeholder: 'test'
            }
        });
        expect(wrapper.find('.wg-input').attributes('placeholder')).to.be.equal('test');
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]disabled: relative class exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.find('.wg-input-disabled').html()).to.be.exist;
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isDisabledExist - true
     */
    it('[props]disabled: gen disabled', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                disabled: true
            }
        });
        expect(wrapper.find('.wg-input-disabled').attributes('disabled')).to.be.equal('disabled');
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isReadonlyExist - true
     */
    it('[props]readonly: gen readonly', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-input').attributes('readonly')).to.be.equal('readonly');
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]readonly: relative element exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                readonly: true
            }
        });

        expect(wrapper.find('.wg-input').html()).to.be.exist;
    });

    /**
     * @param {Boolean} resetable - true
     * @param {String} value - 'test'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]resetable: relative element exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                value: 'test',
                resetable: true
            }
        });

        expect(wrapper.find('.wg-input-padding_right-medium').html()).to.be.exist;
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                wraperClass: 'test'
            }
        });

        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String } animated - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]animated: gen class [${animated}]', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {Number} labelWidth - true
     * @param {String} label - 'test'
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]labelWidth: gen style', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });
        expect(wrapper.find('.wg-component-label').attributes('style')).to.equal('width: 200px;');
    });

    // clickEventName
    // changeEventName
    // dblClickEventName

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    /**
     * @param {String} size - 'small'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]size: relative class exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                size: 'small'
            }
        });
        expect(wrapper.find('.wg-input-small').html()).to.be.exist;
    });

    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('.wg-component-required').html()).to.be.exist;
    });

    // format

    /**
     * @param {String} format - 'Number'
     * @param {Number} value - 'test'
     * @param {Number} max - 2
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]max: relative class exist', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                value: 'test',
                max: 2
            }
        });
        expect(wrapper.find('.wg-input-num_red').html()).to.be.exist;
    });

    /**
     * @param {String} _validityErrorMessage - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]required: gen text', () => {
        const wrapper = shallowMount(Input, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    // _tableData
    // _parentContainerAttribution

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} resetable - true
     * @param {String} value - 'test'
     * @returns {Boolean} isResetValueTrigger - true
     */
    it('[event]resetValue: trigger event on ".wg-input-clear"', () => {
        const spy = sinon.spy(Input.methods, 'resetValue');
        const wrapper = shallowMount(Input, {
            propsData: {
                value: 'test',
                resetable: true
            }
        });
        wrapper.find('.wg-input-clear').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isInput - true
     * @returns {Boolean} isHandleInputTrigger - true
     */
    it('[event]handleInput: trigger event on ".wg-input"', () => {
        const spy = sinon.spy(Input.methods, 'handleInput');
        const wrapper = shallowMount(Input);
        wrapper.find('.wg-input').trigger('input');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Boolean} disabled - false
     * @param {Boolean} isClick - true
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: trigger event on ".wg-input"', () => {
        const spy = sinon.spy(Input.methods, 'handleClick');
        const wrapper = shallowMount(Input, {
            propsData: {
                readonly: false,
                disabled: false
            }
        });
        wrapper.find('.wg-input').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Boolean} disabled - false
     * @param {Boolean} isClick - true
     * @returns {Boolean} isHandleDblClickTrigger - true
     */
    it('[event]handleDblClick: trigger event on ".wg-input"', () => {
        const spy = sinon.spy(Input.methods, 'handleDblClick');
        const wrapper = shallowMount(Input, {
            propsData: {
                readonly: false,
                disabled: false
            }
        });
        wrapper.find('.wg-input').trigger('dblclick');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} readonly - true
     * @returns {Boolean} isEditableTrigger - true
     */
    it('[event]_editable: trigger event on [.wg-input-icon_readonly]', () => {
        const spy = sinon.spy(Input.methods, '_editable');
        const wrapper = shallowMount(Input, {
            propsData: {
                readonly: true
            }
        });
        wrapper.find('.wg-input-icon_readonly').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
