<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <div class="row-fluid header">
                    <h2 class="page-title"><span>最新公告</span> <small>您可以了解最新网站通知</small></h2>
                </div>
            </div>
        </div>
        <div id="content">
            <div class="container">

                <div class="row">

                    <div class="span8">

                        <div class="block">

                            <h3 class="block-title sub-title"
                                style="width: 770px;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                <a href="ann_list-1.html"><span style="color:#E53333;font-size:18px;"><strong>净网2020 ·
                                            严打不良信息传播行为</strong></span> </a><small>2020-07-10 13:04</small>
                            </h3>

                            <h3 class="block-title sub-title"
                                style="width: 770px;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                <a href="ann_list-2.html"><span style="font-size:18px;">每天支付一次</span> </a><small>2021-03-22
                                    17:05</small>
                            </h3>

                            <h3 class="block-title sub-title"
                                style="width: 770px;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                <a href="ann_list-3.html"><span style="font-size:18px;">周二、周四、周六、周日双倍</span>
                                </a><small>2020-08-13 12:27</small>
                            </h3>

                            <h3 class="block-title sub-title"
                                style="width: 770px;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                <a href="ann_list-4.html"><span style="font-size:18px;">关于出租共享账户</span>
                                </a><small>2020-07-13 22:45</small>
                            </h3>
                        </div>
                    </div>
                    <!-- 右侧导航 -->
                    <div class="span4 sidebar sidebar-right">
                        <div class="inner">
                            <div class="block">
                                <h3 class="block-title sub-title"><span>了解信息</span></h3>
                                <ul class="nav nav-list secondary-nav">
                                    <li id="ann_list" class="active"><a href="announce.html"><i
                                                class="icon-chevron-right"></i> 最新公告</a></li>
                                    <li id="money"><a href="about.php?action=money"><i class="icon-chevron-right"></i>
                                            分享赚钱</a></li>
                                    <li id="help"><a href="about.php?action=help"><i class="icon-chevron-right"></i>
                                            常见问题</a></li>
                                    <li id="protocol"><a href="about.php?action=protocol"><i class="icon-chevron-right"></i>
                                            服务条款</a></li>
                                    <li id="contactus"><a href="about.php?action=contactus"><i
                                                class="icon-chevron-right"></i> 联系我们</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="block mdrs">
                            <a href="account.php?action=register" class="btn btn-block btn-info"><i
                                    class="icon-share-alt"></i> 立即注册</a>
                            <a href="about.php?action=contactus" class="btn btn-block btn-success"><i
                                    class="icon-envelope"></i> 联系我们</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
var action = document.getElementById("money"); if (!action) { document.getElementById("ann_list").className = 'active'; } else { action.className = 'active'; }
</script>
     <script>
    export default {
        name: 'announce',
        data() {
            return {
                post: {
                    author: {
                        loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
                    }
                },
                loading: false
            }
        },
        computed: {
            postTab() {
                var type = this.post.tab.toString();
                if (type = 'ask') {
                    return '问答';
                };
                if (type = 'share') {
                    return '分享';
                };
                if (type = 'job') {
                    return '招聘';
                };
                if (type = 'good') {
                    return '精华';
                };
            }
        },
        methods: {
            getData() {
                //获取文章信息
                this.$http({
                    url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                    method: 'get',
                    params: {
                        mdrender: true
                    }
                })
                    .then((response) => {
                        if (response.data.success === true) {
                            this.post = response.data.data;
                            this.loading = false;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        beforeMount() {
            this.loading = true;
            this.getData();
        },
        watch: {
            $route() {
                this.getData();
            }
        }
    }
    </script> 
    