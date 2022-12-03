<template>
  <!--新增界面-->
  <el-dialog :title="title" v-model="visible" :close-on-click-modal="false">
    <el-form :model="addForm" label-width="60px" label-position="left" :rules="addFormRules" ref="addFormRef">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="addForm.name" placeholder="输入姓名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="addForm.sex">
          <el-radio class="radio" :label="1">男</el-radio>
          <el-radio class="radio" :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number style="width: 100%" v-model="addForm.age" :min="0" :max="200"></el-input-number>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker type="date" style="width: 100%" value-format="YYYY-MM-DD" placeholder="选择日期"
          v-model="addForm.birth"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" placeholder="输入地址" :rows="4" v-model="addForm.addr"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="handleUser" :loading="addLoading">提交</el-button>
    </template>
  </el-dialog>
</template>
<script>
import { reactive, ref, computed, toRefs } from 'vue'
import userApi from '../api/user'
import { ElMessage } from 'element-plus'

export default {
  props: ['modelValue', 'initFormValue'],
  emits: ['update:modelValue'],
  setup (props, context) {
    const addLoading = ref(false)
    const editFormRules = reactive({
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
    })
    const { modelValue, initFormValue } = toRefs(props)
    const visible = computed({
      get: () => modelValue.value,
      set: () => {
        context.emit('update:modelValue', false)
      }
    })
    const addForm = initFormValue
    const title = ref(addForm.value.id ? '编辑成员' : '新增成员')
    const addFormRef = ref(null)

    const handleUser = () => {
      addFormRef.value.validate((valid) => {
        if (valid) {
          addLoading.value = true
          const para = Object.assign({}, addForm.value)
          const api = para.id ? userApi.putEditUser : userApi.postAddUser
          api(para)
            .then(() => {
              ElMessage({
                message: '提交成功',
                type: 'success'
              })
              visible.value = false
              context.emit('getUserList')
            })
            .finally(() => {
              addLoading.value = false
            })
        }
      })
    }
    return {
      addForm,
      addLoading,
      title,
      addFormRef,
      editFormRules,
      visible,
      handleUser
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
