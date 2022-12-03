import Home from '@/views/Home.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    icon: 'Management',
    name: '审批中心主页',
    component: Home,
    children: []
  },
  {
    path: '/todo',
    icon: 'List',
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
