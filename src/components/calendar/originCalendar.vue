<template>
    <div class="datetime">
        <div :class="val ? 'has-date' : 'no-date'"><input
            type="text" readonly="readonly"
            :value="val" @click.stop="showPanelEvent($event)"
            :class="{'input_disabled': disabled}"><i
                v-if='resetable' class="icon icon-cancel wg-calendar-clear"
                @click.stop="resetDate()"></i>
        </div>

        <div class="date-panel" v-show="showPanel" :id="random">
            <table class="date-table">
                <thead>
                    <tr class="date-head">
                        <th colspan="1">
                            <span :class="[
                                'today-btn',
                                isTodayInRange ? '' : 'today-btn_disabled'
                            ]" @click.stop="resetToday()">今日</span>
                        </th>
                        <th colspan="3">
                            <span class="prev-btn" @click.stop="changeYear(-1)">&lt;</span>
                            <span>{{ date.getFullYear() }}</span>
                            <span class="next-btn" @click.stop="changeYear(1)">&gt;</span>
                        </th>
                        <th colspan="3">
                            <span class="prev-btn" @click.stop="changeMonth(-1)">&lt;</span>
                            <span>{{ months[date.getMonth()] }}</span>
                            <span class="next-btn" @click.stop="changeMonth(1)">&gt;</span>
                        </th>
                    </tr>
                    <tr class="date-day">
                        <th v-for="(day, index) in days" :key="'date'+index+day">{{ day }}</th>
                    </tr>
                </thead>
                <tbody class="date-body">
                    <tr v-for="i in 6" :key="'row_'+i">
                        <td v-for="j in 7" :key="'day_'+j"
                            :class="dateArray[(i - 1) * 7 + (j - 1)] && dateArray[(i - 1)  * 7 + (j - 1)].status"
                            @click.stop="dateClick((i - 1)  * 7 + (j - 1))">
                            {{ dateArray[(i - 1)  * 7 + (j - 1)] && dateArray[(i - 1) * 7 + (j - 1)].number }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="time-block" style="width:100%;height:10px" v-if="!pickTime"></div>
            <div class="time-panel" @click.stop="showDetail(true)" v-if="pickTime">
                <svg width="100%" height="40">
                    <polyline points="116,15 122.5,10 129,15" style="fill:none;stroke:#666;stroke-width:1"/>
                    <polyline points="116,22 122.5,17 129,22" style="fill:none;stroke:#666;stroke-width:1"/>
                </svg>
            </div>
            <div class="time-detail" :class="{'time-transition': showDetailVal}">
                <div class="time-bottom-grid" @click.stop="currentTime()">当前时分</div>
                <div class="time-bottom-grid" @click.stop="clearTime()">清零</div>
                <div class="time-bottom-grid" @click.stop="closePanel()">确认</div>
                <div style="display: flex; width:100%">
                    <div class="time-grid">
                        <div class="time-desc">时</div>
                        <div class="time-up">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeHour(1)">
                                <polyline points="20,35 31,25 42,35" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                        <div class="time-middle" @click.stop="changeHour(0)">
                            <input v-model="hour" type="number"
                                @focus="focusInput"
                                @input="changeHour(hour, true)" class="time-input"></input>
                        </div>
                        <div class="time-down">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeHour(-1)">
                                <polyline points="20,25 31,35 42,25" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                    </div>
                    <div class="time-grid" v-if="type == 3 || type == 4">
                        <div class="time-desc">分</div>
                        <div class="time-up">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeMinute(1)">
                                <polyline points="20,35 31,25 42,35" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                        <div class="time-middle" @click.stop="changeMinute(0)">
                            <span>:</span><input v-model="minute" type="number"
                                @focus="focusInput"
                                @input="changeMinute(minute, true)" class="time-input"></input>
                        </div>
                        <div class="time-down">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeMinute(-1)">
                                <polyline points="20,25 31,35 42,25" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                    </div>
                    <div class="time-grid" v-if="type == 3">
                        <div class="time-desc">秒</div>
                        <div class="time-up">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeSecond(1)">
                                <polyline points="20,35 31,25 42,35" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                        <div class="time-middle" @click.stop="changeSecond(0)">
                            <span>:</span><input v-model="second" type="number"
                                @focus="focusInput"
                                @input="changeSecond(second, true)" class="time-input"></input>
                        </div>
                        <div class="time-down">
                            <svg width="60px" height="60px" class="time-arrow" @click.stop="changeSecond(-1)">
                                <polyline points="20,25 31,35 42,25" style="fill:none;stroke:#888;stroke-width:3"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="time-bottom">
                    <div class="time-panel" @click.stop="showDetail(false)">
                        <svg width="100%" height="36">
                            <polyline points="116,10 122.5,15 129,10" style="fill:none;stroke:#666;stroke-width:1"/>
                            <polyline points="116,17 122.5,22 129,17" style="fill:none;stroke:#666;stroke-width:1"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import moment from 'moment';
import Tips from '../tips/index.js'

const tips = new Tips();

export default {
    props: {
        value: {
            default: ''
        },

        // 是否选择时分秒
        pickTime: {
            default: false
        },

        disabled: {
            default: false
        },

        // 日期格式，支持YYYY-MM-DD HH:mm:ss，不区分大小写
        format: {
            default: ''
        },

        resetable: {
            default: false
        },

        // 禁用时间区间
        range: {
            type: Array,
            default: () => []
        },

        calendarType: {
            type: String
        }
    },

    data: function() {
        return {
            val: this.value,
            showPanel: false,
            days: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
            dateArray: [],
            date: new Date(),
            today: new Date(),
            hour: 0,
            minute: 0,
            second: 0,
            showHour: '',
            showMinute: '',
            showSecond: '',
            random: ('' + Math.random()).substr(3, 10),
            showDetailVal: false,
            type: 1,
            dateFormat: this.format
        };
    },

    computed: {
        /**
         * 是否包含今天
         */
        isTodayInRange(){
            let flag = true;
            if(this.range.length === 2){
                flag = this.checkRange(new Date(), this.range)
            }
            return flag;
        }
    },

    watch: {
        value: function(newVal, oldVal) {
            if (+newVal === 0 || newVal === '') {
                this.val = '';
            } else {
                this.date = new Date(typeof(newVal)=='string' ? newVal.replace(/\-/g,'/') : newVal);
                this.val = this.formatDate(this.date);
                this.update();
            }
        },

        val: function(newVal, oldVal) {
            if (+this.val === 0 || this.val === '') {
                this.val = '';
            } else {
                this.$emit('change', this.val, this.calendarType);
            }
        },

        showPanel: function(newVal, oldVal) {
            if (newVal) {
                if (+this.val === 0 || this.val === '') {
                    this.date = new Date();
                } else {
                    this.date = new Date(typeof(this.val)=='string' ? this.val.replace(/\-/g,'/') : this.val);
                }
                this.update();
            }
        }
    },

    created: function() {
        var self = this;

        // 绑定事件，点击页面其他区域，隐藏日历选择面板
        document.body.addEventListener(
            'click',
            function(e) {
                var dateList = document.querySelectorAll('.date-panel');
                for (var i = 0, len = dateList.length; i < len; i++) {
                    if (dateList[i] && !dateList[i].contains(e.target)) {
                        dateList[i].style.display = 'none';
                    }
                }
            },
            true
        );

        // 绑定事件，移动时隐藏日历选择面板
        window.addEventListener('scroll', function(e) {
            var dateList = document.querySelectorAll('.date-panel');
            for (var i = 0, len = dateList.length; i < len; i++) {
                dateList[i].style.display = 'none';
            }
        });

        if (+this.val === 0 || this.val === '' || typeof this.val == 'undefined') {
            this.val = '';
            return;
        }

        // 初始化时间
        this.date = new Date(typeof(this.val)=='string' ? this.val.replace(/\-/g,'/'): this.val);
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.getCanlendarType();
        this.val = this.formatDate(this.date);

        // 标准化时分秒展示
        this.showHour = this.hour < 10 ? '0' + this.hour : this.hour;
        this.showMinute = this.minute < 10 ? '0' + this.minute : this.minute;
        this.showSecond = this.second < 10 ? '0' + this.second : this.second;
    },

    mounted: function() {
        this.getCanlendarType();
    },

    methods: {
        showDetail: function(flag) {
            this.showDetailVal = flag;
        },

        /**
         * 关闭日历选择面板
         */
        closePanel(){
            this.showPanel = false;
        },

        /**
         * 将只读的日历格式，转化为内部的类型
         */
        getCanlendarType: function() {
            if (!this.dateFormat) {
                this.dateFormat = this.pickTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }

            if (!this.pickTime) {
                if (/yyyy-MM-dd/i.test(this.dateFormat)) {
                    this.type = 1;
                } else if (/yyyy-MM/i.test(this.dateFormat)) {
                    this.type = 2;
                }
            } else {
                if (/HH:mm:ss/i.test(this.dateFormat)) {
                    this.type = 3;
                } else if (/HH:mm/i.test(this.dateFormat)) {
                    this.type = 4;
                    this.second = '00';
                } else if (/HH/i.test(this.dateFormat)) {
                    this.type = 5;
                    this.minute = 0;
                    this.second = 0;
                }
            }
        },

        /**
         * 执行更改
         */
        update: function() {
            var array = [];

            var date = new Date(this.date);

            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();

            this.showHour = this.hour < 10 ? '0' + this.hour : this.hour;
            this.showMinute = this.minute < 10 ? '0' + this.minute : this.minute;
            this.showSecond = this.second < 10 ? '0' + this.second : this.second;

            date.setDate(1);

            var firstDay = date.getDay();
            // 保证依旧显示6行，若第一天为周日，则当前月从第二行显示
            if (firstDay === 0) {
                firstDay = 7;
            }

            // 设置为0获取上一月的天数
            date.setDate(0);

            var lastMonthDays = date.getDate();
            var i,index;
            for (i = 0; i < firstDay; i++) {
                array.unshift({
                    number: lastMonthDays - i,
                    val: new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        lastMonthDays - i,
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds()
                    ),
                    status: 'other-month'
                });
            }

            // 获取当前月的天数
            date.setMonth(date.getMonth() + 2, 0);
            var curMonthDays = date.getDate();
            var tmpDate = null;
            for (i = 0; i < curMonthDays; i++) {
                tmpDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    i + 1,
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds()
                );
                array.push({
                    number: i + 1,
                    val: tmpDate,
                    status: this.val === this.formatDate(tmpDate) ? 'date-checked' : 'current-month'
                });
            }

            // 下一个月
            for (i = firstDay + curMonthDays, index = 1; i < 42; i++) {
                array.push({
                    number: index,
                    val: new Date(
                        date.getFullYear(),
                        date.getMonth() + 1,
                        index,
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds()
                    ),
                    status: 'other-month'
                });
                index++;
            }

            if(this.range.length === 2){
                // 如果有设置range，则将不再range范围内的日期置灰且不可点击
                let _range = this.range;

                array.forEach((date, index) => {
                    if(!this.checkRange(date.val, _range)){
                        array[index].status = 'overflow-range'
                    }
                })
            }

            this.dateArray = array;
        },

        /**
         * 点击输入框时选中
         */
        focusInput(event) {
            event.target.select();
        },

        /**
         * 更改年的行为
         * @param {*} val
         */
        changeYear: function(val) {
            this.date.setFullYear(this.date.getFullYear() + val);
            this.date = new Date(this.date);
            this.update();
        },

        /**
         * 更改月份的行为
         * @param {*} val
         */
        changeMonth: function(val) {
            this.date.setMonth(this.date.getMonth() + val);
            this.date = new Date(this.date);
            this.update();
        },

        /**
         * 更改小时的行为
         * @param {*} val
         */
        changeHour: function(val, input) {
            if (input === true) {
                this.hour >= 23 && (this.hour = 23);
                this.hour < 0 && (this.hour = 0);
            }

            this.date.setHours(input ? this.hour : this.hour + val);
            this.date = new Date(this.date);
            this.update();
            this.val = this.formatDate(this.date);
        },

        /**
         * 更改分钟的行为
         * @param {*} val
         */
        changeMinute: function(val, input) {
            if (input === true) {
                this.minute >= 59 && (this.minute = 59);
                this.minute < 0 && (this.minute = 0);
            }

            this.date.setMinutes(input ? this.minute : this.minute + val);
            this.date = new Date(this.date);

            this.update();
            this.val = this.formatDate(this.date);
        },

        /**
         * 更改秒的行为
         * @param {*} val
         */
        changeSecond: function(val, input) {
            if (input === true) {
                this.second >= 59 && (this.second = 59);
                this.second < 0 && (this.second = 0);
            }

            this.date.setSeconds(input ? this.second : this.second + val);
            this.date = new Date(this.date);
            this.update();
            this.val = this.formatDate(this.date);
        },

        /**
         * 重置为今天
         */
        resetToday: function() {
            let flag = true;

            if(this.range.length === 2){
                flag = this.checkRange(new Date(), this.range)
            }

            if(flag){
                this.date = new Date();
                this.date.setHours(this.hour);
                this.date.setMinutes(this.minute);
                this.date.setSeconds(this.second);
                this.val = this.formatDate(this.date);
                this.update();
            } else {
                tips.error('当前日期不在可选的日期范围内')
            }
        },

        /**
         * 重置
         */
        resetDate: function() {
            this.val = '';
            this.$emit('change', this.val, this.calendarType);
        },

        /**
         * 解析当前时间
         */
        currentTime: function() {
            var date = new Date();

            this.date.setHours(date.getHours());
            this.date.setMinutes(date.getMinutes());
            this.date.setSeconds(date.getSeconds());
            this.update();
            this.val = this.formatDate(this.date);
        },

        /**
         * 清空时间
         */
        clearTime: function() {
            this.date.setHours(0);
            this.date.setMinutes(0);
            this.date.setSeconds(0);
            this.update();
            this.val = this.formatDate(this.date);
        },

        /**
         * 更改日期范围
         */
        checkRange(date, range){
            let flag = true,
                _formatDate,
                _formatRangeBegin,
                _formatRangeEnd;

            if(Array.isArray(range) && range.length === 2){
                _formatDate = moment(date).format('YYYY-MM-DD');
                _formatRangeBegin = moment(range[0]) === '-' ? '-' : moment(range[0]).format('YYYY-MM-DD');
                _formatRangeEnd = moment(range[1]) === '-' ? '-' : moment(range[1]).format('YYYY-MM-DD');

                // 如果range存在，且选中时间未在range中，则不触发click事件
                if(!(_formatRangeBegin === '-' && _formatRangeEnd === '-')){
                    if(_formatRangeBegin !== '-' && _formatRangeEnd !== '-'){
                        // 起止时间都有限制
                        if(
                            moment(_formatDate).isBefore(_formatRangeBegin)
                            || moment(_formatRangeEnd).isBefore(_formatDate)
                        ){
                            flag = false;
                        }
                    } else if(_formatRangeBegin === '-'){
                        // 开始时间无限制
                        if(moment(_formatRangeEnd).isBefore(_formatDate)){
                            flag = false;
                        }
                    } else if(_formatRangeEnd === '-'){
                        // 结束时间无限制
                        if(moment(_formatDate).isBefore(_formatRangeBegin)){
                            flag = false;
                        }
                    }
                }
            }

            return flag;
        },

        /**
         * 点击日期的事件处理
         */
        dateClick: function(i) {
            let _date = new Date(this.dateArray[i].val),
                _formatDate,
                _formatRangeBegin,
                _formatRangeEnd,
                flag = true;

            flag = this.checkRange(_date, this.range);

            if(flag){
                if(this.pickTime){
                    this.showDetail(true)
                } else {
                    this.showPanel = false
                }

                this.date = _date;

                this.val = this.formatDate(this.date);
            }
        },

        /**
         * 标准化时间
         * @param {*} date
         */
        formatDate: function(date) {
            var res = '';
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = this.pickTime ? date.getHours() : this.hour;
            var minute = this.pickTime ? date.getMinutes() : this.minute;
            var second = this.pickTime ? date.getSeconds() : this.second;

            month < 10 && (month = '0' + month);
            day < 10 && (day = '0' + day);
            hour < 10 && (hour = '0' + hour);
            minute < 10 && (minute = '0' + minute);
            second < 10 && (second = '0' + second);

            if (this.pickTime) {
                res = year + '-' + month + '-' + day + ' ' + hour;
                if (this.type == 3) {
                    res += ':' + minute + ':' + second;
                } else if (this.type == 4) {
                    res += ':' + minute + ':00';
                } else {
                    res += ':00:00';
                }
            } else {
                res = year + '-' + month;
                if (this.type == 1) {
                    res += '-' + day;
                }
            }

            return res;
        },

        /**
         * 切换日历面板的展示/隐藏
         * @param {*} event
         */
        showPanelEvent: function(event) {
            if (this.disabled) return;

            var target = event.target;
            var bound = target.getBoundingClientRect();

            var dateList = document.querySelectorAll('.date-panel');
            for (var i = 0, len = dateList.length; i < len; i++) {
                if (dateList[i].id == this.random) {
                    if (dateList[i].style.display == 'none') {
                        this.showPanel = true;
                        dateList[i].style.display = '';
                        dateList[i].style.top = bound.y + bound.height + 10 + 'px';
                        dateList[i].style.left = bound.x + 'px';
                    } else {
                        this.showPanel = false;
                    }
                } else {
                    dateList[i].style.display = 'none';
                }
            }
        }
    }
};
</script>

<style type="text/css" scoped>
.datetime {
    padding: 0 3px;
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    display: inline-block;
}
.mod-form__boxtips {
    position: absolute;
}
.datetime input {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd !important;
    padding: 5px 10px;
    font-size: 14px;
    box-sizing: border-box;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    /* background-color: #ffffff !important; */
    cursor: pointer;
}
.has-date:hover .wg-calendar-clear {
    visibility: visible;
}
.wg-calendar-clear {
    visibility: hidden;
    width: .7rem;
    height: .7rem;
    position: absolute;
    right: .4rem;
    top: .45rem;
}
.date-panel {
    /*position: absolute;*/
    position: fixed;
    z-index: 1000;
    width: 246px;
    /*top: 38px;*/
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 20px #ccc;
}
.date-table {
    width: 100%;
    font-size: 12px;
    border-collapse: collapse;
}
.date-table tr {
    width: 35px;
}
.date-table th,
.date-table td {
    width: 35px;
    min-width: 35px;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-weight: normal;
    text-align: center;
}
.date-head {
    background: #f0f0f0;
}
.date-head .prev-btn,
.date-head .next-btn {
    padding: 0 10px;
    display: inline-block;
    font-size: 16px;
}
.date-head .prev-btn:hover,
.date-head .next-btn:hover,
.date-head .today-btn:hover {
    cursor: pointer;
    background: #ddd;
}
.today-btn_disabled {
    cursor: not-allowed;
    color: #a3a3a3;
}
.date-head .today-btn {
    font-size: 12px;
    padding: 0 3px 0 8px;
    letter-spacing: 0;
    display: inline-block;
    vertical-align: baseline;
}
.date-day {
    background: #fff;
    height: 30px;
}
.date-day th {
    font-weight: 600;
}
.date-body td:hover {
    cursor: pointer;
    background: #eee;
}
.date-checked {
    background: #ddd;
}
.current-month {
    color: #000;
}
.other-month {
    color: #bbb;
}
.overflow-range {
    color: #bbb;
    cursor: not-allowed!important;
}
.time-panel {
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    overflow: hidden;
}
.time-panel:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

.time-detail {
    transition: all 0.3s ease;
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    top: 280px;
    transform: translate(0, 0);
    opacity: 0;
    overflow: hidden;
    background-color: #fff;
}
.time-grid {
    height: 205px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.time-up {
    text-align: center;
    width: 100%;
    height: 60px;
}
.time-middle {
    text-align: center;
    height: 50px;
    font-size: 30px;
    line-height: 40px;
    position: relative;
}
.time-middle span {
    position: absolute;
    top: 3px;
    left: -15px;
    width: 30px;
}
.time-down {
    text-align: center;
    width: 100%;
    height: 60px;
}
.time-bottom {
    width: 100%;
    height: 40px;
    float: left;
}
.time-bottom:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.time-bottom-grid {
    width: 33.33%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background-color: #f0f0f0;
}
.time-bottom-grid:hover {
    background: #ddd;
    cursor: pointer;
}
.time-arrow {
    margin: 0 10%;
}
.time-arrow:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

.time-transition {
    transform: translate(0, -280px);
    height: 280px;
    opacity: 1;
}
.time-panel input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.datetime .time-input {
    width: 50px;
    min-width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
}
.time-grid .time-desc {
    text-align: center;
    margin: 15px 0 5px 0;
}
</style>
