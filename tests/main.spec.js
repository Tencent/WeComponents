import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import Main from '../src/main.vue';
import sinon from 'sinon';

/*
 * main.vue功能点
 * 接受页面配置JSON，递归调用Item，将JSON渲染为VNode，并正确的传递父组件属性
 * 内部抛出event事件，并包含事件信息
 * 监听event事件，并抛出pageEvent事件及事件信息
 * 监听全局click事件，并使用mixins中的broadcast函数广播至指定组件
 */
describe('Main.vue', () => {
    /**
     * 加载组件配置并渲染为vnode属性
     */
    it('get config JSON and render JSON to vnode tree', () => {
        const wraper = mount(Main, {
            propsData: {
                items: [
                    {
                        component: 'container',
                        attributes: {
                            copyable: true,
                            disabled: true
                        },
                        items: [
                            {
                                component: 'input',
                                attributes: {
                                    labelWidth: 140
                                }
                            }
                        ]
                    }
                ],
                container: {}
            }
        });

        let pageVm = wraper.vm,
            containerVm = pageVm.$children[0],
            containerProps = containerVm.$options.propsData,
            inputVm = containerVm.$children[0],
            inputProps = inputVm.$options.propsData;

        expect(containerProps.copyable).to.be.true;
        expect(inputProps._parentContainerAttributes.disabled).to.be.true;
    });

    /**
     * 监听和触发 PageEvent
     */
    it('emit and listen event then emit pageEvent', () => {
        const wraper = shallowMount(Main, {
            propsData: {
                items: [
                    {
                        label: '搜索框',
                        component: 'input'
                    }
                ],
                container: {}
            }
        });

        const eventData = {
            type: 'testEvent',
            data: 123,
            target: { target: 'target' },
            nativeEvent: { event: 'event' }
        };

        wraper.vm.$emit('event', eventData);

        expect(wraper.emitted().event.length).to.equal(1);
        expect(wraper.emitted().event[0]).to.deep.equal([eventData]);
        expect(wraper.emitted().pageEvent.length).to.equal(1);
        expect(wraper.emitted().pageEvent[0]).to.deep.equal([eventData]);
    });

    /**
     * 监听和触发 Click 事件
     */
    it('listen click event and broadcast to select', () => {
        let broadcastSpy = sinon.spy();

        const wraper = shallowMount(Main, {
            propsData: {
                items: [],
                container: {}
            },
            mixins: [
                {
                    methods: {
                        broadcast: broadcastSpy
                    }
                }
            ]
        });

        wraper.trigger('click');
        expect(broadcastSpy.callCount).to.equal(1);
    });
});
