<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <caption catalogTitle="隐私政策" details="请仔细阅读下面的信息"></caption>
            </div>
        </div>
        <div id="content">
            <div class="container">

                <div class="row">

                    <div class="span8">
                        <art content="
        xunniun 访问者的隐私对我们很重要。

        在 xunniun，我们认识到您的个人信息的隐私很重要。以下是有关我们在您使用和访问 xunniun 时接收和收集的个人信息类型以及我们如何保护您的信息的信息。我们绝不会将您的个人信息出售给第三方。
                        
    日志文件
                        
            与大多数其他网站一样，我们收集和使用日志文件中包含的数据。日志文件中的信息包括您的 IP（互联网协议）地址、您的 ISP（互联网服务提供商，例如 AOL 或 Shaw Cable）、您用于访问我们网站的浏览器（例如 Internet Explorer 或 Firefox）、您使用的时间访问了我们的网站以及您访问了我们网站的哪些页面。
                        
    Cookie 和网络信标
                        
            我们确实使用 cookie 来存储信息，例如您访问我们网站时的个人偏好。这可能包括在您访问时仅向您显示一次弹出窗口，或者能够登录我们的某些功能，例如论坛。我们还使用 xunniun 上的第三方广告来支持我们的网站。其中一些广告商在我们的网站上做广告时可能会使用 cookie 和网络信标等技术，这些技术也会向这些广告商（例如通过 Google AdSense 计划的 Google）发送信息，包括您的 IP 地址、您的 ISP、您使用的浏览器访问我们的网站，在某些情况下，您是否安装了 Flash。这通常用于地理定位目的（向纽约的某人展示纽约房地产广告，
                        
    版权
                        
            如果您是版权所有者，或者被授权代表版权所有者或版权下的任何专有权的所有者行事，并且认为您的作品被以构成侵犯版权的方式复制，请报告您的通知通过向 xunniun@gmail.com 提供所有必要的信息来 证明对xunniun的侵权"></art>
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
    