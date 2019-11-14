<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import container from '../../../../examples/container';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Container',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Container组件用于包含需要进行批量操作（表单提交、隐藏等）的多个组件，同时也可以嵌套包含自身'
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
    container.CONTAINER_BASIC,
    {
        value: `<pre><code>
    {
        component: 'container',
        items: [
            {
                component: "input",
                label: "input"
            },
            {
                component: "select",
                label: "select"
            }
        ]
    }
                                            </code></pre>`
    },
    {
        value: '设置容器标题',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    container.CONTAINER_WITH_LABEL,
    {
        value: `<pre><code>
    {
        component: "container",
        label: "容器标题",
        items: [
            {
                component: "input",
                label: "input"
            },
            {
                component: "select",
                label: "select"
            }
        ]
    }
                                            </code></pre>`
    },
    {
        value: '容器批量操作',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    container.CONTAINER_WITH_OPTION,
    {
        value: `<pre><code>
    {
        component: "container",
        label: "容器标题",
        attributes: {
            disabled: false,
            copyable: true,
            collapse: true, // 容器可展开收起
            deletable: true // 容器可整体删除
        },
        items: [
            {
                component: "input",
                label: "input"
            },
            {
                component: "select",
                label: "select"
            }
        ]
    }
                                                </code></pre>`
    },
    {
        value: '容器布局',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    container.CONTAINER_WITH_LAYOUT,
    {
        value: `<pre><code>
    {
        component: "container",
        label: "容器标题",
        attributes: {
            flexJustify: "space-around"
        },
        items: [
            {
                component: "input",
                label: "input"
            },
            {
                component: "select",
                label: "select"
            }
        ]
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
        this.parse('Container');
    }
};
</script>
<style>
</style>
