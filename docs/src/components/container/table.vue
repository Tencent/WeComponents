<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import table from '../../../../examples/table';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: 'Table',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Table组件用于展示序列化数据'
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
        label: 'Table Item配置',
        component: 'table',
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
                introduce: '列标题',
                type: 'string',
                default: '-'
            },
            {
                name: 'name',
                introduce: '列值对应的Key',
                type: 'string',
                default: '-'
            },
            {
                name: 'value',
                introduce: '若为function，列值展示前将列值传入value()进行处理，并展示函数返回值；否则直接展示',
                type: 'string/number/function',
                default: '-'
            },
            {
                name: 'attributes.sort',
                introduce:
                    '列排序，若为boolean，则默认按照return a-b进行排序，若为function，则按照function的返回数值进行排序',
                type: 'boolean/function',
                default: '-'
            },
            {
                name: 'attributes.textAlign',
                introduce: '列值内容对齐方式，可选值: left/center/right',
                type: 'string',
                default: 'left'
            },
            {
                name: 'attributes.width',
                introduce: '列宽度',
                type: 'number',
                default: '-'
            },
            {
                name: 'attributes.hide',
                introduce: '列是否隐藏',
                type: 'Boolean',
                default: false
            },
            {
                name: 'validity.format',
                introduce: '列值的数据类型，可选值: string/number',
                type: 'string',
                default: '-'
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
    table.TABLE_BASIC,
    {
        component: 'html',
        value: `<pre><code>
    {
        component: "table",
        label: "基础表格，首列宽度100px，并展示行序号", // 表格标题
        attributes: {
            showIndex: true // 显示行序号
        },
        items: [
            {
                name: "appname",
                label: "游戏名称",
                attributes: {
                    width: 100
                }
            },
            {
                name: "price",
                label: "价格"
            },
            {
                name: "score",
                label: "评分"
            },
            {
                name: "introduce",
                label: "游戏介绍"
            }
        ],
        value: [
            {
                appname: "怪物猎人世界",
                price: 388,
                score: 97,
                introduce: "猛汉王"
            },
            {
                appname: "尼尔机械纪元",
                price: 528,
                score: 98,
                introduce: "废土世界的人工智能"
            },
            {
                appname: "巫师3",
                price: 188,
                score: 99,
                introduce: "女术士打桩机"
            },
            {
                appname: "黑暗之魂3",
                price: 88,
                score: 95,
                introduce: "卑鄙的外乡人之旅"
            }
        ]
    }
                                    </code></pre>`
    },
    {
        value: '支持行选择与行展开',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    table.TABLE_WITH_ROW_CONFIG,
    {
        component: 'html',
        value: `<pre><code>
    {
        component: "table",
        attributes: {
            showSelection: true // 行选择
        },
        items: [
            {
                name: "appname",
                label: "游戏名称",
                attributes: {
                    width: 100
                }
            },
            {
                name: "price",
                label: "价格"
            },
            {
                name: "score",
                label: "评分"
            },
            {
                name: "introduce",
                label: "游戏介绍"
            }
        ],
        value: [
            {
                appname: "怪物猎人世界",
                price: 388,
                score: 97,
                introduce: "猛汉王"
            },
            {
                appname: "尼尔机械纪元",
                price: 528,
                score: 98,
                introduce: "废土世界的人工智能"
            },
            {
                appname: "巫师3",
                price: 188,
                score: 99,
                introduce: "女术士打桩机"
            },
            {
                appname: "黑暗之魂3",
                price: 88,
                score: 95,
                introduce: "卑鄙的外乡人之旅"
            },
            {
                appname: "E3新游",
                price: "-",
                score: "-",
                introduce: "2019年E3展新游",
                // 当value包含children字段时，children内容会被展示为子项
                children: [
                    {
                        appname: "赛博朋克2077",
                        price: 368,
                        score: 90,
                        introduce: "赛博朋克世界观"
                    },
                    {
                        appname: "碧蓝幻想",
                        price: 458,
                        score: 89,
                        introduce: "类龙之谷的单机"
                    }
                ]
            }
        ]
    }
                                            </code></pre>`
    },
    {
        value: '支持列排序/在展示前处理表格原始值',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    table.TABLE_WITH_COLUMN_CONFIG,
    {
        component: 'html',
        value: `<pre><code>
    {
        component: "table",
        items: [
            {
                name: "appname",
                label: "游戏名称",
                attributes: {
                    width: 100
                }
            },
            {
                name: "price",
                label: "价格",
                // value为function时，可以在展示前将表格值修改为需要的样式
                value: function(value, index, row) {
                    return value + "元";
                }
            },
            {
                name: "score",
                label: "评分",
                // 列排序, boolean时按照sort(a, b => return a - b)排序
                sort: true
            },
            {
                name: "introduce",
                label: "游戏介绍",
                // 列排序, function时函数返回值是否大于0对前后两项进行排序
                attributes: {
                    sort: function(a, b) {
                        return a.length - b.length;
                    }
                }
            }
        ],
        value: [
            {
                appname: "怪物猎人世界",
                price: 388,
                score: 97,
                introduce: "猛汉王"
            },
            {
                appname: "尼尔机械纪元",
                price: 528,
                score: 98,
                introduce: "废土世界的人工智能"
            },
            {
                appname: "巫师3",
                price: 188,
                score: 99,
                introduce: "女术士打桩机"
            },
            {
                appname: "黑暗之魂3",
                price: 88,
                score: 95,
                introduce: "卑鄙的外乡人之旅"
            }
        ]
    }
                                                </code></pre>`
    },
    {
        value: '在表头/表格内容中嵌套使用组件',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    table.TALBE_WITH_COMPONENTS,
    {
        component: 'html',
        value: `<pre><code>
    {
        component: "table",
        id: "table_test",
        items: [
            {
                name: "appname",
                label: "游戏名称", // 表头名称，支持展示为组件: String, JSON
                attributes: {
                    width: 100
                },
            },
            {
                name: "price",
                label: "价格", // String
                value: function(value, index, row) {
                    return value + "元";
                }
            },
            {
                name: "score",
                // 在表头中嵌套使用组件，传入组件配置
                label: {
                    component: "button",
                    label: "修改评分",
                    attributes: {
                        clickEventName: "modifyScore"
                    }
                },
                sort: true,
                // 在表格内容中嵌套使用组件，设置value为function并返回组件配置
                value: function(value, index, row) {
                    return {
                        component: "input",
                        value: value,
                        attributes: {
                            disabled: true,
                            size: "small",
                            resetable: false
                        },
                        validity: {
                            format: "Number"
                        }
                    };
                }
            },
            {
                name: "introduce",
                label: "游戏介绍",
                attributes: {
                    sort: function(a, b) {
                        return a.length - b.length;
                    }
                }
            },
            {
                name: "options",
                label: "操作",
                value: function(value, index, row) {
                    return {
                        component: "button",
                        label: "购买",
                        attributes: {
                            clickEventName: "buy"
                        }
                    };
                }
            }
        ],
        value: [
            {
                appname: "怪物猎人世界",
                price: 388,
                score: 97,
                introduce: "猛汉王"
            },
            {
                appname: "尼尔机械纪元",
                price: 528,
                score: 98,
                introduce: "废土世界的人工智能"
            },
            {
                appname: "巫师3",
                price: 188,
                score: 99,
                introduce: "女术士打桩机"
            },
            {
                appname: "黑暗之魂3",
                price: 88,
                score: 95,
                introduce: "卑鄙的外乡人之旅"
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

        this.parse('Table');
    },

    methods: {
        modifyScore() {
            let items = this.container.getItem('table_test').items;

            items.some((column, index) => {
                if (column.name === 'score') {
                    items[index].value = function (value, index, row) {
                        return {
                            component: 'input',
                            value: value,
                            attributes: {
                                disabled: false,
                                size: 'small',
                                resetable: false
                            },
                            validity: {
                                format: 'Number'
                            }
                        };
                    };
                }
            });

            this.container.setAttribute('table_test', 'items', items);
        },
        buy() {
            this.page.dialog.alert('购买成功，感谢支持');
        }
    }
};
</script>
<style>
</style>
