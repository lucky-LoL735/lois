<template>
  <div class="container">
    <!-- 头部导航 -->
    <header :style="{ backgroundColor: $store.state.theme }">
      <div class="logo">
        <Compass style="width: 20px; height: 20px; margin-right: 8px" /><span>山河</span>
        <div class="theme">
          <Theme></Theme>
        </div>
      </div>
      <div class="slogo">
        <p class="line"></p>
        <p class="slogo-content">专业项目管理平台！</p>
      </div>
      <div class="userinfo">
        <el-dropdown trigger="hover">
          <el-avatar :icon="UserFilled" class="avatar"/>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

    </header>
    <!-- 左侧导航 -->
    <aside class="nav">
      <el-menu
      :default-openeds="['/']"
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      >
        <template v-for="item in $router.options.routes" :key="item.name">
          <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children" :key="child.name">
              <el-menu-item :index="child.path">
                {{ child.name }}</el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item :index="item.path" v-else>
            <el-icon>
              <document />
            </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </aside>
    <!-- 面包屑 -->
    <aside class="content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="item in $route.meta.breadcrumb">
            <el-breadcrumb-item v-if="item.path" :key="item.name" :to="{ path: item.path }">{{ item.name }}
            </el-breadcrumb-item>
            <el-breadcrumb-item :key="item.path" v-else>{{
              item.name
              }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </aside>
  </div>
</template>
<script>
import { Compass, Management, Document, Histogram, List } from '@element-plus/icons-vue'
// import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import Theme from './theme.vue'
export default {
  components: {
    Compass,
    Document,
    Management,
    Histogram,
    List,
    Theme
  },
  setup () {
    // const router = useRouter()
    // const store = useStore()

    // const logout = (com) => {
    //   if (com === 'logout') {
    //     store.commit('changeUsername', { username: '', roleType: 1 })
    //     router.push('/login')
    //   }
    // }
    return {
      // logout
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #efeaed;
}
</style>
<style scoped lang="scss">
.container {
  header {
    position: fixed;
    top: 0;
    height: 48px;
    line-height: 48px;
    width: 100%;
    background: #1e80ff;
    color: #fff;
    z-index: 1000;
    display: flex;

    .logo {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      width: 200px;
      padding-left: 8px;
      font-weight: bold;

      span {
        font-size: 16px;
      }
      .theme {
        margin-left: 40px;
      }
    }

    .slogo {
      flex: 1;
      display: flex;
      align-items: center;

      p.line {
        height: 20px;
        background-color: #ccc;
        width: 1px;
      }

      p.slogo-content {
        margin-left: 8px;
        color: #fff;
      }
    }

    .userinfo {
      display: flex;
      align-items: center;
      padding-right: 16px;
      flex: 1;
      justify-content: flex-end;

      .avatar {
        width: 24px;
        height: 24px;
        cursor: pointer;
        color: #fff;
      }
    }

  }
     // 增加nav类
  .nav {
       position: fixed;
       top: 48px;
       background-color: #fff;
       bottom: 0;
       width: 208px;
  }
  .content {
    margin-left: 213px;
    margin-top: 53px;
    .breadcrumb {
      margin-bottom: 5px;
      background-color: #fff;
      padding: 10px;
    }
    .router-view {
      background-color: #fff;
      padding: 10px;
    }
  }
}
</style>
