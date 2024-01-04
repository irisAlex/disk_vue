<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <catalog catalogTitle="最新公告" details="3333"></catalog>
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
                    <side></side>
                </div>

            </div>
        </div>

    </div>
</template>


<script>
import Side from './Side.vue'
import Catalog from './Title.vue'
export default {
    name: 'side',
    data() {
        return {
          
        }
    },
    computed: {
        // postTab() {
        //     var type = this.post.tab.toString();
        //     if (type = 'ask') {
        //         return '问答';
        //     };
        //     if (type = 'share') {
        //         return '分享';
        //     };
        //     if (type = 'job') {
        //         return '招聘';
        //     };
        //     if (type = 'good') {
        //         return '精华';
        //     };
        // }
    },
    methods: {
        getData() {
            //获取文章信息
            // this.$http({
            //     url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
            //     method: 'get',
            //     params: {
            //         mdrender: true
            //     }
            // })
            //     .then((response) => {
            //         if (response.data.success === true) {
            //             this.post = response.data.data;
            //             this.loading = false;
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
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
    },
    components:{
        Side,
        Catalog
    }
}
</script> 
    