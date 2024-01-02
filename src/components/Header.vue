<template>
	<div id="navigation" class="wrapper">
		<div class="navbar navbar-fixed-top" id="top">
			<div class="navbar-inner">
				<div id="ie_tips" style="display:none"></div>
				<div class="inner">
					<div class="container">
						<div class="brand">
							<a href="http://www.xunniuwp.com/">
								<img src="http://www.xunniuwp.com/templates/phpdisk_new_blue/images/logo.png"
									style="width: 180px; height: 60px;">
							</a>
						</div>
						<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>
						<div class="nav-collapse collapse" id="top_menu">
							<ul class="nav main-menu menu-left">
								<li><a href="vip" class="active" rel="nofollow">升级会员</a></li>
								<li><a href="about" rel="nofollow">分享赚钱</a></li>
								<li><a href="announce" rel="nofollow">网站公告</a> </li>
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
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
	.Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style> -->
