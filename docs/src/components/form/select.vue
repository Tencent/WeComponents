<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import select from '../../../../examples/select';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: "Select",
        attributes: {
            size: "large",
            bold: true
        }
    },
    {
        value: "Select组件对标HTML Select标签，常用于选项过多时合并选项"
    },
    {
        id: "propsTable",
        component: "table",
        label: "Props",
        items: [
            {
                label: "属性名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "属性描述",
                name: "description"
            },
            {
                label: "类型",
                name: "type"
            },
            {
                label: "默认值",
                name: "default"
            }
        ]
    },
    {
        id: "eventsTable",
        component: "table",
        label: "Events",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "事件名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "事件描述",
                name: "description"
            },
            {
                label: "参数",
                name: "params"
            }
        ]
    },
    {
        id: "methodsTable",
        component: "table",
        label: "Methods",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "方法名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "方法描述",
                name: "description"
            },
            {
                label: "参数",
                name: "params"
            }
        ]
    },
    {
        id: "slotsTable",
        component: "table",
        label: "Slots",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "插槽名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "插槽描述",
                name: "description"
            }
        ]
    },
    {
        component: "table",
        label: "Select Item属性",
        items: [
            {
                label: "名称",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "说明",
                name: "introduce"
            },
            {
                label: "类型",
                name: "type"
            },
            {
                label: "默认值",
                name: "default"
            }
        ],
        value: [
            {
                name: "label",
                introduce: "选项的展示标题",
                type: "String",
                default: "-"
            },
            {
                name: "value",
                introduce: "选项的值",
                type: "Number/String",
                default: "-"
            },
            {
                name: "labelIcon",
                introduce: "选项Icon的链接地址(支持base64)",
                type: "String",
                default: "-"
            },
            {
                name: "content",
                introduce: "选项标题的补充说明",
                type: "String",
                default: "-"
            },
            {
                name: "attributes.disabled",
                introduce: "控制选项是否可选",
                type: "Boolean",
                default: "false"
            }
        ]
    },
    {
        value: "基本用法",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    select.SELECT_BASIC,
    {
        value: `<pre><code>
            {
                component: "select",
                value: 3,
                items: [
                    {
                        label: "TypeScript",
                        value: 0
                    },
                    {
                        label: "Java",
                        value: 1
                    },
                    {
                        label: "Python",
                        value: 2
                    },
                    {
                        label: "Dart",
                        value: 3
                    },
                    {
                        label: "Go",
                        value: 4
                    }
                ]
            }
                                        </code></pre>`
    },
    {
        value: "包含自定义事件",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    select.SELECT_WITH_CUSTOM_EVENT,
    {
        value: `<pre><code>
            {
                component: "select",
                items: [
                    {
                        label: "设置item.customEventName启用",
                        customEventName: "myCustomEvent_1"
                    },
                    {
                        label: "可设置多个自定义事件",
                        customEventName: "myCustomEvent_2"
                    },
                    {
                        label: "TypeScript",
                        value: 0
                    },
                    {
                        label: "Java",
                        value: 1
                    },
                    {
                        label: "Python",
                        value: 2
                    },
                    {
                        label: "Dart",
                        value: 3
                    },
                    {
                        label: "Go",
                        value: 4
                    }
                ]
            }
                                            </code></pre>`
    },
    {
        value: "单项禁用",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    select.SELECT_WITH_SINGLE_DISABLED,
    {
        value: `<pre><code>
            {
                component: "select",
                items: [
                    {
                        label: "TypeScript",
                        value: 0
                    },
                    {
                        label: "Java",
                        value: 1,
                        attributes: {
                            disabled: true
                        }
                    },
                    {
                        label: "Python",
                        value: 2
                    },
                    {
                        label: "Dart",
                        value: 3,
                        attributes: {
                            disabled: true
                        }
                    },
                    {
                        label: "Go",
                        value: 4
                    }
                ]
            }
                                            </code></pre>`
    },
    {
        value: "多种选项展示形式",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    select.SELECT_WITH_MORE_TYPE,
    {
        value: `<pre><code>
            {
                component: "select",
                items: [
                    {
                        label: "禁用项",
                        value: 0,
                        disabled: true
                    },
                    {
                        label: "图片加标题",
                        value: 1,
                        labelIcon: iconUrl
                    },
                    {
                        label: "标题加内容",
                        value: 2,
                        content: "内容通常用作对于当前选项标题的拓展说明"
                    },
                    {
                        label: "同时包含标题内容图片",
                        value: 3,
                        labelIcon: iconUrl,
                        content: "内容通常用作对于当前选项标题的拓展说明"
                    },
                    {
                        label: "仅标题",
                        value: 4
                    }
                ]
            }
                                    </code></pre>`
    }
];

export default {
    name: "v2Test",
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
        this.parse('Select');
    },

    methods: {}
};
</script>
<style>
</style>
