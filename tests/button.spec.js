import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Button from '../src/components/button/button.vue';
import sinon from 'sinon';

/*
 * 基础组件测试内容包含属性与事件两部分
 * props属性测试
 * event事件测试
 */
describe('Button.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen class [${id}_button-wraper]', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_button-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Button, {
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
    it('[props]id: gen class [$_button]', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('.test_button').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]label: gen button html', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('span.wg-button-label').text()).to.equal('test');
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide button', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]disabled: relative class exist', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.find('.wg-button-disabled').html()).to.be.exist;
    });

    // clickEventName
    // suffixClickEventName

    /**
     * @param {String} type - 'primary'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]type: get class [wg-button-${type}]', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                type: 'primary'
            }
        });

        expect(wrapper.find('div.wg-button').classes('wg-button-primary')).to.be.true;
    });

    // throttleTime - 模板不可视

    /**
     * @param {Boolean} loading - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]loading: relative class exist', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                loading: true
            }
        });

        expect(wrapper.find('div.wg-button').classes('wg-button-loading')).to.be.true;
    });
    
    /**
     * @param {String} loading - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]loading: relative element exist', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                loading: true
            }
        });
        expect(wrapper.find('.icon-loading')).to.be.exist;
    });

    /**
     * @param {String} wraperClass -'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [${wraperClass}]', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                wraperClass: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {String} animated -'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]animated: gen class [${animated}]', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {String} suffix - 'test'
     * @returns {Boolean} isElementExist - true
     */
    it('[props]suffix: relative element exist', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                suffix: 'test'
            }
        });
        expect(wrapper.find('.wg-button-suffix').html()).to.be.exist;
    });

    /**
     * @param {String} suffix - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]suffix: gen text', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                suffix: 'test'
            }
        });
        expect(wrapper.find('.wg-button-suffix').text()).to.be.equal('test');
    });

    // _tableData
    // _parentContainerAttributes

    /**
     * @param {Boolean} isClick - true
     * @param {String} suffix - 'test'
     * @returns {Boolean} isHandleSuffixClickTrigger - true
     */
    it('[event]handleSuffixClick: trigger event on ".wg-button-suffix"', () => {
        const spy = sinon.spy(Button.methods, 'handleSuffixClick');
        const wrapper = shallowMount(Button, {
            propsData: {
                suffix: 'test'
            }
        });
        wrapper.find('.wg-button-suffix').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isHandleClickTrigger - true
     */
    it('[event]handleClick: listen click event', () => {
        const spy = sinon.spy(Button.methods, 'handleClick');
        const wrapper = shallowMount(Button);
        wrapper.find('div.wg-button').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    // checkValue - 模板不存在
    // getButtonTypeClass - 不存在触发动作
});
