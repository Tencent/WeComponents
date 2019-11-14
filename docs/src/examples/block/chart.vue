<script>
import WeComponents from '../../../../src';

let pageFields = [
    {
        id: 'chart1',
        component: 'chart',
        extra: {
            option: {
                visualMap: {
                    // 不显示 visualMap 组件，只用于明暗度的映射
                    show: false,
                    // 映射的最小值为 80
                    min: 80,
                    // 映射的最大值为 600
                    max: 600,
                    inRange: {
                        // 明暗度的范围是 0 到 1
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 1)'
                            }
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        },
                        data: [
                            { value: 235, name: '视频广告' },
                            { value: 274, name: '联盟广告' },
                            { value: 310, name: '邮件营销' },
                            { value: 335, name: '直接访问' },
                            { value: 400, name: '搜索引擎' }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: 'chart2',
        component: 'chart',
        extra: {
            option: {
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'value'
                },
                dataZoom: [
                    {
                        // 这个dataZoom组件，默认控制x轴。
                        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                        start: 10, // 左边在 10% 的位置。
                        end: 60 // 右边在 60% 的位置。
                    }
                ],
                series: [
                    {
                        type: 'scatter', // 这是个『散点图』
                        itemStyle: {
                            opacity: 0.8
                        },
                        symbolSize: function(val) {
                            return val[2] * 40;
                        },
                        data: [
                            ['14.616', '7.241', '0.896'],
                            ['3.958', '5.701', '0.955'],
                            ['2.768', '8.971', '0.669'],
                            ['9.051', '9.710', '0.171'],
                            ['14.046', '4.182', '0.536'],
                            ['12.295', '1.429', '0.962'],
                            ['4.417', '8.167', '0.113'],
                            ['0.492', '4.771', '0.785'],
                            ['7.632', '2.605', '0.645'],
                            ['14.242', '5.042', '0.368']
                        ]
                    }
                ]
            }
        }
    }
];

export default {
    name: 'v2Test',

    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields),
            toggleSelectAll: false
        };
    },

    methods: {
        eventHandler(event) {
            switch (event.type) {
                case 'selectAll':
                    {
                        let tableValue = this.container.getValue('table_test_1');
                        this.toggleSelectAll = !this.toggleSelectAll;
                        if (this.toggleSelectAll) {
                            tableValue = tableValue.map(item => {
                                item.sa = [1];
                                return item;
                            });
                        } else {
                            tableValue = tableValue.map(item => {
                                item.sa = [];
                                return item;
                            });
                        }
                        this.container.setValue('table_test_1', tableValue);
                    }
                    break;
                case 'submit_test':
                    console.log('sub', event);
                    break;
                case 'ssss':
                    console.log(this.container.getItem('oooo'));
                    break;
                case 'checkUploadValue':
                    console.log(this.container.getValue('upload_2'));
                    break;
                case 'submitPacketCompuate':
                    this.container.getValue('packetCompuateModal');
                    break;
                case 'modifyScore':
                    {
                        let items = this.container.getItem('table_test_1').items;
                        items.some((column, index) => {
                            if (column.name === 'score') {
                                items[index].value = function(value, index, row) {
                                    return {
                                        component: 'input',
                                        value: value,
                                        attributes: {
                                            disabled: false,
                                            size: 'small',
                                            resetable: false
                                        },
                                        validity: {
                                            format: 'Number'
                                        }
                                    };
                                };
                            }
                        });
                        this.container.setAttribute('table_test', 'items', items);
                    }
                    break;

                case 'submit_upload':
                    {
                        console.log('submit_upload', event.data);
                    }
                    break;

                case 'onRadioChange':
                    {
                        console.log('onRadioChange', this.container.getValue('container_1'));
                    }
                    break;

                case 'customInputChange':
                    {
                        console.log('customInputChange', this.container.getValue('form_11'));
                    }
                    break;

                case 'onT':
                    {
                        console.log('onT', this.container.getValue('container_1'));
                    }
                    break;

                case 'consoleDate':
                    {
                        console.log('date', this.container.getValue('calendar_1'));
                    }
                    break;

                case 'showModal':
                    {
                        this.container.setAttribute('modal', 'attributes.hide', false);
                    }
                    break;

                case 'getTableValue':
                    {
                        console.log('getTableValue', this.container.getValue('table_test_1'));
                    }
                    break;
                case 'jjjj':
                    {
                        let items = this.container.getAttribute('container_set_items', 'items');
                        this.container.setAttributes('container_set_items', {
                            items: items.reverse()
                        });
                    }
                    break;
            }
        }
    }
};
</script>
<style lang="less">
.ff-container-main {
    .wg-container-content {
        display: flex;
        justify-content: space-around;
        .ff-container-main_grid {
            .wg-container-content {
                display: grid;
                grid-template-columns: 100px 100px 100px;
                grid-template-rows: 100px 100px 100px;
                justify-items: stretch;
                align-items: stretch;
                grid-template-areas:
                    'a . c'
                    '. e .'
                    'g . i';
                .ff-item-1 {
                    grid-area: a;
                }
                .ff-item-2 {
                    grid-area: c;
                }
                .ff-item-3 {
                    grid-area: e;
                }
                .ff-item-4 {
                    grid-area: g;
                }
                .ff-item-5 {
                    grid-area: i;
                }
                .wg-component-main {
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
.ff-text-border {
    border: 1px solid #d8d8d8;
    text-align: center;
}
.test-modal-button_button-wraper {
    display: flex;
    justify-content: center;
}
.custom-suffix-img {
    position: absolute;
    top: 8px;
    right: 6px;
}
</style>
