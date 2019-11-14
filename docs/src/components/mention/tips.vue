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
        value: `<pre><code>
    {
      component: "button",
      label: '点击提示',
      attributes: {
        clickEventName: "mentionSuccess"
      }
    },
    // 在methods.eventHanlder中监听button指定的事件
    eventHandler(event) {
      switch (event.type) {
        case 'mentionSuccess':
          tips.success('tips.success通常用于告知用户操作成功')
          break;
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
        value: `<pre><code>
    {
      component: "button",
      label: "点击提示",
      attributes: {
        clickEventName: "mentionError"
      }
    },
    // 在methods.eventHanlder中监听button指定的事件
    eventHandler(event) {
      switch (event.type) {
        case "mentionError":
          tips.error("tips.error通常用于告知用户操作失败或信息获取失败");
          break;
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
        eventHandler(event) {
            switch (event.type) {
                case 'mentionSuccess':
                    tips.success('tips.success 通常用于告知用户操作成功');
                    break;
                case 'mentionError':
                    tips.error('tips.error 通常用于告知用户操作失败或信息获取失败');
                    break;
            }
        }
    }
};
</script>
<style>
</style>
