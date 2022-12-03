<template>
    <section>
        <el-row>
            <!-- 工具条 -->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input v-model="filters.name" clearable placeholder="姓名"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>