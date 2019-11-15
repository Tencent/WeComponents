<script>
import WeComponents from "../../../../src/"; // 引入组件库

let pageFields = [
    {
        component: "container",
        items: [
            {
                component: "form",
                attributes: { layout: "row", flexJustify: "space-between" },
                items: [
                    {
                        name: "search",
                        label: "搜索",
                        component: "input",
                        attributes: { placeholder: "输入游戏名称进行搜索" }
                    },
                    {
                        label: "查询",
                        component: "submit",
                        attributes: {
                            type: "primary",
                            clickEventName: "searchTable"
                        }
                    }
                ]
            },
            {
                id: "list",
                component: "table",
                attributes: { placeholder: "暂无数据", pagination: "default" },
                items: [
                    {
                        name: "icon",
                        label: "游戏图标",
                        attributes: { width: 60, textAlign: "center" },
                        value(v, row) {
                            return `<img src="${v}" width="28" />`;
                        }
                    },
                    { name: "name", label: "游戏名称" },
                    {
                        name: "size",
                        label: "大小",
                        attributes: { textAlign: "right" },
                        value(v, row) {
                            return `${(v / 1000 / 1000 / 1000).toFixed(1)} G`;
                        }
                    },
                    { name: "intro", label: "简介" },
                    {
                        label: "操作",
                        value() {
                            return {
                                component: "container",
                                items: [
                                    {
                                        label: "查看",
                                        component: "button",
                                        attributes: {
                                            type: "link",
                                            clickEventName: "checkDetails"
                                        }
                                    }
                                ]
                            };
                        }
                    }
                ],
                value: []
            }
        ]
    },
    {
        id: "details",
        component: "modal",
        label: "游戏详情",
        attributes: { hide: true },
        items: [
            {
                label: "游戏图标",
                name: "icon"
            },
            {
                label: "游戏名称",
                name: "name"
            },
            {
                label: "大小",
                name: "size"
            },
            {
                label: "简介",
                name: "intro"
            },
            {
                component: "button",
                label: "确定",
                attributes: {
                    type: "primary",
                    class: "wg-modal-button_submit",
                    clickEventName: "closeModal"
                }
            }
        ]
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
