<template>
  <div id="app">
    <router-view></router-view>
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
