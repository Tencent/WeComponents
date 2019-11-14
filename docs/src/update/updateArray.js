let updateArray = [
    {
        version: 'v1.0.473',
        date: '2019-07-18',
        messages: ['U 组件库V2版本试运行', 'A 新增V2组件库接入指引文档']
    },
    {
        version: 'v1.0.486',
        date: '2019-07-22',
        messages: ['A 新增checkbox/tab/modal组件', 'F select组件 修复连续点击多个选择框，之前的选择框不会收起的问题']
    },
    {
        version: 'v1.0.520',
        date: '2019-07-29',
        messages: [
            'A table组件 支持label与value的嵌套组件能力',
            'A table组件 增加分页配置参数，支持后端分页场景',
            'U table组件 嵌套组件事件会携带当前行列信息数据',
            'F 全局 修改事件触发后的数据更新逻辑，修复某些情况下的数据同步问题'
        ]
    },
    {
        version: 'v1.0.542',
        date: '2019-08-05',
        messages: [
            'A table组件 增加列筛选功能',
            'A select组件 增加多选功能',
            'A 全局 增加labelWidth属性设置，给组件的label设置宽度更加方便',
            'U 全局 滚动条样式调整，使组件在windows系统下更加美观',
            'U table组件 调整td样式，使表格更加紧凑有序',
            'F button组件 loading图标位置不正确的问题'
        ]
    },
    {
        version: 'v1.0.560',
        date: '2019-08-16',
        messages: [
            'A 全局 增加extra属性，用于外部组件的额外入参入口',
            'U modal组件 调整modal样式',
            'U upload组件 支持blob类型',
            'U table组件 支持placeholder属性，用于无数据时的默认展示',
            'F table组件 解决列筛选异步赋值问题'
        ]
    },
    {
        version: 'v1.0.572',
        date: '2019-08-22',
        messages: [
            'A calendar组件 新增日期筛选组件',
            'A select组件 动态增加选项能力',
            'U button组件 增加suffix属性，用于用户自定义button的额外icon的样式与点击事件',
            'U button组件 label禁止换行'
        ]
    }
];

export default updateArray;
