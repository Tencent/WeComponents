import Vue from 'vue';
import ModalTemplate from './dialog.vue';
let Constructor = Vue.extend(ModalTemplate);

class AsyncModal {
    constructor(options) {
        this.instance = new Constructor(options);
        this.vm = this.instance.$mount();
        this.vm.callback = null;

        document.body.appendChild(this.vm.$el);

        this.vm.$on('modal-show', val => {
            if (!val && this._keyUpHandler) {
                removeEventListener('keyup', this._keyUpHandler);
            }
        });
    }

    /**
     * 最原始的调用方式，所有字段都开放配置。实际中使用 alert/confirm/prompt 可以满足需求
     * @param {*} options
     */
    dialog(options) {
        !options && (options = {});

        let container = this.vm.$el.querySelector('.dialog__container');
        container && (container.innerHTML = '');

        Object.assign(this.vm, options);
        this.vm.show = true;
        this._keyUpHandler = this.keyUpHandler.bind(this);
        //绑定全局键盘事件
        addEventListener('keyup', this._keyUpHandler);
    }

    keyUpHandler(e) {
        let keyCode = e.keyCode;
        if (keyCode === 13) {
            // enter
            this.vm.submitEvent(true);
        } else if (keyCode === 27) {
            // esc
            this.vm.submitEvent(false);
        }
    }

    /**
     * 对应 window.alert
     * @param {*} text 信息文本
     * @param {*} callback 关闭后的回调
     * @param {*} options 通用配置，如按钮的定义 {OK: {label:'提交', class:'my-class', value:()=>{}}, NO: {class:''}}
     */
    alert(text, callback, options) {
        let defaults;

        !options && (options = {});
        options.type = 'alert';

        defaults = {
            title: '提示',
            buttons: [
                {
                    label: (options.OK || {}).label || '确定',
                    name: 'OK',
                    class: 'button button_primary',
                    value: () => {
                        this.vm.submitEvent(true, options);
                    }
                }
            ],
            text,
            callback
        };

        this.dialog(Object.assign({}, defaults, options));
    }

    /**
     * 对应 window.confirm
     * @param {*} text 信息文本
     * @param {*} callback 点击按钮的回调，确定：true，取消：false
     * @param {*} options 通用配置，如按钮的定义 {OK: {label:'提交', class:'my-class', value:()=>{}}, NO: {class:''}}
     */
    confirm(text, callback, options) {
        let defaults;

        !options && (options = {});
        options.type = 'confirm';

        defaults = {
            title: '请确认',
            buttons: [
                {
                    label: (options.NO || {}).label || '取消',
                    name: 'NO',
                    class: 'button button_default',
                    value: () => {
                        this.vm.submitEvent(false, options);
                    }
                },
                {
                    label: (options.OK || {}).label || '确定',
                    name: 'OK',
                    class: 'button button_primary',
                    value: () => {
                        this.vm.submitEvent(true, options);
                    }
                }
            ],
            text,
            callback
        };

        this.dialog(Object.assign({}, defaults, options));
    }

    /**
     * 对应 window.prompt，如弹出一个表单。示例代码：
     *  let Constructor = Vue.extend(vform);
        let dialogForm = new Constructor({
            propsData: {
                fields: [field1Config, field2Config, fieldNConfig]
            }
        });
        let vmDialog = dialogForm.$mount();

        dialog.prompt(vmDialog.$el, (result) => {
            if (result) {
                C(vmDialog.getData())
                return false;   // 阻止关闭弹框
            }
        });
     * @param {*} el 元素节点，如表单/表格的dom节点
     * @param {*} callback 按钮点击的返回值，默认同 confirm；当callback的返回值为false时，会阻止关闭当前dialog
     * @param {*} options 通用配置，如按钮的定义 {OK: {label:'提交', class:'my-class', value:()=>{}}, NO: {class:''}}
     */
    prompt(el, callback, options) {
        let defaults;

        !options && (options = {});
        options.type = 'prompt';

        defaults = {
            buttons: [
                {
                    label: (options.NO || {}).label || '取消',
                    name: 'NO',
                    class: 'button button_default',
                    value: () => {
                        this.vm.submitEvent(false, options);
                    }
                },
                {
                    label: (options.OK || {}).label || '确定',
                    name: 'OK',
                    class: 'button button_primary',
                    value: () => {
                        this.vm.submitEvent(true, options);
                    }
                }
            ],
            callback
        };

        this.dialog(Object.assign({}, defaults, options));

        let container = this.vm.$el.querySelector('.dialog__container');
        container && container.appendChild(el);
    }

    // @deprecated 切换到dialog.alert
    show(text, callback) {
        this.alert(text, callback);
    }
}

export default AsyncModal;
