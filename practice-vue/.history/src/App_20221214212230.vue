<template>
  <div id="app">
    <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="button" value="submit" @click="login">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: {
    return() {
      username: '',
      currentRouter: [],
      user1Routers: [
        {
          path: '/u1p1',
          components: resolve => ({})
        }
      ]
    }
  },
  methods: {
    login() {
      if (this.username === 'user1') {
        this.currentRouter = 
      }
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
