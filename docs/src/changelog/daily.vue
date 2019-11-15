<script>
import WeComponents from '../../../src';

let pageFields = [
    {
        component: 'container',
        label: '组件库重要特性更新日志',
        id: 'updateTextContainer',
        attributes: {
            layout: 'column'
        },
        items: []
    }
];

import changelogList from './changlog.js';

export default {
    name: 'update',

    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields)
        };
    },

    mounted() {
        changelogList.forEach(item => {
            const { date, version, messages } = item;
            let dateConfig = {
                value: `${version}（${date}）`,
                attributes: {
                    size: 'medium',
                    bold: true
                }
            };
            let messagesConfig = [];
            if (Array.isArray(messages) && messages.length > 0) {
                messages.forEach((message, index) => {
                    let messageConfig = {
                        value: `${index + 1}. ${message}`
                    };
                    messagesConfig.push(messageConfig);
                });
            }
            this.page.appendItem('updateTextContainer', dateConfig);
            messagesConfig.forEach(messageConfig => {
                this.page.appendItem('updateTextContainer', messageConfig);
            });
        });
    }
};
</script>
<style>
.updateTextContainer_container .wg-group-wraper {
    padding-bottom: 0;
}
</style>
