<template>
  <div class="container">
    <div class="todo-box">
      <p class="top">
        <el-input v-model="todo" placeholder="what done to do"></el-input>
      </p>
      <div class="content">
        <el-checkbox-group v-model="checkList">
          <p v-for="(item, index ) in todoList" :key="index">
            <el-checkbox :label="item"></el-checkbox>
          </p>
        </el-checkbox-group>
      </div>
      <div class="bottom">
        <p>{{ leftLen }} item left</p>
        <p :class="activeType === item && 'active'" :key="index" v-for="(item, index) in plist">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { computed } from 'vue-demi'
export default {
  setup () {
    const todo = ''
    const checkList = ref([])
    const plist = ref(['All', 'Active', 'Completed'])
    const activeType = ref('All')
    const cacheCheckbox = ref([])
    const todoList = computed({
      get () {
        if (activeType.value === 'Active') {
          return cacheCheckbox.value.filter(
            (box) => !checkList.value.includes(box)
          )
        }
        if (activeType.value === 'Completed') {
          return cacheCheckbox.value.filter(
            (box) => !checkList.value.includes(box)
          )
        }
        return cacheCheckbox.value
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;

  .todo-box {
    border: 1px solid #333;
    padding: 8px;
    border-radius: 4px;

    .content {
      min-height: 122px;
      max-height: 122px;
      overflow-y: auto;
    }
  }

  .bottom {
    display: flex;
    align-items: center;

    p {
      font-size: 12px;
    }

    p+p {
      margin-left: 10px;
    }

    p:nth-child(n + 2) {
      cursor: pointer;
    }

    p.active {
      border: 1px solid #e9e9eb;
      padding: 3px;
      border-radius: 3px;
    }
  }
}
</style>
