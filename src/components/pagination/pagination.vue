<template>
    <div class="wg-pagination">
        <span class="wg-pagination-total" v-if="pagination === 'default'">共{{ total }}条</span>
        <span class="wg-pagination-area">
            <a
                href="javascript:;"
                class="wg-pagination-item wg-pagination-first"
                v-on:click="firstPage"
                v-if="pagination === 'default'"
            >首页</a>
            <a
                href="javascript:;"
                class="wg-pagination-item wg-pagination-area_prev"
                v-on:click="prevPage"
            >
                <i class="wg-pagination-area_prev-arrow"></i>
            </a>
            <span class="wg-pagination-area_num">
                <label>{{ current }}</label>
                <span class="wg-pagination-area_num-gap">/</span>
                <label>{{ pageTotal }}</label>
            </span>
            <a
                href="javascript:;"
                class="wg-pagination-item wg-pagination-area_next"
                v-on:click="nextPage"
            >
                <i class="wg-pagination-area_next-arrow"></i>
            </a>
            <a
                href="javascript:;"
                class="wg-pagination-item wg-pagination-area_last"
                v-on:click="lastPage"
                v-if="pagination === 'default'"
            >尾页</a>
        </span>
        <span class="wg-pagination-goto" v-if="pagination === 'default'">
            <input type="number" min="1" class="wg-pagination-goto_input" v-model="inputValue" />
            <a href="javascript:;" class="wg-pagination-item" v-on:click="gotoPage">跳转</a>
        </span>
    </div>
</template>

<script>
module.exports = {
    props: {
        // 当前页码
        pageIndex: {
            type: Number,
            default: 0
        },

        // 每页条数
        pageSize: {
            type: Number,
            default: 10
        },

        /// 总条数
        total: {
            type: Number,
            default: 10
        },

        // 翻页类型，default
        pagination: {
            type: String
        }
    },

    data: function () {
        return {
            current: 0,
            pageTotal: 1,
            pageNumber: 0,
            inputValue: ''
        };
    },

    watch: {
        pageIndex(newVal) {
            this.current = newVal + 1;
            this.pageTotal = Math.ceil(this.total / this.pageSize);
            this.pageTotal === 0 ? (this.pageTotal = 1) : this.pageTotal;
        },

        total() {
            this.pageTotal = Math.ceil(this.total / this.pageSize);
            this.pageTotal === 0 ? (this.pageTotal = 1) : this.pageTotal;
        },

        pageSize() {
            this.pageTotal = Math.ceil(this.total / this.pageSize);
            this.pageTotal === 0 ? (this.pageTotal = 1) : this.pageTotal;
        }
    },

    created: function () {
        this.pageNumber = +this.pageIndex;
        this.current = this.pageNumber + 1;
        this.pageTotal = Math.ceil(this.total / this.pageSize);
        this.pageTotal === 0 ? (this.pageTotal = 1) : this.pageTotal;
    },

    methods: {
        /**
         * 翻到第一页
         */
        firstPage: function () {
            this.current = 1;
            this.update();
        },

        /**
         * 翻到上一页
         */
        prevPage: function () {
            if (this.current > 1) {
                this.current--;
                this.update();
            }
        },

        /**
         * 翻到下一页
         */
        nextPage: function () {
            if (this.current < this.pageTotal) {
                this.current++;
                this.update();
            }
        },

        /**
         * 翻到最后一页
         */
        lastPage: function () {
            this.current = this.pageTotal;
            this.update();
        },

        /**
         * 跳转到指定页
         */
        gotoPage: function () {
            if (
                !this.inputValue ||
                isNaN(this.inputValue) ||
                this.inputValue <= 0 ||
                this.inputValue > this.pageTotal
            ) {
                return;
            }
            this.current = parseInt(this.inputValue);
            this.inputValue = '';
            this.update();
        },

        update: function () {
            this.pageNumber = this.current - 1;
            this.$emit('pageChange', this.pageNumber);
        }
    }
};
</script>

<style lang="less">
@import './pagination.less';
</style>
