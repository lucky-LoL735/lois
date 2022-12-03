import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProjectList from '../views/ProjectList.vue'
import vue2Page from '../views/vue2Page.vue'
import vue3Page from '../views/vue3Page.vue'
import EchartView from '../views/EchartView.vue'
import Error from '../views/ErrorView.vue'
import User from '../views/UserList.vue'
const routes = [
  {
    path: '/',
    icon: 'Management',
    name: '项目管理',
    // redirect: '/list',
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
        name: '待办事宜'
      }]
    },
    children: [{
      path: '/todo/vue2',
      component: vue2Page,
      name: 'vue2语法',
      // 添加路由元信息
      meta: {
        breadcrumb: [{
          path: '',
          name: '待办事宜'
        }, {
          path: '/todo/vue2',
          name: 'vue2语法'
        }]
      }
    },
    {
      path: '/todo/vue3',
      component: vue3Page,
      name: 'vue3语法',
      // 添加路由元信息
      meta: {
        breadcrumb: [{
          path: '',
          name: '待办事宜'
        }, {
          path: '/todo/vue3',
          name: 'vue3语法'
        }]
      }
    }]
  }, {
    path: '/echart',
    component: EchartView,
    icon: 'Histogram',
    name: '所有类别图案',
    meta: {
      breadcrumb: [{
        path: '/echart',
        name: '所有类别图案'
      }]
    }
  },
  {
    path: '/user',
    component: User,
    icon: 'Management',
    name: '用户管理',
    isPermisson: false,
    children: [
    ],
    meta: {
      breadcrumb: [{
        path: '/user',
        name: '用户管理'
      }]
    }
  },
  {
    path: '/:w+',
    component: Error,
    name: '错误页面',
    hidden: true
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
