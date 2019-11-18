<template>
    <div
        :class="['wg-group-wraper', animated ? `animated ${animated}` : '', wraperClass ? wraperClass : '', flexItemWrap ? 'wg-group-wraper_wrap' : '', id ? id + '_chart-wraper' : '']"
        :data-id="id"
        :style="{ width: `${width}px`, height: `${height}px` }"
    ></div>
</template>

<script>
import util from "../../utils/util";
import echarts from "echarts";
/**
 * @displayName Chart
 * @groupName 图表类
 */
export default {
    name: "VCharts",

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
         * 组件标题
         */
        label: {
            type: String,
            default: ""
        },
        /**
         * 组件子项
         */
        items: {
            type: Array,
            default: () => []
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
         * ___attributes___
         */
        hide: {
            type: Boolean,
            default: false
        },
        /**
         * 图表画布宽度，单位为px
         * ___attributes___
         */
        width: {
            type: Number,
            default: 600
        },
        /**
         * 图表分组
         * ___attributes___
         */
        categories: {
            type: Array
        },
        /**
         * 图表画布高度，单位为px
         * ___attributes___
         */
        height: {
            type: Number,
            default: 400
        },
        /**
         * 组件顶层class
         * ___attributes___
         */
        wraperClass: {
            type: String
        },
        /**
         * 若为true，当组件所在容器采用flex布局时，当前组件强制占用一行
         * ___attributes___
         */
        flexItemWrap: {
            type: Boolean,
            default: false
        },
        /**
         * 动画名称
         * ___attributes___
         */
        animated: {
            type: String
        },
        /**
         * 图表组件类型
         * ___attributes___
         */
        type: {
            type: String
        },
        /**
         * 组件节点是否可拖动
         * ___attributes___
         */
        draggable: {
            type: Boolean,
            default: true
        },
        /**
         * 图表斥力因子
         * ___attributes___
         */
        repulsion: {
            type: Number,
            default: 5000
        },
        /**
         * 组件值补充文案
         * ___attributes___
         */
        help: {
            type: String
        },
        /**
         * 组件值变更事件名称
         * ___attributes___
         */
        changeEventName: {
            type: String,
            default: "onChartChange"
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
            default: ""
        }
    },

    data() {
        return {
            chart: null
        };
    },

    mounted() {
        let chart = echarts.init(
            document.querySelector(`[data-id='${this.id}']`)
        );
        this.chart = chart;
        this.chart.setOption(this._formatOption());
    },

    watch: {
        items: {
            handler(newVal, oldVal) {
                if (!_.isEqual(newVal, oldVal)) {
                    this.chart.setOption(this._formatOption());
                }
            },
            deep: true
        }
    },

    methods: {
        _formatOption() {
            let option = {
                tooltip: {},
                series: []
            },
                config = {};

            this.label &&
                (option.title = {
                    text: this.label,
                    top: "bottom",
                    left: "center"
                });

            // graph需要特殊转化，后续实现修改为策略模式
            if (this.type === "graph") {
                option.tooltip.formatter = function (x) {
                    return x.data.des;
                };
                if (
                    Array.isArray(this.categories) &&
                    this.categories.length > 0
                ) {
                    option.legend = [
                        {
                            data: this.categories.map(function (a) {
                                return a.name;
                            })
                        }
                    ];
                }

                config = {
                    layout: "force",
                    symbolSize: 40,
                    roam: false,
                    edgeSymbol: ["circle", "arrow"],
                    edgeSymbolSize: [4, 7],
                    force: {
                        repulsion: this.repulsion,
                        edgeLength: [10, 50],
                        layoutAnimation: false
                    },
                    draggable: this.draggable,
                    focusNodeAdjacency: true,
                    itemStyle: {
                        color: "#4b565b"
                    },
                    lineStyle: {
                        width: 2,
                        color: "#4b565b",
                        curveness: 0.3 // 连接线弯曲度
                    },
                    edgeLabel: {
                        show: true,
                        formatter: function (x) {
                            return x.data.name;
                        }
                    },
                    label: {
                        show: true,
                        textStyle: {}
                    },
                    data: this._genDataFromItems(),
                    links: this._genLinksFromItems()
                };
            } else {
                let xAxis = [],
                    yAxis = [];

                this.items.forEach(item => {
                    if (item.attributes) {
                        if (item.attributes.perspective === "xAxis") {
                            xAxis.push(item.name);
                        } else if (item.attributes.perspective === "yAxis") {
                            yAxis.push(item.name);
                        }
                    }
                });

                option.dataset = {};
                option.dataset.source = this.value;

                // echarts单维度的配置属性与直角坐标系不同
                if (this.type === "pie" || this.type === "ring") {
                    config.encode = {
                        value: xAxis,
                        itemName: xAxis[0]
                    };
                    if (this.type === "ring") {
                        config.radius = ["50%", "70%"];
                    }
                } else {
                    option.xAxis = {};
                    option.yAxis = {};
                    if (xAxis.length > 0) {
                        option.xAxis = { type: "category" };
                    } else {
                        option.yAxis = { type: "category" };
                    }
                }
            }

            let resultType = this.type;
            if (this.type === "ring") {
                resultType = "pie";
            }
            resultType && (config.type = resultType);
            this.categories && (config.categories = this.categories);

            option.series.push(config);

            return option;
        },

        _genDataFromItems() {
            let originItems = this.items,
                results = [];

            originItems.forEach(item => {
                let itemAttributes = item.attributes;
                !itemAttributes && (itemAttributes = {});
                let result = {
                    name: item.label
                };
                itemAttributes.help && (result.des = itemAttributes.help);
                itemAttributes.size &&
                    (result.symbolSize = itemAttributes.size);
                itemAttributes.category &&
                    (result.category = itemAttributes.category);
                itemAttributes.color &&
                    (result.itemStyle = {
                        normal: { color: itemAttributes.color }
                    });

                results.push(result);
            });

            return results;
        },

        _genLinksFromItems() {
            let originItems = this.items,
                results = [];

            // 根据每个items的relation，生成图关系数组
            originItems.forEach(item => {
                let relation = item.relation || [],
                    result = {};

                if (Array.isArray(relation) && relation.length > 0) {
                    // 根据relation的target，生成关系对象
                    relation.forEach(_relation => {
                        result = {
                            source: this._getIndexById(item.id),
                            target: this._getIndexById(_relation.target),
                            name: _relation.label
                        };
                        _relation.attributes &&
                            _relation.attributes.help &&
                            (result.des = _relation.attributes.help);

                        results.push(result);
                    });
                }
            });

            return results;
        },

        _getIndexById(id) {
            let resultIndex = -1;
            this.items.some((item, index) => {
                if (item.id === id) {
                    resultIndex = index;
                }
            });
            return resultIndex;
        }
    }
};
</script>
<style lang='less'>
@import './chart.less';
</style>
