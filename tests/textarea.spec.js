import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Textarea from '../src/components/textarea/textarea.vue';
import sinon from 'sinon';

describe('Textarea.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_textarea-wraper]', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_textarea-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Textarea, {
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
    it('[props]id: gen class [${id}_textarea]', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('.test_textarea').html()).to.be.exist;
    });

    /**
     * @param {String} label -'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').text()).to.equal('test');
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    // name

    /**
     * @param {String} value - 'test'
     * @returns {Boolean} isValueExist - true
     */
    it('[props]value: gen value', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                value: 'test'
            }
        });

        expect(wrapper.find('.wg-textarea').element.value).to.be.equal('test');
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide textarea', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {String} placeholder - 'test'
     * @returns {Boolean} isPlaceholderExist - true
     */
    it('[props]placeholder: gen placehoder', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                placeholder: 'test'
            }
        });
        expect(wrapper.find('.wg-textarea').attributes('placeholder')).to.be.equal('test');
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]disabled: relative class exist"', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.find('div.wg-textarea-disabled')).to.be.exist;
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isDisabledExist - true
     */
    it('[props]disabled: gen disabled', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                disabled: true
            }
        });
        expect(wrapper.find('.wg-textarea').attributes('disabled')).to.be.equal('disabled');
    });

    /**
     * @param {Boolean} disabled - true
     * @param {Boolean} readonly - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]disabled: relative element not exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-input-icon_readonly').html()).to.be.exist;
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]readonly: relative class exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-textarea-disabled').html()).to.be.exist;
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isReadonlyExist - true
     */
    it('[props]readonly: gen readonly', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-textarea').attributes('readonly')).to.be.equal('readonly');
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isReadonlyExist - true
     */
    it('[props]readonly: gen text', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-input-icon_readonly').html()).to.be.exist;
    });

    /**
     * @param {Boolean} resetable - true
     * @param {String} value - 'test'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]resetable: relative element exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                value: 'test',
                resetable: true
            }
        });
        expect(wrapper.find('.wg-textarea-clear').html()).to.be.exist;
    });

    /**
     * @param {String}  wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Textarea, {
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
        const wrapper = shallowMount(Textarea, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {Number} labelWidth - 200
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]labelWidth: gen style', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });
        expect(wrapper.find('.wg-component-label').attributes('style')).to.be.exist;
    });

    // clickEventName
    // changeEventName
    // dblClickEventName

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    /**
     * @param {Boolean} required - true'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('.wg-component-required').html()).to.be.exist;
    });

    // format

    /**
     * @param {Number} max - 200
     * @returns {Boolean} isElementExist - true
     */
    it('[props]max: relative element exist', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                max: 200
            }
        });
        expect(wrapper.find('.wg-textarea-num').html()).to.be.exist;
    });

    /**
     * @param {String} _validityErrorMessage - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]_validityErrorMessage: gen text', () => {
        const wrapper = shallowMount(Textarea, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    // _tableData
    // _parentContainerAttributes

    /**
     * @param {Boolean} isClick - true
     * @param {String} value - 'test'
     * @param {Boolean} resetable - true
     * @returns {Boolean} isResetValueTrigger - true
     */
    it('[event]resetValue: trigger event on ".wg-textarea-clear"', () => {
        const spy = sinon.spy(Textarea.methods, 'resetValue');
        const wrapper = shallowMount(Textarea, {
            propsData: {
                value: 'test',
                resetable: true
            }
        });
        wrapper.find('.wg-textarea-clear').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isInput - true
     * @returns {Boolean} isHandleInputTrigger - true
     */
    it('[event]handleInput: trigger event on ".wg-textarea"', () => {
        const spy = sinon.spy(Textarea.methods, 'handleInput');
        const wrapper = shallowMount(Textarea);
        wrapper.find('.wg-textarea').trigger('input');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Boolean} disabled - false
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: trigger event on .wg-textarea', () => {
        const spy = sinon.spy(Textarea.methods, 'handleClick');
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true,
                disabled: false
            }
        });
        wrapper.find('.wg-textarea').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isDblClick - true
     * @returns {Boolean} isDblclickTrigger - true
     */
    it('[event]handleDblClick: trigger event on ".wg-textarea"', () => {
        const spy = sinon.spy(Textarea.methods, 'handleDblClick');
        const wrapper = shallowMount(Textarea);
        wrapper.find('.wg-textarea').trigger('dblclick');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} readonly - true
     * @returns {Boolean} isEditTableTrigger - true
     */
    it('[event]_editable: trigger event on ".wg-input-icon_readonly"', () => {
        const spy = sinon.spy(Textarea.methods, '_editable');
        const wrapper = shallowMount(Textarea, {
            propsData: {
                readonly: true
            }
        });
        wrapper.find('.wg-input-icon_readonly').trigger('click');
        expect(spy.callCount).to.equal(1);
    });
});
