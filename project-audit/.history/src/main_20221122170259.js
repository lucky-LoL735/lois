import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import mock from './mock/mock';
mock.bootstrap()//初始化模拟数据

Vue.use(elementUI, { size: 'mini', zIndex: 3000 })
Vue.config.productionTip = false
Vue.use(elementUI)
// Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 引入路由、vuex数据、element-ui以及模拟数据。’./mock’是模拟数据，mock.bootstrap()初始化这些数据