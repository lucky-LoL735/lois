<template>
    <section>
        <el-row>
            <!-- 工具条 -->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input v-model="filters.name" clearable placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <!-- 列表 -->
            <el-table
            :data="projects"
            highlight-current-row
            v-loading="listLoading"
            style="width: 100%;"
            ></el-table>
        </el-row>
    </section>
</template>
