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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
