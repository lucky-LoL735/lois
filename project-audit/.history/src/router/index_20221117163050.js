//import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
//import MainView from '@/views/MainView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [],
    hidden: true
  },
 {
        path: '/home',
        icon: 'Management',
        name: '审批中心主页',
        component: HomeView
      },
      {
        path: '/todo',
        icon: 'List',
        name: '流程待处理',
        component: null
      }];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
