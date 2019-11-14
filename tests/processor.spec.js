import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Processor from '../src/components/processor/processor.vue';
import sinon from 'sinon';

describe('Processor.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_input-wraper]', () => {
        const wrapper = shallowMount(Processor, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_processor-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Processor, {
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
        const wrapper = shallowMount(Processor, {
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
        const wrapper = shallowMount(Processor, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    // name

    /**
     * @param {String} value - 'test'
     * @param {Array} items - [{label: 'test', index: 0}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]value: relatvie class exists', () => {
        const wrapper = shallowMount(Processor, {
            propsData: {
                value: 'test',
                items: [{ value: 'test', index: 0 }]
            }
        });
        expect(wrapper.find('.wg-processor-item_index-active').html()).to.be.exist;
    });

    /**
     * @param {Array} items - [{label: 'test', index: 0}]
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]items: relative element exist', () => {
        const wrapper = shallowMount(Processor, {
            propsData: {
                items: [{ label: 'test', index: 0 }]
            }
        });
        expect(wrapper.find('.wg-processor-item').html()).to.be.exist;
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide processor', () => {
        const wrapper = shallowMount(Processor, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    // disabled - 模板不可视
    // readonly

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Processor, {
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
    it('[props]animated: gen class [${class}]', () => {
        const wrapper = shallowMount(Processor, {
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
        const wrapper = shallowMount(Processor, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });
        expect(wrapper.find('.wg-component-label').attributes('style')).to.be.equal('width: 200px;');
    });

    // clickEventName
    // changeEventName

    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Processor, {
            propsData: {
                required: true
            }
        });
        expect(wrapper.find('.wg-component-required').html()).to.be.exist;
    });

    // format
    // _tableData
    // _parentContainerAttributes

    /**
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: trigger event on .wg-processor', () => {
        const spy = sinon.spy(Processor.methods, 'handleClick');
        const wrapper = shallowMount(Processor, {
            propsData: {
                items: [{ label: 'test' }]
            }
        });
        wrapper.find('.wg-processor-item').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
