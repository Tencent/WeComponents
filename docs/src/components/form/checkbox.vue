<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Checkbox',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Checkbox组件对标HTML Checkbox标签，通常当选项大于3时，以checkbox形式呈现供用户进行选择'
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
        component: 'table',
        label: 'Radio Item属性',
        items: [
            {
                label: '名称',
                name: 'name',
                attributes: { width: 200 }
            },
            {
                label: '说明',
                name: 'introduce'
            },
            {
                label: '类型',
                name: 'type'
            },
            {
                label: '默认值',
                name: 'default'
            }
        ],
        value: [
            {
                name: 'label',
                introduce: '选项的展示标题',
                type: 'String',
                default: '-'
            },
            {
                name: 'value',
                introduce: '选项的值',
                type: 'Number/String',
                default: '-'
            },
            {
                name: 'attributes.disabled',
                introduce: '控制选项是否可选',
                type: 'Boolean',
                default: 'false'
            },
            {
                name: 'attributes.helpIcon',
                introduce: '选项文案的解释说明',
                type: 'String',
                default: ''
            }
        ]
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
        this.parse('Checkbox');
    },

    methods: {
        eventHandler(event) {
            switch (event.type) {
                case 'myCustomEvent_1':
                    tips.success('myCustomEvent_1');
                    break;
                case 'myCustomEvent_2':
                    tips.success('myCustomEvent_2');
                    break;
            }
        }
    }
};
</script>
<style>
</style>
