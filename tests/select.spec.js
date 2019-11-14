import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';

import Select from '../src/components/select/select.vue';

describe('select.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_select-wraper]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div.test_select-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isDataIdExist- true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Select, {
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
    it('[props]id: gen class [${id}_select]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div.test_select').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_select-chosen_label]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div.test_select-chosen_label').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isIdExist- true
     */
    it('[props]id: gen id [select_chosen_label_${id}]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div#select_chosen_label_test').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isIdExist- true
     */
    it('[props]id: gen id [${id}]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                id: 'test'
            }
        });
        expect(wrapper.find('div#test').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @param {Boolean} addable - true
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                addable: true,
                id: 'test'
            }
        });
        expect(wrapper.find('.test').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @returns {Boolean} isElementExist- true
     */
    it('[props]label: relative element exist', () => {
        const wrapper = shallowMount(Select, {
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
        const wrapper = shallowMount(Select, {
            propsData: {
                label: 'test'
            }
        });
        expect(wrapper.find('.wg-component-label').text()).to.be.exist;
    });

    // name
    // value
    /**
     * @param {Array} items - [{attributes: 'test', disabled: false}]
     * @returns {Boolean} isElementExist - true
     */
    it('[props]items: relative element exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                items: [{ attributes: 'test', disabled: false }]
            }
        });
        expect(wrapper.find('.wg-select-list_item-wraper').html()).to.be.exist;
    });

    /**
     * @param {Boolean} hide - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]hide: hide select', () => {
        const wrapper = shallowMount(Select, {
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
        const wrapper = shallowMount(Select, {
            propsData: {
                disabled: true
            }
        });
        expect(wrapper.find('.wg-select-chosen_disabled').html()).to.be.exist;
    });

    /**
     * @param {Boolean} searchable - true
     * @returns {Boolean} isElementExist- true
     */
    it('[props]searchable: relative element exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                searchable: true
            }
        });

        expect(wrapper.find('div.wg-select-list_search').html()).to.be.exist;
    });

    /**
     * @param {Boolean} multiple - true
     * @returns {Boolean} isElementExist- true
     */
    it('[props]multiple: relative element exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                multiple: true
            }
        });

        expect(wrapper.find('div.wg-select-chosen_labels').html()).to.be.exist;
    });

    /**
     * @param {Boolean} readonly - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]readonly: relative class exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                readonly: true
            }
        });
        expect(wrapper.find('.wg-select-chosen_disabled').html()).to.be.exist;
    });

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]wraperClass: gen class [$wraperClass]', () => {
        const wrapper = shallowMount(Select, {
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
    it('[props]animated: gen class [$animated]', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.test').html()).to.be.exist;
    });

    /**
     * @param {String} label - 'test'
     * @param {Number} labelWidth - 200
     * @returns {Boolean} isStyleExist - true
     */
    it('[props]labelWidth: gen style "width: ${labelWidth}px"', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                label: 'test',
                labelWidth: 200
            }
        });

        expect(wrapper.find('div.wg-component-label').attributes('style')).to.equal('width: 200px;');
    });

    // inputEventName
    // clickEventName
    // changeEventName

    /**
     * @param {Boolean} addable - true
     * @returns {Boolean} isElementExist- true
     */
    it('[props]addable: relative element exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                addable: true
            }
        });
        expect(wrapper.find('.wg-select-list_item-add').html()).to.be.exist;
    });

    /**
     * @param {String} help - true
     * @returns {Boolean} isTextExist - true
     */
    it('[props]help: gen text', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                help: 'test'
            }
        });
        expect(wrapper.find('.wg-component-help').text()).to.be.equal('test');
    });

    /**
     * @param {Boolean} required - true
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]required: relative class exist', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                required: true
            }
        });

        expect(wrapper.find('div.wg-component-required').html()).to.be.exist;
    });

    // format
    // _tableData

    /**
     * @param {String} _validityErrorMessage - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]_validityErrorMessage: gen text', () => {
        const wrapper = shallowMount(Select, {
            propsData: {
                _validityErrorMessage: true
            }
        });
        expect(wrapper.find('.wg-component-validity_error').text()).to.be.exist;
    });

    // _parentContainerAttributes

    /**
     * @param {Boolean} addable - true
     * @returns {Boolean} isHandleAddTrigger - true
     */
    it('[event]handleAdd: trigger click event on span.wg-select-list_item-add-icon', () => {
        const spy = sinon.spy(Select.methods, 'handleAdd');
        const wrapper = shallowMount(Select, {
            propsData: {
                addable: true
            }
        });
        wrapper.find('span.wg-select-list_item-add-icon').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - 点击
     * @returns {Boolean} isToggleShowListTrigger- true
     */
    it('[event]toggleShowList: trigger event on div.wg-select-chosen', () => {
        const spy = sinon.spy(Select.methods, 'toggleShowList');
        const wrapper = shallowMount(Select);
        wrapper.find('div.wg-select-chosen').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    // showPanelEvent

    /**
     * @param {Boolean} isInput - 输入
     * @param {Boolean} searchable - true
     * @returns {Boolean} isHandleInputTrigger- true
     */
    it('[event]handleInput: trigger event on input.wg-select-list_search-input', () => {
        const spy = sinon.spy(Select.methods, 'handleInput');
        const wrapper = shallowMount(Select, {
            propsData: {
                searchable: true
            }
        });
        wrapper.find('input.wg-select-list_search-input').trigger('input');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Array} items - [{ attributes: 'test' }]
     * @returns {Boolean} isHandleClickTrigger- true
     */
    it('[event]handleClick: trigger event on li.wg-select-list_search-input', () => {
        const spy = sinon.spy(Select.methods, 'handleClick');
        const wrapper = shallowMount(Select, {
            propsData: {
                items: [{ attributes: 'test' }]
            }
        });
        wrapper.find('li.wg-select-list_item-wraper').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} multiple - true
     * @param {Array} value - ['test']
     * @param {Array} items - [{value: 'test'}]
     * @returns {Boolean} isRemoveChosenTrigger - true
     */
    it('[event]removeChosen: trigger event on i.wg-select-chosen_remove', () => {
        const spy = sinon.spy(Select.methods, 'removeChosen');
        const wrapper = shallowMount(Select, {
            propsData: {
                multiple: true,
                value: ['test'],
                items: [{ value: 'test' }]
            }
        });
        wrapper.find('i.wg-select-chosen_remove').trigger('click');

        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} readonly - true
     * @param {Boolean} disabled - false
     * @returns {Boolean} isEditableTtigger- true
     */
    it('[event]_editable: trigger event on span.wg-input-icon_readonly', () => {
        const spy = sinon.spy(Select.methods, '_editable');
        const wrapper = shallowMount(Select, {
            propsData: {
                readonly: true,
                disabled: false
            }
        });
        wrapper.find('span.wg-input-icon_readonly').trigger('click');

        expect(spy.callCount).to.equal(1);
    });
});
