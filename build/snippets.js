const fs = require("fs");
const componentInfoList = require("../docs/components.js");

const matchComponentNames = [
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
const componentProsDesMap = {};

let snippetCollection = {};

let matchNum = /^\d+$/;
let matchLetter = /^'|"([a-zA-Z]+|[\u4e00-\u9fa5]+)'|"$/;
let matchFunc = /^\(\) => \[\]$/;
let matchEmptyStr = /^(''|\"\")$/;
let matchEmptyArr = /^\[\]$/;
let matchBool = /^(true|false)$/;

function parseDefaultValue(defaultValue) {
    let result = false;
    let matchFuncArr = [
        value => matchNum.test(value) && "number",
        value => matchLetter.test(value) && "string",
        value => matchFunc.test(value) && "array",
        value => matchEmptyStr.test(value) && "emptyString",
        value => matchEmptyArr.test(value) && "emptyArray",
        value => matchBool.test(value) && "boolean"
    ];
    while (matchFuncArr.length !== 0 && !result) {
        let func = matchFuncArr.pop();
        if (func) {
            result = func(defaultValue) || false;
        }
    }

    if (!result) return defaultValue;

    switch (result) {
        case "number":
            defaultValue = Number.parseInt(defaultValue);
            break;
        case "string":
            defaultValue = defaultValue.replace(
                /\'([a-zA-Z]+|[\u4e00-\u9fa5]+)\'/,
                "$1"
            );
            break;
        case "array":
            defaultValue = [];
            break;
        case "emptyString":
            defaultValue = "";
            break;
        case "emptyArray":
            defaultValue = [];
            break;
        case "boolean":
            defaultValue = defaultValue === "true";
            break;
    }
    return defaultValue;
}

componentInfoList.forEach(currentComponentInfo => {
    let { displayName, props, events, methods, slots } = currentComponentInfo;
    if (!matchComponentNames.includes(displayName.toLowerCase())) return;

    let componentName = displayName.toLowerCase();
    let prefix = `test-v2-${componentName}-full`;
    let desc = `@cls ${prefix}`;
    let snippetConstructor = {
        [desc]: {
            scope: "javascript",
            prefix,
            description: desc,
            body: []
        }
    };
    let snippetConstructorBody = {
        component: componentName,
        id: "$1",
        name: "$1",
        label: "",
        value: undefined,
        attributes: {},
        validity: {},
        decoration: []
    };
    Object.keys(props).forEach(propsKey => {
        let { description, tags, defaultValue, name } = props[propsKey];

        // ## 检测到 tagsProperty 中包含 'ignore'，退出
        let { property: tagsProperty, ignore: tagsIgnore } = tags;
        if (
            tagsIgnore &&
            tagsIgnore.some(curItem => curItem.title === "ignore")
        )
            return;

        if (!componentProsDesMap[componentName])
            componentProsDesMap[componentName] = {};
        componentProsDesMap[componentName][name] = description;

        let curDefaultValue = "";
        if (defaultValue) {
            ({ value: curDefaultValue } = defaultValue);
        }

        curDefaultValue = parseDefaultValue(curDefaultValue);
        if (tagsProperty) {
            let wrapperNameFindResult = tagsProperty.find(
                curItem => curItem.name
            );
            if (wrapperNameFindResult) {
                let { name: wrapperName } = wrapperNameFindResult;

                if (name === "wraperClass") name = "class";
                snippetConstructorBody[wrapperName][name] = curDefaultValue;
            }
        } else {
            curDefaultValue = parseDefaultValue(curDefaultValue);

            // ### 配置默认填写区
            if (name === "id" || name === "name") curDefaultValue = "$1";

            snippetConstructorBody[name] = curDefaultValue;
        }
    });

    let snippetBodyArr = JSON.stringify(
        snippetConstructorBody,
        undefined,
        2
    ).split("\n");
    let snippetBodyArrLength = snippetBodyArr.length;
    for (let i = 0; i < snippetBodyArrLength; i++) {
        let str = snippetBodyArr[i];
        let propsNames = Object.keys(componentProsDesMap[componentName]);

        let selectProsName = propsNames.find(curName => {
            let testReg = new RegExp(`${curName}(?![a-zA-Z])`);
            return testReg.test(str);
        });
        if (selectProsName) {
            let desc = componentProsDesMap[componentName][selectProsName];
            desc = desc.replace(/\n/g, "; ");
            snippetBodyArr[i] = `${str} // ${desc}`;
        }
    }

    snippetConstructor[desc].body = snippetBodyArr;
    Object.assign(snippetCollection, snippetConstructor);
});

fs.writeFileSync(
    "./.vscode/snippets.code-snippets",
    JSON.stringify(snippetCollection, undefined, 4)
);
