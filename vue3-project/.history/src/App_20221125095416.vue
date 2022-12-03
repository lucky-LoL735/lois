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
