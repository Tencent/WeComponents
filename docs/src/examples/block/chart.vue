<script>
import WeComponents from "../../../../src/"; // 引入组件库

let pageFields = [
    {
        component: "text",
        value: "Table",
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        component: "table",
        attributes: {
            type: "ring"
        },
        items: [
            {
                label: "日期",
                name: "date",
                attributes: {
                }
            },
            {
                label: "曝光",
                name: "pv",
                attributes: {
                    textAlign: "right"
                }
            },
            {
                label: "点击",
                name: "click",
                attributes: {
                    textAlign: "right"
                }
            }
        ],
        value: [
            { date: 20191010, pv: 1231231, click: 31331 },
            { date: 20191011, pv: 975123, click: 65234 },
            { date: 20191012, pv: 345123, click: 12321 },
            { date: 20191013, pv: 234561, click: 12117 },
            { date: 20191014, pv: 541234, click: 45678 },
            { date: 20191015, pv: 879452, click: 764322 }
        ]
    },
    {
        component: "text",
        value: "Ring",
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        component: "ring",
        items: [
            {
                label: "日期",
                name: "date",
                attributes: {
                    perspective: "xAxis"
                }
            },
            {
                label: "曝光",
                name: "pv",
                attributes: {
                    perspective: "yAxis"
                }
            },
            {
                label: "点击",
                name: "click"
            }
        ],
        value: [
            { date: 20191010, pv: 1231231, click: 31331 },
            { date: 20191011, pv: 975123, click: 65234 },
            { date: 20191012, pv: 345123, click: 12321 },
            { date: 20191013, pv: 234561, click: 12117 },
            { date: 20191014, pv: 541234, click: 45678 },
            { date: 20191015, pv: 879452, click: 764322 }
        ]
    },
    {
        component: "text",
        value: "Line",
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        component: "line",
        items: [
            {
                label: "日期",
                name: "date",
                attributes: {
                    perspective: "xAxis"
                }
            },
            {
                label: "曝光",
                name: "pv",
                attributes: {
                    perspective: "yAxis"
                }
            },
            {
                label: "点击",
                name: "click"
            }
        ],
        value: [
            { date: 20191010, pv: 1231231, click: 31331 },
            { date: 20191011, pv: 975123, click: 65234 },
            { date: 20191012, pv: 345123, click: 12321 },
            { date: 20191013, pv: 234561, click: 12117 },
            { date: 20191014, pv: 541234, click: 45678 },
            { date: 20191015, pv: 879452, click: 764322 }
        ]
    },
    {
        component: "text",
        value: "Bar",
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        component: "bar",
        items: [
            {
                label: "日期",
                name: "date",
                attributes: {
                    perspective: "xAxis"
                }
            },
            {
                label: "曝光",
                name: "pv",
                attributes: {
                    perspective: "yAxis"
                }
            },
            {
                label: "点击",
                name: "click"
            }
        ],
        value: [
            { date: 20191010, pv: 1231231, click: 31331 },
            { date: 20191011, pv: 975123, click: 65234 },
            { date: 20191012, pv: 345123, click: 12321 },
            { date: 20191013, pv: 234561, click: 12117 },
            { date: 20191014, pv: 541234, click: 45678 },
            { date: 20191015, pv: 879452, click: 764322 }
        ]
    },
];

export default {
    name: "v2Test",

    data() {
        return {
            page: new WeComponents(this, pageFields)
        };
    },

    mounted() { }
};
</script>
