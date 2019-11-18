<template>
    <transition name="fade">
        <div
            v-if="closeabled"
            id="js_tips"
            class="page_tips"
            :style="{top: styleTop + 'px'}"
            v-show="visible"
        >
            <div :class="['page_tips_wrap', status_class]">
                <span class="inner">{{text}}</span>
                <i v-if="closeabled" class="err-btn" @click="closeHandler">×</i>
            </div>
        </div>
        <div
            v-else
            id="js_tips"
            class="page_tips"
            v-show="visible"
            :style="{top: styleTop + 'px'}"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
        >
            <div :class="['page_tips_wrap', status_class]">
                <span class="inner">{{text}}</span>
            </div>
        </div>
    </transition>
</template>

<style type="text/css" scoped>
.page_tips {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 10000;
    height: 0;
}
.page_tips_wrap {
    min-width: 300px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
}
.inner {
    display: inline-block;
    color: #ffffff;
}
.error {
    background: #ee8756;
}
.err-btn {
    float: right;
    width: 20px;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-style: initial;
    color: #000;
}
.success {
    background: #4a90e2;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>

<script>
export default {
    name: "tips-tpl",
    data: () => ({
        visible: false,
        styleTop: 0,
        text: "",
        status: "error",
        closeabled: false,
        duration: 2000 // 2s
    }),
    computed: {
        status_class() {
            return this.status === "error" ? "error" : "success";
        }
    },
    watch: {
        visible(newVal) {
            if (newVal === true) {
                this.startTimer();
            }
        },
        text() {
            this.startTimer();
        }
    },
    methods: {
        clearTimer: function () {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        },
        startTimer: function () {
            if (this.closeabled) {
                this.visible = true;
                return;
            }
            this.clearTimer();
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    this.visible = false;
                    this.clearTimer();
                }, this.duration);
            }
        },
        closeHandler: function () {
            this.visible = false;
        }
    }
};
</script>
