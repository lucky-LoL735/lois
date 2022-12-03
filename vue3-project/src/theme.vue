<template>
  <el-color-picker v-model="color" @change="changeColor" />
</template>
<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  setup () {
    const store = useStore()
    const color = ref('#1e80ff')
    const changeColor = function (value) {
      const node = document.documentElement
      // 前缀
      const pre = '--el-color-primary'
      // 主色调(可以使用el-color-picker绑定)
      const color = value
      // 源码中的$color-white，也就是白色
      const mixWhite = '#ffffff'
      // 直接为根设置内联样式覆盖:root选择器的样式
      node.style.setProperty(pre, color)
      for (let i = 1; i < 10; i += 1) {
        // 同理
        node.style.setProperty(
          `${pre}-light-${i}`,
          mix(color, mixWhite, i * 0.1)
        )
      }
      store.commit('changeTheme', value)
    }
    const mix = function (color1, color2, weight) {
      weight = Math.max(Math.min(Number(weight), 1), 0)
      const r1 = parseInt(color1.substring(1, 3), 16)
      const g1 = parseInt(color1.substring(3, 5), 16)
      const b1 = parseInt(color1.substring(5, 7), 16)
      const r2 = parseInt(color2.substring(1, 3), 16)
      const g2 = parseInt(color2.substring(3, 5), 16)
      const b2 = parseInt(color2.substring(5, 7), 16)
      const r = Math.round(r1 * (1 - weight) + r2 * weight)
      const g = Math.round(g1 * (1 - weight) + g2 * weight)
      const b = Math.round(b1 * (1 - weight) + b2 * weight)
      const _r = ('0' + (r || 0).toString(16)).slice(-2)
      const _g = ('0' + (g || 0).toString(16)).slice(-2)
      const _b = ('0' + (b || 0).toString(16)).slice(-2)
      return '# ' + _r + _g + _b
    }
    return {
      color,
      changeColor
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
