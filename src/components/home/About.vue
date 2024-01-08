<template>
    <div>
        <div id="highlighted">
            <div class="container">
                <caption catalogTitle="关于我们" details="关于我们的一些详细信息"></caption>
            </div>
        </div>
        <div id="content">
            <div class="container">

                <div class="row">

                    <div class="span8">
                        <art content="      我们的服务器架设于国际流量网际网路交换点，这是为了保证能够为您提供最佳的上载与下载速度.
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

#footer1 {
	background-color: #2c2c2c;
	background-image: -moz-linear-gradient(top, #313131, #242424);
	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#313131), to(#242424));
	background-image: -webkit-linear-gradient(top, #313131, #242424);
	background-image: -o-linear-gradient(top, #313131, #242424);
	background-image: linear-gradient(to bottom, #313131, #242424);
	background-repeat: repeat-x;
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff313131', endColorstr='#ff242424', GradientType=0);
	color: #CFCFCF;
	border-top: 0px solid #377ca8
}

#footer1 .inner {
	padding: 0px 0;
	background: url(../../../static/img/logo.png) left top repeat
}

#footer1 h3 {
	font-size: 1.2em;
	color: rgba(255, 255, 255, 0.8)
}

#footer1 a {
	color: #CFCFCF
}

#footer1 .social-media a {
	text-decoration: none;
	color: rgba(255, 255, 255, 0.8);
	display: block;
	margin-bottom: 0.4em;
	line-height: 30px
}

#footer1 .social-media a i {
	font-size: 24px;
	background: #CFCFCF;
	background: rgba(255, 255, 255, 0.6);
	color: #000;
	padding: 0;
	width: 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	margin-right: 0.2em
}

#footer1 .social-media a:hover {
	text-decoration: none;
	color: #fff
}

#footer1 .social-media a:hover i {
	background: #fff
}

#footer1 .social-media a.last {
	padding-bottom: 0;
	border-bottom: 0
}

#footer1 .contact-block p {
	margin-bottom: 0.5em
}

#footer1 .subfooter {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	margin-top: 1em;
	padding-top: 1em
}
</style> -->