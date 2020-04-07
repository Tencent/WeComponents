<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库

let pageFields = [
    {
        value: '自定义组件',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: '在基础组件的功能不能满足复杂业务场景的情况下，可以开发自定义组件并进行注册，即可通过JSON配置的方式使用自己开发的组件'
    },
    {
        value: '0. 开发自定义组件',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        value: '自定义组件的开发，基本与普通Vue组件完全相同，但因为需要接入组件库通用方法与CLS接口，有以下3点不同：'
    },
    {
        value: '1. 自定义组件props需为组件API的子集，自定义参数字段可以放在extra对象中'
    },
    {
        value: '2. 通过inject注入组件所在页面对应的Vm实例，名称为_currentPageInstance'
    },
    {
        value: '3. 在需要监听组件事件并抛出到时，可以在组件中通过_currentPageInstance.collectEvent抛出事件，可在引用页面的methods中捕获事件并执行对应逻辑'
    },
    {
        value: '1. 引入自定义组件',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        value: '通过WeComponents.register(组件名称, 组件对象)进行注册，即可想调用基础组件一样调用自定义组件'
    },
    {
        value: '2. 完整自定义组件实例可参考docs/src/examples/block/topicManage',
        attributes: {
            size: 'medium',
            bold: true
        }
    }
];


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
