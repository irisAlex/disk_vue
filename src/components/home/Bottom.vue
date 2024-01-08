<template>
    <div id="footer1">
        <div class="inner">
            <div class="container">
                <div class="subfooter">
                    <div style="text-align:center">
                        <p>
                        </p>
                        <p style="height: 30px;font-size:18px;font-family:Microsoft YaHei">Copyright © - 2023 xunniun网盘   服务邮箱: <a target="_blank"
                                href="mailto:xunniun@gmail.com"><span style="font-family:Microsoft YaHei;color:black;font-weight:100px">xunniun@gmail.com</span></a>
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'bottom',
    data() {
        return {

        }
    },
    computed: {
        // postTab() {
        // 	var type = this.post.tab.toString();
        // 	if (type = 'ask') {
        // 		return '问答';
        // 	};
        // 	if (type = 'share') {
        // 		return '分享';
        // 	};
        // 	if (type = 'job') {
        // 		return '招聘';
        // 	};
        // 	if (type = 'good') {
        // 		return '精华';
        // 	};
        // }
    },
    methods: {
        getData() {
            //获取文章信息
            // this.$http({
            // 	url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
            // 	method: 'get',
            // 	params: {
            // 		mdrender: true
            // 	}
            // })
            // 	.then((response) => {
            // 		if (response.data.success === true) {
            // 			this.post = response.data.data;
            // 			this.loading = false;
            // 		}
            // 	})
            // 	.catch(function (error) {
            // 		console.log(error);
            // 	});
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
	