import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProjectList from '../views/ProjectList.vue'
const routes = [
  {
    path: '/',
    icon: 'Management',
    name: '项目管理',
    // 添加路由元信息
    // 元信息用来生成面包屑导航
    meta: {
      breadcrumb: [{
        path: '',
        name: '项目管理'
      }]
    },
    children: [{
      path: '/list',
      component: ProjectList,
      name: '项目列表',
      meta: {
        breadcrumb: [{
          path: '',
          name: '项目管理'
        },
        {
          path: '/list',
          name: '项目列表'
        }]
      }
    }]
  },
  {
  path: '/todo',
  icon: 'List',
  name: '待办事宜',
  meta: {
    breadcrumb: [{
      path: '',
      name: '待办事宜',
    }]
  },
  children: [{
    path: '/todo/vue2',
    component: null,
    name: 'vue2语法',
    // 添加路由元信息
    meta: {
      breadcrumb: [{
        path: '',
        name: '待办事宜',
      }, {
        path: '/todo/vue2',
        name: 'vue2语法',
      }]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
