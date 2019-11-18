<template>
    <div>
        <v-modal
            :show="show"
            :width="width"
            :height="height"
            :move="move"
            :showCloseIcon="showCloseIcon"
            v-on:closeModal="submitEvent(false)"
        >
            <div slot="header">{{ title }}</div>
            <div slot="body">
                <div v-show="type!='prompt'" class="modal-body__content" v-html="text"></div>
                <div v-show="type=='prompt'" class="dialog__container"></div>
            </div>
            <div slot="footer">
                <a
                    v-for="button in buttons"
                    :class="button.class"
                    :key="button.name"
                    @click="button.value(vm)"
                    style="margin-right:15px"
                >{{ button.label }}</a>
            </div>
        </v-modal>
    </div>
</template>
<script type="text/javascript">
import vModal from "./modal.vue";

export default {
    name: "async_modal",

    data() {
        return {
            show: false,
            width: 0,
            height: 0,
            move: true,
            title: "",
            text: "",
            callback: null,
            showCloseIcon: true,
            type: null, // 弹框类型
            buttons: [
                {
                    label: "确定",
                    name: "OK",
                    class: "button button_primary",
                    value: () => {
                        this.submitEvent(true);
                    }
                }
            ],
            vm: this
        };
    },
    watch: {
        show(val) {
            this.$emit("modal-show", val);
        }
    },
    methods: {
        submitEvent(result, val) {
            let shouldPreventClose = false;

            // 如果返回false，则不会关闭当前窗口
            if (this.callback) {
                this.callback(result, val) === false &&
                    (shouldPreventClose = true);
            }

            this.show = shouldPreventClose;
        }
    },
    components: {
        vModal
    }
};
</script>

<style lang="css" scoped>
.modal-body__content {
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
}
</style>

