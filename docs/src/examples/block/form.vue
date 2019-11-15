<script>
import WeComponents from "../../../../src/"; // 引入组件库

let pageFields = [
    {
        "id": "container",
        "component": "container",
        "items": [
            {
                "id": "weadmin_1c82ea41",
                "name": "weadmin_1c82ea41",
                "label": "",
                "value": "",
                "attributes": {
                    "class": "",
                    "hide": false,
                    "disabled": false,
                    "readonly": false,
                    "copyable": false,
                    "collapse": false,
                    "deletable": false,
                },
                "events": {},
                "items": [
                    {
                        "id": "weadmin_ed894b8b",
                        "name": "weadmin_ed894b8b",
                        "label": "App ID",
                        "value": "",
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "placeholder": "placeholder",
                            "resetable": true,
                            "help": "",
                            "size": "large"
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "String",
                            "max": null
                        },
                        "extra": {},
                        "component": "input"
                    },
                    {
                        "id": "weadmin_6489b965",
                        "name": "weadmin_6489b965",
                        "label": "游戏名称",
                        "value": "",
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "placeholder": "placeholder",
                            "resetable": true,
                            "help": "",
                            "size": "large"
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "String",
                            "max": 12
                        },
                        "extra": {},
                        "component": "input"
                    },
                    {
                        "id": "weadmin_21bc8924",
                        "name": "weadmin_21bc8924",
                        "label": "游戏类型",
                        "value": 0,
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "help": ""
                        },
                        "events": {},
                        "items": [
                            {
                                "label": "请选择",
                                "value": 0
                            },
                            {
                                "label": "Java",
                                "value": 1
                            },
                            {
                                "label": "Python",
                                "value": 2
                            },
                            {
                                "label": "Dart",
                                "value": 3
                            },
                            {
                                "label": "Go",
                                "value": 4
                            }
                        ],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "String"
                        },
                        "extra": {},
                        "component": "select"
                    },
                    {
                        "id": "weadmin_369d8acd",
                        "name": "weadmin_369d8acd",
                        "label": "素材类型",
                        "value": 0,
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false
                        },
                        "events": {},
                        "items": [
                            {
                                "label": "图片",
                                "value": 0
                            },
                            {
                                "label": "视频",
                                "value": 1
                            }
                        ],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "Number"
                        },
                        "extra": {},
                        "component": "radio"
                    },
                    {
                        "id": "weadmin_248bfbd7",
                        "name": "weadmin_248bfbd7",
                        "label": "游戏标签",
                        "value": [
                            0,
                            1
                        ],
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "help": ""
                        },
                        "events": {},
                        "items": [
                            {
                                "label": "动作",
                                "value": 0
                            },
                            {
                                "label": "休闲",
                                "value": 1
                            }
                        ],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "String"
                        },
                        "extra": {},
                        "component": "checkbox"
                    },
                    {
                        "id": "weadmin_808bcbc5",
                        "name": "weadmin_808bcbc5",
                        "label": "游戏ICON",
                        "value": "",
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "help": "",
                            "editable": true,
                            "deletable": false,
                            "multiple": true,
                            "fileType": "image"
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": true,
                            "format": "String",
                            "min": null,
                            "max": null,
                            "width": null,
                            "height": null,
                            "size": null,
                            "accept": []
                        },
                        "extra": {},
                        "component": "upload"
                    },
                    {
                        "id": "weadmin_3799ba7c",
                        "name": "weadmin_3799ba7c",
                        "label": "游戏简介",
                        "value": "",
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "placeholder": "placeholder",
                            "resetable": true,
                            "help": ""
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": false,
                            "format": "String",
                            "max": null
                        },
                        "extra": {},
                        "component": "textarea"
                    }
                ],
                "decoration": [],
                "validity": {
                    "required": false,
                    "format": "String"
                },
                "extra": {},
                "component": "container"
            },
            {
                "id": "weadmin_c8b92948",
                "name": "weadmin_c8b92948",
                "label": "",
                "value": "",
                "attributes": {
                    "class": "",
                    "hide": false,
                    "disabled": false,
                    "readonly": false,
                    "copyable": false,
                    "collapse": false,
                    "deletable": false,
                    "flexDirection": "inherit",
                    "flexJustify": "center",
                    "flexAlign": "inherit"
                },
                "events": {},
                "items": [
                    {
                        "id": "weadmin_459a798b",
                        "name": "weadmin_459a798b",
                        "label": "上一步",
                        "value": "",
                        "attributes": {
                            "class": "ui-mr-large",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "type": "default",
                            "loading": false,
                            "throttleTime": 0
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": false,
                            "format": "String"
                        },
                        "extra": {},
                        "component": "button"
                    },
                    {
                        "id": "weadmin_6e81f94b",
                        "name": "weadmin_6e81f94b",
                        "label": "保存草稿",
                        "value": "",
                        "attributes": {
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "type": "primary",
                            "loading": false,
                            "throttleTime": 0
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": false,
                            "format": "String"
                        },
                        "extra": {},
                        "component": "button"
                    },
                    {
                        "id": "weadmin_c199a807",
                        "name": "weadmin_c199a807",
                        "label": "下一步",
                        "value": "",
                        "attributes": {
                            "class": "",
                            "hide": false,
                            "disabled": false,
                            "readonly": false,
                            "type": "default",
                            "loading": false,
                            "throttleTime": 0
                        },
                        "events": {},
                        "items": [],
                        "decoration": [],
                        "validity": {
                            "required": false,
                            "format": "String"
                        },
                        "extra": {},
                        "component": "button"
                    }
                ],
                "decoration": [],
                "validity": {
                    "required": false,
                    "format": "String"
                },
                "extra": {},
                "component": "container"
            }
        ],
        "validity": {
            "required": false,
            "format": "string"
        }
    }
];

export default {
    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields),
            demoTableValue: [
                {
                    icon:
                        "http://mmocgame.qpic.cn/wechatgame/HurH4elIxzLGX0FjtUic0kcQtloVbicTO6LVjWicWYwrIvUBSsve2KWz40jS2MFM5Zu/0",
                    name: "王者荣耀",
                    size: 3675556864,
                    intro: "爽快超神，腾讯5v5英雄公平对战手游"
                },
                {
                    icon:
                        "https://mmocgame.qpic.cn/wechatgame/duc2TvpEgSTLicunKH0MgcMLa8jicfvBvEXiaNAIReHzQJxhsibvgbVpIKtibgV8UcMEO/0",
                    name: "和平精英",
                    size: 3898905600,
                    intro: "大吉大利，腾讯光子自研军事竞赛体验"
                }
            ]
        };
    },

    mounted() {
        // 为表格赋值
        this.page.setValue("list", this.demoTableValue);
    },

    methods: {
        /**
         * 查询数据
         * @param {Object} event 事件数据对象
         */
        searchTable(event) {
            let formData = event.data,
                tableValue = this.demoTableValue;

            if (formData.search) {
                tableValue = this.demoTableValue.filter(
                    item => item.name.indexOf(formData.search) > -1
                );
            }

            this.page.setValue("list", tableValue);
        },

        /**
         * 查看表格该行详细数据
         * @param {Object} event 事件数据对象
         */
        checkDetails(event) {
            let currentRowValue = event.data.row;

            this.page.setValue("details", currentRowValue);
            this.page.show("details"); // 显示id为details的弹窗
        },

        /**
         * 关闭弹窗
         * @param {Object} event 事件数据对象
         */
        closeModal(event) {
            this.page.hide("details");
        }
    }
};
</script>
