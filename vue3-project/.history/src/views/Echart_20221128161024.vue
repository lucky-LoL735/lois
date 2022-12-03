<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
       <div class="line echart"></div>
      </el-col>
      <el-col :span="8">
        <div class="stack-line echart"></div>
      </el-col>
      <el-col :span="8">
        <div class="bar echart"></div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px;">
      <el-col :span="8"><div class="stach-bar echart"></div></el-col>
      <el-col :span="8"><div class="doughnut echart"></div></el-col>
      <el-col :span="8"><div class="funnel echart"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

export default {
  setup () {
    const drawEchart = function (dom, option) {
      const chartDom = document.querySelector(dom)
      const myChart = echarts.init(chartDom)
      option && myChart.setOption(option)
      return myChart
    }
    const drawEchartLine = function () {
      const option = {
        xAxis: {
          type: 'catagory',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
      drawEchart('div.line', option)
    }
    const drawEchartStackLine = function () {
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          constainLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        }
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [220, 187, 191, 234, 290, 330, 310]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    }
  }
}
</script>
