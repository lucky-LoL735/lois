<template>
    <div class="container">
        <div class="search-box">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="客户号">
                    <el-input v-model="formInline.user" placeholder=" "></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>