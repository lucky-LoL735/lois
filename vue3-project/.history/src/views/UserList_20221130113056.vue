<template>
  <section>
    <el-row>
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model.trim="filters.name" clearable @input="queryByName" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="batchRemove">批量删除</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--列表-->
      <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%"
        @selection-change="selsChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable>
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="120" sortable>
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-pagination background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="15"
        :total="total"
        style="float: right;margin-top: 5px;">
        </el-pagination>
      </el-col>
    </el-row>
    <handleUserDialogVue
    @getUserList="getUserList"
    :initFormValue="editForm"
    v-model="addFormVisible"
      v-if="addFormVisible"
      ></handleUserDialogVue>
  </section>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'
import userApi from '../api/user'
import handleUserDialogVue from '@/components/handle-user-dialog.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default ({
  components: {
    handleUserDialogVue
  },
  setup () {
    const users = ref([])
    const userLoading = ref(false)
    const page = ref(1)
    const total = ref(0)
    const filters = reactive({
      name: ''
    })
    const addFormVisible = ref(false)
    const editForm = ref(null)
    const getUserListPage = function () {
      const para = {
        page: page.value,
        name: filters.name
      }
      userLoading.value = true
      userApi
        .getUserListPage(para)
        .then((res) => {
          total.value = res.total
          users.value = res.users
        })
        .finally(() => {
          userLoading.value = false
        })
    }
    // const sels = ref([])
    // const selsChange = function (selection) {
    //   sels.value = selection
    //   console.log(sels.value)
    // }
    let setTimeQuery = null
    const queryByName = function (val) {
      setTimeQuery && clearTimeout(setTimeQuery)
      setTimeQuery = setTimeout(() => {
        setTimeQuery = null
        getUserListPage()
      }, 500)
    }
    const handleCurrentChange = function (val) {
      page.value = val
      getUserListPage()
    }
    const getUserList = () => {
      page.value = 1
      filters.name = ''
      getUserListPage()
    }
    // 新增
    const handleAdd = () => {
      addFormVisible.value = true
      editForm.value = {
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
      }
    }
    // 编辑
    const handleEdit = (index, row) => {
      addFormVisible.value = true
      editForm.value = Object.assign({}, row)
    }
    // 删除
    const handleDel = function (index, row) {
      ElMessageBox.confirm('确定要删除该条用户信息吗？', '提示', {
        type: 'warning'
      })
        .then(() => {
          const para = {
            id: index
          }
          userApi.getRemoveUser(para).then(() => {
            ElMessage({
              msg: '删除成功',
              
            })
          })
      })
    }
    onMounted(() => {
      // queryByName()
      getUserListPage()
    })
    return {
      users,
      userLoading,
      page,
      total,
      filters,
      addFormVisible,
      editForm,
      handleCurrentChange,
      getUserList,
      queryByName,
      handleAdd,
      handleEdit,
      handleDel
      // selsChange
    }
  }
})
</script>
