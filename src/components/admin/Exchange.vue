<template>
    <div id="page-content" class="clearfix">
        <div class="page-header position-relative row-fluid">
            <div class="span6">
                <h1>兑换码</h1>
            </div>
            <div class="span6 text-right">
            </div>
        </div>
        <div class="wrapper-md" ng-controller="FormDemoCtrl">
            <div class="exchange-page">
                <el-container>
                    <!-- 主体内容 -->
                    <el-main>
                        <!-- 兑换码输入框 -->
                        <el-form :model="form" label-width="80px">
                            <el-form-item label="兑换码:">
                                <el-input v-model="form.code" placeholder="请输入兑换码"></el-input>
                            </el-form-item>

                            <!-- 提交按钮 -->
                            <el-form-item>
                                <el-button type="primary" @click="submitCode">兑换</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-container>
            </div>

        </div><!-- #main-content -->
    </div>
</template>
<style scoped>
.exchange-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

.page-title {
    font-size: 24px;
    color: #409EFF;
}

.result-section {
    margin-top: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            form: {
                code: ''
            }
        };
    },
    methods: {
        submitCode() {
            this.$http({
                url: `/cash_vip`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    user: localStorage.getItem('user'),
                    card_key: this.form.code
                })
            }).then((res) => {
                console.log(res)
                if (res.status == 200) {
                    localStorage.setItem("set_meal",res.data.set_meal)
                    localStorage.setItem("expri_time",res.data.exri_time)
                    ajsuccess('兑换成功')
                    $("#alertMsg").show();
                }
            }).catch(function (error) {
                    ajerror('此卡密已经被兑换过了或不存在，请换其他的卡密');
                $("#alertMsg").show();
                console.log(error);
            });
        }
    }
};
</script>
