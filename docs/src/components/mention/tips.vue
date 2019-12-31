<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库

let pageFields = [
    {
        value: 'Tips',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Tips常用于对应于dialog的弱交互场景，以页面顶部消息泡的形式展示提示信息，并在一定时间后自动隐藏'
    },
    {
        value: '正反馈提示',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'button',
        label: '点击提示',
        attributes: {
            clickEventName: 'mentionSuccess'
        }
    },
    {
        component: 'html',
        value: `<pre><code>
    {
      component: "button",
      label: '点击提示',
      attributes: {
        clickEventName: "mentionSuccess"
      }
    },
    // 在methods接收button指定的事件
    methods() {
        mentionSuccess(){
            this.page.tips.success('tips.success通常用于告知用户操作成功')
        }
    }
                                </code></pre>`
    },
    {
        value: '负反馈提示',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'button',
        label: '点击提示',
        attributes: {
            clickEventName: 'mentionError'
        }
    },
    {
        component: 'html',
        value: `<pre><code>
    {
      component: "button",
      label: "点击提示",
      attributes: {
        clickEventName: "mentionError"
      }
    },
    // 在methods中接收button指定的事件
    methods() {
        mentionError(){
            this.page.tips.error("tips.error通常用于告知用户操作失败或信息获取失败");
        }
    }
                                </code></pre>`
    }
];

export default {
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
    },

    methods: {
        mentionSuccess() {
            this.page.tips.success('tips.success 通常用于告知用户操作成功');
        },
        mentionError() {
            this.page.tips.error('tips.error 通常用于告知用户操作失败或信息获取失败');
        }
    }
};
</script>
<style>
</style>
