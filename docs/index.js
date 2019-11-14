// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'vue-awesome/icons';
import _ from 'lodash';
import routerConfig from '@/router';
import App from '@/App.vue';

// 需要实例化的对象才需要大写
// 粗暴注入全局对象，方便使用
global._ = _;
global.JS_DEV = process.env.NODE_ENV !== 'production';
global.Vue = Vue;
global.C = console.log;

async function start() {
    Vue.use(VueRouter);

    const app = new Vue({
        el: '#app',
        data: {
            routerConfig,
            global
        },
        router: new VueRouter(routerConfig),
        render: h => <App routerConfig={routerConfig} globalInfo={global} />
    });

    app.$mount('#app');
}

start();
