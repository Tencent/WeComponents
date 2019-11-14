/**
 * 入口文件
 */
import VPage from './main.vue';
import WeComponents from './main.js';
import Vue from 'vue';

// 组件自注册
if (typeof window !== 'undefined') {
    !window.Vue && (window.Vue = Vue);
    Vue.component('VPage', VPage);
    Vue.prototype.$WeComponents = WeComponents;
}

export default WeComponents;
