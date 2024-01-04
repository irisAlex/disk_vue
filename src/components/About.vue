<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <catalog catalogTitle="关于我们" details="关于我们的一些详细信息"></catalog>
            </div>
        </div>
        <div id="content">
            <div class="container">

                <div class="row">

                    <div class="span8">
                        <art content="
                        我们的服务器架设于国际流量网际网路交换点，这是为了保证能够为您提供最佳的上载与下载速度.
                        我们为您提供以下服务：
                            - 在 99.99% 的正常运行时间内都提供无限制的下载速度
                            - 无限的文件储存空间
                            - 易用的文件管理
                            - 易用的下载管理
                            - 文件资料夹链接

                            我们经验丰富且完全专精的专业团队每天都致力于为您提供更佳的服务，并始终将我们的理念谨记于心"></art>
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
import Art from './Article.vue'
export default {
    name: 'about',
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
    components: {
        Side,
        Catalog,
        Art
    }
}
</script> 
    