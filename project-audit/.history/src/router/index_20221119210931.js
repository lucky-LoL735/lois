import HomeView from '@/views/HomeView.vue';
//import MainView from '@/views/MainView.vue'
import ToDo from '@/views/ToDo.vue'
import Error from '../views/Error.vue'
import LogDetail from '../views/LogDetail.vue'
import FlowView from '../views/FlowView.vue'
import HandleTask from '../views/HandleTask.vue'
import SeeLog from '../views/SeeLog.vue'
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
    component: ToDo
  },
  {
    path: '/handletask',
    icon: 'List',
    name: '处理任务',
    component: HandleTask,
    hidden: true,
    children: []
  },
  {
    path: '/flowview',
    icon: 'List',
    name: '流程视图',
    component: FlowView,
    children: [],
    hidden: true
  },
  {
    path: '/seelog',
    icon: 'List',
    name: '查看日志',
    component: SeeLog,
    children: [],
    hidden: true
  },
  {
    path: '/logdetail',
    icon: 'List',
    name: '日志详情',
    component: LogDetail,
    children: [],
    hidden: true
  },
  {
    path: '*',
    component: Error,
    name: '错误页面',
    hidden: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
