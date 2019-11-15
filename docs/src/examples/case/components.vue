<script>
import WeComponents from "../../../../src/"; // 引入组件库

const showObj = {
    container: [
        {
            value: "设置容器标题",
            attributes: {
                size: "medium",
                bold: true
            }
        },
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
        },
        {
            value: "容器批量操作",
            attributes: {
                size: "medium",
                bold: true
            }
        },
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
    ],
    table: [
        {
            component: "table",
            label: "列表",
            attributes: {
                showIndex: true
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
                    label: "评分",
                    attributes: {
                        sort: true
                    }
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
    ],
    input: [
        {
            component: "input",
            label: "宽度为large",
            value: "111",
            attributes: {
                size: "large"
            }
        },
        {
            component: "input",
            label: "宽度为medium",
            value: "111",
            attributes: {
                size: "medium"
            }
        },
        {
            component: "input",
            label: "宽度为small",
            value: "111",
            attributes: {
                size: "small"
            }
        },
        {
            component: "input",
            label: "限制字符串长度",
            value: "111",
            validity: {
                format: "String",
                max: 10
            }
        }
    ],
    button: [
        {
            component: "button",
            attributes: {
                buttonType: "default"
            }
        },
        {
            component: "button",
            attributes: {
                buttonType: "primary"
            }
        },
        {
            component: "button",
            attributes: {
                buttonType: "danger"
            }
        },
        {
            component: "button",
            attributes: {
                buttonType: "noborder"
            }
        },
        {
            component: "button",
            attributes: {
                loading: true
            }
        }
    ],
    select: [
        {
            component: "select",
            label: "多种展示形式",
            items: [
                {
                    label: "禁用项",
                    value: 0,
                    disabled: true
                },
                {
                    label: "图片加标题",
                    value: 1,
                    labelIcon:
                        "//mmbiz.qpic.cn/mmbiz/rCL8AAI9xX40TaIoHL9lwEgzYZuFYo44TQ7uWFTJUrK2UkJIj3ZS8wqnxwqwxYU9KB5AicEEc1CoAQUAS6aQa4w/0"
                },
                {
                    label: "标题加内容",
                    value: 2,
                    content: "内容通常用作对于当前选项标题的拓展说明"
                },
                {
                    label: "同时包含标题内容图片",
                    value: 3,
                    labelIcon:
                        "//mmbiz.qpic.cn/mmbiz/rCL8AAI9xX40TaIoHL9lwEgzYZuFYo44TQ7uWFTJUrK2UkJIj3ZS8wqnxwqwxYU9KB5AicEEc1CoAQUAS6aQa4w/0",
                    content: "内容通常用作对于当前选项标题的拓展说明"
                },
                {
                    label: "仅标题",
                    value: 4
                }
            ]
        },
        {
            component: "select",
            label: "单项禁用",
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
    ],
    radio: [
        {
            component: "radio",
            label: "设置必填",
            value: 0,
            validity: {
                required: true
            },
            items: [
                {
                    label: "咸粽子",
                    value: 0
                },
                {
                    label: "甜粽子",
                    value: 1
                }
            ]
        },
        {
            component: "radio",
            label: "禁用",
            value: 1,
            attributes: {
                disabled: true
            },
            validity: {
                required: true
            },
            items: [
                {
                    label: "咸粽子",
                    value: 0
                },
                {
                    label: "甜粽子",
                    value: 1
                }
            ]
        }
    ],
    processor: [
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
                }
            ]
        }
    ],
    textarea: [
        {
            component: "textarea",
            label: "设置必填",
            validity: {
                required: true
            }
        },
        {
            component: "textarea",
            label: "设置最大长度",
            validity: {
                max: 50
            }
        }
    ],
    upload: [
        {
            component: "upload",
            validity: {
                // 对于upload组件，validity.format属性非常重要
                // 仅当format为string_array_commas时，value应为逗号分隔的字符串
                format: "StringArrayCommas"
            },
            attributes: {
                editable: false,
                deletable: false,
                options: [
                    {
                        label: "自定义1",
                        type: "custom1"
                    },
                    {
                        label: "自定义2",
                        type: "custom2"
                    }
                ]
            },
            value:
                "//mmbiz.qpic.cn/mmbiz/rCL8AAI9xX40TaIoHL9lwEgzYZuFYo44TQ7uWFTJUrK2UkJIj3ZS8wqnxwqwxYU9KB5AicEEc1CoAQUAS6aQa4w/0,//mmbiz.qpic.cn/mmbiz/rCL8AAI9xX40TaIoHL9lwEgzYZuFYo44TQ7uWFTJUrK2UkJIj3ZS8wqnxwqwxYU9KB5AicEEc1CoAQUAS6aQa4w/0"
        }
    ],
    checkbox: [
        {
            component: "checkbox",
            label: "checkbox",
            value: [2],
            items: [
                {
                    label: "选项1",
                    value: 1
                },
                {
                    label: "选项2",
                    value: 2
                }
            ]
        },
        {
            component: "checkbox",
            label: "禁用",
            attributes: {
                disabled: true
            },
            value: [1],
            items: [
                {
                    label: "选项1",
                    value: 1
                },
                {
                    label: "选项2",
                    value: 2
                }
            ]
        }
    ],
    tab: [
        {
            component: "tab",
            label: "tab",
            value: 2,
            items: [
                {
                    label: "选项1",
                    value: 1
                },
                {
                    label: "选项2",
                    value: 2
                }
            ]
        },
        {
            component: "tab",
            label: "禁用",
            attributes: {
                disabled: true
            },
            value: 1,
            items: [
                {
                    label: "选项1",
                    value: 1
                },
                {
                    label: "选项2",
                    value: 2
                }
            ]
        }
    ],
    calendar: [
        {
            component: "calendar",
            label: "日期组件",
            value: "1992-06-23"
        },
        {
            component: "calendar",
            label: "可选择时分秒",
            value: "1992-06-23",
            attributes: {
                pickTime: true
            }
        },
        {
            component: "calendar",
            label: "选择时间区间",
            value: ["2019-09-20", "2019-09-30"],
            attributes: {
                pickRange: true
            }
        },
        {
            component: "calendar",
            label: "区域禁用",
            value: "2019-09-25",
            attributes: {
                range: ["2019-09-20", "2019-09-30"]
            }
        }
    ],
    dialog: [
        {
            component: "button",
            label: "显示提示类弹窗",
            attributes: {
                buttonType: "primary",
                clickEventName: "showDialogAlert"
            }
        },
        {
            component: "button",
            label: "显示确认类弹窗",
            attributes: {
                buttonType: "primary",
                clickEventName: "showDialogConfirm"
            }
        }
    ],
    tips: [
        {
            component: "button",
            label: "提示成功",
            attributes: {
                buttonType: "primary",
                clickEventName: "showTipsSuccess"
            }
        },
        {
            component: "button",
            label: "提示失败",
            attributes: {
                buttonType: "primary",
                clickEventName: "showTipsFail"
            }
        }
    ]
};

let pageFields = [
    {
        component: "select",
        label: "请选择要展示的组件",
        value: "container",
        attributes: {
            labelWidth: 120,
            changeEventName: "showItemChange"
        },
        items: [
            {
                label: "container",
                value: "container"
            },
            {
                label: "table",
                value: "table"
            },
            {
                label: "input",
                value: "input"
            },
            {
                label: "button",
                value: "button"
            },
            {
                label: "select",
                value: "select"
            },
            {
                label: "radio",
                value: "radio"
            },
            {
                label: "processor",
                value: "processor"
            },
            {
                label: "textarea",
                value: "textarea"
            },
            {
                label: "upload",
                value: "upload"
            },
            {
                label: "checkbox",
                value: "checkbox"
            },
            {
                label: "tab",
                value: "tab"
            },
            {
                label: "calendar",
                value: "calendar"
            },
            {
                label: "dialog",
                value: "dialog"
            },
            {
                label: "tips",
                value: "tips"
            }
        ]
    },
    {
        component: "container",
        id: "showContainer",
        items: []
    }
];

export default {
    name: "v2Test",

    data() {
        return {
            items: [], // 组件需要
            page: new WeComponents(this, pageFields)
        };
    },

    mounted() {
        this.page.setAttribute(
            "showContainer",
            "items",
            showObj["container"]
        );
    },

    methods: {
        showItemChange(event) {
            this.page.setAttribute(
                "showContainer",
                "items",
                showObj[event.data]
            );
        },

        showDialogAlert(event) {
            dialog.alert("提示类弹窗");
        },

        showDialogConfirm(event) {
            dialog.confirm("确认类弹窗");
        },

        showTipsSuccess(event) {
            tips.success("操作成功，已更新数据");
        },

        showTipsFail(event) {
            tips.error("失败，错误信息：xxxxx");
        }

    }
};
</script>
