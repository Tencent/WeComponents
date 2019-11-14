<template>
    <div
        :class="[
            'wg-group-wraper',
            animated ? `animated ${animated}` : '',
            wraperClass ? wraperClass : '',
            id ? id + '_chart-wraper' : ''
        ]"
        :data-id="id"
        :style="{ width: `${width}px`, height: `${height}px` }"
    ></div>
</template>

<script>
import util from '../../utils/util';
import echarts from 'echarts';
/**
 * @displayName Chart
 * @groupName 图表类
 * @icon 'http://'
 */
export default {
    name: 'VCharts',

    props: {
        /**
         * 组件id
         */
        id: {
            type: String
        },

        /**
         * 组件承载数据的key
         */
        name: {
            type: String
        },

        /**
         * 组件承载数据
         */
        value: {
            type: Array,
            default: () => []
        },

        /**
         * 组件是否隐藏
         * @property attributes
         */
        hide: {
            type: Boolean,
            default: false
        },

        /**
         * 图表画布宽度，单位为px
         * @property attributes
         */
        width: {
            type: Number,
            default: 600
        },

        /**
         * 图表画布高度，单位为px
         * @property attributes
         */
        height: {
            type: Number,
            default: 400
        },

        /**
         * 组件顶层class
         * @property attributes
         */
        wraperClass: {
            type: String
        },

        /**
         * 动画名称
         * @property attributes
         */
        animated: {
            type: String
        },

        /**
         * 组件值补充文案
         * @property attributes
         */
        help: {
            type: String
        },

        /**
         * 组件值变更事件名称
         * @property attributes
         */
        changeEventName: {
            type: String,
            default: 'onChartChange'
        },

        /**
         * extra.option会被透传给echarts组件
         */
        extra: {
            type: Object
        },

        /**
         * @ignore
         */
        _tableData: {
            type: Object
        },

        /**
         * @ignore
         */
        _parentContainerAttributes: {
            type: Object
        }
    },

    inject: {
        _currentPageInstance: {
            default: {}
        },
        _currentContainerId: {
            default: ''
        }
    },

    mounted() {
        if (this.extra && this.extra.option) {
            let chart = echarts.init(document.querySelector(`[data-id='${this.id}']`));
            chart.setOption(this.extra.option);
            console.log(1111);
        }
    }
};
</script>
<style lang='less'>
@import './chart.less';
</style>
