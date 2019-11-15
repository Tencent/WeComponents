/**
 * 寻找祖先组件
 * @param {*} context
 * @param {*} componentName
 */
function findComponentUpward(context, componentName) {
    let parent = context.$parent;
    let name = parent.$options.name;

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }

    return parent;
}

/**
 * 非纯函数, 根据component不同，从attributes中挑选组件个性属性安装到dataProps
 * @param {*} component
 * @param {*} originProps
 * @param {*} dataProps
 */
function addPropsByComponent(component, originProps, dataProps) {
    let attributes = originProps.attributes,
        validity = originProps.validity,
        events = originProps.events;

    switch (component) {
        case 'chart':
        case 'pie':
        case 'ring':
        case 'bar':
        case 'line':
        case 'graph':
            dataProps.width = attributes.width;
            dataProps.height = attributes.height;
            dataProps.type = attributes.type;
            dataProps.direction = attributes.direction;
            dataProps.draggable = attributes.draggable;
            dataProps.repulsion = attributes.repulsion;
            dataProps.categories = attributes.categories;
            if (component !== 'chart') {
                dataProps.type = component;
            }
            break;

        case 'text':
            dataProps.size = attributes.size;
            dataProps.bold = attributes.bold;
            dataProps.mouseEnterEventName = attributes.mouseEnterEventName;
            dataProps.mouseLeaveEventName = attributes.mouseLeaveEventName;
            break;

        case 'select':
            dataProps.inputEventName = attributes.inputEventName;
            dataProps.searchable = attributes.searchable;
            dataProps.multiple = attributes.multiple;
            dataProps.addable = attributes.addable;
            break;

        case 'button':
        case 'submit':
            dataProps.type = attributes.type;
            dataProps.loading = attributes.loading;
            dataProps.throttleTime = attributes.throttleTime;
            if (component === 'submit') {
                dataProps.submit = true;
            }
            break;

        case 'upload':
            dataProps.fileType = attributes.fileType;
            dataProps.options = attributes.options;
            dataProps.editable = attributes.editable;
            dataProps.deletable = attributes.deletable;
            dataProps.multiple = attributes.multiple;
            dataProps.width = validity.width;
            dataProps.height = validity.height;
            dataProps.size = validity.size;
            dataProps.accept = validity.accept;
            dataProps.upload = events.upload;
            break;

        case 'input':
            dataProps.size = attributes.size;
            break;

        case 'container':
        case 'form':
        case 'modal':
            {
                dataProps.width = attributes.width;
                dataProps.height = attributes.height;
                dataProps.modal = attributes.modal;
                dataProps.collapse = attributes.collapse;
                dataProps.deletable = attributes.deletable;
                dataProps.copyable = attributes.copyable;
                dataProps.layout = attributes.layout;
                dataProps.flexJustify = attributes.flexJustify;
                dataProps.flexAlign = attributes.flexAlign;
                dataProps.flexWrap = attributes.flexWrap;
                dataProps.collapseEventName = attributes.collapseEventName;
                dataProps.deleteEventName = attributes.deleteEventName;
                dataProps.copyEventName = attributes.copyEventName;
                dataProps.closeEventName = attributes.closeEventName;
                dataProps.grid = attributes.grid;
                if (component === 'modal') {
                    dataProps.modal = true;
                }
            }
            break;

        case 'table':
            dataProps.height = attributes.height;
            dataProps.wrap = attributes.wrap;
            dataProps.filterItems = attributes.filterItems;
            dataProps.filterEventName = attributes.filterEventName;
            dataProps.exportData = attributes.exportData;
            dataProps.showIndex = attributes.showIndex;
            dataProps.showSelection = attributes.showSelection;
            dataProps.pageSize = attributes.pageSize;
            dataProps.pageIndex = attributes.pageIndex;
            dataProps.pageTotal = attributes.pageTotal;
            dataProps.autoPaging = attributes.autoPaging;
            dataProps.pagination = attributes.pagination;
            dataProps.paginationEventName = attributes.paginationEventName;
            break;

        case 'calendar':
            dataProps.pickTime = attributes.pickTime;
            dataProps.pickRange = attributes.pickRange;
            dataProps.range = attributes.range;
            break;

        default:
            break;
    }
}

/**
 * 唯一ID生成器
 * @param {*} prefix
 */
function getUid(prefix) {
    prefix = prefix || 'wgid_';

    return (
        prefix +
        'xxyxxyxx'.replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0;
            let v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })
    );
}

/**
 * 是否数组
 * @param {*} o
 */
function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

/**
 * 是否对象
 * @param {*} o
 */
function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * 是否数值
 * @param {*} o
 */
function isNumber(o) {
    return Object.prototype.toString.call(o) === '[object Number]';
}

/**
 * 是否字符串
 * @param {*} o
 */
function isString(o) {
    return Object.prototype.toString.call(o) === '[object String]';
}

/**
 * 是否已定义
 * @param {*} o
 */
function isDefined(o) {
    return o !== undefined && o !== null;
}

export default {
    findComponentUpward,
    addPropsByComponent,
    getUid,
    isArray,
    isObject,
    isNumber,
    isString,
    isDefined
};
