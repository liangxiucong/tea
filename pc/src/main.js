// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './vuex'
import C from '@/common/C'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.use(iView)
window.C = C; //运用就直接 C.Utils.data()

router.beforeEach((to, from, next)=> {
	iView.LoadingBar.start();
	// 路由跳转 在后台管理必须 检验是否已经登录
	if (to.matched.some(record=> record.meta.requiresAuth)) {
		next()
	} else {
		next();
	}
})
router.afterEach(()=> {
	iView.LoadingBar.finish();
})

// 请求接口前统一处理
axios.interceptors.request.use(config=> {
	config.baseURL = 'http://localhost:7007'; // node后台端口
	config.url = config.baseURL + config.url;
	return config;
})
axios.interceptors.response.use(config=> {
	return Promise.reject(error);
})
Vue.prototype.$ajax = axios;
// 用法 this.$ajax.get / this.$ajax.post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
