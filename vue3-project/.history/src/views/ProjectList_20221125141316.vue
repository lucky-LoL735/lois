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
                <template #default="scope">
                    <el-button size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-row>
    </section>
</template>
