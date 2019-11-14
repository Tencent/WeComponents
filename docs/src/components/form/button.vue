<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import button from '../../../../examples/button';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Button',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Button组件对标HTML Button标签，常用于触发事件，如表单提交等'
    },
    {
        id: 'propsTable',
        component: 'table',
        label: 'Props',
        items: [
            {
                label: '属性名',
                name: 'name',
                attributes: { width: 200 }
            },
            {
                label: '属性描述',
                name: 'description'
            },
            {
                label: '类型',
                name: 'type'
            },
            {
                label: '默认值',
                name: 'default'
            }
        ]
    },
    {
        id: 'eventsTable',
        component: 'table',
        label: 'Events',
        attributes: {
            hide: true
        },
        items: [
            {
                label: '事件名',
                name: 'name',
                attributes: { width: 200 }
            },
            {
                label: '事件描述',
                name: 'description'
            },
            {
                label: '参数',
                name: 'params'
            }
        ]
    },
    {
        id: 'methodsTable',
        component: 'table',
        label: 'Methods',
        attributes: {
            hide: true
        },
        items: [
            {
                label: '方法名',
                name: 'name',
                attributes: { width: 200 }
            },
            {
                label: '方法描述',
                name: 'description'
            },
            {
                label: '参数',
                name: 'params'
            }
        ]
    },
    {
        id: 'slotsTable',
        component: 'table',
        label: 'Slots',
        attributes: {
            hide: true
        },
        items: [
            {
                label: '插槽名',
                name: 'name',
                attributes: { width: 200 }
            },
            {
                label: '插槽描述',
                name: 'description'
            }
        ]
    },
    {
        value: '基础用法',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    button.BUTTON_BASIC,
    {
        value: `<pre><code>
        {
            component: "button"
        }
                                    </code></pre>`
    },
    {
        value: '设置标题',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    button.BUTTON_WITH_LABEL,
    {
        value: `<pre><code>
        {
            component: "button",
            label: '标题'
        }
                                    </code></pre>`
    },
    {
        value: '设置按钮类型',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    button.BUTTON_WITH_TYPE,
    {
        value: `<pre><code>
        {
            component: "button",
                    attributes: {
                        type: "primary"
                    }
        }
                                    </code></pre>`
    },
    {
        value: '设置加载状态',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    button.BUTTON_LOADING,
    {
        value: `<pre><code>
        {
            component: "button",
                    attributes: {
                        loading: true
                    }
        }
                                        </code></pre>`
    },
    {
        value: '按钮事件节流',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    button.BUTTON_WITH_THROTTLE,
    {
        value: `<pre><code>
        {
            component: "button",
                    attributes: {
                        throttleTime: 3000
                    }
        }
                                        </code></pre>`
    }
];

export default {
    name: 'v2Test',
    mixins: [parserMixin],

    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields)
        };
    },

    mounted() {
        let codes = document.querySelectorAll('pre code');
        // 高亮代码
        codes.forEach(code => hljs.highlightBlock(code));
        this.parse('Button');
    }
};
</script>
<style>
</style>
