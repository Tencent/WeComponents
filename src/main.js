import Util from './utils/util';
import _ from 'lodash';
import VPage from './main.vue';
import Dialog from './components/dialog/index.js';
import Tips from './components/tips/index.js';

const dialog = new Dialog();
const tips = new Tips();
const { isObject, isArray, isNumber, isString, isDefined, getUid } = Util;

class Container {
    constructor(thisContext, items) {
        if (thisContext) {
            let self = this;
            let _items = this.formatItems(items);
            thisContext.items = _items;
            this.data = thisContext;
            this.items = _items;
            this.vm = thisContext;
            this.dialog = dialog;
            this.tips = tips;

            this.vm.$options.render = function render(h) {
                return h(VPage, {
                    props: {
                        items: self.items,
                        container: self
                    },
                    on: {
                        pageEvent: event => {
                            if (self.vm[event.type]) {
                                self.vm[event.type](event);
                            }
                        }
                    }
                });
            };
        }
    }

    trigger(eventName, params) {
        if (this.vm[eventName]) {
            this.vm[eventName](params);
        }
    }

    getAttribute(key, attr) {
        let res;

        let obj = this._formatKey(key);
        if (!obj) return;

        let item = this._queryItem(obj, this.items);
        if (!item) return;

        if (attr.indexOf('.') > -1) {
            let _attr = attr.split('.');
            // json配置除极特殊情况不应有第三层，因此查询时也只需支持到第二层
            res = item[_attr[0]][_attr[1]];
        } else {
            // 获取表格value时，若表格包含嵌套组件，则返回对应组件的值
            if (item.component === 'table') {
                let tableVm = this._getVmById(this.vm, item.id);
                tableVm && (res = tableVm._getTableValue());
            } else {
                res = item[attr];
            }
        }

        return res;
    }

    _deleteTableCache(tableId) {
        let tableVm = this._getVmById(this.vm, tableId);
        if (tableVm && tableVm.$options && tableVm.$options.name === 'VTable') {
            let tableItemArray = tableVm.tableItemArray,
                tableThItemArray = [];
            tableItemArray.forEach(item => {
                // 保留表头label的缓存value
                if (item.rowIndex && item.rowIndex === -1) {
                    tableThItemArray.push(item);
                }
            });
            tableVm.tableItemArray = tableThItemArray;
        }
    }

    getValue(key) {
        if (isArray(key)) return;

        let obj = this._formatKey(key);
        if (!obj) return;

        let item = this._queryItem(obj, this.items);
        if (!item) return;

        if (!checkIsContainer(item.component)) return this.getAttribute(key, 'value');

        let res = {};

        res = this._queryContainerValue(item.items, res, item);

        return res;
    }

    /**
     * 设置单个组件的任意属性
     * @param {[string]} symbol   获取页面组件依赖的标识，格式为：name:value，例如 id:input_xx 或 name:key
     * @param {[string]} name  要设置的属性名，例如：data.name 或 label
     * @param {[type]}   value 要设置的值
     * @param {[boolean]}   merge 是否与原有属性合并，true：合并; false：覆盖
     * @param {[object]}   items @desprecated queryItem查询的起始范围
     */
    setAttribute(symbol, key, value, merge, items) {
        if (isArray(symbol)) return;

        let obj = this._formatKey(symbol);
        if (!obj) return;

        let item = this._queryItem(obj, items || this.items);
        if (!item) return;

        this._setAttribute(item, key, value, merge);
    }

    mergeAttribute(symbol, key, value) {
        this.setAttribute(symbol, key, value, true);
    }

    /**
     * 设置某个页面组件的值
     * @param {[string]} symbol   获取容器依赖的标识，格式为：name:value，例如 id:input_xx 或 name:key
     * @param {[type]}   value 要设置的值
     */
    setValue(symbol, value, items) {
        if (isArray(symbol)) return;

        let obj = this._formatKey(symbol);
        if (!obj) return;

        let item = this._queryItem(obj, items || this.items);
        if (!item) return;

        let isContainer = checkIsContainer(item.component);

        if (!isContainer) {
            if (item.component === 'table' && item.id) {
                this._deleteTableCache(item.id);
            }
            this._setAttribute(item, 'value', value);
        } else {
            this._setContainerValue(item, value);
        }
    }

    /**
     * 通过id设置字段属性，表格也可以用
     */
    setAttributes(symbol, config, merge) {
        let obj = this._formatKey(symbol);
        if (!obj) return;

        let item = this._queryItem(obj, this.items);
        if (!item) return;

        if (!config) return;

        Object.keys(config).forEach(key => {
            this._setAttribute(item, key, config[key], merge);
        });
    }

    mergeAttributes(symbol, config) {
        this.setAttributes(symbol, config, true);
    }

    /**
     * 根据id获取某个组件
     * @param  {[string]} key 组件id
     * @param  {object} field 开始查询的层级，不填则从根结点查询
     * @return {[object]}     返回所查的组件及其父组件
     */
    _getItemAndParent(key, field = null) {
        if (!field) {
            field = this.data;
        }
        // 需修改，同时从items和decoration中查
        if (field) {
            let searchRange = field.items || [];
            if (field.decoration) {
                searchRange = searchRange.concat(field.decoration);
            }

            for (let item of searchRange) {
                if (item.id === key) {
                    return {
                        item: item,
                        parent: field
                    };
                }

                let res = this._getItemAndParent(key, item);

                if (res) {
                    return res;
                }
            }
        }
    }

    getItem(key) {
        return (this._getItemAndParent(key) || {}).item;
    }

    getParent(key) {
        return (this._getItemAndParent(key) || {}).parent;
    }

    appendItem(symbol, item) {
        if (isArray(symbol)) return;

        let obj = this._formatKey(symbol);
        if (!obj) return;

        let field = this._queryItem(obj, this.items);
        if (!field) return;

        !item.id && (item = this._resetId(item));
        field.items.push(_.cloneDeep(item));
    }

    insertItemBefore(symbol, item) {
        if (isArray(symbol)) return;

        let obj = this._formatKey(symbol);
        if (!obj) return;

        let field = this._queryItem(obj, this.items);
        if (!field) return;

        let parent = this.getParent(field.id);
        let items = parent.items || [];
        let index = items.findIndex(item => item.id == field.id) || 0;

        !item.id && (item = this._resetId(item));
        parent.items.splice(index, 0, item);
    }

    removeItem(symbol) {
        if (isArray(symbol)) return;

        let obj = this._formatKey(symbol);
        if (!obj) return;

        let field = this._queryItem(obj, this.items);
        if (!field) return;

        let parent = this.getParent(field.id);
        let items = parent.items || [];
        let index = items.findIndex(item => item.id == field.id);

        if (index > -1) {
            return parent.items.splice(index, 1);
        }
    }

    _setAttribute(item, key, value, merge) {
        if (key.indexOf('.') > -1) {
            let splitName = key.split('.');
            // json配置除极特殊情况不应有第三层，因此赋值时也只需支持到第二层
            if (item[splitName[0]][splitName[1]] === undefined) {
                if (item[splitName[0]] === undefined) {
                    item[splitName[0]] = {};
                }
                item[splitName[0]][splitName[1]] = value;
                this.vm.$set(item, item[splitName[0]]);
            } else {
                item[splitName[0]][splitName[1]] = value;
            }
        } else {
            // 若对应属性没有初始化，则使用vm.$set为对象属性建立observe
            if (item[key] === undefined) {
                this.vm.$set(item, key, value);
            } else {
                if (merge) {
                    let _type = Object.prototype.toString.call(item[key]),
                        _valueType = Object.prototype.toString.call(value);

                    if (_valueType !== _type) {
                        // value类型不同，则直接覆盖
                        item[key] = value;
                    } else {
                        if (_type === '[object Object]') {
                            // 当item[key]的值为object时，执行Object.assign
                            item[key] = Object.assign(item[key], value);
                        } else if (_type === '[object Array]') {
                            // 当item[key]的值为array时，执行Array.prototype.concat
                            item[key] = item[key].concat(value);
                        } else {
                            item[key] = value;
                        }
                    }
                } else {
                    if (isArray(value)) {
                        item[key] = [].concat(value);
                    } else {
                        item[key] = value;
                    }
                }
            }
        }
    }

    hide(id) {
        this.setAttribute(id, 'attributes.hide', true);
    }

    show(id) {
        this.setAttribute(id, 'attributes.hide', false);
    }

    _resetId(field) {
        if (field.component) {
            // text不清空值
            let keepValueComponent = ['grid', 'text'];

            field.id = field.component + '_' + getUid();

            // 复制时清空值
            if (keepValueComponent.indexOf(field.component) === -1) {
                if (Array.isArray(field.value)) {
                    field.value = [];
                } else {
                    field.value = '';
                }
            }
            // field.name = field.name + '_' + Util.getUid();

            let items = field.items || [];

            for (let item of items) {
                item = this._resetId(item);
            }
        }

        return field;
    }

    _formatKey(key) {
        if (!isDefined(key)) {
            key = '';
        }
        let arr = key.replace(/\s+/g, '').split(':');

        if (!arr.length || !arr[0] || !arr[1]) {
            return {
                name: 'id',
                value: key
            };
        }

        let name = arr[0];
        let value = arr[1];

        return {
            name,
            value
        };
    }

    _queryItem(obj = {}, items = []) {
        let result;

        for (let item of items) {
            let isFound = false;

            if (obj.name.indexOf('.') > -1) {
                let splitName = obj.name.split('.');
                isFound = item[splitName[0]][splitName[1]] == obj.value;
            } else {
                isFound = item[obj.name] === obj.value;
            }
            if (item && isFound) {
                result = item;
                break;
            }

            result = this._queryItem(obj, (item.items || []).concat(item.decoration || []));
            if (result) {
                break;
            }
        }

        return result;
    }

    _formatValue(item = {}) {
        let name = item.name,
            value = item.value;

        return name && typeof name === 'string'
            ? {
                [name]: value
            }
            : null;
    }

    _queryContainerValue(items = [], res = {}, parentItem = null) {
        // 非纯函数，非同级放在children中，同级重复name用数组存储
        for (let item of items) {
            if (checkIsContainer(item.component)) {
                let obj = {};
                obj = this._queryContainerValue(item.items, obj, item);
                !res[item.name || 'children'] && (res[item.name || 'children'] = {});
                this._mergeValue(res[item.name || 'children'], obj);
            } else {
                let itemObj = this._formatValue(item);
                if (itemObj) {
                    this._mergeValue(res, itemObj);
                }
            }
        }

        return res;
    }

    _mergeValue(origin = {}, val = {}) {
        // 合并对象，相同name则存为数组
        let originKeys = Object.keys(origin),
            valKeys = Object.keys(val);

        valKeys.forEach(key => {
            if (originKeys.some(item => item === key)) {
                // 仅第一次时，转为数组
                if (origin[key] && origin[key]._merged) {
                    origin[key].push(val[key]);
                } else {
                    let merged = [origin[key], val[key]];
                    merged._merged = true;
                    origin[key] = merged;
                }
            } else {
                origin[key] = val[key];
            }
        });
    }

    checkValue(item) {
        let error = this.validity(item);
        if (Array.isArray(item.items) && item.items.length > 0) {
            item.items.forEach(_item => {
                this.checkValue(_item);
            });
        }
        return error;
    }

    /**
     * 校验数据
     * 基于required/format/min/max/minlength/maxlength/pattern的设置，对数据进行深度校验
     * 专注于对item.value与item.validity进行比较，不需关心item的获取问题
     * 短路逻辑，validity某一项检测失败立即返回
     */
    validity(item) {
        const value = item.value,
            validity = item.validity || {},
            label = item.label,
            { required, format, min, max, pattern } = validity;

        // 必填，不允许value为undefined/null/空字符串
        if (isDefined(required) && required) {
            if (!isDefined(value) || value === '') {
                return {
                    message: `${label}不能为空`,
                    field: item
                };
            }
        }

        // 基于现实逻辑，calendar组件增加特殊的校验逻辑
        if (item.component === 'calendar' && item.attributes && item.attributes.pickRange) {
            let calendarFlag = Array.isArray(value) && value.length > 1 && value[0] && value[1];
            if (isDefined(required) && required) {
                if (!calendarFlag) {
                    return {
                        message: `${label}不能为空`,
                        field: item
                    };
                }
            }
            if (calendarFlag && moment(value[1]).isBefore(moment(value[0]))) {
                return {
                    message: `${label}起始时间不应晚于结束时间`,
                    field: item
                };
            }
        }

        // 类型及类型相关属性检查，若未填值，则不校验
        if (isDefined(format) && isDefined(value) && String(value) !== '') {
            if (format === 'Number') {
                if (!isNumber(value)) {
                    return {
                        message: `${label}的值需为数字类型`,
                        field: item
                    };
                }
                // format为number时，min和max为数字的最小及最大值
                if (isDefined(min) && value < min) {
                    return {
                        message: `${label}的值需大于或等于${min}`,
                        field: item
                    };
                }
                if (isDefined(max) && value > max) {
                    return {
                        message: `${label}的值需小于或等于${max}`,
                        field: item
                    };
                }
            } else if (format === 'String') {
                if (!isString(value)) {
                    return {
                        message: `${label}的值需为字符串类型`,
                        field: item
                    };
                }
                // format为string时，min和max为字符串长度的最小和最大值
                if (typeof value === 'string' && isDefined(min) && value.length < min) {
                    return {
                        message: `${label}的长度需大于或等于${min}`,
                        field: item
                    };
                }
                if (typeof value === 'string' && isDefined(max) && value.length > max) {
                    return {
                        message: `${label}的长度需小于或等于${max}`,
                        field: item
                    };
                }
                // 正则检查
                if (isDefined(pattern)) {
                    let regexp = new RegExp(pattern);
                    if (!regexp.test(value)) {
                        return {
                            message: `${label}格式错误`,
                            field: item
                        };
                    }
                }
            } else if (format === 'StringArray') {
                if (!isArray) {
                    return {
                        message: `${label}的值应为数组类型`,
                        field: item
                    };
                }
                // format为String时，min和max为数组长度的最小和最大值
                if ((Array.isArray(value) && value.length < min) || !value) {
                    return {
                        message: `${label}的文件数量需大于或等于${min}`,
                        field: item
                    };
                }
                if ((Array.isArray(value) && value.length > max) || !value) {
                    return {
                        message: `${label}的文件数量需小于或等于${max}`,
                        field: item
                    };
                }
            }
        }

        return {
            message: '',
            field: item
        };
    }

    /**
     * 给整个容器填值
     * @param {object} data
     * @todo 暂时忽略value本身为数组的情况（upload，table）
     * @todo 遍历复制方法时间复杂度待优化
     */
    _setContainerValue(item, data) {
        if (!isObject(data)) {
            return;
        }

        let dataEntries = Object.entries(data),
            items = item.items;

        if (isArray(items)) {
            dataEntries.forEach(entries => {
                let key = entries[0],
                    value = entries[1];

                // 依次从data中取出每一个key,value，并从items中按顺序和层级寻找匹配并赋值
                if (isObject(value)) {
                    // 若value为Object，则为下一层级
                    let _key = this._formatKey(`name:${key}`),
                        _item = this._queryItem(_key, items);

                    this._setContainerValue(_item, value);
                } else if (isArray(value)) {
                    // 若value为Array
                    // 1. item为upload/table组件，value本身为Array
                    // 2. item为其他组件，当前层级存在name重复的情况，按照item出现顺序赋值
                    let _items = [],
                        _itemsArrayValue = [],
                        depth = getDepth(value);
                    items.forEach(item => {
                        if (item.name === key) {
                            if (componentValueIsArray(item)) {
                                _itemsArrayValue.push(item);
                            } else {
                                _items.push(item);
                            }
                        }
                    });
                    if (depth >= 2) {
                        // 二维数组, upload或table存在name相同的情况
                        _itemsArrayValue.forEach((_item, index) => {
                            this._setAttribute(_item, 'value', value[index]);
                        });
                    } else {
                        _itemsArrayValue.forEach(_item => {
                            this._setAttribute(_item, 'value', value);
                        });
                    }
                    _items.forEach((_item, index) => {
                        this._setAttribute(_item, 'value', value[index]);
                    });
                } else {
                    // value为基础类型，直接赋值
                    items.some(_item => {
                        if (_item.name === key) {
                            this._setAttribute(_item, 'value', value);
                        }
                    });
                }
            });
        }
    }
    _getUid(prefix) {
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
    // 获取指定id组件对应的vm实例
    _getVmById(vm, id) {
        let result;

        for (let child of vm.$children) {
            if (child.id === id) {
                result = child;
                break;
            }

            result = this._getVmById(child, id);
            if (result) {
                break;
            }
        }

        return result;
    }
    formatItems(items = []) {
        let _items = _.cloneDeep(items);
        // 设置id
        _items.forEach(item => {
            if (!item.id) {
                item.id = this._getUid();
            }
            if (Array.isArray(item.items) && item.items.length > 0) {
                item.items = this.formatItems(item.items);
            }
        });
        return _items;
    }
}

// 获取数组深度
function getDepth(arr) {
    const eleDepths = [];
    arr.forEach(ele => {
        let depth = 0;
        if (Array.isArray(ele)) {
            depth = getDepth(ele);
        }
        eleDepths.push(depth);
    });
    return 1 + max(eleDepths);
}

function max(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr.reduce((accu, curr) => {
            if (curr > accu) return curr;
            return accu;
        });
    } else {
        return 0;
    }
}

function componentValueIsArray(item) {
    let component = item.component,
        flag = component === 'upload' || component === 'table' || component === 'checkbox';

    if (component === 'select' && item.attributes && item.attributes.multiple) {
        flag = true;
    }
    return flag;
}

function checkIsContainer(component) {
    return component === 'container' || component === 'form' || component === 'modal';
}

export default Container;
