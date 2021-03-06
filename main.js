import Vue from 'vue'
import App from './App'
import { openSdk,globalEvent } from 'utils/openSdk'
import uView from "uview-ui";
import store from '@/store';

let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

Vue.use(uView);

Vue.prototype.$store = store
Vue.prototype.$openSdk = openSdk
Vue.prototype.$globalEvent = globalEvent

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js';
Vue.use(httpApi, app);


app.$mount()
