<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <caption catalogTitle="联系我们" details="下面是我们的联系方式"></caption>
            </div>
        </div>
        <div id="content">
            <div class="container">

                <div class="row">

                    <div class="span8">
                        <art content="联系我们 
                        我们的邮箱地址是 xunniun@gmail.com"></art>
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
import Caption from './Caption.vue'
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
        Caption,
        Art
    }
}
</script> 
    