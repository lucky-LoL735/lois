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
<script>
import api from '@/api/api';
import * as echarts from 'echarts'
export default ({
  name: "HomeView",
  msg: {
    content: '',
    author: ''
  },
  methods: {
    darwEchart(dom, option) {
      const chartDom = document.querySelector(dom);
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      return myChart;
    },
    darwEchartStackLine() {
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ["流程合计", "已处理", "待处理"],
        },
        grid: {
          left: "3%",
          right: "7%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          name: "月份",
          type: "category",
          data: [
            "2021-10",
            "2021-11",
            "2021-12",
            "2022-1",
            "2022-2",
            "2022-3",
            "2022-4",
            "2022-5",
            "2022-6",
            "2022-7",
          ]
        },
        yAxis: {
          name: "任务量",
          type: "value",
        },
        series: [
          {
            name: "流程合计",
            type: "line",
            stack: "Total",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "已处理",
            type: "line",
            stack: "Total",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "待处理",
            type: "line",
            stack: "Total",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      };
      this.darwEchart("div.stack-line", option);
    },
    darwEchartDoughnut() {
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",

        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "授信审核" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.darwEchart("div.doughnut", option);
    },
    getHomeDataInfo() {
      let param = {
        message: this.msg
      };
      api
        .getHomeData(param).then((res) => {
          console.log(res);
          this.msg = res.homeInfo;
          console.log(this.msg)
      })
    }
  },
  mounted() {
    this.darwEchartStackLine();
    this.darwEchartDoughnut();
    this.getHomeDataInfo();
  }
})
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}

.same {
  background-color: #fff;
  display: flex;
  padding-left: 10px;
  height: 100px;
  align-items: center;
  font-size: 12px;
}

.four {
  background-color: #fff;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;

  >p {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 5px;
    }
  }

  .mes-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

    p {
      display: flex;
      justify-content: space-between;

      .info-icon {
        color: #e6a23c;
        font-size: 12px;
      }

      .mes {
        font-size: 12px;
      }

      span:first-child {
        display: flex;
        align-items: center;

        .mes {
          margin-left: 5px;
        }
      }
    }
  }
}

.echart-box {
  margin-top: 5px;

  .echart {
    height: 300px;
  }

  ::v-deep .el-card__header {
    padding: 0;

    .card-header {
      padding: 5px 10px;
      background-color: #c6e2ff;

      span {
        font-size: 14px;
        border-left: 4px solid #409EFF;
        padding-left: 5px;
      }
    }
  }

}

.breadcrumb {
  margin-bottom: 5px;
  background-color: #fff;
  padding: 10px;
}
</style>
