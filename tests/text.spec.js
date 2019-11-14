import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';

import Text from '../src/components/text/text.vue';

describe('Text.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_text-wraper]', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_text-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div[data-id="test"]').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_text]', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('.test_text').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isElementExist- true
     */
    it('[props]label: relative element exist', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-component-label').html()).to.be.exist;
    });

    // name
    /**
     * @param {String} value - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]value: gen text', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                value: 'test'
            }
        });
        expect(wrapper.find('.wg-text').text()).to.be.equal('test');
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist- true
     */
    it('[props]hide: relative element is not exist', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]wraperClass: gen class [${wraperClass}]', () => {
        const wrapper = shallowMount(Text, {
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
        const wrapper = shallowMount(Text, {
            propsData: {
                animated: 'test'
            }
        });
        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @param {Number} labelWidth - 200
     * @returns {Boolean} isStyleExist- true
     */
    it('[props]labelWidth: gen style "width: ${labelWidth}px"', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });

        expect(wrapper.find('div.wg-component-label').attributes('style')).to.equal('width: 200px;');
    });

    /**
     * @param {Boolean} bold - true
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]bold: gen class "wg-text-bold"', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                bold: true
            }
        });

        expect(wrapper.find('span.wg-text-bold').html()).to.be.exist;
    });

    /**
     * @param {String} size - 'small'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]size: gen class "wg-text-small"', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                size: 'small'
            }
        });

        expect(wrapper.find('span.wg-text-small').html()).to.be.exist;
    });

    // clickEventName
    // mouseEnterEventName
    // mouseLeaveEventName

    /**
     * @param {String} help - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Text, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    // extra - 没有用到

    // _tableData
    // _parentContainerAttribute

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isHandleClickTrigger- true
     */
    it('[event]handleClick: trigger event on span.wg-text', () => {
        const spy = sinon.spy(Text.methods, 'handleClick');
        const wrapper = shallowMount(Text);
        wrapper.find('span.wg-text').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isMouseenter - true
     * @returns {Boolean} isHandleMouseEnterTrigger - true
     */
    it('[event]handleMouseEnter: trigger event on span.wg-text', () => {
        const spy = sinon.spy(Text.methods, 'handleMouseEnter');
        const wrapper = shallowMount(Text);
        wrapper.find('span.wg-text').trigger('mouseenter');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isMouseleave - true
     * @returns {Boolean} isHandleMouseLeaveTrigger- true
     */
    it('[event]handleMouseLeave: trigger event on span.wg-text', () => {
        const spy = sinon.spy(Text.methods, 'handleMouseLeave');
        const wrapper = shallowMount(Text);
        wrapper.find('span.wg-text').trigger('mouseleave');

        expect(spy.callCount).to.equal(1);
    });
});
