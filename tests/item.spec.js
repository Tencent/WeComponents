import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Item from '../src/item.vue';
/*
 * Item为函数组件
 * item.vue功能点
 * 根据实际组件类型分解配置JSON，传递需要的props
 */

describe('Item.vue', () => {
    it('pass the required props according to the actual component type', () => {
        const wraper = mount(Item, {
            context: {
                props: {
                    component: 'input',
                    label: 'item_input_test',
                    value: 'item_input_value',
                    attributes: {
                        disabled: true
                    },
                    validity: {
                        required: true
                    }
                }
            }
        });

        let inputProps = wraper.vm.$options.propsData;
        expect(inputProps.label).to.equal('item_input_test');
        expect(inputProps.value).to.equal('item_input_value');
        expect(inputProps.disabled).to.be.true;
        expect(inputProps.required).to.be.true;
    });
});
