<template>
    <div id="app" class="wg-page">
        <div class="mod-frame__head">
            <div class="mod-frame__head-wrap">
                <div class="mod-header ui-clearfix">
                    <a href="javascript:;">
                        <h1 class="mod-header__logo">
                            <img
                                src="//res.wx.qq.com/wechatgame/product/cdn/wecomponents/logo_d586b864.png"
                                height="50"
                                width="200"
                            />
                        </h1>
                        <h2 class="mod-header__title">
                            <sub class="mod-header__ver" v-if="version">{{ version }}</sub>
                        </h2>
                    </a>
                    <div class="mod-header__nav">
                        <router-link
                            v-for="item in routerConfig.routes"
                            :key="item.path"
                            class="mod-header__nav-item"
                            :to="item.path"
                            v-if="item.meta && !item.meta.hide"
                        >{{ item.meta.label }}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mod-frame__wrap">
            <div class="mod-frame__wrap-box">
                <div class="mod-frame__side">
                    <div class="mod-frame__menu-box">
                        <template v-if="currentRouter && currentRouter.children">
                            <div
                                class="mod-frame__menu"
                                v-for="second in currentRouter.children"
                                :key="second.path"
                                v-if="!second.meta.hide"
                            >
                                <div class="mod-frame__menu-item" :to="second.path">
                                    <icon
                                        v-if="second.meta.icon"
                                        class="mod-frame__icon-menu"
                                        :name="second.meta.icon"
                                    ></icon>
                                    <strong>{{ second.meta.label }}</strong>
                                </div>
                                <div class="mod-frame__submenu" v-if="second && second.children">
                                    <router-link
                                        v-for="third in second.children"
                                        :key="third.path"
                                        class="mod-frame__submenu-link"
                                        active-class="mod-frame__submenu-link_current"
                                        :to="third.path"
                                        v-if="!third.meta.hide"
                                    >{{ third.meta.label }}</router-link>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="mod-frame__main">
                    <div class="mod-breadcrumbs">
                        <i class="icon icon-goback ui-va-m ui-mr-small" @click="goPreviousLayer"></i>
                        <router-link
                            v-for="(route, index) in matchedRouter.slice(0, matchedRouter.length - 1)"
                            :key="route.meta.label+index"
                            :to="{ path: route.path, query: currentQuery }"
                            class="ui-c-gray"
                        >{{route.meta.label}} ></router-link>
                        <router-link
                            v-for="route in matchedRouter.slice(matchedRouter.length - 1)"
                            :key="route.meta.label"
                            :to="{ path: route.path, query: currentQuery }"
                            class="ui-c-dark"
                        >{{route.meta.label}}</router-link>
                    </div>
                    <div class="mod-weixin-area">
                        <div class="mod-weixin-area__head" v-if="matchedRouter.length > 3">
                            <ul class="mod-frame__tab-nav">
                                <router-link
                                    tag="li"
                                    class="mod-frame__tab-item"
                                    v-for="fourth in currentFourthNav"
                                    v-if="!fourth.meta.hide"
                                    active-class="mod-frame__tab-item_current"
                                    :to="{ path: fourth.path, query: currentQuery }"
                                    :key="fourth.path"
                                >
                                    <a
                                        class="mod-frame__tab-link"
                                    >{{ fourth.meta && fourth.meta.label }}</a>
                                </router-link>
                            </ul>
                            <ul class="mod-frame__sub-tab" v-if="currentFifthNav.length > 0">
                                <router-link
                                    tag="li"
                                    class="mod-frame__sub-tab-item"
                                    active-class="mod-frame__sub-tab-item_current"
                                    v-for="fifth in currentFifthNav"
                                    v-if="!fifth.meta.hide"
                                    :key="fifth.path"
                                    :to="{ path: fifth.path, query: currentQuery}"
                                >
                                    <a
                                        class="mod-frame__tab-link"
                                    >{{ fifth.meta && fifth.meta.label }}</a>
                                </router-link>
                            </ul>
                        </div>
                        <div class="mod-weixin-area__body">
                            <transition
                                :duration="{ enter: 300, leave: 200 }"
                                name="fade"
                                mode="out-in"
                            >
                                <router-view></router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

let gIframePathMapping = {}, // iframe 的地址集合
    gFirstRouteMapping = {}; // 以一级导航的path为key的配置，方便快速取一个模块的所有导航

export default {
    name: 'app',

    data() {
        return {
            JS_DEV,
            name: '组件库',
            version: '2.0.13',
            username: 'weadmin',
            currentQuery: {},
            currentRouter: {},
            matchedRouter: [],
            currentFourthNav: [],
            currentFifthNav: [],
            pathMapping: {}
        };
    },

    props: ['routerConfig', 'globalInfo'],

    computed: {
        ...mapGetters({
            routes: 'custom/biz/global/routes'
        })
    },

    watch: {
        $route: {
            handler: function (to, from) {
                this.watchRoute(to, from);

                let firstRoute = gFirstRouteMapping[to.path];
                if (firstRoute && this.$route.matched.length < 2) {
                    this.$router.push(firstRoute.redirect);
                }
            },
            immediate: true
        }
    },

    methods: {
        watchRoute(to, from) {
            let matched = to.matched,
                currentRoutes = [],
                secondLayerRoutes = {},
                thirdLayerRoutes = {},
                fourthLayerRoutes = {},
                cgiModule,
                firstLayerPath,
                currentItem,
                firstMatch = matched[0],
                i = 0;

            // 确保match[0].path必为一级导航
            firstLayerPath = `/${
                firstMatch.path
                    .split('/')
                    .slice(1)
                    .slice(0, 1)[0]
                }`;

            // 从一级导航中，取出当前的导航根节点
            currentRoutes = this.routerConfig.routes.filter(route => {
                return matched.length > 0 ? route.path === firstLayerPath : null;
            });

            secondLayerRoutes = getLayerRoute(currentRoutes[0], matched, 1);
            thirdLayerRoutes = getLayerRoute(secondLayerRoutes, matched, 2);

            this.currentQuery = to.query ? to.query : this.currentQuery;

            this.currentRouter = currentRoutes[0];
            this.matchedRouter = matched;
            this.currentFourthNav = (thirdLayerRoutes || {}).children;

            if (matched.length === 5) {
                fourthLayerRoutes = getLayerRoute(thirdLayerRoutes, matched, 3);
                this.currentFifthNav = (fourthLayerRoutes || {}).children;
            } else {
                this.currentFifthNav = [];
            }
        },

        goPreviousLayer: function () {
            this.$router.go(-1);
        }
    }
};

function getLayerRoute(currentRoutes, matchedRouter, layerIndex) {
    let layerRoute = {};

    ((currentRoutes || {}).children || []).forEach(child => {
        if (child && matchedRouter[layerIndex] && child.path === matchedRouter[layerIndex].path) {
            layerRoute = child;
        }
    });

    return layerRoute;
}
</script>
<style>
body {
    font-family: -apple-system-font, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
}
.mod-frame__menu-box {
    margin-top: 0;
}
.mod-frame__head-wrap {
    width: auto;
    padding: 0 40px;
}
.header__account-logout {
    margin-top: 11px;
}
.header__account-name {
    top: 10px;
}
.header__account-info:hover .header__account-name {
    color: #000;
    cursor: normal;
}
.header__account-info {
    width: 100px;
}
.header__icon {
    width: 50px;
    height: 50px;
    float: left;
    margin-top: 6px;
    margin-right: 5px;
}
.header__logo {
    width: 130px;
    border-right: 2px solid #ddd;
    line-height: 24px;
    margin-right: 20px;
    margin-top: 17px;
    height: 26px;
    font-size: 26px;
}
.header__sub-title {
    border: 0;
    width: 200px;
    color: #888;
    font-size: 24px;
}
.mod-header__logo {
    margin-top: 6px;
    background-size: 42px;
    padding-left: 52px;
    color: #333;
    font-weight: 300;
    font-size: 24px;
    line-height: 50px;
    width: auto;
}
.mod-header__title::before {
    display: inline-block;
    content: '|';
    color: #ddd;
    margin-right: 10px;
}
.mod-header__title {
    margin: 6px 10px 0;
    color: #333;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    font-weight: 300;
}
.mod-header__name {
    font-style: normal;
}
.mod-header__ver {
    background-color: #eee;
    font-size: 12px;
    padding: 0px 3px;
    border-radius: 5px;
}
.mod-header__env {
    background-color: #f00;
    color: #fff;
    font-size: 12px;
    padding: 0px 3px;
    border-radius: 5px;
}
.mod-header__nav-item {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    display: inline-block;
    color: #666;
    font-weight: bold;
    padding: 0 10px;
    min-width: 60px;
    text-align: center;
}
.mod-header__nav-item:hover {
    background-color: #f0f0f0;
}
.mod-header__nav-item.router-link-active {
    background-color: #f0f0f0;
    border-bottom: 3px solid #07c160;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.mod-popover__content {
    font-size: 14px;
}
.mod-popover__inner {
    padding: 10px 10px;
}
.hr {
    margin-left: -10px;
    margin-right: -10px;
    border: none;
    border-bottom: 1px solid #e7e7e7;
}
.mod-breadcrumbs {
    padding: 10px;
    border-bottom: 1px solid #e7e7eb;
}
.mod-breadcrumbs .router-link-active {
    background-color: transparent;
}
.mod-form__controls {
    position: relative;
}
.ui-nowrap {
    white-space: nowrap;
}
.required {
    color: #f60;
}
.col-id {
    white-space: nowrap !important;
}

.form_select {
    height: 30px;
    padding: 0 10px;
    color: #666;
    border: 1px solid #d7d7db;
    min-width: 120px;
    box-sizing: content-box;
}
form[disabled] button,
form[disabled] input[type='file'] {
    display: none;
}

/* elements disabled/readonly */
.disabled:focus,
.readonly:focus,
form[disabled] input,
form[disabled] textarea,
form[disabled] select,
input[disabled],
select[disabled],
select[readonly],
textarea[disabled],
textarea[readonly] {
    cursor: text;
    color: #333 !important;
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    outline: 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -webkit-box-shadow: none;
}

/* hidden textarea resizable grabber */
.disabled textarea,
.readonly textarea,
form[disabled] textarea,
textarea[disabled],
textarea[readonly] {
    resize: none;
}
/* hidden select triangle arrow */
.disabled select,
.readonly select,
form[disabled] select,
select[disabled],
select[readonly] {
    -webkit-appearance: none;
    -moz-appearance: none;
}
.disabled select::-ms-expand,
.readonly select::-ms-expand,
form[disabled] select::-ms-expand,
select[disabled]::-ms-expand,
select[readonly]::-ms-expand {
    display: none;
}
.horizontal_form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
}
.horizontal_form .mod-form__msg {
    width: auto;
}

.horizontal_form .mod-form__label {
    width: auto;
    margin-right: 5px;
}
.horizontal_form input {
    min-width: 200px;
    max-width: 320px;
    width: auto;
}
.horizontal_form .mod-form__group {
    margin-right: 20px;
}
.horizontal_form .mod-form__toolbar {
    margin-top: 0;
    margin-bottom: 25px;
    padding: 0;
    border: 0;
}
.horizontal_form .mod-form__toolbar .button {
    padding: 0;
}
.dialog__container .mod-form__label {
    width: 80px;
}
.dialog__container .input,
.dialog__container .textarea,
.dialog__container .mod-form__msg {
    width: auto;
}
.mod-form__msg {
    padding-top: 5px;
    padding-right: 10px;
}
.mod-frame__tab-nav {
    line-height: 35px;
}
.mod-frame__tab-link {
    padding: 0 20px;
}
.mod-frame__tab-item {
    /* border-bottom: 3px solid transparent; */
    border-bottom: none;
}
.mod-frame__main-head-extra a.button {
    color: #fff;
}
.mod-frame__tab-item {
    margin-top: 10px;
    margin-left: 10px;
}
.mod-frame__tab-item_current {
    border-radius: 5px 5px 0 0;
    border: 1px solid #e7e7eb;
    border-bottom: none;
    /* border-bottom: 1px solid #44b579; */
    background: #f4f5f9;
}
.mod-frame__tab-item:hover,
.mod-frame__tab-item_current:hover {
    border-bottom: none;
    /* border-bottom: 3px solid transparent; */
}
.mod-frame__tab-item_current .mod-frame__tab-link {
    background: transparent;
}
.smart-table td {
    max-width: 200px;
}
.pull-right {
    float: right;
}
.pull-left {
    float: left;
}
.time-shuttle {
    float: right;
    margin-top: -30px;
    margin-right: -30px;
    color: #aaa;
}
.time-shuttle .mod-form__label {
    margin-right: 5px;
    width: 100px;
}
.time-shuttle .chosen-panel {
    width: 240px !important;
}
.mod-form {
    position: relative;
}
.button-create {
    position: absolute;
    bottom: -30px;
    right: 15px;
}
.mod-form_inline {
    zoom: 1;
}

.mod-form_inline:before {
    content: '';
    display: block;
}

.mod-form_inline:after {
    content: '';
    display: table;
    clear: both;
}

.mod-form_inline .mod-form__group {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
}

.mod-form_inline .mod-form__controls {
    display: inline-block;
}

.mod-form_inline .mod-form__box .input {
    width: 100px;
}

.mod-form_inline .mod-form__label {
    width: auto;
}

.mod-dynamic-tag {
    font-size: 0;
}

.mod-dynamic-tag__item {
    display: inline-block;
    vertical-align: top;
    height: 34px;
    line-height: 34px;
    border: 1px solid #dcdcdc;
    margin-right: 10px;
    margin-bottom: 10px;
}

.mod-dynamic-tag__item_add {
    margin-right: 0;
}

.mod-dynamic-tag__text {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
    font-size: 14px;
    color: #484747;
}

.mod-dynamic-tag__close {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 34px;
    height: 34px;
    border-left: 1px solid #dcdcdc;
    background-color: #fbfbfb;
}

.mod-dynamic-tag__close:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    margin-top: -6px;
    background-image: url(//wximg.gtimg.com/wxgame/mmgame/images/style-index.png);
    background-position: -208px -144px;
    cursor: pointer;
}

.mod-dynamic-tag__input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    display: inline-block;
    background-color: #fff;
    width: 150px;
    height: 34px;
    line-height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    color: #353535;
    border: none;
}

.mod-dynamic-tag__btn {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100px;
    height: 34px;
    text-align: center;
    border-left: 1px solid #dcdcdc;
    background-color: #fbfbfb;
    font-size: 14px;
    color: #353535;
    cursor: pointer;
}
.mod-basic-table {
    text-align: left;
    margin-left: -1px;
    margin-right: -1px;
}
.mod-basic-table td {
    text-overflow: ellipsis;
    max-width: 320px;
    overflow: hidden;
}
.mod-basic-table td,
.mod-basic-table th {
    min-width: auto;
}
.mod-pagination {
    margin-top: 10px;
    text-align: center;
}
.mod-frame__wrap {
    width: 98%;
    overflow-x: auto;
}
.mod-frame__wrap-box {
    overflow: hidden;
    zoom: 1;
}
.mod-frame__side {
    margin-top: 0;
    width: 15%;
    display: flex;
    justify-content: center;
    /* min-width: 208px; */
}
.mod-frame__main {
    border-left: 1px solid #e6e7e6;
    width: 84%;
    float: left;
    padding-bottom: 45px;
}
.mod-weixin-area {
    min-height: 30rem;
}
.mod-weixin-area__body {
    padding: 20px;
}
.horizontal_form,
.mod-form__landscape {
    margin-left: 15px !important;
    margin-right: 15px !important;
}
.mod-material {
    position: relative;
    zoom: 1;
}

.mod-material:before {
    content: '';
    display: block;
}

.mod-material:after {
    content: '';
    display: table;
    clear: both;
}

.mod-material__item {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    width: 182px;
    height: 242px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    margin-left: -1px;
    margin-top: -1px;
}

.mod-material__item:hover {
    border-color: #07c160;
    z-index: 1;
}

.mod-material__item:hover .mod-material__foot {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mod-material__pic-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 160px;
    height: 160px;
}

.mod-material__pic {
    display: block;
    max-width: 100%;
    max-height: 100%;
}

.mod-material__tag {
    text-align: center;
    margin-top: 10px;
}

.mod-material__foot {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    opacity: 0.9;
    height: 40px;
    line-height: 40px;
    background-color: #07c160;
    text-align: center;
    font-size: 14px;
    color: #fff;
}

.mod-material__foot-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    cursor: pointer;
    border-right: 1px solid rgba(53, 53, 53, 0.2);
}

.mod-material__foot-item:last-child {
    border-right: none;
}
.mod-material__item,
.mod-material__pic-wrap {
    cursor: pointer;
}
.mod-material__foot {
    opacity: 1;
}
.mod-material__text {
    display: block;
    line-height: 150%;
    color: #000;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    display: block;
    white-space: normal;
    text-align: center;
}
/* 覆盖open样式开始 */
.mod-frame__head-wrap {
    height: 100%;
}
.mod-frame__head {
    background-color: #fff;
    border-bottom: 1px solid #dedfe5;
}
.mod-header__logo {
    position: static;
    height: 50px;
    float: left;
    transform: translateY(0);
}
.mod-header__title {
    float: left;
}
a:hover {
    cursor: pointer;
    text-decoration: none;
}
.mod-frame__submenu-link {
    padding-left: 35px;
}
.mod-frame__submenu-link_current {
    color: #07c160;
}
.mod-header__account-logout,
.mod-header__account-logout:hover,
.mod-header__account-name,
.mod-header__account-name:hover {
    color: #333;
}
.mod-form__label {
    width: 10em;
}
.mod-chosen-panel__search .mod-chosen-panel__search-input {
    min-width: 178px !important;
}
.mod-basic-table-wraper tbody .mod-form__group {
    padding: 1rem 0;
}
.mod-basic-table-wraper tbody .mod-form__controls {
    display: inline-flex;
}
/* 覆盖open样式结束 */
</style>
