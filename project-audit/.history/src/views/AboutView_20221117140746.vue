<template>
  <div class="container">
    <header>
      <div class="logo">
        <i class="el-icon-discover" style="display: block;width: 20px; height: ;20px; margin-right:8px"></i>
        <span>兔子审核</span>
      </div>
      <div class="slogo">
        <p class="line"></p>
        <p class="slogo-content">一体化审核平台！</p>
      </div>
      <div class="userinfo">
        <el-dropdown trigger="hover" @command="logout">
          <i class="el-icon-user" style="color: #fff;font-size:16px;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <aside class="nav"></aside>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  }
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
}
</style>
