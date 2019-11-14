import { mapActions } from 'vuex';

function getUid(prefix) {
    prefix = prefix || '';

    return (
        prefix +
        'xxyxxyxx'.replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0;
            let v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })
    );
}

function isArrayRepeat(array) {
    return [...new Set(array)].length === array.length;
}

function sliceArray(array, size) {
    let result = [];
    for (let x = 0; x < Math.ceil(array.length / size); x++) {
        let start = x * size;
        let end = start + size;
        result.push(array.slice(start, end));
    }
    return result;
}

function deepCopy(obj) {
    if (obj == null || 'object' !== typeof obj) return obj;
    let copy = obj.constructor();

    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = deepCopy(obj[attr]);
        }
    }

    return copy;
}

function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
}

function transferStyle(obj) {
    if (!obj) return;

    let res = '';

    for (let key in obj) {
        res += `${key}: ${obj[key]};`;
    }

    return res;
}

function getTableLines(head = [], value = []) {
    let tableContent = '';

    for (let j = 0; j < value.length; j++) {
        let currentValue = value[j],
            line = '';

        for (let i = 0; i < head.length; i++) {
            let k = head[i],
                v = currentValue[k];

            if (v || v === 0) {
                line += v;
            }

            line += ',';
        }

        line = line.slice(0, -1).concat('\r\n');

        tableContent += line;
    }

    return tableContent;
}

function reset(container, isFirstRender) {
    // @todo, 若后续业务需要，则深度遍历container所有子孙items
    if (isFirstRender) {
        return;
    }
    let items = container.items[0].items,
        charts = items.filter(item => item.component.indexOf('chart') > -1),
        tables = items.filter(item => item.component.indexOf('table') > -1);

    charts.forEach(chart => {
        container.setAttributes(chart.id, {
            value: []
        });
    });

    tables.forEach(table => {
        container.setValue(table.id, []);
    });

    container.setAttribute('data_overall', 'items', []);
}

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month < 10 && (month = '0' + month);
    day < 10 && (day = '0' + day);

    return year + '-' + month + '-' + day;
}

function formatPercentage(percent, num = 2) {
    if (!isNaN(percent)) {
        return (percent * 100).toFixed(num) + '%';
    } else {
        return '-';
    }
}

function formatThousandPoint(number) {
    let num = String(number);
    return num.replace(/(\d{1,3})(?=(\d{3})+$)/g, function($1) {
        return $1 + ',';
    });
}

function reverseFormatThousandPoint(value) {
    value = String(value);
    return parseFloat(value.replace(/,/g, ''));
}

function isJSONString(str) {
    let result = false;

    if (str && typeof str === 'string') {
        let rvalidchars = /^[\],:{}\s]*$/,
            rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
            rbrace = /^(?:\{.*\}|\[.*\])$/;

        // 如果包含空格，IE可能出错
        str = str.replace(/^\s+|\s+$/g, '');

        if (rbrace.test(str)) {
            // Make sure the incoming data is actual JSON
            // borrowed from http://json.org/json2.js
            if (
                rvalidchars.test(
                    str
                        .replace(rvalidescape, '@')
                        .replace(rvalidtokens, ']')
                        .replace(rvalidbraces, '')
                )
            ) {
                result = true;
            }
        }
    }

    return result;
}

/**
 * 将vuex再做一层封装，支持请求参数以外
 * @param {*} storeMap
 */
function mapStoreActions(storeMap) {
    let context = this;

    Object.keys(storeMap).forEach(methodName => {
        let storeItem = storeMap[methodName],
            namespace = storeItem,
            action = 'request';

        context[methodName] = (params, options) => {
            !options && (options = {});
            return new Promise((resolve, reject) => {
                options.silent === true && (context.$store.silent = true);

                if (storeItem && typeof storeItem === 'object') {
                    namespace = storeItem.namespace;
                    action = storeItem.action;
                }

                mapActions(namespace, { [methodName]: action });
                [methodName].call(context, params).then(data => {
                    return resolve(data);
                });

                options.silent === true && delete context.$store.silent;
            });
        };
    });
}

function getUrlParam(key, url = location.href) {
    let hash = location.hash.substring(1).split(/\?|&/),
        search = location.search.substring(1).split('&'),
        params = {};

    search.concat(hash).forEach(value => {
        let parts = value.split('=');

        parts.length === 1 && parts.unshift('');
        params[parts[0]] = parts[1];
    });

    return params[key];
}

function copy(value, success, error) {
    if (!value) throw new Error('copy handler need value');

    const input = document.createElement('input');
    input.setAttribute('value', value);
    input.style.cssText = 'position: absolute;top:-9999px;left:-9999px';
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        tips.success(success || '复制成功');
    } catch (e) {
        tips.error(error || '复制失败');
    }

    document.body.removeChild(input);
}

/**
 * 格式化数字
 * @param  {[string | number]} number  [要格式化的数字]
 * @param  {[number]} decimals         [保留几位小数]
 * @param  {[string]} dec_point        [小数点符号]
 * @param  {[string]} thousands_sep    [千分位符号]
 * @param  {[string]} roundtag         [舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入]
 * @return {[string]} 格式化后的结果
 */
function number_format(number, decimals, dec_point, thousands_sep, roundtag) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || 'ceil'; //"ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);

            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2');
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

// 浮点数相乘
function floatMulti(multiplier1 = 1, multiplier2 = 1) {
    var result = 0,
        mul1 = multiplier1.toString(),
        mul2 = multiplier2.toString();

    if (mul1.split('.').length > 1) {
        result += mul1.split('.')[1].length;
    }

    if (mul2.split('.').length > 1) {
        result += mul2.split('.')[1].length;
    }
    return (Number(mul1.replace('.', '')) * Number(mul2.replace('.', ''))) / Math.pow(10, result);
}

export default {
    getUid: getUid,
    deepCopy: deepCopy,
    isArray: isArray,
    transferStyle: transferStyle,
    reset: reset,
    formatDate: formatDate,
    formatPercentage: formatPercentage,
    formatThousandPoint,
    reverseFormatThousandPoint,
    sliceArray: sliceArray,
    isJSONString,
    mapActions: mapStoreActions,
    isArrayRepeat,
    getUrlParam,
    copy,
    floatMulti,
    number_format
};
