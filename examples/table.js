export default {
    TABLE_BASIC: {
        component: 'table',
        label: '基础表格，首列宽度100px，并展示行序号',
        attributes: {
            showIndex: true
        },
        items: [
            {
                name: 'appname',
                label: '游戏名称',
                attributes: {
                    width: 100
                }
            },
            {
                name: 'price',
                label: '价格'
            },
            {
                name: 'score',
                label: '评分'
            },
            {
                name: 'introduce',
                label: '游戏介绍'
            }
        ],
        value: [
            {
                appname: '怪物猎人世界',
                price: 388,
                score: 97,
                introduce: '猛汉王'
            },
            {
                appname: '尼尔机械纪元',
                price: 528,
                score: 98,
                introduce: '废土世界的人工智能'
            },
            {
                appname: '巫师3',
                price: 188,
                score: 99,
                introduce: '女术士打桩机'
            },
            {
                appname: '黑暗之魂3',
                price: 88,
                score: 95,
                introduce: '卑鄙的外乡人之旅'
            }
        ]
    },
    TABLE_WITH_ROW_CONFIG: {
        component: 'table',
        attributes: {
            showSelection: true
        },
        items: [
            {
                name: 'appname',
                label: '游戏名称',
                attributes: {
                    width: 100
                }
            },
            {
                name: 'price',
                label: '价格'
            },
            {
                name: 'score',
                label: '评分'
            },
            {
                name: 'introduce',
                label: '游戏介绍'
            }
        ],
        value: [
            {
                appname: '怪物猎人世界',
                price: 388,
                score: 97,
                introduce: '猛汉王'
            },
            {
                appname: '尼尔机械纪元',
                price: 528,
                score: 98,
                introduce: '废土世界的人工智能'
            },
            {
                appname: '巫师3',
                price: 188,
                score: 99,
                introduce: '女术士打桩机'
            },
            {
                appname: '黑暗之魂3',
                price: 88,
                score: 95,
                introduce: '卑鄙的外乡人之旅'
            },
            {
                appname: 'E3新游',
                price: '-',
                score: '-',
                introduce: '2019年E3展新游',
                children: [
                    {
                        appname: '赛博朋克2077',
                        price: 368,
                        score: 90,
                        introduce: '赛博朋克世界观'
                    },
                    {
                        appname: '碧蓝幻想',
                        price: 458,
                        score: 89,
                        introduce: '类龙之谷的单机'
                    }
                ]
            }
        ]
    },
    TABLE_WITH_COLUMN_CONFIG: {
        component: 'table',
        items: [
            {
                name: 'appname',
                label: '游戏名称',
                attributes: {
                    width: 100
                }
            },
            {
                name: 'price',
                label: '价格',
                value: function(value, index, row) {
                    return value + '元';
                }
            },
            {
                name: 'score',
                label: '评分',
                attributes: {
                    sort: true
                }
            },
            {
                name: 'introduce',
                label: '游戏介绍',
                attributes: {
                    sort: function(a, b) {
                        return a.length - b.length;
                    }
                }
            }
        ],
        value: [
            {
                appname: '怪物猎人世界',
                price: 388,
                score: 97,
                introduce: '猛汉王'
            },
            {
                appname: '尼尔机械纪元',
                price: 528,
                score: 98,
                introduce: '废土世界的人工智能'
            },
            {
                appname: '巫师3',
                price: 188,
                score: 99,
                introduce: '女术士打桩机'
            },
            {
                appname: '黑暗之魂3',
                price: 88,
                score: 95,
                introduce: '卑鄙的外乡人之旅'
            }
        ]
    },
    TALBE_WITH_COMPONENTS: {
        component: 'table',
        id: 'table_test',
        items: [
            {
                name: 'appname',
                label: '游戏名称', // 表头名称，支持展示为组件: String, JSON
                attributes: {
                    width: 100
                },
                value: '' // 列值在展示前的二次加工：Function, JSON
            },
            {
                name: 'price',
                label: '价格', // 表头名称，支持展示为组件: String, JSON
                value: function(value, index, row) {
                    return value + '元';
                }
            },
            {
                name: 'score',
                label: {
                    component: 'button',
                    label: '修改评分',
                    attributes: {
                        clickEventName: 'modifyScore'
                    }
                }, // 表头名称，支持展示为组件: String, JSON
                sort: true, // 列排序, Boolean时按照sort(a, b => return a - b)排序
                value: function(value, index, row) {
                    return {
                        component: 'input',
                        value: value,
                        attributes: {
                            disabled: true,
                            size: 'small',
                            resetable: false
                        },
                        validity: {
                            format: 'Number'
                        }
                    };
                }
            },
            {
                name: 'introduce',
                label: '游戏介绍', // 表头名称，支持展示为组件: String, JSON
                attributes: {
                    sort: function(a, b) {
                        return a.length - b.length;
                    }
                }
            },
            {
                name: 'options',
                label: '操作',
                value: function(value, index, row) {
                    return {
                        component: 'button',
                        label: '购买',
                        attributes: {
                            clickEventName: 'buy'
                        }
                    };
                } // 列值在展示前的二次加工：Function, JSON
            }
        ],
        value: [
            {
                appname: '怪物猎人世界',
                price: 388,
                score: 97,
                introduce: '猛汉王'
            },
            {
                appname: '尼尔机械纪元',
                price: 528,
                score: 98,
                introduce: '废土世界的人工智能'
            },
            {
                appname: '巫师3',
                price: 188,
                score: 99,
                introduce: '女术士打桩机'
            },
            {
                appname: '黑暗之魂3',
                price: 88,
                score: 95,
                introduce: '卑鄙的外乡人之旅'
            }
        ]
    }
};
