import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Container from '../src/components/container/container.vue';
import sinon from 'sinon';

describe('container.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_input-wrapper]', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_container').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist- true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Container, {
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
    it('[props]label: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-container-head').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-container-head_title').text()).to.equal('test');
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]label: relative class exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-container-content_border').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @param {Boolean} modal - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]label: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-container-head').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @param {Boolean} modal - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]label: gen text', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-container-head_title').text()).to.be.equal('test');
    });

    /**
     * @param {String} label - 'test'
     * @param {Boolean} modal - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]label: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-container-content_border').html()).to.be.exist;
    });

    // [props]items - 模板不可视

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide container', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                hide: true
            }
        });

        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Container, {
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
    it('[props]animated: gen class [$amimated]', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-container').classes('test')).to.be.true;
    });

    /**
     * @param {Number} width - 200
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]width: gen style "width: ${width}px"', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                width: 200
            }
        });

        expect(wrapper.find('div.wg-container').attributes('style')).to.equal('width: 200px;');
    });

    /**
     * @param {Number} height - 200
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]height: gen style "height: ${height}px"', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                height: '200'
            }
        });

        expect(wrapper.find('.wg-container-content').attributes('style')).to.equal('height: 200px;');
    });

    /**
     * @param {Boolean} modal - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]modal: relative class exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                modal: true
            }
        });
        expect(wrapper.find('.wg-container-modal_wraper').html()).to.be.exist;
    });

    /**
     * @param {Boolean} modal - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]modal: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                modal: true
            }
        });
        expect(wrapper.find('.wg-container-modal').html()).to.be.exist;
    });

    /**
     * @param {Boolean} collapse - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]collapse: selector ".wg-container-content_border" can match a result', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                collapse: true
            }
        });

        expect(wrapper.find('.wg-container-content_border').html()).to.be.exist;
    });

    /**
     * @param {Boolean} deletable - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]deletable: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                deletable: true
            }
        });
        expect(wrapper.find('.wg-container-head').html()).to.be.exist;
    });

    /**
     * @param {Boolean} deletable - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]deletable: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                deletable: true
            }
        });
        expect(wrapper.find('.wg-container-head_delete').html()).to.be.exist;
    });

    /**
     * @param {Boolean} deletable - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]deletable: relative class exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                deletable: true
            }
        });
        expect(wrapper.find('.wg-container-content_border').html()).to.be.exist;
    });

    /**
     * @param {Boolean} copyable - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]copyable: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                copyable: true
            }
        });

        expect(wrapper.find('.wg-container-head_copy').html()).to.be.exist;
    });

    /**
     * @param {Boolean} copyable - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]copyable: relative element exist', () => {
        const wrapper = shallowMount(Container, {
            propsData: {
                copyable: true
            }
        });
        expect(wrapper.find('.wg-container-head').html()).to.be.exist;
    });

    // [props]flexJustify、flexAlign、flexWrap - 内部属性
    // [event] collapseEventName、deleteEventName、copyEventName、closeEventName、_tabledData、_parentAttributes - 内部属性

    /**
     * @param {String} label - 'test'
     * @param {Boolean} modal - true
     * @returns {Boolean} isCloseModalTrigger - true
     */
    it('[event]closeModal: trigger event on ".wg-container-head_delete"', () => {
        const spy = sinon.spy(Container.methods, 'closeModal');
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test',
                modal: true
            }
        });
        wrapper.find('.wg-container-head_delete').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    // [event]stopBodyScrol - 内部事件
    // formValidity - 内部事件
    // getContainerValue - 内部事件

    /**
     * @param {Boolean} modal - false
     * @param {Boolean} collapse - true
     * @returns {Boolean} isHandleCollapseClickTrigger - true
     */
    it('[event]handleCollapseClick: trigger event on ".wg-container-head_arrow"', () => {
        const spy = sinon.spy(Container.methods, 'handleCollapseClick');
        const wrapper = shallowMount(Container, {
            propsData: {
                modal: false,
                collapse: true
            }
        });
        wrapper.find('.wg-container-head_arrow').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} copyable - true
     * @param {Boolean} deletable - true
     * @returns {Boolean} isDeleteContainerTrigger - true
     */
    it('[event]deleteContainer: trigger event on ".wg-container-head_delete"', () => {
        const spy = sinon.spy(Container.methods, 'deleteContainer');
        const wrapper = shallowMount(Container, {
            propsData: {
                copyable: true,
                deletable: true
            }
        });
        wrapper.find('.wg-container-head_delete').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {String} label - 'test'
     * @param {Boolean} copyable - true
     * @returns {Boolean} isCopyContainerTrigger - true
     */
    it('[event]copyContainer: trigger event on ".wg-container-head_copy"', () => {
        const spy = sinon.spy(Container.methods, 'copyContainer');
        const wrapper = shallowMount(Container, {
            propsData: {
                label: 'test',
                copyable: true
            }
        });
        wrapper.find('.wg-container-head_copy').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
