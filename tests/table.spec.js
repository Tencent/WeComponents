import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Table from '../src/components/table/table.vue';
import sinon from 'sinon';

describe('Table.vue', () => {
    /**
     * @param {String} id - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]id: gen class [${id}_table-wrapper]', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                id: 'test'
            }
        });

        expect(wrapper.find('div.test_table-wraper').html()).to.be.exist;
    });

    /**
     * @param {String} id - 'test'
     * @returns {String} isDataIdExist - true
     */
    it('[props]id: gen data-id', () => {
        const wrapper = shallowMount(Table, {
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
        const wrapper = shallowMount(Table, {
            propsData: {
                label: 'test'
            }
        });

        expect(wrapper.find('.wg-table-label').text()).to.equal('test');
    });

    // value
    // items

    /**
     * @param {String} wraperClass - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]wraperClass: gen class [${wraperClass}]', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                wraperClass: 'wrapper-class'
            }
        });

        expect(wrapper.find('div.wrapper-class').html()).to.be.exist;
    });

    /**
     * @param {String} animated - 'test'
     * @returns {Boolean} isClassNameExist- true
     */
    it('[props]animated: gen class [${animation}]', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                animated: 'test'
            }
        });

        expect(wrapper.find('div.wg-group-wraper').classes('test')).to.be.true;
    });

    /**
     * @param {String} hide - true
     * @returns {Boolean} isElementNotExist- true
     */
    it('[props]hide: hide table', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                hide: true
            }
        });
        expect(wrapper.isEmpty()).to.be.true;
    });

    /**
     * @param {String} placeholder - 'test'
     * @param {Boolean} items - [{ label: 'test' }]
     * @returns {Boolean} isTextExist - true
     */
    it('[props]placeholder: gen test', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ label: 'test' }],
                placeholder: 'test'
            }
        });
        expect(wrapper.find('.wg-table-body_placeholder').text()).to.equal('test');
    });

    /**
     * @param {Boolean} showIndex - true
     * @param {Array} items -[{nane ‘test'}]
     * @param {Array} filterItems - []
     * @returns {Boolean} isElementExist - true
     */
    it('[props]showIndex: show relative element', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                filterItems: [],
                items: [{ name: 'test' }],
                showIndex: true
            }
        });
        expect(wrapper.find('.wg-table-th.wg-table-cell.wg-table-th_index').html()).to.be.exist;
    });

    /**
     * @param {Boolean} showIndex - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]showIndex: relative element exist', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ label: 'test' }],
                value: [{ _originIndex: 0 }],
                showIndex: true
            }
        });
        expect(wrapper.find('.wg-table-td.wg-table-cell.wg-table-cell_horizontal-center').html()).to.be.exist;
    });

    /**
     * @param {Boolean} showIndex - true
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isColspanExist - true
     */
    it('[props]showIndex: gen colspan', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ label: 'test' }],
                showIndex: true
            }
        });
        expect(wrapper.find('.wg-table-body_placeholder').attributes('colspan')).to.be.equal('2');
    });

    /**
     * @param {Boolean} showSelection - true
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isElementExist - true
     */
    it('[props]showSelection: show relative element', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ label: 'test' }],
                showSelection: true
            }
        });
        expect(wrapper.find('.wg-table-th.wg-table-cell.wg-table-th_selection').html()).to.be.exist;
    });

    /**
     * @param {Boolean} showSelection - true
     * @param {Array} value - [{ _originIndex: 0 }]
     * @param {Array} items - [{label: 'test'}]
     * @returns {Boolean} isElementExist - true
     */
    it('[props]showSelection: show relative element', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                value: [{ _originIndex: 0 }],
                items: [{ label: 'test' }],
                showSelection: true
            }
        });
        expect(wrapper.find('.wg-table-td.wg-table-cell.wg-table-cell_horizontal-center').html()).to.be.exist;
    });

    /**
     * @param {Boolean} showSelection - true
     * @param {Array} items - items: [{ label: 'test' }]
     * @returns {Boolean} isElementExist - true
     */
    it('[props]showSelection: relative element exist', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ label: 'test' }],
                showSelection: true
            }
        });
        expect(wrapper.find('.wg-table-body_placeholder').attributes('colspan')).to.be.equal('2');
    });

    /**
     * @param {String} wrap - false
     * @param {Array} items - [{ name: 'test', value: 2 }]
     * @param {Array} filterItems - [{ name: 'test', value: 2 }]
     * @returns {Boolean} isElementExist- true
     */
    it('[props]wrap: relative element exist', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ name: 'test', value: 2 }],
                filterItems: [{ name: 'test', value: 2 }],
                wrap: false
            }
        });

        expect(wrapper.find('th.wg-table-td_no-wrap').html()).to.be.exist;
    });

    /**
     * @param {Array} filterItems - []
     * @returns {Boolean} isElementExist- true
     */
    it('[props]filterItems: relative element exist', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                filterItems: []
            }
        });

        expect(wrapper.find('span.wg-table-option').html()).to.be.exist;
    });

    // [props]filterEventName - 内部调用

    /**
     * @param {Object} filterItems - {}
     * @param {Boolean} exportData - true
     * @returns {Boolean} isElementExist- true
     */
    it('[props]exportData: relative element exist', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                filterItems: {},
                exportData: true
            }
        });

        expect(wrapper.find('.wg-table-option').html()).to.be.exist;
    });

    // pageIndex - 传入 paginatoin
    // pageSize - 传入 pagination
    // pageTotal 传入 pagination
    // paginatoinType 传入 pagination
    // autoPaging - 控制 pagination 显示

    /**
     * @param {Number} height - 200
     * @param {Array} items - [{ name: 'test', value: 2 }]
     * @param {Array} filterItems - [{ name: 'test', value: 2 }]
     * @returns {Boolean} isStyleExist- true
     */
    it('[props]height: gen style "height: ${height}px"', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                items: [{ name: 'test', value: 2 }],
                filterItems: [{ name: 'test', value: 2 }],
                height: '200'
            }
        });

        expect(wrapper.find('div.wg-table-wraper').attributes('style')).to.equal('height: 200px;');
    });

    // sortEventName - 内部使用
    // selectRowEventName - 内部使用
    // selectAllEventName - 内部使用
    // paginationEventName - 内部使用
});
