<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库

/* eslint-disable */
let pageFields = [
    {
        value: '组件库API',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: '组件库API是由组件库提供给用户的，用于动态获取和改变页面JSON配置的接口'
    },
    {
        component: 'table',
        label: '基础API',
        items: [
            {
                label: '函数名称',
                name: 'name',
                attributes: {
                    width: 200
                }
            },
            {
                label: '功能',
                name: 'function'
            },
            {
                label: '参数',
                name: 'param'
            }
        ],
        value: [
            {
                name: 'getAttribute',
                function: '获取指定属性值',
                param:
                    'id(String): 组件id; attr(String): 属性名称，支持.符号，如label,attributes.disabled,validity.format'
            },
            {
                name: 'setAttribute',
                function: '设置指定属性值，新值会完全替换旧值',
                param:
                    'id(String): 组件id; attr(String): 属性名称，支持.符号，如label,attributes.disabled,validity.format'
            },
            {
                name: 'mergeAttribute',
                function:
                    '合并指定属性值，若属性为对象，则执行Object.assign(oldVal, newVal)；若属性为数组，则执行Array.prototype.concat；否则，新值会完全替换旧值',
                param:
                    'id(String): 组件id; attr(String): 属性名称，支持.符号，如label,attributes.disabled,validity.format'
            },
            {
                name: 'setAttributes',
                function: '批量设置指定属性值，对每一条属性执行setAttribute',
                param: 'id(String): 组件id; attrs(Object): 组件属性配置对象'
            },
            {
                name: 'mergeAttributes',
                function: '批量合并指定属性值，对每一条属性执行mergeAttribute',
                param: 'id(String): 组件id; attrs(Object): 组件属性配置对象'
            },
            {
                name: 'getItem',
                function: '获取指定的组件配置对象',
                param: 'id(String): 组件id'
            },
            {
                name: 'getParent',
                function: '获取指定组件的父级组件的配置对象',
                param: 'id(String): 组件id'
            },
            {
                name: 'appendItem',
                function: '在指定容器组件内部末尾新增新的组件',
                param: 'id(String): 容器组件id; attrs(Object): 组件属性配置对象'
            },
            {
                name: 'insertItemBefore',
                function: '在指定组件前插入新的组件',
                param: 'id(String): 指定组件的id; attrs(Object): 组件属性配置对象'
            },
            {
                name: 'removeItem',
                function: '删除指定组件',
                param: 'id(String): 组件id'
            }
        ]
    },
    {
        component: 'table',
        label: '便捷API：快速设置常用属性',
        items: [
            {
                label: '函数名称',
                name: 'name',
                attributes: {
                    width: 200
                }
            },
            {
                label: '功能',
                name: 'function'
            },
            {
                label: '参数',
                name: 'param'
            }
        ],
        value: [
            {
                name: 'getValue',
                function: '获取组件value属性的值',
                param: 'id(String): 组件id'
            },
            {
                name: 'setValue',
                function: '设置组件value属性的值',
                param: 'id(String): 组件id; value(Any): 组件value属性的新值'
            },
            {
                name: 'show',
                function: '显示指定组件',
                param: 'id(String): 组件id'
            },
            {
                name: 'hide',
                function: '隐藏指定组件',
                param: 'id(String): 组件id'
            }
        ]
    }
];
/* eslint-enable */

export default {
    name: 'v2Test',

    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields)
        };
    },

    mounted() {
        let codes = document.querySelectorAll('pre code');
        // 高亮代码
        codes.forEach(code => hljs.highlightBlock(code));
    }
};
</script>
<style>
</style>
