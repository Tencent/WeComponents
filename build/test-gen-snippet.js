let matchComponentNames = [
    "button",
    "calendar",
    // "origincalendar",
    "chart",
    "checkbox",
    "container",
    // "async_modal",
    // "modal",
    "input",
    "pagination",
    "processor",
    "radio",
    "select",
    "tab",
    "table",
    "tag",
    "text",
    "textarea",
    // "tips-tpl",
    // "upload-item",
    "upload"
];

var btnObj2 = {
    component: "button",
    id: "btn", // 组件id
    name: "btn",
    label: "button", // Button组件展示文案
    attributes: {
        hide: false, // 控制Button组件展示/隐藏
        disabled: "", // 控制Button组件是否可点击
        clickEventName: "onButtonClick", // Button组件点击事件名称
        suffixClickEventName: "onButtonSuffixClick", // Button组件suffix点击事件名称
        type: "default", // Button组件样式类别; 可选值: default, primary, danger, link
        throttleTime: 0, // Button组件点击事件间隔时间; 若设置，则会对Button点击事件进行节流处理
        loading: false, // 控制Button组件是否展示加载中的样式
        class: "",
        animated: "", // 动画名称
        suffix: "" // Button组件自定义拓展HTML内容的富文本
    },
    validity: {},
    decoration: []
};

var btnOriginFull = {
    component: "button",
    name: "btn",
    id: "btn",
    label: "搜索",
    attributes: {
        hide: false,
        disabled: false,
        loading: false, // 是否展示加载中的样式
        buttonType: "default",
        // throttleTime: 200, // 点击事件间隔时间; clickEventName包含'submit', 内部设置为 200
        class: "",
        flexItemWrap: false,
        // flexJustify: 'center', // 容器居中
        animated: "",
        suffix: ""
    },
    events: {
        clickEventName: "",
        suffixClickEventName: ""
    }
};

var calendarObj2 = {
    component: "calendar",
    id: "calendar", // 组件id
    name: "calendar", // 组件承载数据的key
    label: "", // 组件标题
    attributes: {
        hide: false, // 组件是否隐藏
        disabled: "", // 组件是否禁用 // todo:
        resetable: true, // 组件值是否可重置
        readonly: "", // 组件是否只读 // todo:
        class: "",
        animated: "", // 动画名称
        labelWidth: "", // 组件label宽度，单位为px
        changeEventName: "onCalendarChange", // 组件值变更事件名称
        help: "", // 组件值补充文案
        pickTime: false, // 是否选择时分秒，若为true，则可同时选择日期与具体时分秒
        pickRange: false, // 是否选择时间区间，若为true，则提供第二个日期选择器以支持时间区间选择
        range: [] // 可选时间区间，区间外日期禁止选择
    },
    validity: {
        required: "", // 组件值是否必填
        format: "" // 组件值类型; 可选值：yyyy-MM, yyyy-MM-dd, yyyy-MM-dd HH, yyyy-MM-dd HH:mm, yyyy-MM-dd HH:mm:ss
    },
    decoration: [],
    value: "" // 组件承载数据
};

var calendarOriginFull = {
    component: "calendar",
    name: "calendar",
    id: "calendar",
    label: "",
    value: "", // number|string|array
    attributes: {
        hide: false,
        disabled: false,
        resetable: true,
        readonly: false,
        class: "",
        flexItemWrap: false,
        animated: "",
        // labelWidth: 100,
        changeEventName: "",
        help: "",
        pickTime: false, // 不选择时分秒
        pickRange: false, // 不选择时间区间,
        range: [] // 可选时间范围
    },
    validity: {
        required: false,
        format: "yyyy-MM-dd HH"
    }
};

var chartObj = {
    attributes: {},
    validity: {},
    decoration: [],
    id: "",
    name: "",
    label: "",
    items: "() => []", // todo:
    value: "() => []", // todo:
    hide: false,
    width: 600,
    categories: "", // todo:
    height: 400,
    wraperClass: "", // todo:
    placeholder: "没有数据",
    flexItemWrap: false,
    animated: "",
    type: "",
    draggable: false,
    repulsion: 5000, // todo:
    help: "", // todo: 应该在 help 里
    changeEventName: '"onChartChange"',
    extra: "" // todo: 这个是额外组件
};

var checkboxObj = {
    attributes: {
        hide: false,
        disabled: "", // todo:
        readonly: "",
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "",
        help: "",
        changeEventName: "onCheckboxChange"
    },
    validity: {
        required: "",
        format: "String"
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "() => []", // todo:
    items: "[]", // todo:
    extra: ""
};

var containerObj = {
    attributes: {
        hide: false,
        wraperClass: "", // todo:
        animated: "",
        width: "", // todo: 用新的属性屏蔽掉默认配置？
        height: "", // todo:
        modal: false,
        collapse: false,
        deletable: false,
        copyable: false,
        layout: "", // todo:
        flexJustify: "",
        flexAlign: "",
        flexWrap: "",
        collapseEventName: "onContainerCollapse",
        deleteEventName: "onContainerDelete",
        copyEventName: "onContainerCopy",
        closeEventName: "onModalClose"
    },
    validity: {},
    decoration: [],
    id: "",
    label: "",
    items: "" // todo:
};

var inputObj = {
    attributes: {
        hide: false,
        placeholder: "",
        disabled: "", // todo:
        readonly: "",
        resetable: true,
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "",
        clickEventName: "onInputClick",
        changeEventName: "onInputChange",
        dblClickEventName: "onInputDblClick",
        help: "",
        size: "medium"
    },
    validity: {
        required: "",
        format: "String",
        max: ""
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    valueFilterName: "" // todo:
};

var paginationObj = {
    attributes: {}, // todo: 为什么，attribute 属性为空？
    validity: {},
    decoration: [],
    pageIndex: 0,
    pageSize: 10,
    total: 10,
    pagination: "" // todo:
};

var processorObj = {
    attributes: {
        hide: false,
        disabled: "", // todo:
        readonly: "", // todo: 应为 Boolean
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "",
        clickEventName: "onProcessClick",
        changeEventName: "onProcessChange"
    },
    validity: {
        required: "", // todo:
        format: "String"
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    items: "[]" // todo:
};

var radioObj = {
    attributes: {
        hide: false,
        disabled: "",
        readonly: "",
        wraperClass: "",
        animated: "",
        labelWidth: "",
        help: "",
        changeEventName: "onRadioChange"
    },
    validity: {
        required: "",
        format: "String"
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    items: "[]" // todo:
};

var selectObj = {
    attributes: {
        hide: false,
        disabled: "", // todo:
        searchable: true,
        multiple: false,
        readonly: "", // todo:
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "", // todo: 应为number
        inputEventName: "onSelectInput",
        clickEventName: "onSelectClick",
        changeEventName: "onSelectChange",
        addable: false,
        help: ""
    },
    validity: {
        required: "", // todo:
        format: "String" // todo: 还有 Number
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    items: "[]" // todo:
};

var tabObj = {
    attributes: {
        hide: false,
        disabled: "", // todo:
        readonly: "", // todo:
        wraperClass: "", // todo:
        animated: "",
        clickEventName: "onTabClick",
        changeEventName: "onTabChange"
    },
    validity: {
        required: "", // todo:
        format: "String"
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    items: "[]"
};

var tableObj = {
    attributes: {
        wraperClass: "", // todo:
        animated: "",
        hide: false,
        placeholder: "暂无数据",
        showIndex: false,
        showSelection: false,
        wrap: true,
        filterItems: "",
        filterEventName: "onTableFilter",
        exportData: false,
        pageIndex: 0,
        pageSize: "",
        pageTotal: "",
        pagination: "",
        autoPaging: true,
        height: "",
        sortEventName: "onTableSort",
        collapseEventName: "onTableRowCollapse",
        selectRowEventName: "onTableRowSelected",
        selectAllEventName: "onTableAllSelected",
        paginationEventName: "onTablePagination"
    },
    validity: {},
    decoration: [],
    id: "",
    label: "",
    value: "() => []", // todo:
    items: "() => []" // todo:
};

var tagObj = {
    attributes: {},
    validity: {},
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    hide: false,
    placeholder: "", // todo: 应在 attributes 内的属性，溢出了
    disabled: "",
    readonly: "",
    wraperClass: "", // todo:
    animated: "",
    labelWidth: "",
    changeEventName: '"onTagChange"', // todo: 这里应该修改组件文件备注
    help: "",
    flexItemWrap: false,
    required: "", // todo:
    format: '"StringArray"',
    max: "",
    min: ""
};

var textObj = {
    attributes: {
        hide: false,
        wraperClass: "",
        animated: "",
        labelWidth: "", // todo:
        bold: false,
        size: "small",
        clickEventName: "onTextClick",
        mouseEnterEventName: "onTextMouseEnter",
        mouseLeaveEventName: "onTextMouseLeave",
        help: ""
    },
    validity: {
        required: "" // todo:
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    extra: ""
};

var textareaObj = {
    attributes: {
        hide: false,
        placeholder: "",
        disabled: "", // todo:
        readonly: "", // todo:
        resetable: true,
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "",
        clickEventName: "onTextareaClick",
        changeEventName: "onTextareaChange",
        dblClickEventName: "onTextareaDblClick",
        help: ""
    },
    validity: {
        required: "", // todo:
        format: "String",
        max: "" // todo:
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: ""
};

var uploadObj = {
    attributes: {
        hide: false,
        disabled: "",
        wraperClass: "", // todo:
        animated: "",
        labelWidth: "", // todo:
        readonly: "", // todo:
        clickEventName: "",
        changeEventName: "onUploadChange",
        help: "",
        editable: true,
        deletable: true,
        options: "() => []", // todo:
        multiple: true,
        upload: "", // todo:
        fileType: "image"
    },
    validity: {
        required: "",
        format: "String",
        min: 0,
        max: "", // todo:
        width: "",
        height: "",
        size: "",
        accept: "() => []" // todo:
    },
    decoration: [],
    id: "",
    label: "",
    name: "",
    value: "",
    finishEventName: '"uploadFinish"', // todo:
    uploadEventName: "" // todo:
};
