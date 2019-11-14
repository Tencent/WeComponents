<script>
import hljs from 'highlight.js';  // 代码高亮
import WeComponents from '../../../../src/';  // 引入组件库

let pageFields = [
    {
        value: 'Dialog',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    {
        value: 'Dialog常用于强交互场景，以弹窗的形式供用户进行消息的确认与进一步操作'
    },
    {
        value: '提示用户',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'button',
        label: '点击弹窗',
        attributes: {
            clickEventName: 'alert'
        }
    },
    {
        value: `<pre><code>
    {
      component: "button",
      label: '点击弹窗',
      attributes: {
        clickEventName: 'alert'
      }
    },
    // 在methods.eventHanlder中监听button指定的事件
    eventHandler(event) {
      switch (event.type) {
        case 'alert':
          dialog.alert('dialog.alert通常用于需要将消息明确告知用户的场景')
          break;
      }
    }
                                </code></pre>`
    },
    {
        value: '确认操作',
        attributes: {
            size: 'medium',
            bold: true
        }
    },
    {
        component: 'button',
        label: '点击弹窗',
        attributes: {
            clickEventName: 'confirm'
        }
    },
    {
        value: `<pre><code>
    {
      component: "button",
      label: '点击弹窗',
      attributes: {
        clickEventName: 'confirm'
      }
    },
    // 在methods.eventHanlder中监听button指定的事件
    eventHandler(event) {
      switch (event.type) {
        case 'confirm':
          dialog.confirm('是否保存当前修改', confirm => {
            if(confirm){
              tips.success('已保存当前修改')
            } else {
              tips.error('未保存当前修改')
            }
          });
          break;
      }
    }
                                </code></pre>`
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
    },

    methods: {
        eventHandler(event) {
            switch (event.type) {
                case 'alert':
                    dialog.alert('dialog.alert通常用于需要将消息明确告知用户的场景');
                    break;
                case 'confirm':
                    dialog.confirm('是否保存当前修改', confirm => {
                        if (confirm) {
                            tips.success('已保存当前修改');
                        } else {
                            tips.error('未保存当前修改');
                        }
                    });
                    break;
            }
        }
    }
};
</script>
<style>
</style>
