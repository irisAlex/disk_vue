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
                <section data-v-17533193="" class="el-container">
                    <main data-v-17533193="" class="el-main">
                        <form data-v-17533193="" class="el-form">
                            <div data-v-17533193="" class="el-form-item"><label class="el-form-item__label"
                                    style="width: 80px;">兑换码:</label>
                                <div class="el-form-item__content" style="margin-left: 80px;">
                                    <div data-v-17533193="" class="el-input"><!----><input type="text" autocomplete="off"
                                            placeholder="请输入兑换码" class="el-input__inner" v-model="inputValue"><!----><!----><!----><!----></div>
                                    <!---->
                                </div>
                            </div>
                            <div data-v-17533193="" class="el-form-item"><!---->
                                <div class="el-form-item__content" style="margin-left: 80px;"><button data-v-17533193=""
                                        type="button"
                                        class="el-button el-button--primary" @click="submitCode"><!----><!----><span>兑换</span></button><!---->
                                </div>
                            </div>
                        </form>
                    </main>
                </section>
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
    name: "exchange",
    data() {
        return {
            inputValue: ''
        };
    },
    methods: {
        submitCode() {
            if (this.inputValue == "") {
                ajerror('此卡密不能为空');
                $("#alertMsg").show();
                return
            }

            this.$http({
                url: `/cash_vip`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    user: localStorage.getItem('user'),
                    card_key: this.inputValue
                })
            }).then((res) => {
                console.log(res)
                if (res.status == 200) {
                    localStorage.setItem("set_meal", res.data.set_meal)
                    localStorage.setItem("expri_time", res.data.exri_time)
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
