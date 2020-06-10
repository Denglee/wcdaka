import Vue from 'vue'

// 引入插件，放在此处引用是为了下面的router和store中可能会用到某些插件的功能。
import './plugins/plugins'
import App from './App.vue'

import routerConfigure from './router/routerConfigure'
import store from './store/store'

Vue.config.productionTip = false;

import Axios from 'axios'

/*引用axios*/
Vue.prototype.$axios=Axios;


/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === 'pro') {
    //production 生产环境发布 地址
    let localUrl = window.location.origin;
    Axios.defaults.baseURL = localUrl;//正式 路径
  } else {
    Axios.defaults.baseURL = 'http://vikily.f3322.net:20000';//测试环境路径
    // Vue.config.optimization.minimize(false);  //代码不压缩
  }
} else {

  // dev 开发环境 本地 /api
  Axios.defaults.baseURL = '/api';
}



let Vm  = new Vue({
  router: routerConfigure,
  store,
  render: h => h(App)
}).$mount('#app')
