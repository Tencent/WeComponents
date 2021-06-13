require('./docs.js');
console.log('成功解析组件');

const fs = require('fs');
const path = require('path');
const componentInfoList = require('../docs/components.js');

let childrenComponentNames = [
    // "button",
    // "calendar",
    'origincalendar',
    // "chart",
    // "checkbox",
    // "container",
    // "input",
    // "link",
    // "vpagination",
    // "processor",
    // "querybuilder",
    // "radio",
    // "richtext",
    // "select",
    'selectlist',
    // "tab",
    // "table",
    // "tag",
    // "text",
    // "textarea",
    // "tree",
    'upload-item',
    // "upload"
    'async_modal',
    'modal',
    'tips-tpl'
];
let supportExpandProps = ['attributes', 'validity'];

const componentProsDesMap = {};
let snippetCollection = {};
let matchNum = /^\d+$/;
let matchLetter = /^'|"([a-zA-Z]+|[\u4e00-\u9fa5]+)'|"$/;
let matchFunc = /^\(\) => \[\]$/;
let matchEmptyStr = /^(''|\"\")$/;
let matchEmptyArr = /^\[\]$/;
let matchBool = /^(true|false)$/;
let pathConf = {
    path: `${process.env.INIT_CWD.replace(/\\/g, '/')}/.vscode`,
    file: 'snippets.code-snippets',
    data: snippetCollection
};

function parseDefaultValue(defaultValue) {
    let result = false;
    let matchFuncArr = [
        value => matchNum.test(value) && 'number',
        value => matchLetter.test(value) && 'string',
        value => matchFunc.test(value) && 'array',
        value => matchEmptyStr.test(value) && 'emptyString',
        value => matchEmptyArr.test(value) && 'emptyArray',
        value => matchBool.test(value) && 'boolean'
    ];
    while (matchFuncArr.length !== 0 && !result) {
        let func = matchFuncArr.pop();
        if (func) {
            result = func(defaultValue) || false;
        }
    }

    if (!result) return defaultValue;

    switch (result) {
        case 'number':
            defaultValue = Number.parseInt(defaultValue);
            break;
        case 'string':
            defaultValue = defaultValue.replace(/\'([a-zA-Z]+|[\u4e00-\u9fa5]+)\'/, '$1');
            break;
        case 'array':
            defaultValue = [];
            break;
        case 'emptyString':
            defaultValue = '';
            break;
        case 'emptyArray':
            defaultValue = [];
            break;
        case 'boolean':
            defaultValue = defaultValue === 'true';
            break;
    }
    return defaultValue;
}
function afterInitDirAndFile(conf) {
    let { path: curPath, file: curFilePath, success: successCallBack, error: errorCallBack, data } = conf;

    let fileExistPath = path.resolve(__dirname, curPath, curFilePath);
    Object.assign(conf, { file_exist_path: fileExistPath });

    // ## 检测文件是否存在
    fs.access(fileExistPath, fs.constants.F_OK, err => {
        if (!err) {
            successCallBack(conf);
        } else {
            console.log(`${fileExistPath}不存在。已创建目录、文件。`);

            // ### 文件不存在，可能是 目录不存在，也可能是 文件不存在
            let folderPath = path.resolve(__dirname, curPath);
            fs.mkdirSync(folderPath, { recursive: true });
            // 默认 flag = 'w'，文件不存在会创建它
            fs.writeFileSync(path.resolve(__dirname, fileExistPath), JSON.stringify({}, undefined, 2), 'utf8', err => {
                if (err) {
                    console.log(`${curPath} ${err}`);
                }
            });

            errorCallBack(conf);
        }
    });
}
function writeToProjectSnippets(conf = { path: '', file: '', data: {} }) {
    afterInitDirAndFile({
        ...conf,
        success(conf) {
            fs.writeFile(conf.file_exist_path, JSON.stringify(conf.data, undefined, 2), 'utf8', err => {
                if (err) {
                    console.log('writeToProjectSnippets', `${conf.path} ${err}`);
                }
            });
        },
        error(conf) {
            writeToProjectSnippets(conf);
        }
    });
}
function getWrapperNameFromDesc(desc) {
    let wrapperNames = ['___attributes___', '___validity___'];
    for (let i = 0; i < wrapperNames.length; i++) {
        let wrapperName = wrapperNames[i];
        if (desc.includes(wrapperName)) {
            return wrapperName;
        }
    }
    return '';
}
/**
 * 为匹配属性添加备注；返回一个操作后的字符串数组
 * @param {object} conf {body: [], propsToDescMap: [] }
 * @returns {array} bodyArr
 */
function addDescToMatchProp(conf = { body: [], propsToDescMap: {} }) {
    let { body, propsToDescMap } = conf;

    let bodyArr = JSON.stringify(body, undefined, 2).split('\n') || [];
    let bodyArrLength = bodyArr.length;
    for (let i = 0; i < bodyArrLength; i++) {
        let str = bodyArr[i];

        // {id, attributes, ..}
        if (propsToDescMap) {
            let propsNames = Object.keys(propsToDescMap);

            let reg = /"([a-zA-Z]+)"/;
            let matchPropName = propsNames.find(curName => {
                // NOTE: validity 包含 id，造成干扰，属性名需要完全匹配
                let result = str.match(reg);
                if (result && result[1] === curName) return true;
            });
            if (matchPropName) {
                let desc = propsToDescMap[matchPropName];
                desc = desc.replace(/\n/g, '; ');
                bodyArr[i] = `${str} // ${desc}`;
            }
        }
    }

    return bodyArr;
}
/**
 * 从 prefix/desc 获取 snippet 基础结构
 * @param {object} conf
 * @returns {object} result
 */
function getSnippetConstructor(conf = { prefix: '', desc: '' }) {
    let { prefix, desc } = conf;
    return {
        [desc]: {
            scope: ['javascript', 'vue'],
            prefix,
            description: desc,
            body: []
        }
    };
}

let componentPrefixes = [];
componentInfoList
    .filter(curItem => !childrenComponentNames.includes(curItem.displayName.toLowerCase()))
    .forEach(currentComponentInfo => {
        let { displayName, props, events, methods, slots } = currentComponentInfo;

        let componentName = displayName.toLowerCase();
        let prefix = `cls-${componentName}`;
        let desc = `@cls ${prefix}`;
        let snippetConstructor = getSnippetConstructor({ prefix, desc });

        let needExpand = [];
        let snippetConstructorBody = {
            component: componentName,
            id: '$1',
            name: '$1',
            label: '',
            value: undefined,
            attributes: {},
            validity: {},
            decoration: []
        };
        if (props) {
            Object.keys(props).forEach(propsKey => {
                let { description, tags, defaultValue } = props[propsKey];

                // ## 检测到 tagsProperty 中包含 'ignore'，退出
                let { property: tagsProperty, ignore: tagsIgnore } = tags;
                if (tagsIgnore && tagsIgnore.some(curItem => curItem.title === 'ignore')) return;

                // ## 构造属性默认值
                let curDefaultValue = '';
                if (defaultValue) {
                    ({ value: curDefaultValue } = defaultValue);
                }
                curDefaultValue = parseDefaultValue(curDefaultValue);

                // ## 从备注中获取 该属性是哪部分包裹属性（attributes/validity）
                let wrapperName = getWrapperNameFromDesc(description).replace(/___/g, '');
                // ## 包裹属性可能会被写在 tag 中
                if (tagsProperty || wrapperName) {
                    let tagName = '';
                    // ### tags 属性中包含 name 的部分，这个 name 是包裹属性名
                    if (tagsProperty) {
                        let wrapperNameFindResult = tagsProperty.find(curItem => curItem.name);
                        if (wrapperNameFindResult) {
                            let { name: wrapperName } = wrapperNameFindResult;
                            tagName = wrapperName;
                        }
                    }

                    wrapperName = tagName || wrapperName;
                    if (propsKey === 'wraperClass') propsKey = 'class';
                    snippetConstructorBody[wrapperName][propsKey] = curDefaultValue;
                }

                // ## 存储备注
                if (!componentProsDesMap[componentName]) componentProsDesMap[componentName] = {};
                // { input: {id: ''} }
                componentProsDesMap[componentName][propsKey] = description;

                if (supportExpandProps.includes(wrapperName)) needExpand.push(wrapperName);
            });
        }

        // ## 为匹配属性添加备注 - Full 版本
        snippetConstructor[desc].body = addDescToMatchProp({
            body: snippetConstructorBody,
            propsToDescMap: componentProsDesMap[componentName]
        });
        Object.assign(snippetCollection, snippetConstructor);

        // ## 构造/存储额外拓展的 snippet（目前仅支持 attributes/validity）
        needExpand.forEach(curWrapperName => {
            let newPrefix = `${prefix}-${curWrapperName}`;
            let newDesc = `@cls ${newPrefix}`;
            let newSnippetConstructor = getSnippetConstructor({
                prefix: newPrefix,
                desc: newDesc
            });

            newSnippetConstructor[newDesc].body = addDescToMatchProp({
                body: snippetConstructorBody[curWrapperName],
                propsToDescMap: componentProsDesMap[componentName]
            });
            Object.assign(snippetCollection, newSnippetConstructor);
        });

        // ### 打印列表的存储
        componentPrefixes.push(prefix);
    });

writeToProjectSnippets(pathConf);
console.log('成功写入到项目snippets');

const PLACEHOLDER_MAX = 2;
console.log('以下是调用指令列表：');
console.log(
    componentPrefixes
        .map((curPrefix, index) => {
            let num = index + 1 + '';
            let numLength = num.length;

            return `${num}${new Array(PLACEHOLDER_MAX - numLength).fill(' ').join('')}: ${curPrefix}`;
        })
        .join('\n')
);
