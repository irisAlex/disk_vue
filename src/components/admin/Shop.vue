<template>
    <div id="page-content" class="clearfix">
        <div class="page-header position-relative row-fluid">
            <div class="span6">
                <h1>开通会员步骤</h1>
            </div>
            <div class="span6 text-right">
            </div>
        </div>
        <div class="wrapper-md" ng-controller="FormDemoCtrl">

            <div class="purchase-page">
                <el-container>
                    <!-- 头部 -->
                    <!-- 步骤导航 -->
                    <el-aside width="400px">
                        <el-steps :active="currentStep" finish-status="success">
                            <el-step title="扫码进入店铺"/>
                            <el-step title="选择会员卡" />
                            <el-step title="获取卡密" />
                            <el-step title="兑换卡密" />
                        </el-steps>
                    </el-aside>

                    <!-- 主体内容 -->
                    <el-main>
                        <!-- 步骤内容 -->
                        <div v-if="currentStep === 0">
                            <!-- 选择商品页面内容 -->
                            <h3>第一步：扫描下方的二维码进入店铺</h3>
                            <img src="static/shop.png"/>
                        </div>
                        <div v-else-if="currentStep === 1">
                            <!-- 确认订单页面内容 -->
                            <h3>第二步：选择会员卡</h3>
                            <!-- 在这里添加确认订单的相关内容 -->
                        </div>
                        <div v-else-if="currentStep === 2">
                            <!-- 支付页面内容 -->
                            <h3>第三步：获取卡密</h3>
                            <!-- 在这里添加支付的相关内容 -->
                        </div>
                        <div v-else-if="currentStep === 4">
                            <!-- 支付页面内容 -->
                            <h3>第四步：兑换卡密</h3>
                            <!-- 在这里添加支付的相关内容 -->
                        </div>
                        <!-- 按钮区域 -->
                        <div class="button-section">
                            <!-- 上一步按钮 -->
                            <el-button v-if="currentStep > 0" @click="prevStep">上一步</el-button>
                            <!-- 下一步按钮 -->
                            <el-button v-if="currentStep < totalSteps - 1" type="primary" @click="nextStep">下一步</el-button>
                            <!-- 完成按钮 -->
                            <el-button v-else type="success" @click="finishPurchase">完成购买</el-button>
                        </div>
                    </el-main>
                </el-container>
            </div>
        </div><!-- #main-content -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentStep: 0,
            totalSteps: 4
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.totalSteps - 1) {
                this.currentStep++;
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        finishPurchase() {
            // 在这里执行完成购买的逻辑
            console.log('购买完成！');
        }
    }
};
</script>
  
<style scoped>
.purchase-page {
    height: 80%;
    margin-left: 200px;
    max-width: 900px;
    margin: auto;
    padding: 20px;
}

.page-title {
    max-width: 100px;
    font-size: 24px;
    color: #409EFF;
}

.button-section {
    margin-top: 20px;
    text-align: right;
}
</style>
  