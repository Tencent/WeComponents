<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import input from '../../../../examples/input';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Input',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Input组件对标HTML Input标签，用于表单输入'
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
        value: '基本用法',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    input.INPUT_BASIC,
    {
        value: `<pre><code>
    {
        component: 'input'
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
    {
        component: 'input',
        label: '标题'
    },
    {
        value: `<pre><code>
    {
        component: "input",
        label: '标题'
    }
                                </code></pre>`
    },
    {
        value: '设置为必填',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    input.INPUT_WITH_REQUIRED,
    {
        value: `<pre><code>
    {
        component: "input",
                validity: {
                    required: true
                }
    }
                                </code></pre>`
    },
    {
        value: '设置最大长度',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    input.INPUT_WITH_MAXLENGTH,
    {
        value: `<pre><code>
    {
        component: "input",
                validity: {
                    maxLength: 10
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
        this.parse('Input');
    }
};
</script>
<style>
</style>
