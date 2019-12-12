<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import upload from '../../../../examples/upload';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        value: "Upload",
        attributes: {
            size: "large",
            bold: true
        }
    },
    {
        value:
            "Upload组件用于文件上传/编辑场景，支持所有文件类型，并支持图片、视频类文件的预览"
    },
    {
        id: "propsTable",
        component: "table",
        label: "Props",
        items: [
            {
                label: "属性名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "属性描述",
                name: "description"
            },
            {
                label: "类型",
                name: "type"
            },
            {
                label: "默认值",
                name: "default"
            }
        ]
    },
    {
        id: "eventsTable",
        component: "table",
        label: "Events",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "事件名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "事件描述",
                name: "description"
            },
            {
                label: "参数",
                name: "params"
            }
        ]
    },
    {
        id: "methodsTable",
        component: "table",
        label: "Methods",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "方法名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "方法描述",
                name: "description"
            },
            {
                label: "参数",
                name: "params"
            }
        ]
    },
    {
        id: "slotsTable",
        component: "table",
        label: "Slots",
        attributes: {
            hide: true
        },
        items: [
            {
                label: "插槽名",
                name: "name",
                attributes: { width: 200 }
            },
            {
                label: "插槽描述",
                name: "description"
            }
        ]
    },
    {
        value: "基础用法",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_BASIC,
    {
        value: `<pre><code>
            {
                component: 'upload'
            }
                                        </code></pre>`
    },
    {
        value: "指定value类型为StringArray",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_STRING_ARRAY_VALUE,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    format: "StringArray"
                },
                value: [
                    iconUrl,
                    iconUrl
                ]
            }
                                        </code></pre>`
    },
    {
        value: "指定value类型为StringArrayCommas",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_STRING_ARRAY_COMMAS_VALUE,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    format: "StringArrayCommas"
                },
                value:
                    iconUrl
            }
                                        </code></pre>`
    },
    {
        value: "自定义操作按钮",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_CUSTOM_OPTION,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    // 对于upload组件，validity.format属性非常重要
                    // 仅当format为string_array_commas时，value应为逗号分隔的字符串
                    format: "StringArrayCommas"
                },
                attributes: {
                    editable: false,
                    deletable: false,
                    options: [
                        {
                            label: "自定义1",
                            type: "custom1"
                        },
                        {
                            label: "自定义2",
                            type: "custom2"
                        }
                    ]
                },
                value:
                    iconUrl
            }
                                        </code></pre>`
    },
    {
        value: "多图上传",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_MULTIPLE,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    format: "StringArray"
                },
                attributes: {
                    multiple: true
                },
            }
                                        </code></pre>`
    },
    {
        value: "自定义文件上传及组件赋值逻辑",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_CUSTOM_UPLOAD,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    format: "StringArray"
                },
                events: {
                    upload(data) {
                        return new Promise((resolve, reject) => {
                            resolve("test");
                        });
                    }
                }
            }
                                        </code></pre>`
    },
    {
        value: "指定上传文件类型",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_FILETYPE,
    {
        value: `<pre><code>
            {
                component: 'upload',
                attributes: {
                    fileType: "video"
                }
            }
                                        </code></pre>`
    },
    {
        value: "限制文件宽高、文件大小及文件格式",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_BASIC_VALIDITY,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    width: 200,
                    height: 200,
                    size: 200,
                    accept: ["jpg", "png"]
                }
            }
                                        </code></pre>`
    },
    {
        value: "限制文件数量",
        attributes: {
            size: "medium",
            bold: true
        }
    },
    upload.UPLOAD_WITH_FILE_COUNT_VALIDITY,
    {
        value: `<pre><code>
            {
                component: 'upload',
                validity: {
                    min: 2,
                    max: 10,
                    format: "StringArray"
                }
            }
                                        </code></pre>`
    }
];

export default {
    name: "v2Test",
    mixins: [parserMixin],

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
        this.parse('Upload');
    },

    methods: {}
};
</script>
<style>
</style>
