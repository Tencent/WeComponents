<template>
    <div class="topic-manage-wraper">
        <div class="topic-manage-header">
            <div class="topic-manage-options">
                <div
                    v-for="(option, index) in extra.options"
                    :key="option.value"
                    :class="['topic-manage-option', index === extra.optionIndex ? 'topic-manage-option_active' : '']"
                    @click="handleOptionClick($event, option, index)"
                >{{ option.label }}</div>
            </div>
            <div class="topic-manage-range">
                <span
                    v-if="extra.rangeIndex > 0"
                    class="topic-manage-range_backward"
                    @click="changeRangeIndex(-1)"
                ></span>
                <span
                    class="topic-manage-range_content"
                >{{ extra.range[extra.rangeIndex].start }} ~ {{ extra.range[extra.rangeIndex].end }}</span>
                <span
                    v-if="extra.rangeIndex < extra.range.length - 1"
                    class="topic-manage-range_forward"
                    @click="changeRangeIndex(1)"
                ></span>
            </div>
        </div>
        <div class="topic-manage-content">
            <table class="topic-manage-content_table">
                <thead class="topic-manage-content_thead">
                    <tr class="topic-manage-content_tr">
                        <th
                            class="topic-manage-content_table-cell"
                            v-for="(header,index) in headers"
                            :key="index"
                        >{{ header }}</th>
                    </tr>
                </thead>
                <tbody class="topic-manage-content_tbody">
                    <tr
                        class="topic-manage-content_tr"
                        v-for="(row, rowIndex) in value"
                        :key="rowIndex"
                    >
                        <td
                            class="topic-manage-content_table-cell"
                            align="center"
                        >{{ row.index + 1 }}</td>
                        <td
                            :class="['topic-manage-content_table-cell', topic.label ? '' : 'topic-manage-content_table-cell-hover']"
                            v-for="(topic, topicIndex) in topics"
                            :key="topicIndex"
                            :colspan="topic.colspan"
                            @click="handleTopicClick($event, topic)"
                        >
                            <div
                                class="topic-manage-content_topic"
                                :style="{ backgroundColor: getTopicBackgroundColor(topic, 'color') }"
                                @mouseenter="handleTopicMouseEnter($event, topic)"
                                @mouseleave="handleTopicMouseLeave($event, topic)"
                            >
                                <div class="topic-manage-content_topic-title">{{ topic.label }}</div>
                                <div class="topic-manage-content_topic-range">{{ topic.range }}</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="topic-manage-footer">
            <div
                v-for="option in extra.options"
                :key="option.value"
                class="topic-manage-footer_item"
            >
                <span
                    class="topic-manage-footer_item-dot"
                    :style="{ backgroundColor: option.hoverColor }"
                ></span>
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopicManage',

    props: ['id', 'label', 'extra', 'value', 'clickEventName'],

    inject: {
        _currentPageInstance: {
            default: {}
        }
    },

    data() {
        return {
            headers: [
                '推荐位',
                '周一 03/19',
                '周二 03/20',
                '周三 03/21',
                '周四 03/22',
                '周五 03/23',
                '周六 03/24',
                '周日 03/25'
            ],
            // 根据topic实时计算td
            topics: [
                {
                    label: '占用2格',
                    range: '03/19 18:00 - 03/20 23:59',
                    platform: 'ios',
                    colspan: 2,
                },
                {
                    label: '',
                    colspan: 1
                },
                {
                    label: '占用4格',
                    range: '03/19 18:00 - 03/20 23:59',
                    platform: 'android',
                    colspan: 4
                }
            ]
        }
    },

    methods: {
        changeRangeIndex(count) {
            let rangeIndex = this.extra.rangeIndex,
                newRangeIndex = rangeIndex + count;

            if (this.extra.range[newRangeIndex]) {
                this._currentPageInstance.container.setAttribute(this.id, 'extra.rangeIndex', newRangeIndex);
            }
        },
        handleOptionClick(event, option, index) {
            this._currentPageInstance.container.setAttribute(this.id, 'extra.optionIndex', index);
        },
        handleTopicClick(event, topic) {
            this._currentPageInstance.collectEvent({
                type: 'topicClick',
                data: {
                    event,
                    topic
                },
                target: this,
                nativeEvent: event
            });
        },
        handleTopicMouseEnter(event, topic) {
            // 高亮
            this.toggleTopicBackgroundColor(event, topic, 'hoverColor');
        },
        handleTopicMouseLeave(event, topic) {
            // 取消高亮
            this.toggleTopicBackgroundColor(event, topic, 'color');
        },
        toggleTopicBackgroundColor(event, topic, propertyName) {
            let target = event.target;
            let backgroundColor = target.style.backgroundColor;
            let newBgColor = this.getTopicBackgroundColor(topic, propertyName)
            target.style.backgroundColor = newBgColor;
        },
        getTopicBackgroundColor(topic, propertyName) {
            let options = this.extra.options;
            let current = options.find(option => option.value === topic.platform);
            let backgroundColor = current && current[propertyName] ? current[propertyName] : '';
            return backgroundColor;
        }
    }
}
</script>
<style lang="less" scoped>
.topic-manage-header {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
}

.topic-manage-options {
    border: 1px solid #e4e8eb;
    display: flex;
    width: 302px;
    height: 34px;
    align-items: center;
    border-radius: 3px;
    margin-right: 47px;
    .topic-manage-option {
        width: 100px;
        font-size: 14px;
        color: #9a9a9a;
        text-align: center;
    }
    .topic-manage-option:not(:last-child) {
        border-right: 1px solid #e4e8eb;
    }
    .topic-manage-option_active {
        color: #1aad19;
    }
}

.topic-manage-range {
    display: flex;
    align-items: center;
    .topic-manage-range_content {
        font-size: 16px;
        color: #333;
        font-family: PingFangSC-Medium;
        margin-left: 9px;
        margin-right: 9px;
    }
    .topic-manage-range_backward {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABIBAMAAABsGEqKAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAAC3RSTlMALScLBw8DHRQiGO6ScbAAAACiSURBVDjLrdTBCYQwEIXhgUWUvc2uHjwK4lk70A60A1tICTbh3U7VY/yVkZAcH1/CMENGgk46InIFkOqVOdUCSEsgXYlmL9qAvm/Rj6ix0AKU3aOaqI+BEqIpHClR7iWfE7Ve1B3JPwoagMQBSQWECBfxPIpAqQEsAUML0WiMA0MLYAtZFp/NZI1YH0a292wlK22WKpl7YMYawrLCSsPis84OxR8tpyODPdcAAAAASUVORK5CYII=');
        background-size: contain;
        display: inline-block;
        height: 20px;
        width: 10px;
    }
    .topic-manage-range_forward {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABIBAMAAABsGEqKAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAAC3RSTlMALScLBw8DHRQiGO6ScbAAAACcSURBVDjLrdS5DYAwEERRJI58OQQiowMoASqAFsjIXAIt0AGlAqH9jWxZ3nD0bK02mMRzcoVoa4FElIlETHYJ2CFgxQ/rLex2s4Fs92edhZ16tpBl8dlK1oQxIZvJ0o+Neja9URWV1WRtAlbaIz7k91yCqwailSd0HXohGsJRR3TGQAXRbkc3UO9CB9Hli5SrOohYQywrVhqLz38enKQtEagKmNYAAAAASUVORK5CYII=');
        background-size: contain;
        display: inline-block;
        height: 20px;
        width: 10px;
    }
}

.topic-manage-content {
    margin-bottom: 18px;
    .topic-manage-content_table {
        width: 942px;
        border: 1px solid #e4e8eb;
        .topic-manage-content_thead {
            background-color: #f4f5f7;
        }
        .topic-manage-content_table-cell {
            padding: 12px 25px;
            white-space: nowrap;
            word-break: keep-all;
            color: #333;
            font-family: PingFangSC-Light, sans-serif;
            font-weight: normal;
        }
        .topic-manage-content_table-cell-hover:hover {
            background-color: rgb(247, 247, 247);
        }
        .topic-manage-content_tr {
            border-bottom: 1px solid #e4e8eb;
        }
        .topic-manage-content_topic {
            border-radius: 3px;
            padding: 5px 7px;
        }
        .topic-manage-content_topic-title {
            font-size: 11px;
            color: #333;
        }
        .topic-manage-content_topic-range {
            font-size: 10px;
            color: rgba(51, 51, 51, 50%);
        }
    }
}

.topic-manage-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 942px;
    .topic-manage-footer_item {
        font-size: 14px;
        color: #576b95;
        display: flex;
        align-items: center;
    }
    .topic-manage-footer_item:not(:last-child) {
        margin-right: 45px;
    }
    .topic-manage-footer_item-dot {
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 10px;
    }
}
</style>
