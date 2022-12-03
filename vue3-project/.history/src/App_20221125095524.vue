<template>
  <div class="container">
    <header>
      <div class="logo">
        <Compass style="width: 20px; height: 20px; margin-right: 8px" /><span>山河</span>
      </div>
      <div class="slogo">
        <p class="line"></p>
        <p class="slogo-content">专业项目管理平台！</p>
      </div>
      <div class="userinfo">
        <el-dropdown trigger="hover">
          <Avatar class="avatar" />
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
  </div>
</template>

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
}
</style>
