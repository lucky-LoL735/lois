<template>
    <div class="container">
        <div class="search-box">
            <el-form :inline="true" :model="filters" class="demo-form-inline">
                <el-form-item label="客户号">
                    <el-input 
                    clearable
                    v-model="formInline.customerCode" 
                    placeholder="客户号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                    type="primary" 
                    @click="onSubmit"
                    :loading="loading.btnLoading">搜索</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" stripe style="width: 100%" v-loading="loading.listLoading">
                <el-table-column type="index" width="50" label="序号" />
            
                <el-table-column prop="projectCode" label="项目编号" width="120" />
                <el-table-column prop="customerCode" label="客户号" width="120" />
                <el-table-column prop="customer" label="客户名称" width="120" />
                <el-table-column prop="flowtemplateType" label="流程模板类型" width="120" />
                <el-table-column prop="projectName" label="项目名称" width="120" />
                <el-table-column prop="flowType" label="流程类型" min-width="120" />
            
                <el-table-column fixed="right" label="操作" width="360">
                    <template slot-scope="{row}">
                        <el-button link type="primary" @click="gotoHandleTask" size="small">
                            处理任务
                        </el-button>
                        <el-button link type="primary" @click="gotoFlowView" size="small">
                            流程视图
                        </el-button>
                        <el-button link type="primary" @click="gotoSeeLog" size="small">
                            查看日志
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            total: 0,
            page: 1,
            pageSize: 10,
            filters: {
                customerCode: ''
            },
            loading: {
                listLoading: false,
                btnLoading: false,
            }
            
        }
    }
}
</script>
