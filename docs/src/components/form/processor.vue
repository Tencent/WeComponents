<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import processor from '../../../../examples/processor';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Processor',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Processor通常用于展示及操作进度状态，即当前进度在整体进度中的位置'
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
        label: 'Processor Item属性',
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
                name: 'help',
                introduce: '选项值的补充文案，适用于要展示的信息较多的情况。支持富文本',
                type: 'String',
                default: '-'
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
    processor.PROCESSOR_BASIC,
    {
        value: `<pre><code>
    {
        component: "processor",
        value: 0,
        items: [
            {
                label: "烧开热水",
                value: 0
            },
            {
                label: "切好葱姜蒜",
                value: 1
            },
            {
                label: "准备好鸡肉",
                value: 2
            },
            {
                label: "放弃做菜，把热水倒进泡面里",
                value: 3
            },
            {
                label: "晚饭完成",
                value: 4
            },
        ]
    }
                                </code></pre>`
    },
    {
        value: '设置label与必填',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    processor.PROCESSOR_WITH_LABEL,
    {
        value: `<pre><code>
    {
        component: "processor",
        label: "做晚饭教程",
        value: 0,
        validity: {
            required: true
        },
        items: [
            {
                label: "烧开热水",
                value: 0
            },
            {
                label: "切好葱姜蒜",
                value: 1
            },
            {
                label: "准备好鸡肉",
                value: 2
            },
            {
                label: "放弃做菜，把热水倒进泡面里",
                value: 3
            },
            {
                label: "晚饭完成",
                value: 4
            },
        ]
    }
                                    </code></pre>`
    },
    {
        value: '禁止操作进度',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    processor.PROCESSOR_WITH_DISABLED,
    {
        value: `<pre><code>
    {
        component: "select",
        value: 1,
        attributes: {
            disabled: true
        },
        items: [
            {
                label: "烧开热水",
                value: 0
            },
            {
                label: "切好葱姜蒜",
                value: 1
            },
            {
                label: "准备好鸡肉",
                value: 2
            },
            {
                label: "放弃做菜，把热水倒进泡面里",
                value: 3
            },
            {
                label: "晚饭完成",
                value: 4
            },
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
        this.parse('Processor');
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
