module.exports = [
    {
        displayName: 'Button',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: 'Button组件展示文案',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"button"'
                }
            },
            hide: {
                description: '控制Button组件展示/隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '控制Button组件是否可点击',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            clickEventName: {
                description: 'Button组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onButtonClick"'
                }
            },
            suffixClickEventName: {
                description: 'Button组件suffix点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'suffixClickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onButtonSuffixClick"'
                }
            },
            buttonType: {
                description: 'Button组件样式类别\n可选值: default, primary, danger, noborder',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'buttonType',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"default"'
                }
            },
            throttleTime: {
                description: 'Button组件点击事件间隔时间\n若设置，则会对Button点击事件进行节流处理',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'throttleTime',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '0'
                }
            },
            loading: {
                description: '控制Button组件是否展示加载中的样式',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'loading',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            wraperClass: {
                description: 'Button组件顶层自定义class名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            suffix: {
                description: 'Button组件自定义拓展HTML内容的富文本',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'suffix',
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {
            wgCloseFilterModal: {
                description: '',
                type: {
                    names: ['undefined']
                }
            }
        },
        methods: [
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Button事件\n<event>onButtonClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{null/object}  若事件名称包含submit文本，则data为button组件所在container的全部数据，否则为null;\n target{object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Calendar',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number|string|array'
                },
                required: ''
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            resetable: {
                description: '组件值是否可重置',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'resetable',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            readonly: {
                description: '组件是否只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number'
                },
                required: ''
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onCalendarChange"'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            pickTime: {
                description: '是否选择时分秒，若为true，则可同时选择日期与具体时分秒',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pickTime',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            pickRange: {
                description: '是否选择时间区间，若为true，则提供第二个日期选择器以支持时间区间选择',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pickRange',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            range: {
                description: '可选时间区间，区间外日期禁止选择',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'range',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description:
                    '组件值类型\n可选值：yyyy-MM, yyyy-MM-dd, yyyy-MM-dd HH, yyyy-MM-dd HH:mm, yyyy-MM-dd HH:mm:ss',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '保存validity产生的错误信息',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '保存父容器组件attributes对象',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            prefix: {
                description: '组件前缀插槽',
                bindings: {}
            },
            suffix: {
                description: '组件后缀插槽',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'originCalendar',
        description: '',
        tags: {},
        props: {
            value: {
                description: '',
                tags: {},
                name: 'value',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: "''"
                }
            },
            pickTime: {
                description: '',
                tags: {},
                name: 'pickTime',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '',
                tags: {},
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            format: {
                description: '',
                tags: {},
                name: 'format',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: "''"
                }
            },
            resetable: {
                description: '',
                tags: {},
                name: 'resetable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            range: {
                description: '',
                tags: {},
                name: 'range',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            calendarType: {
                description: '',
                tags: {},
                name: 'calendarType',
                type: {
                    name: 'string'
                },
                required: ''
            }
        },
        events: {
            change: {
                properties: [
                    {
                        type: {
                            names: ['undefined']
                        },
                        name: '<anonymous1>'
                    }
                ],
                description: '',
                type: {
                    names: ['undefined']
                }
            }
        },
        methods: [],
        slots: {}
    },
    {
        displayName: 'Chart',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            width: {
                description: '图表画布宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'width',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '600'
                }
            },
            height: {
                description: '图表画布高度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'height',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '400'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                type: {
                    name: 'string'
                },
                required: ''
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onChartChange"'
                }
            },
            extra: {
                description: 'extra.option会被透传给echarts组件',
                tags: {},
                name: 'extra',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [],
        slots: {}
    },
    {
        displayName: 'Checkbox',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            items: {
                description: '组件选项数组',
                tags: {},
                name: 'items',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '[]'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否仅只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number'
                },
                required: ''
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onCheckboxChange"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            extra: {
                description: '',
                tags: {},
                name: 'extra',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Container',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            items: {
                description: '组件子项',
                tags: {},
                name: 'items',
                type: {
                    name: 'array'
                },
                required: ''
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            width: {
                description: '容器宽度',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'width',
                type: {
                    name: 'number'
                },
                required: ''
            },
            height: {
                description: '容器高度',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'height',
                type: {
                    name: 'number'
                },
                required: ''
            },
            modal: {
                description: '组件是否展示为弹窗',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'modal',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            collapse: {
                description: '组件是否可展开',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'collapse',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            deletable: {
                description: '组件是否可删除',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'deletable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            copyable: {
                description: '组件是否可复制',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'copyable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            layout: {
                description:
                    '容器组件专属，若设置，则组件内部采用flex布局\n控制组件内部flex布局方向\n可选值：row, row-reverse, column, column-reverse',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'layout',
                type: {
                    name: 'string'
                },
                required: ''
            },
            flexJustify: {
                description:
                    '容器组件专属，若设置，则组件内部采用flex布局\n控制组件内部flex主轴方向\n可选值：flex-start, center, flex-end, space-around, space-between',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'flexJustify',
                type: {
                    name: 'string'
                },
                required: ''
            },
            flexAlign: {
                description:
                    '容器组件专属，若设置，则组件内部采用flex布局\n控制组件内部flex交叉轴方向\n可选值：flex-start, center, flex-end',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'flexAlign',
                type: {
                    name: 'string'
                },
                required: ''
            },
            flexWrap: {
                description:
                    '容器组件专属，若设置，则组件内部采用flex布局\n控制组件内部flex元素是否换行\n可选值：nowrap, wrap, wrap-reverse',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'flexWrap',
                type: {
                    name: 'string'
                },
                required: ''
            },
            collapseEventName: {
                description: '容器展开事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'collapseEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onContainerCollapse"'
                }
            },
            deleteEventName: {
                description: '容器删除事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'deleteEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onContainerDelete"'
                }
            },
            copyEventName: {
                description: '容器复制事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'copyEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onContainerCopy"'
                }
            },
            closeEventName: {
                description: 'modal为true时，弹窗关闭事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'closeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onModalClose"'
                }
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleCollapseClick',
                modifiers: [],
                description:
                    '容器展开/收起\n<event>onContainerCollapse</event>\n\n<customParam>\n type{string}  事件名称;\n data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                }
            },
            {
                name: 'deleteContainer',
                modifiers: [],
                description:
                    '容器删除\n<event>onContainerDelete</event>\n\n<customParam>\n type{string}  事件名称;\n data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                }
            },
            {
                name: 'copyContainer',
                modifiers: [],
                description:
                    '容器复制\n<event>onContainerCopy</event>\n\n<customParam>\n type{string}  事件名称;\n data{null}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                }
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            default: {
                description: '',
                bindings: {}
            },
            bottom: {
                description: '',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Input',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string|number'
                },
                required: ''
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            placeholder: {
                description: '组件占位符',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'placeholder',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            resetable: {
                description: 'Input组件值是否支持一键清空',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'resetable',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number'
                },
                required: ''
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onInputClick"'
                }
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onInputChange"'
                }
            },
            dblClickEventName: {
                description: '组件双击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'dblClickEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onInputDblClick"'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            size: {
                description: 'Input框宽度\n可选值: large, medium, small',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'size',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"medium"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            max: {
                description:
                    '组件数据允许的最大值\n若format为String，则最大值与value.length比较\n若format为Number，则最大值与value比较',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'max',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '保存validity产生的错误信息',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '保存父容器组件attributes对象',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleInput',
                modifiers: [],
                description:
                    'Input输入事件\n<event>onInputChange</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Input数据;\n target{object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Input点击事件\n<event>onInputClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Input数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleDblClick',
                modifiers: [],
                description:
                    'Input组件双击事件\n<event>onInputDblClick</event>\n\n若未自定义，则执行默认行为：修改当前Input组件只读属性为false\n若自定义，则不执行默认行为，并抛出事件\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Input数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{Object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            prefix: {
                description: '组件前缀插槽',
                bindings: {}
            },
            suffix: {
                description: '组件后缀插槽',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'pagination',
        description: '',
        tags: {},
        props: {
            pageIndex: {
                description: '',
                tags: {},
                name: 'pageIndex',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '0'
                }
            },
            pageSize: {
                description: '',
                tags: {},
                name: 'pageSize',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '10'
                }
            },
            total: {
                description: '',
                tags: {},
                name: 'total',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '10'
                }
            },
            pagination: {
                description: '',
                tags: {},
                name: 'pagination',
                type: {
                    name: 'string'
                },
                required: ''
            }
        },
        events: {
            pageChange: {
                description: '',
                type: {
                    names: ['undefined']
                }
            }
        },
        methods: [],
        slots: {}
    },
    {
        displayName: 'Processor',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string|number'
                },
                required: ''
            },
            items: {
                description: '组件选项数组',
                tags: {},
                name: 'items',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '[]'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否仅只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                type: {
                    name: 'number'
                },
                required: ''
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onProcessClick"'
                }
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onProcessChange"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Processor组件选项点击事件\n<event>onProcessClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    },
                    {
                        name: 'item'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Radio',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string|number'
                },
                required: ''
            },
            items: {
                description: 'select组件选项数组',
                tags: {},
                name: 'items',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '[]'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否仅只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                type: {
                    name: 'number'
                },
                required: ''
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                type: {
                    name: 'string'
                },
                required: ''
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onRadioChange"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            _validityErrorMessage: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Select',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string|number|array'
                },
                required: ''
            },
            items: {
                description: 'select组件选项数组',
                tags: {},
                name: 'items',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '[]'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            searchable: {
                description: '组件是否可搜索',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'searchable',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            multiple: {
                description: '组件是否可多选',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'multiple',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            readonly: {
                description: '组件是否仅只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'number'
                },
                required: ''
            },
            inputEventName: {
                description: 'Select组件搜索框输入事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'inputEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onSelectInput"'
                }
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onSelectClick"'
                }
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onSelectChange"'
                }
            },
            addable: {
                description: '组件items是否可动态增加',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'addable',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'string'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleInput',
                modifiers: [],
                description:
                    'Select组件搜索框输入事件\n<event>onSelectInput</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Select组件选项点击事件\n<event>onSelectClick</event>\n\n若点击对象为组件自定义事件选项，则抛出事件名称为customEventName\n若点击对象为组件数据选项，则抛出事件名称为clickEventName\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                mixin: {
                    name: 'emitter',
                    path: '/Users/damonpeng/WXGame/projects/wecomponents/src/mixins/emitter.js'
                },
                params: [
                    {
                        name: 'event'
                    },
                    {
                        name: 'item'
                    },
                    {
                        name: 'index'
                    },
                    {
                        name: 'items'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Tab',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string|number'
                },
                required: ''
            },
            items: {
                description: '组件选项数组',
                tags: {},
                name: 'items',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '[]'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否仅只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTabClick"'
                }
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTabChange"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Processor组件选项点击事件\n<event>onTabClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    },
                    {
                        name: 'item'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Table',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            items: {
                description:
                    '表格列配置\nitem配置:\nname{string}: 列值的key;\nlabel{string}: 列标题;\nsort{boolean/function(a, b)}: 列排序，若为boolean，则默认按照return a-b进行排序，若为function，则按照function的返回数值进行排序；\nvalue{function(v, row)}: 列值展示前对列值进行处理，并展示函数返回值',
                tags: {},
                name: 'items',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            placeholder: {
                description: '表格无数据时的展示文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'placeholder',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"暂无数据"'
                }
            },
            showIndex: {
                description: '是否展示表格行索引',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'showIndex',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            showSelection: {
                description: '是否支持行选择',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'showSelection',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            wrap: {
                description: '是否允许表格内容换行',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wrap',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            filterItems: {
                description: '需要被隐藏的列的name数组，若设置，则显示筛选表格字段按钮',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'filterItems',
                type: {
                    name: 'array'
                },
                required: ''
            },
            filterEventName: {
                description: '当filterItems对应的checkbox值改变时，抛出的事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'filterEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTableFilter"'
                }
            },
            exportData: {
                description: '导出表格数据',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'exportData',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            pageIndex: {
                description: '表格当前页序列',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pageIndex',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '0'
                }
            },
            pageSize: {
                description: '表格每页最大行数',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pageSize',
                type: {
                    name: 'number'
                },
                required: ''
            },
            pageTotal: {
                description: '表格行数，分页组件会自动根据pageTotal/pageSize计算出总页数',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pageTotal',
                type: {
                    name: 'number'
                },
                required: ''
            },
            pagination: {
                description:
                    '分页组件类型，若设置，则表格展示分页组件\n可选值：default, simple（不展示首尾页/跳转按钮）',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'pagination',
                type: {
                    name: 'string'
                },
                required: ''
            },
            autoPaging: {
                description: '是否自动分页',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'autoPaging',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            height: {
                description: '表格高度，若设置，则当表格内容高度大于设置高度时，固定表头',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'height',
                type: {
                    name: 'number'
                },
                required: ''
            },
            sortEventName: {
                description: '表格排序事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'sortEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTableSort"'
                }
            },
            collapseEventName: {
                description: '表格行展开事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'collapseEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTableRowCollapse"'
                }
            },
            selectRowEventName: {
                description: '表格行选择事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'selectRowEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTableRowSelected"'
                }
            },
            selectAllEventName: {
                description: '表格行全选事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'selectAllEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTableAllSelected"'
                }
            },
            paginationEventName: {
                description: '表格翻页事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'paginationEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTablePagination"'
                }
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'sortColumn',
                modifiers: [],
                description:
                    '表格排序\n<event>onTableSort</event>\n\n<customParam>\n type{string}  事件名称;\n data{Object}  事件数据, items: 表格列配置, value：表格数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'column'
                    },
                    {
                        name: 'index'
                    },
                    {
                        name: 'type'
                    }
                ]
            },
            {
                name: 'toggleShowChildren',
                modifiers: [],
                description:
                    '表格展开\n<event>onTableRowCollapse</event>\n\n<customParam>\n type{string}  事件名称;\n data{Object}  事件数据, items: 表格列配置, value：表格数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'tr'
                    },
                    {
                        name: 'index'
                    }
                ]
            },
            {
                name: 'handleSelectTr',
                modifiers: [],
                description:
                    '表格行全选\n<event>onTableRowSelected</event>\n\n<customParam>\n type{string}  事件名称;\n data{Object}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'tr'
                    },
                    {
                        name: 'index'
                    },
                    {
                        name: 'parent'
                    },
                    {
                        name: 'parentIndex'
                    }
                ]
            },
            {
                name: 'handleSelectAllTr',
                modifiers: [],
                description:
                    '表格行选中\n<event>onTableAllSelected</event>\n\n<customParam>\n type{string}  事件名称;\n data{Object}  事件数据, items: 表格列配置, value：表格数据, selectedRow: 当前选中行数组;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{null} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                }
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Text',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                type: {
                    name: 'number'
                },
                required: ''
            },
            bold: {
                description: '文本是否加粗',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'bold',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            size: {
                description: '文本大小\n可选值: large, medium, small',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'size',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"small"'
                }
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextClick"'
                }
            },
            mouseEnterEventName: {
                description: '鼠标移入文本区域事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'mouseEnterEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextMouseEnter"'
                }
            },
            mouseLeaveEventName: {
                description: '鼠标移出文本区域事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'mouseLeaveEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextMouseLeave"'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                type: {
                    name: 'string'
                },
                required: ''
            },
            extra: {
                description: '',
                tags: {},
                name: 'extra',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Text组件点击事件\n<event>onTextClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleMouseEnter',
                modifiers: [],
                description:
                    'Text组件mouseenter事件\n<event>onTextMouseEnter</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleMouseLeave',
                modifiers: [],
                description:
                    'Text组件mouseleave事件\n<event>onTextMouseLeave</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前组件数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            prefix: {
                description: '',
                bindings: {}
            },
            suffix: {
                description: '',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'Textarea',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: ''
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string|number'
                },
                required: ''
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            placeholder: {
                description: '组件占位符',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'placeholder',
                type: {
                    name: 'string'
                },
                required: ''
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            readonly: {
                description: '组件是否只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            resetable: {
                description: 'Textarea组件值是否支持一键清空',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'resetable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                type: {
                    name: 'number'
                },
                required: ''
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextareaClick"'
                }
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextareaChange"'
                }
            },
            dblClickEventName: {
                description: '组件双击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'dblClickEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onTextareaDblClick"'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                type: {
                    name: 'string'
                },
                required: ''
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description: '组件值类型\n可选值：String, Number',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            max: {
                description:
                    '组件数据允许的最大值\n若format为String，则最大值与value.length比较\n若format为Number，则最大值与value比较',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'max',
                type: {
                    name: 'number'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                type: {
                    name: 'string'
                },
                required: ''
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [
            {
                name: 'handleInput',
                modifiers: [],
                description:
                    'Textarea输入事件\n<event>onTextareaChange</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Textarea数据;\n target{object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleClick',
                modifiers: [],
                description:
                    'Textarea点击事件\n<event>onTextareaClick</event>\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Textarea数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            },
            {
                name: 'handleDblClick',
                modifiers: [],
                description:
                    'Textarea组件双击事件\n<event>onTextareaDblClick</event>\n\n若未自定义，则执行默认行为：修改当前Textarea组件只读属性为false\n若自定义，则不执行默认行为，并抛出事件\n\n<customParam>\n type{string}  事件名称;\n data{string/number}  当前Textarea数据;\n target{Object} 触发事件的组件的vm实例;\n nativeEvent{Object} 原生事件对象\n</cutomParam>',
                tags: {
                    access: [
                        {
                            description: 'public',
                            title: 'access'
                        }
                    ]
                },
                params: [
                    {
                        name: 'event'
                    }
                ]
            }
        ],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    },
    {
        displayName: 'upload-item',
        description: '',
        tags: {},
        props: {
            src: {
                description: '',
                tags: {},
                name: 'src',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            fileName: {
                description: '',
                tags: {},
                name: 'fileName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            options: {
                description: '',
                tags: {},
                name: 'options',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            editable: {
                description: '',
                tags: {},
                name: 'editable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            deletable: {
                description: '',
                tags: {},
                name: 'deletable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            disabled: {
                description: '',
                tags: {},
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            readonly: {
                description: '',
                tags: {},
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            onOptionClick: {
                description: '',
                tags: {},
                name: 'onOptionClick',
                type: {
                    name: 'func'
                },
                required: ''
            },
            isAdd: {
                description: '',
                tags: {},
                name: 'isAdd',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            item: {
                description: '',
                tags: {},
                name: 'item',
                type: {
                    name: 'object'
                },
                required: ''
            },
            index: {
                description: '',
                tags: {},
                name: 'index',
                type: {
                    name: 'number'
                },
                required: ''
            },
            multiple: {
                description: '',
                tags: {},
                name: 'multiple',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            clickEventName: {
                description: '',
                tags: {},
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: ''
            },
            width: {
                description: '',
                tags: {},
                name: 'width',
                type: {
                    name: 'number'
                },
                required: ''
            },
            height: {
                description: '',
                tags: {},
                name: 'height',
                type: {
                    name: 'number'
                },
                required: ''
            },
            upload: {
                description: '',
                tags: {},
                name: 'upload',
                type: {
                    name: 'func'
                },
                required: ''
            },
            size: {
                description: '',
                tags: {},
                name: 'size',
                type: {
                    name: 'number'
                },
                required: ''
            },
            fileType: {
                description: '',
                tags: {},
                name: 'fileType',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"image"'
                }
            }
        },
        events: {
            optionClick: {
                description: '',
                type: {
                    names: ['undefined']
                }
            }
        },
        methods: [],
        slots: {}
    },
    {
        displayName: 'Upload',
        description: '',
        tags: {},
        props: {
            id: {
                description: '组件id',
                tags: {},
                name: 'id',
                type: {
                    name: 'string'
                },
                required: ''
            },
            label: {
                description: '组件标题',
                tags: {},
                name: 'label',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            name: {
                description: '组件承载数据的key',
                tags: {},
                name: 'name',
                type: {
                    name: 'string'
                },
                required: ''
            },
            value: {
                description: '组件承载数据',
                tags: {},
                name: 'value',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '""'
                }
            },
            hide: {
                description: '组件是否隐藏',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'hide',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'false'
                }
            },
            disabled: {
                description: '组件是否禁用',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'disabled',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            wraperClass: {
                description: '组件顶层class',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'wraperClass',
                type: {
                    name: 'string'
                },
                required: ''
            },
            animated: {
                description: '动画名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'animated',
                type: {
                    name: 'string'
                },
                required: ''
            },
            labelWidth: {
                description: '组件label宽度，单位为px',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'labelWidth',
                type: {
                    name: 'number'
                },
                required: ''
            },
            readonly: {
                description: '组件是否只读',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'readonly',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            clickEventName: {
                description: '组件点击事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'clickEventName',
                type: {
                    name: 'string'
                },
                required: ''
            },
            changeEventName: {
                description: '组件值变更事件名称',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'changeEventName',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"onUploadChange"'
                }
            },
            help: {
                description: '组件值补充文案',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'help',
                type: {
                    name: 'string'
                },
                required: ''
            },
            editable: {
                description: '控制是否显示编辑按钮',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'editable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            deletable: {
                description: '控制是否显示删除按钮',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'deletable',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            options: {
                description: '自定义操作按钮\noption: { label, type }',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'options',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            multiple: {
                description: '控制是否允许多图上传',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'multiple',
                type: {
                    name: 'boolean'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: 'true'
                }
            },
            upload: {
                description: '自定义文件上传逻辑',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'upload',
                type: {
                    name: 'func'
                },
                required: ''
            },
            fileType: {
                description: '文件类型\n可选值：image/file/video',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'attributes'
                        }
                    ]
                },
                name: 'fileType',
                type: {
                    name: 'string'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '"image"'
                }
            },
            required: {
                description: '组件值是否必填',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'required',
                type: {
                    name: 'boolean'
                },
                required: ''
            },
            format: {
                description:
                    '组件值类型\n在upload组件中，format为必填值\n可选值：String, StringArray, StringArrayCommas, Blob, BlobArray, Object, ObjectArray\n仅当format字段包含“Array”时，upload组件才可以展示多个文件\n当需要同时展示文件与文件名称时，可设置format为Object或ObjectArray。此时，Object.src会被取为文件链接，Object.label会被取为文件标题',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'format',
                type: {
                    name: 'string'
                },
                required: true,
                defaultValue: {
                    func: false,
                    value: '"String"'
                }
            },
            min: {
                description: 'value的最小数量',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'min',
                type: {
                    name: 'number'
                },
                required: '',
                defaultValue: {
                    func: false,
                    value: '0'
                }
            },
            max: {
                description: 'value的最大数量，默认为1，即单图/单视频',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'max',
                type: {
                    name: 'number'
                },
                required: ''
            },
            width: {
                description: '文件/视频的指定宽度',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'width',
                type: {
                    name: 'number'
                },
                required: ''
            },
            height: {
                description: '文件/视频的指定高度',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'height',
                type: {
                    name: 'number'
                },
                required: ''
            },
            size: {
                description: '文件/视频的限制大小',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'size',
                type: {
                    name: 'number'
                },
                required: ''
            },
            accept: {
                description: '文件/视频的限制格式',
                tags: {
                    property: [
                        {
                            title: 'property',
                            type: {
                                name: 'mixed'
                            },
                            name: 'validity'
                        }
                    ]
                },
                name: 'accept',
                type: {
                    name: 'array'
                },
                required: '',
                defaultValue: {
                    func: true,
                    value: '() => []'
                }
            },
            _tableData: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_tableData',
                type: {
                    name: 'object'
                },
                required: ''
            },
            _validityErrorMessage: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_validityErrorMessage',
                type: {
                    name: 'string'
                },
                required: ''
            },
            _parentContainerAttributes: {
                description: '',
                tags: {
                    ignore: [
                        {
                            description: true,
                            title: 'ignore'
                        }
                    ]
                },
                name: '_parentContainerAttributes',
                type: {
                    name: 'object'
                },
                required: ''
            }
        },
        events: {},
        methods: [],
        slots: {
            top: {
                description: '组件顶部的组件组合',
                bindings: {}
            },
            left: {
                description: '组件左侧的组件组合',
                bindings: {}
            },
            right: {
                description: '组件右侧的组件组合',
                bindings: {}
            },
            bottom: {
                description: '组件底部的组件组合',
                bindings: {}
            }
        }
    }
];
