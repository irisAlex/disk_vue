<template>
	<div id="navigation" class="wrapper">
		<div class="navbar navbar-fixed-top" id="top">
			<div class="navbar-inner">
				<div id="ie_tips" style="display:none"></div>
				<div class="inner">
					<div class="container">
						<div class="brand">
							<a href="http://www.xunniunwp.com/">
								<img src="static/img/logo.png"
									style="width: 180px; height: 60px;">
							</a>
						</div>
						<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>
						<div class="nav-collapse collapse" id="top_menu">
							<ul class="nav main-menu menu-left">
								<li v-for="item  in items" :key="item.link" :class="currentactive == key ? '':'active'"
								@click="checkPrice(key)"><a :href="item.link"  rel="nofollow">{{ item.message }}</a></li>
							</ul>
							<ul class="nav pull-right main-menu">
								<li><a data-placement="bottom" class="_tooltip" title="" href="account"
										data-original-title="免费注册">注册</a></li>
								<li><a data-placement="bottom" class="_tooltip" title="登录账户" href="account">登录</a></li>
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
				{ message: '高级帐户', 'link':"vip"},
                { message: '隐私政策', 'link':"policy"},
                { message: '规则条款', 'link':"rule"},
                { message: '联系我们', 'link':"contact"},
                { message: '关于我们' , 'link':"about" }
 
            ]
        }
	},
	methods:{
		checkPrice(index) {
			console.log(index)
				this.currentactive = index;
			}
	}
}
</script>
