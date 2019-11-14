<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import textarea from '../../../../examples/textarea';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Textarea',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Textarea组件对标HTML Textarea标签，用于文字较多的场景下进行表单输入'
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
        value: '基础用法（可拖拽改变Textarea大小）',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    textarea.TEXTAREA_BASIC,
    {
        value: `<pre><code>
        {
            component: 'textarea',
            attributes: {
                placeholder: '请在此输入...'
            }
        }
                                    </code></pre>`
    },
    {
        value: '设置标题与必填',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    textarea.TEXTAREA_WITH_LABEL,
    {
        value: `<pre><code>
        {
            component: "textarea",
            label: '标题',
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
    textarea.TEXTAREA_WITH_MAXLENGTH,
    {
        value: `<pre><code>
        {
            component: "textarea",
            label: '标题',
            validity: {
                max: 50
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
        this.parse('Textarea');
    }
};
</script>
<style>
</style>
