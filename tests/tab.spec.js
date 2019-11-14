import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';

import Tab from '../src/components/tab/tab.vue';

describe('Tab.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_processor-wraper]', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_processor-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {String} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div[data-id="test"]').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Tab, {
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
        const wrapper = shallowMount(Tab, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').text()).to.be.equal('test');
    });

    // name

    /**
     * @param {String} value - 'test'
     * @param {Array} items - [{value: 'test'}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]value: relative class exist', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                items: [{ value: 'test' }],
                value: 'test'
            }
        });

        expect(wrapper.find('.wg-tab-item').html()).to.be.exist;
    });

    /**
     * @param {Array} items - [{label:'test'}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]items: relative class exist', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                items: [{ label: 'test' }]
            }
        });
        expect(wrapper.find('.wg-tab-item').html()).to.be.exist;
    });

    /**
     * @param {Array} items - [{label:'test'}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]items: gen text', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                items: [{ label: 'test' }]
            }
        });
        expect(wrapper.find('.wg-tab-item').text()).to.be.equal('test');
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide tab', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    // disabled - 模板不存在
    // readonly

    /**
     * @param {String} wraperClass - 'wraper-class'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                wraperClass: 'wraper-class'
            }
        });
        expect(wrapper.find('div.wraper-class').html()).to.be.exist;
    });

    /**
     * @param {String} animated - 'tab_animated'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]animated: gen class [$animated]', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                animated: 'tab_animated'
            }
        });
        expect(wrapper.find('div.tab_animated').html()).to.be.exist;
    });

    // changeEventName

    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: gen class "wg-component-required"', () => {
        const wrapper = shallowMount(Tab, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('div.wg-component-required').html()).to.be.exist;
    });

    // format
    // _tableData
    // _parentContainerAttributes

    /**
     * @param {Array} items - [{label: 'test'}]
     * @param {Booelean} isClick - true
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: listen click event', () => {
        let spy = sinon.spy(Tab.methods, 'handleClick');
        const wrapper = shallowMount(Tab, {
            propsData: {
                items: [{ label: 'test' }]
            }
        });
        wrapper.find('.wg-tab-item').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
