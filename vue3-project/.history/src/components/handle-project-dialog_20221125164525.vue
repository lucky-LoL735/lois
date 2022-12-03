<template>
  <!--新增界面-->
  <el-dialog :title="title" v-model="visible" :close-on-click-modal="false">
    <el-form :model="addForm" label-width="80px" label-position="left" :rules="addFormRules" ref="addFormRef">
      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="addForm.projectName" placeholder="输入项目名称" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="项目别名">
        <el-input v-model="addForm.alias" placeholder="输入项目名称" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="涉及金额(￥)">
        <el-input-number placeholder="输入涉及金额" v-model="addForm.capital" :min="1" :max="100000000" style="width:100%">
        </el-input-number>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="addForm.desc" placeholder="输入描述" :rows="4" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="handleProject" :loading="addLoading">提交</el-button>
    </template>
  </el-dialog>
</template>
<script>
import listApi from '../api/list'
import { reactive, ref, computed, toRefs } from 'vue'
import { ELMessage } from 'element-plus'

export default {
  props: ['modelrVue', 'initFormValue'],
  emits: ['update:modelValue'],
  setup (props, context) {
    let addLoading = ref(false)
    const editFormRules = reactive({
      projectName: [
        { require: true, message: '请输入项目名称', trigger: 'blur' }
      ]
    })
    const { initFormValue, modelValue } = toRefs(props)
    const visible = computed({
      get: () => modelValue.value,
      set: () => {
        context.emit('update:modelValue', false)
      }
    })
    const addForm = initFormValue
    let title = ref(addForm.value.id ? '编辑项目' : '新增项目')
    let addFormRef = ref(null)
    const handleProject = () => {
      addFormRef.value.validate((valid) => {
        if (valid) {
          addLoading.value = true
          let para = Object.assign({}, addForm.value)
          const api = para.id
            ? listApi.putEditProject
            : listApi.postAddProject
          api(para)
            .then(() => {
              ElMessage({
                message: "提交成功",
                type: "success",
              })
              visible.value = false
              context.emit("getProjectList")
            })
            .finally(() => {
              addLoading.value = false
            })
        }
      })
    }
  }
}
</script>
