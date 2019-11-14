import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Calendar from '../src/components/calendar/calendar.vue';
import sinon from 'sinon';

describe('Calendar.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_calendar-wraper]', () => {
        const wrapper = shallowMount(Calendar, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div.test_input-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id [${id}]', () => {
        const wrapper = shallowMount(Calendar, {
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
        const wrapper = shallowMount(Calendar, {
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
        const wrapper = shallowMount(Calendar, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    // name
    // value - calendar.item

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide calendar', () => {
        const wrapper = shallowMount(Calendar, {
            propsData: {
                hide: true
            }
        });
        expect(wrapper.isEmpty()).to.be.true;
    });

    // disabled - 子组件

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Calendar, {
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
        const wrapper = shallowMount(Calendar, {
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
        const wrapper = shallowMount(Calendar, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });
        expect(wrapper.find('.wg-component-label').attributes('style')).to.be.exist;
    });

    // changeEventName

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Calendar, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    // pickTime
    // pickRange
    // range
    // required
    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Calendar, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('.wg-component-required').html()).to.be.exist;
    });

    // format

    /**
     * @param {String} _validityErrorMessage - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]required: gen text', () => {
        const wrapper = shallowMount(Calendar, {
            propsData: {
                _validityErrorMessage: 'test'
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.equal('test');
    });

    // _tableData
    // _parentContainerAttributes

    // handleDateChange - calendar
    // _editable
});
