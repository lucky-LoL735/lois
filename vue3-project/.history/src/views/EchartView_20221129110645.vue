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
      <el-col :span="8"><div class="stack-bar echart"></div></el-col>
      <el-col :span="8"><div class="doughnut echart"></div></el-col>
      <el-col :span="8"><div class="funnel echart"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import listApi from '../api/list'

export default {
  setup () {
    const darwEchart = function (dom, option) {
      // console.log(dom)
      const chartDom = document.querySelector(dom)
      const myChart = echarts.init(chartDom)
      option && myChart.setOption(option)
      return myChart
    }
    // 折线图
    const darwEchartLine = function (data, value) {
      const option = {
        xAxis: {
          type: 'category',
          data: data
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: value,
            type: 'line'
          }
        ]
      }
      darwEchart('div.line', option)
    }
    // 堆叠折线图
    const darwEchartStackLine = function (stackLine) {
      const serie = []
      for (let item = 0; item < 5; item++) {
        serie.push({
          name: stackLine[item].name,
          type: stackLine[item].type,
          stack: stackLine[item].stack,
          data: stackLine[item].data
        })
      }
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
        },
        series: serie
          // [         
          // {
          //   name: 'Email',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [220, 187, 191, 234, 290, 330, 310]
          // },
          // {
          //   name: 'Union Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [120, 132, 101, 134, 90, 230, 210]
          // },
          // {
          //   name: 'Video Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [150, 232, 201, 154, 190, 330, 410]
          // },
          // {
          //   name: 'Direct',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [320, 332, 301, 334, 390, 330, 320]
          // },
          // {
          //   name: 'Search Engine',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [820, 932, 901, 934, 1290, 1330, 1320]
          // }
        // ]
      }
      darwEchart('div.stack-line', option)
    }
    // 堆叠柱状图
    const darwEchartStackBar = function () {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      darwEchart('div.stack-bar', option)
    }
    // 饼状图
    const darwEchartDoughnut = function () {
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'], // 饼图半径，外半径为可视尺寸，第一个是小圆半径，第二个是大圆半径
            avoidLabelOverlap: false, // 标签重叠问题
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false // 隐藏指示线
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      darwEchart('div.doughnut', option)
    }
    const darwEchartFunnel = function () {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },

        legend: {
          data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
        },
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' }
            ]
          }
        ]
      }
      darwEchart('div.funnel', option)
    }
    const darwEchartBar = function () {
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      darwEchart('div.bar', option)
    }
    const getEchartPage = function () {
      const para = {}
      listApi
        .getEchartInfo(para).then((res) => {
          const { line, stackLine, bar, funnel } = res.data
          console.log(stackLine[0].name)
          // console.log(line.data)
          darwEchartLine(line.data, line.value)
          darwEchartStackLine(stackLine)
        })
    }
    onMounted(() => {
      // darwEchartLine()
      darwEchartStackBar()
      // darwEchartStackLine()
      darwEchartBar()
      darwEchartDoughnut()
      darwEchartFunnel()
      getEchartPage()
    })
    return {}
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;

  .echart {
    height: 300px;
  }
}
</style>
