import AboutView from '@/views/AboutView.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    icon: 'Management',
    name: '审批中心主页',
    component: AboutView,
    children: []
  },
  {
    path: '/home',
    icon: 'Management',
    name: '流程待处理',
    component: null,
    children: []
  }];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
