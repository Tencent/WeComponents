/**
 * CLS 方法测试
 */
import { expect } from 'chai';
import API from '../src/main.js';
import Vue from 'vue';

function init() {
    let vm = new Vue(),
        items = [
            {
                component: 'container',
                label: 'container_label',
                id: 'container_id',
                attributes: {
                    copyable: true,
                    collapse: true
                },
                items: [
                    {
                        component: 'input',
                        id: 'input_id',
                        label: 'input_label',
                        value: 'input_value',
                        attributes: {
                            disabled: true
                        }
                    }
                ]
            }
        ];
    return new API(vm, items);
}

/*
 * 组件库API测试
 */
describe('API', () => {
    let api = {};

    beforeEach(() => {
        api = init();
    });

    /**
     * TestCase for getAttribute
     * @param {String} label - 'input_id'
     * @returns {Boolean} isAttributeExist - true
     */
    it('getAttribute', () => {
        expect(api.getAttribute('input_id', 'label')).to.equal('input_label');
        expect(api.getAttribute('input_id', 'attributes.disabled')).to.be.true;
    });

    /**
     *  TestCase for setAttribute
     * @param {String} id - 'input_id'
     * @param {String} label - 'label'
     * @param {String} newLabel - 'new_input_label'
     * @returns {Boolean} isAttributeExist - true
     */
    it('setAttribute', () => {
        api.setAttribute('input_id', 'label', 'new_input_label');
        expect(api.getAttribute('input_id', 'label')).to.equal('new_input_label');
    });

    /**
     * TestCase for mergeAttribute
     * @param {String} label - 'input_id'
     * @param {Object} attributes - {}
     * @returns {Boolean} isAttributeExist - true
     */
    it('mergeAttribute', () => {
        api.mergeAttribute('input_id', 'attributes', { placeholder: 'input_placeholder' });
        expect(api.getAttribute('input_id', 'attributes.disabled')).to.be.true;
        expect(api.getAttribute('input_id', 'attributes.placeholder')).to.equal('input_placeholder');
    });

    /**
     * TestCase for setAttributes
     * @param {String} label - 'container_id'
     * @param {Object} attributes - {}
     * @returns {Boolean} isAttributeExist - true
     */
    it('setAttributes', () => {
        api.setAttributes('container_id', {
            label: 'new_container_label',
            attributes: {
                collapse: false
            }
        });
        expect(api.getAttribute('container_id', 'label')).to.equal('new_container_label');
        expect(api.getAttribute('container_id', 'attributes.collapse')).to.be.false;
        expect(api.getAttribute('container_id', 'attributes.copyable')).to.be.an('undefined');
    });

    /**
     * TestCase for mergeAttributes
     * @param {String} label - 'container_id'
     * @param {Object} attributes - {}
     * @returns {Boolean} isAttributeExist - true
     */
    it('mergeAttributes', () => {
        api.mergeAttributes('container_id', {
            label: 'new_container_label',
            attributes: {
                collapse: false,
                deletable: true
            }
        });
        expect(api.getAttribute('container_id', 'label')).to.equal('new_container_label');
        expect(api.getAttribute('container_id', 'attributes.collapse')).to.be.false;
        expect(api.getAttribute('container_id', 'attributes.copyable')).to.be.true;
        expect(api.getAttribute('container_id', 'attributes.deletable')).to.be.true;
    });

    /**
     * TestCase for getItem
     * @param {Boolean} id - true
     * @returns {Boolean} isEqual - true
     */
    it('getItem', () => {
        let inputItem = api.getItem('input_id');
        expect(inputItem).to.deep.equal({
            component: 'input',
            id: 'input_id',
            label: 'input_label',
            value: 'input_value',
            attributes: {
                disabled: true
            }
        });
    });

    /**
     * TestCase for getParent
     * @param {String} id - 'input_id'
     * @returns {Boolean} isEqual - true
     */
    it('getParent', () => {
        let containerItem = api.getParent('input_id');
        expect(containerItem).to.deep.equal({
            component: 'container',
            label: 'container_label',
            id: 'container_id',
            attributes: {
                copyable: true,
                collapse: true
            },
            items: [
                {
                    component: 'input',
                    id: 'input_id',
                    label: 'input_label',
                    value: 'input_value',
                    attributes: {
                        disabled: true
                    }
                }
            ]
        });
    });

    /**
     * TestCase for appendItem
     * @param {Object} attributes - {}
     * @returns {Boolean} isEqual - true
     */
    it('appendItem', () => {
        api.appendItem('container_id', {
            component: 'select',
            id: 'select_id',
            label: 'select_label',
            attributes: {
                disabled: true
            }
        });

        expect(api.items).to.deep.equal([
            {
                component: 'container',
                label: 'container_label',
                id: 'container_id',
                attributes: {
                    copyable: true,
                    collapse: true
                },
                items: [
                    {
                        component: 'input',
                        id: 'input_id',
                        label: 'input_label',
                        value: 'input_value',
                        attributes: {
                            disabled: true
                        }
                    },
                    {
                        component: 'select',
                        id: 'select_id',
                        label: 'select_label',
                        attributes: {
                            disabled: true
                        }
                    }
                ]
            }
        ]);
    });

    /**
     * TestCase for insertItemBefore
     * @param {Object} attributes - {}
     * @returns {Boolean} isEqual - true
     */
    it('insertItemBefore', () => {
        api.insertItemBefore('input_id', {
            component: 'select',
            id: 'select_id',
            label: 'select_label',
            attributes: {
                disabled: true
            }
        });

        expect(api.items).to.deep.equal([
            {
                component: 'container',
                label: 'container_label',
                id: 'container_id',
                attributes: {
                    copyable: true,
                    collapse: true
                },
                items: [
                    {
                        component: 'select',
                        id: 'select_id',
                        label: 'select_label',
                        attributes: {
                            disabled: true
                        }
                    },
                    {
                        component: 'input',
                        id: 'input_id',
                        label: 'input_label',
                        value: 'input_value',
                        attributes: {
                            disabled: true
                        }
                    }
                ]
            }
        ]);
    });

    /**
     * TestCase for removeItem
     * @param {String} id - 'input_id'
     * @returns {Boolean} isDataExist - true
     */
    it('removeItem', () => {
        api.removeItem('input_id');
        expect(api.items).to.deep.equal([
            {
                component: 'container',
                label: 'container_label',
                id: 'container_id',
                attributes: {
                    copyable: true,
                    collapse: true
                },
                items: []
            }
        ]);
    });

    /**
     * TestCase for getValue
     * @param {String} id - 'input_id'
     * @returns {Boolean} isDataExist - true
     */
    it('getValue', () => {
        expect(api.getValue('input_id')).to.equal('input_value');
    });

    /**
     * TestCase for setValue
     * @param {string} id - 'input_id'
     * @param {string} value - 'new_input_value'
     * @returns {Boolean} isDataExist - true
     */
    it('setValue', () => {
        api.setValue('input_id', 'new_input_value');
        expect(api.getValue('input_id')).to.equal('new_input_value');
    });

    /**
     * TestCase for show
     * @param {string} id - 'container_id'
     * @returns {Boolean} isClassNameExist - true
     */
    it('show', () => {
        api.show('container_id');
        expect(api.getAttribute('container_id', 'attributes.hide')).to.be.false;
    });

    /**
     * TestCase for hide
     * @param {string} id - 'container_id'
     * @returns {Boolean} isClassNameExist - true
     */
    it('hide', () => {
        api.hide('container_id');
        expect(api.getAttribute('container_id', 'attributes.hide')).to.be.true;
    });
});
