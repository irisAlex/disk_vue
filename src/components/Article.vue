<template>
	<div>
		<div id="highlighted">
		<div class="container">
			<div class="row-fluid header">
					   <h2 class="page-title"><span>分享赚钱</span> <small>迅牛网盘网赚计划(beta)</small></h2>
					  </div>
		  </div>
		</div>
		<div id="content">
			<div class="container">
				<div class="row">
					<div class="span8">
						<div class="block">
							<div style="padding:1px;margin-bottom: 20px;"></div>
							<div class="accordion" id="accordion2">
								<div class="accordion-group">
									<div class="accordion-heading">
										<h4><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
												href="#collapse1">一、分享赚钱介绍</a></h4>
									</div>
									<div id="collapse1" class="accordion-body collapse">
										<div class="accordion-inner">
											<p>　　只要您加入我们的网赚计划，上传并分享文件后，只要有人下载，您就可以获取相应的下载积分，积分可以兑换成现金并提现。下载的人越多，获得的积分就越多！</p>
										</div>
									</div>
								</div>
								<div class="accordion-group">
									<div class="accordion-heading">
										<h4><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
												href="#collapse2">二、迅牛网盘的计分规则、收益情况</a></h4>
									</div>
									<div id="collapse2" class="accordion-body collapse">
										<div class="accordion-inner">
											<p>　　迅牛网盘目前限制网盘大小，上传单文件5M以上2GB以下，IP重复统计时间只有10分钟！【注意，目前很多网盘一天之内一个IP只计算一次有效下载，而且还规定文件大小，小文件不计费。。】相比其他网盘诱惑下载、弹窗满天飞，迅牛网盘给您的收益要大很多！
											</p>
										</div>
									</div>
								</div>
								<div class="accordion-group">
									<div class="accordion-heading">
										<h4><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
												href="#collapse3">三、迅牛网盘分成介绍</a></h4>
									</div>
									<div id="collapse3" class="accordion-body collapse">
										<div class="accordion-inner">
											<a href="http://www.xunniuwp.com/mydisk.php?item=profile&amp;menu=plan&amp;action=income_plans"
												target="_blank">查看网赚套餐</a>
										</div>
									</div>
								</div>
								<div class="accordion-group">
									<div class="accordion-heading">
										<h4><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
												href="#collapse4">四、看到国内做网盘的几乎家家都高喊不扣量，迅牛网盘到底扣不扣量？</a></h4>
									</div>
									<div id="collapse4" class="accordion-body collapse">
										<div class="accordion-inner">
											<p>　　迅牛网盘鄙视藐视那些明里抬高单价暗里疯狂扣量，还高喊绝不扣量的无耻行为！我们自创立以来本着诚信共赢的理念，赢得了广大用户的一致好评，我们说不扣量就绝对不扣量。近期一些素质较低的同行和少部分人因为刷量作弊被我们封号后就到处造谣抹黑我们，这种行为实在是幼稚，希望广大网友擦亮眼睛。迅牛网盘期待与您携手共赢。
											</p>
										</div>
									</div>
								</div>
	
							</div>
	
						</div>
					</div>
					<!-- 右侧导航 -->
					<div class="span4 sidebar sidebar-right">
						<div class="inner">
							<div class="block">
								<h3 class="block-title sub-title"><span>了解信息</span></h3>
								<ul class="nav nav-list secondary-nav">
									<li id="ann_list"><a href="announce.html"><i class="icon-chevron-right"></i> 最新公告</a></li>
									<li id="money" class="active"><a href="about.php?action=money"><i
												class="icon-chevron-right"></i> 分享赚钱</a></li>
									<li id="help"><a href="about.php?action=help"><i class="icon-chevron-right"></i> 常见问题</a>
									</li>
									<li id="protocol"><a href="about.php?action=protocol"><i class="icon-chevron-right"></i>
											服务条款</a></li>
									<li id="contactus"><a href="about.php?action=contactus"><i class="icon-chevron-right"></i>
											联系我们</a></li>
								</ul>
							</div>
						</div>
						<div class="block mdrs">
							<a href="account.php?action=register" class="btn btn-block btn-info"><i class="icon-share-alt"></i>
								立即注册</a>
							<a href="about.php?action=contactus" class="btn btn-block btn-success"><i class="icon-envelope"></i>
								联系我们</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</template>
	<script type="text/javascript">
	var action = document.getElementById("money"); if (!action) { document.getElementById("ann_list").className = 'active'; } else { action.className = 'active'; }
	</script>
	 <script>
	export default {
		name: 'Article',
		data() {
			return {
				post: {
					author: {
						loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
					}
				},
				loading: false
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
	