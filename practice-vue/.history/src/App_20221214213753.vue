<template>
  <div id="app">
    <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
    <el-button primary value="submit" @click="login"></el-button>
  </div>
</template>

<script>
import u1p1View from './components/u1p1View.vue'
import u1p2View from './components/u1p2View.vue'
import u2p2View from './components/u2p2View.vue'
import u2p1View from './components/u2p1View.vue'

export default {
  name: 'App',
  data() {
    return {
      username: '',
      currentRouter: [],
      user1Routers: [
        {
          path: '/u1p1',
          components: u1p1View,
          meta: {
            name: 'u1p1'
          }
        },
        {
          path: '/u1p2',
          components: u1p2View,
          meta: {
            name: 'u1p2'
          }
        }
      ],
      user2Routers: [
        {
          path: '/u2p1',
          components: u2p1View,
          meta: {
            name: 'u2p1'
          }
        },
        {
          path: '/u2p2',
          components: u2p2View,
          meta: {
            name: 'u2p2'
          }
        }
      ]
    }
  },
  methods: {
    login() {
      if (this.username === 'user1') {
        this.currentRouter = this.user1Routers
        this.user1Routers.forEach(r => {
          this.$router.addRoute(r)
        })
      } else {
        this.currentRouter = this.user2Routers
        this.user1Routers.forEach(r => {
          this.$router.addRoute(r)
        })
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
