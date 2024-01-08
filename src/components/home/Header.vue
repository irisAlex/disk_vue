<template>
	<div id="navigation" class="wrapper">
		<div class="navbar navbar-fixed-top" id="top">
			<div class="navbar-inner">
				<div id="ie_tips" style="display:none"></div>
				<div class="inner">
					<div class="container">
						<div class="brand">
							<a href="http://www.xunniunwp.com/">
								<img src="static/img/logo.png" style="width: 120px; height: 60px;">
							</a>
						</div>
						<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>
						<div class="nav-collapse collapse" id="top_menu">
							<ul class="nav main-menu menu-left">
								<li v-for="(item, index) of items" :key="index"><a :href="item.link" rel="nofollow">{{
									item.message }}</a></li>
							</ul>
							<ul class="nav pull-right main-menu">
								<li v-for="(menu, index) of menus" :key="index">
									<a data-placement="bottom" class="_tooltip" title="" :href="menu.link"
										data-original-title="免费注册">{{ menu.title }}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			items: [
				{ message: '高级帐户', 'link': "vip" },
				{ message: '隐私政策', 'link': "policy" },
				{ message: '规则条款', 'link': "rule" },
				{ message: '联系我们', 'link': "contact" },
				{ message: '关于我们', 'link': "about" }
			],
			menus: [
				{ title: '注册', 'link': "account" },
				{ title: '登陆', 'link': "account" }
			]
		}
	},
	methods: {

	},
	mounted() {
		const userName = localStorage.getItem('user')
		if (userName == null) {
			this.menus = [
				{ title: '注册', 'link': "account" },
				{ title: '登陆', 'link': "account" }
			]
		} else {
			this.menus = [
				{ title: userName, 'link': "dashboard" }
			]
		}
	}
}
</script>
