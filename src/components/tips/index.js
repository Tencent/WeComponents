import Vue from "vue";
import TipsTemplate from "./tips.vue";

let Constructor = Vue.extend(TipsTemplate);

class Tips {
    constructor(options) {
        !options && (options = {});

        this.instance = new Constructor(options);
        this.vm = this.instance.$mount();
        options.styleTop && (this.vm.styleTop = options.styleTop);
        document.body.appendChild(this.vm.$el);
    }

    show(text, closeabled, duration) {
        this.vm.text = text;
        this.vm.visible = true;
        this.vm.closeabled = closeabled;
        if (duration) {
            this.vm.duration = duration;
        }
    }

    /*
    * params : text@String
    * params : closeabled@Boolean|Number
    * Usage  : this.suc("successful with close btn", true);
               this.suc("successful with auto close after 300ms", 300);
    */
    success(text, closeabled) {
        // 更正参数
        var duration;
        if (/^\d+$/.test(closeabled)) {
            duration = closeabled;
            closeabled = false;
        }
        this.vm.status = "success";
        this.show(text, closeabled, duration);
    }
    /*
    * params : text@String
    * params : closeabled@Boolean|Number
    * Usage  : this.err("successful with close btn", true);
               this.err("successful with auto close after 300ms", 300);
    */
    error(text, closeabled) {
        var duration;
        if (/^\d+$/.test(closeabled)) {
            duration = closeabled;
            closeabled = false;
        }
        this.vm.status = "error";
        this.show(text, closeabled, duration);
    }

    // @todo
    // loading(text) {}
}

export default Tips;
