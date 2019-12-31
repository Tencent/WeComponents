<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库
import container from '../../../../examples/container';
import parserMixin from '../../../mixins/parser';

let pageFields = [
    {
        component: 'html',
        value: 'WeComponents',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        component: 'html',
        value: `<a href="https://github.com/Tencent/WeComponents">WeComponents</a>
                基于通用组件语言规范 (CLS) 实现的 Vue.js 声明式组件库`
    }
];

export default {
    name: 'v2Test',
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
        this.parse('Container');
    }
};
</script>
