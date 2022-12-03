404
page n o t f ound
500
page n o t f ound
TDD
开放中
筹备中
Introduce
大赛介绍
参赛选手
Contestant
开始测试
Examination
已认证
TOP20学习榜单
项目+挑战 更系统科学的学习模式
对标岗位核心技能 助力职业化技能提升
全方位教学运营服务 为学习效果保驾护航
推荐
部门分析
岗位分析
报告概览
技能分析
人工智能算法
积分规则
Integral
文章
实战营
实战营
视频课
大师课
LINK
项目
LIVE
排行榜
Ranking List
/
首页
首页
学习
学习
我的
我的
技能
技能
Link
图文
项目
视频
返回
任务4 开发一体化审核平台流程待处理
avatar
任务描述
流程待处理界面是本项目的第二个主菜单，一共包含4个子页面，这个任务需要完成共计5个页面外，还需要配置响应的路由，正如我们在任务3中对审批中心页配置的。除此之外本任务需要使用模拟接口，通过接口获取数据并渲染到对应前端位置。

任务要求
学完本任务，能够了解axios-mock-adapter模拟后端接口的使用，掌握使用mockjs模拟数据以及使用封装好的http请求方法写接口。

4-1 增加流程待处理菜单路由配置
效果图中的流程待处理菜单一共有5个页面。在src目录下views文件夹下创建ToDo.vue、HandleTask.vue、FlowView.vue、SeeLog.vue、LogDetail.vue文件，分别作为流程待处理、处理任务、流程视图、查看日志和日志详情页面文件，同时修改vue-router配置，添加相应配置。同时隐藏处理任务、流程视图、查看日志和日志详情页面。

import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ToDo from '../views/ToDo.vue'
import Error from '../views/Error.vue'
import LogDetail from '../views/LogDetail.vue'
import FlowView from '../views/FlowView.vue'
import HandleTask from '../views/HandleTask.vue'
import SeeLog from '../views/SeeLog.vue'

Vue.use(VueRouter)

let routes = [{
  path: '/',
  redirect: '/home',
  children: [],
  hidden: true
},
{
  path: '/home',
  icon: 'Management',
  name: '审批中心主页',
  component: HomeView,
  children: []
},
{
  path: '/todo',
  icon: 'List',
  name: '流程待处理',
  component: ToDo,
  children: []
},{
  path: '/handletask',
  icon: 'List',
  name: '处理任务',
  component: HandleTask,
  hidden: true,
  children: []
},{
  path: '/flowview',
  icon: 'List',
  name: '流程视图',
  component: FlowView,
  children: [],
  hidden: true
},{
  path: '/seelog',
  icon: 'List',
  name: '查看日志',
  component: SeeLog,
  children: [],
  hidden: true

},{
  path: '/logdetail',
  icon: 'List',
  name: '日志详情',
  component: LogDetail,
  children: [],
  hidden: true

}];

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
4-2 使用Element-ui组件开发页面
4-2-1 开发流程待处理页面
主要使用element-ui的el-button、el-table和el-Pagination组件，开发后代码：

<template>
  <div class="container">
    <div class="search-box">
      <el-form :inline="true" :model="filters" class="demo-form-inline">
        <el-form-item label="客户号">
          <el-input
            clearable
            v-model="filters.customerCode"
            placeholder="客户号"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            :loading="loading.btnLoading"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      v-loading="loading.listLoading"
    >
      <el-table-column type="index" width="50" label="序号" />

      <el-table-column prop="projectCode" label="项目编号" width="120" />
      <el-table-column prop="customerCode" label="客户号" width="120" />
      <el-table-column prop="customer" label="客户名称" width="120" />
      <el-table-column
        prop="flowtemplateType"
        label="流程模板类型"
        width="120"
      />
      <el-table-column prop="projectName" label="项目名称" width="120" />
      <el-table-column prop="flowType" label="流程类型" min-width="120" />

      <el-table-column fixed="right" label="操作" width="360">
        <template  slot-scope="{row}">
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
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :currentPage="page"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
      @size-change="sizeChange"
      :page-sizes="[10, 20, 40, 50]"
      :total="total"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>
<script>

import api from "./api/";

export default {
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      loading: {
        listLoading: false,
        btnLoading: false,
      },
      tableData: [
        {
          projectCode: "2016-05-03",
          customerCode: "Tom",
          customer: "No. 189, Grove St, Los Angeles",
          flowtemplateType: "",
          projectName: "",
          flowType: "",
        },
      ],
      filters: {
        customerCode: ''
      },
    };
  },
  methods: {
    handleCurrentChange(){
      this.getTodoListData()
    },
    sizeChange(){
      this.getTodoListData()
    },
    onSubmit(){
      this.loading.btnLoading = true;
      this.page = 1;
      this.pageSize = 10;
      this.getTodoListData();
    },
    gotoHandleTask(){
      this.$router.push("/handletask");
    },
    gotoFlowView(){
      this.$router.push("/seelog");
    },
    gotoSeeLog(){
      this.$router.push("/seelog");
    },
    getTodoListData(){
      let para = {
        page: this.page,
        code: this.filters.customerCode,
        pageSize: this.pageSize,
      };
      this.loading.listLoading = true;

      api
        .getTodoListPage(para)
        .then((res) => {
          this.tableData = res.projects;
          this.total = res.total;
        })
        .finally(() => {
          this.loading.btnLoading = false;
          this.loading.listLoading = false;
        });
    }
  },
  mounted(){
    this.getTodoListData()
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  overflow: hidden;
  padding: 10px;
  .pagination {
    clear: both;
    margin-top: 10px;
    padding-bottom: 10px;
    float: right;
  }
}
</style>
对应api文件接口：

import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
const api = {
  getTodoListPage (params) {
    return ajaxGetData({ url: `/todo/listpage`, params: params })
  }
}
export default api
对应mock查询接口为：

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Projects  } from './project';
let _Project = Projects
export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    //获取项目列表（分页）
    mock.onGet('/todo/listpage').reply(config => {
      let {page, code, pageSize} = config.params;
      let mockProjects = _Project.filter(project => {
        if (code && project.projectName.indexOf(code) == -1) return false;
        return true;
      });
      let total = mockProjects.length;
      mockProjects = mockProjects.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            projects: mockProjects
          }]);
        }, 500);
      });
    });

  }
};
备注：./project文件数据可以查看项目后的参考代码

预览效果如下:

image.png

4-2-2 开发处理任务页面
主要使用element-ui的el-tabs、el-button组件，开发后代码：

<template>
  <div class="container">
    <div class="tab-box">
      <el-tabs v-model="activeName" class="tabs">
        <el-tab-pane label="客户信息" name="first">
          <el-button type="primary">单一客户基本信息</el-button>
          <div class="table-box">
            <h4>单一客户信息</h4>
            <table>
              <tr>
                <td>客户信息</td>
                <td></td>
                <td>子系统绑定ID</td>
                <td></td>
              </tr>
              <tr>
                <td>客户类型</td>
                <td></td>
                <td>客户子系统</td>
                <td></td>
              </tr>
              <tr>
                <td>证件类型</td>
                <td></td>
                <td>证件号码</td>
                <td></td>
              </tr>
              <tr>
                <td>行业分类</td>
                <td></td>
                <td>客户状态</td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  .table-box {
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      td {
        border: 1px solid #d4d7de;
        width: 25%;
        height: 24px;
        vertical-align: middle;
        text-align: right;
        padding-right: 5px;
        font-size: 12px;
      }
      td:nth-child(2n + 1) {
        background: #e4e7ed;
      }
    }
    h4 {
      font-size: 13px;
      border-left: 4px solid #409eff;
      padding-left: 5px;
      margin-top: 10px;
    }
  }
  .tab-box {
    display: flex;
    .back-box {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button {
        padding-left: 0;
      }
    }
    .tabs {
      flex: 1;
    }
  }
}
</style>
备注：主要使用了table布局

预览效果如下:

image.png

4-2-3 开发流程视图页面
主要使用element-ui的el-tabs和table原生组件，开发后代码：

<template>
  <div class="container">
    <div class="tab-box">
      <div class="name">工作流程</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <table>
      <tr>
        <th>阶段</th>
        <th>职能</th>
        <th>操作人</th>
        <th>职位</th>
        <th>机构</th>
        <th>完成时间</th>
        <th>停留时间（天）</th>
        <th>联系方式</th>
        <th>操作</th>
      </tr>
      <tr>
        <td rowspan="3">发起</td>
        <td>客户经理</td>
        <td></td>
        <td></td>
        <td width="10%">
          中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td width="8%"><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>公司秘书</td>
        <td></td>
        <td></td>
        <td>
          中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>业务审核人</td>
        <td></td>
        <td></td>
        <td>
          中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>秘书</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行中国人民银行
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td width="8%">
          <el-button type="text">发送短信</el-button>
        </td>
      </tr>
      <tr>
        <td>尽责</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>投票</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>审批</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>批复</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>结束</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class="btn-box">
      <el-button type="primary">查看人员历史</el-button>
      <el-button type="primary">查询系统建设授权结果</el-button>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>
  <style lang="scss" scoped>
.container {
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  .btn-box {
    text-align: center;
    margin-top: 10px;
  }
  table {
    width: 100%;
    border: 1px solid #909399;
    td {
      border: 1px solid #909399;
      border-collapse: collapse;
      text-align: center;
      font-size: 12px;
    }
    th {
      background-color: #e6e8eb;
      font-size: 12px;
      height: 30px;
    }
  }
  .tab-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      font-size: 13px;
      border-left: 4px solid #409eff;
      padding-left: 5px;
    }
    .back-box {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button {
        padding-left: 0;
      }
    }
    .tabs {
      flex: 1;
    }
  }
}
</style>
备注：主要使用table布局

预览效果如下:

image.png

4-2-4 开发日志信息页面
主要使用element-ui的el-table和el-button组件，开发后代码：

<template>
  <div class="container">
    <div class="tab-box">
      <div>日志信息总条数：{{ total }}</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%" v-loading="loading.listLoading">
      <el-table-column type="index" width="50" label="序号" />

      <el-table-column prop="projectCode" label="项目编号" width="120" />
      <el-table-column prop="handler" label="处理人" width="120" />
      <el-table-column prop="handlerBank" label="处理人所在银行" width="120" />
      <el-table-column prop="handlerOrgan" label="处理人所在机构" width="120" />
      <el-table-column prop="handlerDepart" label="处理人所在部门" min-width="120" />

      <el-table-column prop="handletime" label="开始处理时间" width="120" />
      <el-table-column prop="handleFinishtime" label="处理完成时间" min-width="120" />
      <el-table-column prop="sector" label="环节" min-width="120" />
      <el-table-column prop="handleRes" label="处理结论" min-width="120" />
      <el-table-column prop="sectorRes" label="环节处理标识" min-width="120" />

      <el-table-column fixed="right" label="操作" width="240">
        <template slot-scope="{ row }">
          <el-button link type="primary" @click="gotoLogDetail(row)" size="small">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :currentPage="page" :page-size="pageSize"
      @current-change="handleCurrentChange" @size-change="sizeChange" :page-sizes="[10, 20, 40, 50]" :total="total"
      class="pagination">
    </el-pagination>
  </div>
</template>
<script>
import api from "./api/";

export default {
  data() {
    return {
      total: 0,
      pageSize: 10,
      page: 1,
      loading: {
        listLoading: false,
      },
      tableData: [
        {
          projectCode: "2016-05-03",
          handler: "Tom",
          handlerBank: "No. 189, Grove St, Los Angeles",
          handlerOrgan: "",
          handlerDepart: "",
          handletime: "",
          handleFinishtime: "",
          sector: "",
          handleRes: "",
          sectorRes: "",
        },
      ],
    };
  },
  methods: {
    sizeChange() {
      this.getLogListPage();
    },
    handleCurrentChange() {
      this.getLogListPage();
    },
    gotoLogDetail(row) {
      this.$router.push({
        path: "/logdetail",
        query: {
          id: row.projectCode,
        },
      });
    },
    backPage() {
      this.$router.back();
    },
    getLogListPage() {
      let para = {
        page: this.page,
        pageSize: this.pageSize,
      };
      this.loading.listLoading = true;

      api
        .getLogListPage(para)
        .then((res) => {
          this.tableData = res.logs;
          this.total = res.total;
        })
        .finally(() => {
          this.loading.listLoading = false;
        });
    },
  },
  mounted() {
    this.getLogListPage();
  },
};
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  overflow: hidden;
  padding: 10px;

  .tab-box {
    display: flex;
    justify-content: space-between;

    .back-box {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-button {
        padding-left: 0;
      }
    }

    .tabs {
      flex: 1;
    }
  }

  .pagination {
    clear: both;
    margin-top: 10px;
    padding-bottom: 10px;
    float: right;
  }
}
</style>
对应api接口：

import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
const api = {
  getLogListPage (params) {
    return ajaxGetData({ url: `/log/listpage`, params: params })
  }
}
export default api
对应mock查询接口为：

//获取用户列表（分页）
    mock.onGet('/log/listpage').reply(config => {
      let {page, pageSize} = config.params;
      let mockLogs = _Logs.filter(user => {
        return true;
      });
      let total = mockLogs.length;
      mockLogs = mockLogs.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            logs: mockLogs
          }]);
        }, 500);
      });
    });
预览效果如下:

image.png

4-2-5 开发日志详情页面
主要使用element-ui的el-row和el-form组件，开发后代码：

<template>
  <div class="container">
    <div class="tab-box">
      <div>日志信息详情</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <el-form label-position="left" v-loading="loading" disabled label-width="100px" :model="ruleForm">
      <el-row :gutter="24">
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <el-form-item label="项目编号">
            <el-input v-model="ruleForm.projectCode" />
          </el-form-item>
          <el-form-item label="处理人">
            <el-input v-model="ruleForm.handler" />
          </el-form-item>
          <el-form-item label="处理人所在机构">
            <el-input v-model="ruleForm.handlerOrgan" />
          </el-form-item>
          <el-form-item label="开始处理时间">
            <el-input v-model="ruleForm.handletime" />
          </el-form-item>
          <el-form-item label="环节完成标识">
            <el-input v-model="ruleForm.sectorRes" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="环节">
            <el-input v-model="ruleForm.sector" />
          </el-form-item>
          <el-form-item label="处理人所在银行">
            <el-input v-model="ruleForm.handlerBank" />
          </el-form-item>
          <el-form-item label="处理人所在部门">
            <el-input v-model="ruleForm.handlerDepart" />
          </el-form-item>
          <el-form-item label="处理完成时间">
            <el-input v-model="ruleForm.handleFinishtime" />
          </el-form-item>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import api from "./api/";

export default {
  components: {},
  data() {
    return {
      loading: false,
      ruleForm: {
        projectCode: "",
        handler: "",
        handlerBank: "",
        handlerOrgan: "",
        handlerDepart: "",
        handletime: "",
        handleFinishtime: "",
        sector: "",
        handleRes: "",
        sectorRes: "",
      },
    };
  },
  methods: {
    backPage() {
      this.$router.back();
    },
    getLogDetail() {
      let para = {
        projectCode: this.route.query.id || "",
      };
      this.loading = true;
      api
        .getLogDetail(para)
        .then((res) => {
          this.ruleForm = res.log;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getLogDetail();
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  overflow: hidden;

  .tab-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back-box {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      .el-button {
        padding-left: 0;
      }
    }

    .tabs {
      flex: 1;
    }
  }
}
</style>
对应api接口：

import { ajaxGetData, ajaxPostData, ajaxPostJson, ajaxPutJson, ajaxDeleteJson } from '@/config/ajax'
const api = {
  getLogDetail (params) {
    return ajaxGetData({ url: `/log/detail`, params: params })
  }
}
export default api
对应mock查询接口为：

//获取日志详情
    mock.onGet('/log/detail').reply(config => {
      let {projectCode} = config.params;
      let mockLog = _Logs.find(user => {
        return user.projectCode === projectCode
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            log: mockLog,
            code: 200
          }]);
        }, 500);
      });
    });
预览效果如下：

image.png

 我已学完
