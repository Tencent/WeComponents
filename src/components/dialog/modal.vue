<template>
    <transition :name="transition">
        <div class="modal-mask" v-show="show" transition="modal">
            <div class="modal-wrapper modal-move" :id="uniqueId">
                <div class="modal-container" v-bind:style="{width: (width ? width : 450) + 'px'}">
                    <div class="modal-head">
                        <slot name="header"></slot>
                        <a
                            v-if="showCloseIcon"
                            href="javascript:;"
                            class="dialog__close"
                            @click.stop="closeModal"
                        >关闭</a>
                    </div>
                    <div
                        class="modal-body"
                        v-bind:style="{height: (height ? height + 'px' : 'auto'),
                        'overflow-y': (overflow ? 'auto' : 'visible') }"
                    >
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="css" scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.dialog__close {
    position: absolute;
    top: 50%;
    margin-top: -8px;
    right: 20px;
    width: 16px;
    height: 16px;
    line-height: 999em;
    overflow: hidden;
    background-image: url(https://wximg.gtimg.com/tmt/mp-game-circle/dist/sprite/style-index.png);
    background-position: -80px -48px;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 450px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft YaHei', '\9ED1\4F53', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #222;
}

.modal-head {
    position: relative;
    padding: 0 20px;
    line-height: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    background-color: #f4f5f9;
    border-bottom: 1px solid #e6e7ea;
}

.modal-body {
    padding: 45px;
    font-size: 14px;
    overflow-y: auto;
}

.modal-footer {
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px 0 17px;
    text-align: center;
    background: #f4f5f9;
}
.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>

<script type="text/javascript">
module.exports = {
    props: {
        show: {
            type: Boolean,
            required: false,
            default: false,
            twoWay: true
        },
        width: {
            type: Number,
            required: false
        },
        height: {
            type: Number,
            required: false,
            default: 0
        },
        move: {
            type: Boolean,
            required: false,
            default: true
        },
        transition: {
            type: String,
            required: false,
            default: "fade"
        },
        overflow: {
            type: Boolean,
            required: false,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    data: function () {
        return {
            uniqueId: "move_" + parseInt(Math.random() * 10000000)
        };
    },

    mounted: function () {
        var modalDom = document.getElementById(this.uniqueId);
        var tmpX = 0;
        var tmpY = 0;
        var lastX = 0;
        var lastY = 0;

        if (this.move && modalDom) {
            modalDom.addEventListener("mousedown", mouseDownHandler);
        }

        function mouseDownHandler(event) {
            modalDom.style.transform =
                "translate(" + tmpX + "px, " + tmpY + "px)";
            document.body.addEventListener("mousemove", mouseMoveHandler);
            document.body.addEventListener("mouseup", mouseUpHandler);
        }

        function mouseMoveHandler(event) {
            tmpX += event.movementX;
            tmpY += event.movementY;
            modalDom.style.transform =
                "translate(" + tmpX + "px, " + tmpY + "px)";
        }

        function mouseUpHandler(event) {
            document.body.removeEventListener("mousemove", mouseMoveHandler);
            document.body.removeEventListener("mouseup", mouseUpHandler);
        }
    },

    methods: {
        closeModal: function () {
            if (typeof this.$broadcast == "undefined") {
                this.$emit("closeModal", true);
            } else {
                // this.show = false;
            }
        }
    }
};
</script>
