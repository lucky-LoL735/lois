import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

var routes = [
  {
    path: '/',
    children: [],
    component: null
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router