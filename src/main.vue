<script>
import 'animate.css';  // 通用动画支持
import Item from './item.vue';  // 组件引入
import Util from './utils/util';
import Emitter from './mixins/emitter.js';

const { getUid } = Util;

/**
 * 获取渲染的组件数据，解引用
 * @param {*} config
 */
function getRenderData(config) {
    let _config = _.cloneDeep(config);

    let _data = {
        props: {
            component: _config.component,
            id: _config.id,
            name: _config.name,
            attributes: _config.attributes,
            validity: _config.validity,
            extra: _config.extra,
            events: _config.events,
            label: _config.label,
            value: _config.value,
            decoration: _config.decoration || [],
            items: config.items || [],
            _validityErrorMessage: _config._validityErrorMessage,
            _parentContainerAttributes: _config._parentContainerAttributes || {}
        }
    };

    return _data;
}

/**
 * 检测是否容器组件
 * @param {*} componentName
 */
function checkIsContainer(componentName) {
    return componentName === 'container' || componentName === 'form' || componentName === 'modal';
}

export default {
    name: 'VPage',
    mixins: [Emitter],
    props: {
        items: {
            type: Array,
            required: true
        },
        container: {
            type: Object,
            required: true
        }
    },

    /**
     * 当前页面实例需要全局注入的值，可进行当前页面的数据/属性管理
     */
    provide() {
        return {
            _currentPageInstance: this
        };
    },

    /**
     * 挂载生命周期
     */
    mounted() {
        // 监听子组件触发的事件，并抛出给单页面组件
        this.$on('event', function (data) {
            this.$emit('pageEvent', data);
        });
    },

    methods: {
        /**
         * 供子组件调用并注册事件
         */
        collectEvent(event) {
            this.$nextTick(() => {
                this.$emit('event', {
                    type: event.type,
                    data: event.data,
                    target: event.target,
                    nativeEvent: event.nativeEvent
                });
            });
        }
    },

    // json树渲染为html的核心逻辑
    render: function (h) {
        let self = this;

        /**
         * 根据items配置，递归引入VContainer和VField
         * @param {*} config
         * @param {*} parentAttributes
         */
        function getContainerVnode(config = {}, parentAttributes) {
            let _config = _.cloneDeep(config);

            if (
                typeof parentAttributes === 'object' &&
                Object.keys(parentAttributes).length > 0 &&
                checkIsContainer(parentAttributes.component)
            ) {
                _config._parentContainerAttributes = parentAttributes;
            }

            return h(
                Item,
                getRenderData(_config),

                // 子组件会保留一份父组件的属性配置，这里可以做限制，仅传递部分需要的数据
                config.items
                    ? config.items.map(item =>
                        getContainerVnode(
                            item,
                            Object.assign(parentAttributes || {}, config.attributes, { component: config.component })
                        )
                    )
                    : []
            );
        }

        // 用一个额外的div包裹页面的所有items配置对应的组件集合
        return h(
            'div',
            {
                class: {
                    'wg-page-wraper': true
                },
                on: {
                    click: function (e) {
                        self.broadcast('VSelect', '_pageClick', e);
                    }
                }
            },
            this.items.map(item => {
                return getContainerVnode(item);
            })
        );
    }
};
</script>

<style lang="less">
@import './main.less';
</style>
