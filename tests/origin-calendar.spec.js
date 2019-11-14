import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import OriginCalendar from '../src/components/calendar/originCalendar.vue';
import sinon from 'sinon';

describe('OriginCalendar.vue', () => {
    /**
     * @param {String} value - 'test'
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]value: relative class exist', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ value: 'test' });
        expect(wrapper.find('.has-date').html()).to.be.exist;
    });

    /**
     * @param {String} value - 'test'
     * @returns {Boolean} isTextExist - true
     */
    it('[props]value: gen text', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ value: '2001-01-01' });
        expect(wrapper.find('.has-date input').element.value).to.be.equal('2001-01-01');
    });

    /**
     * @param {Boolean} pickTime - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]pickTime: relative element exist', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ pickTime: true });
        expect(wrapper.find('.time-panel').html()).to.be.exist;
    });

    /**
     * @param {Boolean} pickTime - true
     * @returns {Boolean} isElementNotExist - true
     */
    it('[props]pickTime: relative element not exist', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ pickTime: true });
        expect(wrapper.find('.time-block').exists()).to.be.false;
    });

    /**
     * @param {Boolean} disabled - true
     * @returns {Boolean} isClassNameExist - true
     */
    it('[props]disabled: relative class exist', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ disabled: true });
        expect(wrapper.find('.input_disabled').html()).to.be.exist;
    });

    // format

    /**
     * @param {Boolean} resetable - true
     * @returns {Boolean} isElementExist - true
     */
    it('[props]resetable: relative element exist', () => {
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ resetable: true });
        expect(wrapper.find('.icon.icon-cancel.wg-calendar-clear').html()).to.be.exist;
    });

    // range
    // calendarType

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} showDetail - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]showDetail: trigger event on ".time-panel"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'showDetail');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ showDetail: true });
        wrapper.find('.time-panel').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]showDetail: trigger event on ".time-bottom .time-panel"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'showDetail');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-bottom .time-panel').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} resetable - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]closePanel: trigger event on ".time-bottom-grid"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'closePanel');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ resetable: true });
        wrapper.find('.time-detail .time-bottom-grid:nth-of-type(3)').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    // getCanlendarType
    // update

    /**
     * @param {Boolean} isFocus - true
     * @returns {Boolean} isFocusTrigger - true
     */
    it('[event]focusInput: trigger event on ".time-input"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'focusInput');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail .time-grid:nth-of-type(1) .time-middle input').trigger('focus');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeYear: trigger event on ".prev-btn"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeYear');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.date-head th:nth-of-type(2) .prev-btn').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeYear: trigger event on ".next-btn"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeYear');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.date-head th:nth-of-type(2) .next-btn').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMonth: trigger event on ".prev-btn"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMonth');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.date-head th:nth-of-type(3) .prev-btn').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMonth: trigger event on ".next-btn"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMonth');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.date-head th:nth-of-type(3) .next-btn').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    // changeHour
    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeHour: trigger event on ".time-up"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeHour');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail div .time-grid:nth-of-type(1) .time-up svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeHour: trigger event on ".time-middle"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeHour');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail div .time-grid:nth-of-type(1) .time-middle').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeHour: trigger event on ".time-middle input"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeHour');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail div .time-grid:nth-of-type(1) .time-middle input').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeHour: trigger event on ".time-down"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeHour');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail div .time-grid:nth-of-type(1) .time-down svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMinute: trigger event on ".time-up"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMinute');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(2) .time-up svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMinute: trigger event on ".time-middle"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMinute');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(2) .time-middle').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMinute: trigger event on ".time-middle input"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMinute');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(2) .time-middle input').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeMinute: trigger event on ".time-down"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeMinute');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(2) .time-down svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeSecond: trigger event on ".time-up"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeSecond');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(3) .time-up svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeSecond: trigger event on ".time-middle"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeSecond');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(3) .time-middle').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeSecond: trigger event on ".time-middle input"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeSecond');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(3) .time-middle input').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Number} type - 3
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]changeSecond: trigger event on ".time-down"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'changeSecond');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setData({ type: 3 });
        wrapper.find('.time-detail div .time-grid:nth-of-type(3) .time-down svg').trigger('click');
        expect(spy.callCount).to.equal(1);
        spy.restore();
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]resetToday: trigger event on ".today-btn"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'resetToday');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.today-btn').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @param {Boolean} resetable - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]resetDate: trigger event on ".no-date i"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'resetDate');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.setProps({ resetable: true });
        wrapper.find('.no-date i').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]currentTime: trigger event on ".time-detail .time-bottom-grid:nth-of-type(1)"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'currentTime');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail .time-bottom-grid:nth-of-type(1)').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]clearTime: trigger event on ".time-detail .time-bottom-grid:nth-of-type(2)"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'clearTime');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.time-detail .time-bottom-grid:nth-of-type(2)').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    // checkRange

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]dateClick: trigger event on ".data-body tr td"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'dateClick');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.date-body tr td').trigger('click');
        expect(spy.callCount).to.equal(1);
    });

    // formatDate

    /**
     * @param {Boolean} isClick - true
     * @returns {Boolean} isClickTrigger - true
     */
    it('[event]showPanelEvent: trigger event on ".datatime .no-date input"', () => {
        const spy = sinon.spy(OriginCalendar.methods, 'showPanelEvent');
        const wrapper = shallowMount(OriginCalendar);
        wrapper.find('.datetime .no-date input').trigger('click');
        expect(spy.callCount).to.equal(1);
    });
});
