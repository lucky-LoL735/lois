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
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
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
