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
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total"
          style="float: right">
        </el-pagination>
      </el-col>
    </el-row>
    <handleUserDialog @getUserList="getUserList" :initFormValue="editForm" v-model="addFormVisible"
      v-if="addFormVisible"></handleUserDialog>
  </section>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'
import userApi from '../api/user'
export default ({
  setup () {
    const users = ref([])
    const userLoading = ref(false)
    const page = ref(1)
    const total = ref(0)
    const filters = reactive({
      name: ''
    })
    // const sels = ref([])
    // const selsChange = function (selection) {
    //   sels.value = selection
    //   console.log(sels.value)
    // }
    const queryByName = function () {
      const para = {
        name: filters.name,
        page: page
      }
      userApi
        .getUserListPage(para).then((res) => {
          console.log(res)
        // users.value = res.
      })
    }
    onMounted(() => {
      queryByName()
    })
    return {
      users,
      userLoading,
      page,
      total,
      filters
      // selsChange
    }
  }
})
</script>
