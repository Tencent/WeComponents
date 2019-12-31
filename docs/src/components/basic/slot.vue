<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库

/* eslint-disable */
let pageFields = [
    {
        value: '使用插槽',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value:
            '1、在组件库v2版本中，我们为每个组件增加了上、下、左、右四个方向的插槽，用于支持组件上、下、左、右四个方向的组件组合能力，为使用JSON描述更丰富的页面结构提供支持'
    },
    {
        value:
            '2、可以通过配置decoration字段使用组件插槽，decoration字段为一个对象数组，每一项对应需要组合的组件配置JSON，并通过attributes.placement属性指定插槽位置，每个方位可以设置任意多的组合组件。示例如下'
    },
    {
        value: '插槽使用示例',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: '1. 以input为例，配置一个简单的input组件',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'input',
        label: '简单input',
        attributes: {
            placeholder: '后续会在input右侧组合使用button'
        }
    },
    {
        component: 'html',
        value: `<pre><code>
        {
            component: "input",
            label: '简单input',
            attributes: {
                placeholder: '后续会在input右侧组合使用button'
            }
        },
                                            </code></pre>`
    },
    {
        value: '2. 配置decoration字段，在input右侧增加一个用于按钮',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'input',
        label: '简单input',
        attributes: {
            placeholder: '后续会在input右侧组合使用button'
        },
        decoration: [
            {
                component: 'button',
                label: 'placement属性用于设置组合组件的相对位置，包含top/bottom/right/left四个选项',
                attributes: {
                    placement: 'right',
                    type: 'primary'
                }
            }
        ]
    },
    {
        component: 'html',
        value: `<pre><code>
        {
            component: "input",
            label: "简单input",
            attributes: {
                placeholder: "后续会在input右侧组合使用button"
            },
            decoration: [
                {
                    component: "button",
                    label:
                        "placement属性用于设置组合组件的相对位置，包含top/bottom/right/left四个选项",
                    attributes: {
                        placement: "right",
                        type: "primary"
                    }
                }
            ]
        }
                                                </code></pre>`
    },
    {
        value:
            '3. 配置decoration字段，在input下方增加一个包含另外一个input和button的容器组件。至此，我们为input组件增加了右侧与下方的插槽',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'input',
        label: '简单input',
        attributes: {
            placeholder: '后续会在input右侧组合使用button'
        },
        decoration: [
            {
                component: 'button',
                label: 'placement属性用于设置组合组件的相对位置，包含top/bottom/right/left四个选项',
                attributes: {
                    placement: 'right',
                    type: 'primary'
                }
            },
            {
                component: 'container',
                label: 'input组件的下方插槽',
                attributes: {
                    placement: 'bottom',
                    layout: 'row',
                    flexJustify: 'space-around',
                    width: 500
                },
                items: [
                    {
                        component: 'input'
                    },
                    {
                        component: 'button'
                    }
                ]
            }
        ]
    },
    {
        component: 'html',
        value: `<pre><code>
        {
                component: "input",
                label: "简单input",
                attributes: {
                    placeholder: "后续会在input右侧组合使用button"
                },
                decoration: [
                    {
                        component: "button",
                        label:
                            "placement属性用于设置组合组件的相对位置，包含top/bottom/right/left四个选项",
                        attributes: {
                            placement: "right",
                            type: "primary"
                        }
                    },
                    {
                        component: "container",
                        label: "input组件的下方插槽",
                        attributes: {
                            placement: "bottom",
                            layout: "row",
                            flexJustify: "space-around",
                            width: 500
                        },
                        items: [
                            {
                                component: "input"
                            },
                            {
                                component: "button"
                            }
                        ]
                    }
                ]
            },
            </code></pre>`
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
