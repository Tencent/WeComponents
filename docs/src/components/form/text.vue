<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import text from '../../../../examples/text';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Text/Html',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Text组件为纯文本组件；对应的，Html组件即为富文本组件；<br>在当前版本中，出于兼容的考虑，Text实际上也支持富文本展示，但不建议使用Text展示富文本内容'
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
        value: 'Text用于各种文本（包含富文本）的展示，并做好了XSS防范，保证了富文本展示时的安全性'
    },
    {
        value: '基本用法',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    text.TEXT_BASIC,
    {
        component: 'html',
        value: `<pre><code>
    {
        label: "Text基本用法",
        value: "因为默认为Text组件，所以使用纯文本组件时，可以不设置component的值"
    }
                                </code></pre>`
    },
    {
        value: '设置字体大小与字体加粗',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    text.TEXT_WITH_SIZE,
    {
        component: 'html',
        value: `<pre><code>
    {
        component: 'html',
        value: 0,
        attributes: {
            size: "large",
            bold: true
        }
    }
                                    </code></pre>`
    },
    {
        value: '展示富文本',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    text.TEXT_WITH_RICHTEXT
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
        this.parse('Text');
    },

    methods: {}
};
</script>
<style>
</style>
