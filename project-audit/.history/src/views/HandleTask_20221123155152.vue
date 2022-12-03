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
                                <td>客户号</td>
                                <td>{{ customer.customerinfo }}</td>
                                <td>客户名称</td>
                                <td>{{customer.customerName}}</td>
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
import api from '@/api/api';
export default {
    data() {
        return {
            activeName: "first",
            customer: {
                customerinfo: '',
                customerName: '',
                customerType: '',
                customerSubsys: '',
                cardType: '',
                number: '',
                industry: ''
            }
        };
    },
    methods: {
        backPage() {
            this.$router.back();
        },
        getCustomerInfo() {
            // console.log(this.$route.query.customerName);
            this.customer.customerinfo = this.$route.params.customerCode;
            this.customer.customerName = this.$route.query.customerName;
            let param = {   
            }
            api
                .getCustomerInfo(param).then((res) => {
                    console.log(res)
                    this.customerType = res.data.customerType;
                    this.customerSubsys = res.data.customerSubsys;
                    this.number = res.data.number;
                    this.industry = res.data.industry;
                })
        }
    },
    created() {
        this.getCustomerInfo();
    }
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
            td:nth-child(2n) {
                color: #409eff;
                font-weight: bolder;
                text-align: center;
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