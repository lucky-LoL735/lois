<template>
  <div class="home">
    <div class="breadcrumb">审批中心主页</div>
    <el-row :gutter="10">
    <el-col :span="5"><div class="grid-content same">流程合计： 5</div>
    </el-col>
    <el-col :span="5"><div class="grid-content same">已处理： 5</div>
    </el-col>
    <el-col :span="5">
      <div class="grid-content same">待处理： 3</div>
    </el-col>
    <el-col :span="9"><div class=".grid-content four">
      <p>
        <i class="el-icon-message-solid" style="color: #67c23a;"></i>
        <span>消息提醒</span>
      </p>
      <div class="mes-box">
        <p>
          <span>
            <i class="el-icon-info info-icon"></i>
            <span class="mes">消息1</span>
            <span class="mes">xx1</span>
          </span>
        </p>
        <p>
          <span>
          <i class="el-icon-info info-icon"></i>
          <span class="mes">消息2</span>
          <span class="mes">xx2</span>
        </span>
      </p>
      </div>
    </div></el-col>
  </el-row>
  <el-row :gutter="10" class="echart-box">
    <el-col :span="12">
      <el-card class="box-card">
        <template slot="header">
          <div class="card-header">
            <span>近一年任务累计统计图</span>
          </div>
        </template>
        <div class="stack-line echart"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <template slot="header">
          <div class="card-header">
            <span>业务详细占比图</span>
          </div>
        </template>
        <div class="doughnut echart"></div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>