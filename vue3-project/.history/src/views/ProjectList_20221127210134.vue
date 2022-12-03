<template>
    <section>
        <el-row>
            <!-- 工具条 -->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input v-model="filters.name" clearable placeholder="姓名" @input="searchProjectByName"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="searchProjectByName">搜索</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <!-- 列表 -->
            <el-table
            :data="projects"
            highlight-current-row
            v-loading="listLoading"
            style="width: 100%;"
            @selection-change="selsChange"
            >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column type="index" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="projectName" label="项目名称" width="180" sortable>
            </el-table-column>
            <el-table-column prop="alias" label="项目别名" width="180" sortable>
            </el-table-column>
            <el-table-column prop="capital" label="涉及资金(￥)" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="desc" label="项目描述" width="240" sortable>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <!-- #default="scope" -->
              <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)>删除</el-button>
                </template>
            </el-table-column>
            </el-table>
            <!--工具条-->
            <el-col :span="24" class="toolbar">
            <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="20"
            :total="total"
            style="float: right">
            </el-pagination>
            </el-col>
        </el-row>
        <handleProjectDialog
        @getProjectList="getProjectList"
        :initFormValue="editForm"
        v-model="formVisible"
        v-if="formVisible"
        ></handleProjectDialog>
    </section>
</template>
<script>
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import listApi from '../api/list'
export default {
  components: {
    handleProjectDialog: defineAsyncComponent(() =>
      import('../components/handle-project-dialog.vue')
    )
  },
  setup () {
    const total = ref(0)
    const page = ref(1)
    const listLoading = ref(false)
    const editForm = ref(null)
    const filters = reactive({
      name: ''
    })
    const formVisible = ref(false)
    const projects = ref([])
    // 查方法
    const getProjectList = () => {
      const para = {
        page: page.value,
        name: filters.name
      }
      listLoading.value = true
      listApi
        .getProjectListPage(para)
        .then((res) => {
          total.value = res.total
          projects.value = res.projects
          // console.log(projects.value)
        })
        .finally(() => {
          listLoading.value = false
        })
    }
    let setTimeQuery = null
    const searchProjectByName = () => {
      setTimeQuery && clearTimeout(setTimeQuery)
      setTimeQuery = setTimeout(() => {
        setTimeQuery = null
        getProjectList()
      }, 500)
    }
    const sels = ref([])
    const selsChange = (selection) => {
      sels.value = selection
    }
    const handleCurrentChange = (val) => {
      page.value = val
      getProjectList()
    }
    // 显示新增界面
    const handleAdd = () => {
      formVisible.value = true
      editForm.value = {
        projectName: '',
        alias: '',
        desc: '',
        capital: 10000
      }
    }
    // 显示编辑界面
    const handleEdit = (index, row) => {
      formVisible.value = true
      editForm.value = Object.assign({}, row)
    }
    // 删除
    const handleDel = (index, row) => {
      ElMessageBox.confirm("确认删除该记录吗?", "提示", {
        type: "warning",
      })
        .then(() => {
          let para = { id: row.id }
          listApi.getRemoveProject(para).then((res) => {
            ElMessage({
              message: "删除成功",
              type: "success"
            });
            getProjectListPage()
          });
        })
        .catch(() => { });
    }
    onMounted(() => {
      getProjectList()
      console.log(formVisible.value)
    })
    return {
      total,
      page,
      listLoading,
      filters,
      projects,
      formVisible,
      editForm,
      handleCurrentChange,
      searchProjectByName,
      selsChange,
      handleAdd,
      handleEdit,
      handleDel
    }
  }
}
</script>
<style scoped>

</style>
