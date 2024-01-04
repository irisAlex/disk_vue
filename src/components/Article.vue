<template>
	<div class="block">
		<div
			style="color:#333333;font-family:FangSong, STFangSong, NSimSun, SimSun;font-size:20px;background-color:#FFFFFF;">
			<p style="text-indent:1em; line-height:1.5;word-wrap: pre-wrap;white-space: pre-wrap;">
{{content}}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Article',
	data() {
		return {
			// post: {
			// 	author: {
			// 		loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
			// 	}
			// },
			// loading: false
		}
	},
	props:['content'],
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
	