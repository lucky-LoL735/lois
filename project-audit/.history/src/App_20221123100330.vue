<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div class="container">
      <header>
        <div class="logo">
          <i class="el-icon-discover" style="display: block;width: 20px; height: ;20px; margin-right:8px"></i>
          <span>兔子审核</span>
          <i class="el-icon-s-fold" onclick="collapse()"></i>
        </div>
        <div class="slogo">
          <p class="line"></p>
          <p class="slogo-content">一体化审核平台！</p>
        </div>
        <div class="userinfo">
          <el-dropdown trigger="hover">
            <i class="el-icon-user" style="color: #fff;font-size:16px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <!-- 左侧导航栏 -->
      <aside class="nav">
        <!-- 添加代码 -->
        <el-menu 
        :default-openeds="['/']" 
        :default-active="$route.path" router class="el-menu-vertical-demo"
          :collapse="isCollapse">
          <template v-for="item in $router.options.routes">
            <el-sub-menu :index="item.path" :key="item.name"
              v-if="!item.hidden && item.children && item.children.length > 0">
              <template slot="title">
                <i :class="[item.icon]"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="child in item.children">
                <el-menu-item :index="child.path" :key="child.name" v-if="!child.isPermisson">
                  {{ child.name }}</el-menu-item>
              </template>
            </el-sub-menu>
            <el-menu-item :index="item.path" :key="item.path" v-else-if="!item.hidden && !item.isPermisson">
              <i :class="[item.icon]"></i>
              <template slot="title">{{ item.name }}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </aside>
      <!-- 主要内容 -->
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
  //css样式设置所有元素的padding和margin为0，是为了统一不同浏览器的两个值的默认值
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #efefef;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    collapse() {
      this.isCollapse = true
    }
  },
}
</script>
<style scoped lang="scss">
.container {
  header {
    position: fixed;
    top: 0;
    height: 48px;
    width: 100%;
    line-height: 48px;
    background: #1e80ff;
    color: #fff;
    z-index: 1000;
    display: flex;

    .logo {
      height: 100%;
      ;
      width: 100%;
      display: flex;
      align-items: center;
      width: 200px;
      padding-left: 8px;
      font-weight: bold;

      span {
        font-size: 16px;
      }
    }

    .slogo {
      flex: 1;
      display: flex;
      align-items: center;
    }

    p.line {
      height: 20px;
      background-color: #ccc;
      width: 1px;
    }

    p.slogo-content {
      margin-left: 8px;
      color: #fff;
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

  .nav {
    position: fixed;
    top: 48px;
    background: #fff;
    bottom: 0;
    width: 208px;
  }

  .content {
    margin-left: 200px;
    margin-top: 33px;
  }
}
</style>

