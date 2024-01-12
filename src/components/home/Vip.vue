<template>
	<div id="highlighted">
		<div class="container">
			<div class="row-fluid header">
				<h2 class="page-title">
					<span style="color:#003399;font-size:16px;">充值即时到账不支持退款,</span><span
						style="color:#E53333;font-size:16px;">推荐使用最新版本谷歌浏览器、Firefox浏览器访问本站，否则会有兼容问题。</span>
					<div class="clear"></div>
					<div id="content">
						<div class="container">
							<div class="row-fluid">
								<div class="row-fluid margin-bottom-40">
									<div class="span3 pricing hover-effect" style="width:200px">
										<div class="pricing-head">
											<h3>免费会员<span><span
														style="color:#FFE500;font-size:16px;">平均每天0.00元</span></span></h3>
											<h4>0<i>元</i> <span>每天(1天)</span></h4>
										</div>
										<ul class="pricing-content unstyled">
											<li><i class="icon-globe"></i> 当天下载额度 1 次</li>
											<li><i class="icon-minus-sign"></i> 没有弹窗广告</li>
											<!-- <li><i class="icon-cloud-upload"></i> 文件高速上传</li> -->
											<li><i class="icon-cloud-download"></i> VIP高速下载</li>
											<li><i class="icon-time "></i> 下载免等待</li>
										</ul>
										<div class="pricing-footer">
											<p></p>
											<button type="button" onclick="buy_alert();">立即购买</button>
										</div>
									</div>
									<div class="span3 pricing hover-effect" style="width:200px">
										<div class="pricing-head">
											<h3>三个月会员 <span><span
														style="color:#FFE500;font-size:16px;">平均每天0.27元</span></span></h3>
											<h4>25<i>元</i> <span>三个月(90天)</span></h4>
										</div>
										<ul class="pricing-content unstyled">
											<li><i class="icon-globe"></i> 当天下载额度 150 次</li>
											<li><i class="icon-minus-sign"></i> 没有弹窗广告</li>
											<!-- <li><i class="icon-cloud-upload"></i> 文件高速上传</li> -->
											<li><i class="icon-cloud-download"></i> VIP高速下载</li>
											<li><i class="icon-time "></i> 下载免等待</li>
										</ul>
										<div class="pricing-footer">
											<p></p>
											<button type="button" onclick="buy_alert();">立即购买</button>
										</div>
									</div>
									<div class="span3 pricing hover-effect" style="width:200px">
										<div class="pricing-head">
											<h3>一个月会员 <span><span
														style="color:#FFE500;font-size:16px;">平均每天0.33元</span></span></h3>
											<h4>10<i>元</i> <span>一个月(30天)</span></h4>
										</div>
										<ul class="pricing-content unstyled">
											<li><i class="icon-globe"></i> 当天下载额度 50 次</li>
											<li><i class="icon-minus-sign"></i> 没有弹窗广告</li>
											<!-- <li><i class="icon-cloud-upload"></i> 文件高速上传</li> -->
											<li><i class="icon-cloud-download"></i> VIP高速下载</li>
											<li><i class="icon-time "></i> 下载免等待</li>
										</ul>
										<div class="pricing-footer">
											<p></p>
											<button type="button" onclick="buy_alert();">立即购买</button>
										</div>
									</div>
									<div class="span3 pricing hover-effect" style="width:200px">
										<div class="pricing-head">
											<h3>一年会员 <span><span
														style="color:#FFE500;font-size:16px;">平均每天0.21元</span></span></h3>
											<h4>80<i>元</i> <span>一年(365天)</span></h4>
										</div>
										<ul class="pricing-content unstyled">
											<li><i class="icon-globe"></i> 当天下载额度 200 次</li>
											<li><i class="icon-minus-sign"></i> 没有弹窗广告</li>
											<!-- <li><i class="icon-cloud-upload"></i> 文件高速上传</li> -->
											<li><i class="icon-cloud-download"></i> VIP高速下载</li>
											<li><i class="icon-time "></i> 下载免等待</li>
										</ul>
										<div class="pricing-footer">
											<p></p>
											<button type="button" onclick="buy_alert();">立即购买</button>
										</div>
									</div>
									<div class="span3 pricing hover-effect" style="width:200px">
										<div class="pricing-head">
											<h3>三年会员 <span><span style="color:#FFE500;font-size:16px;">每天限量1位</span></span>
											</h3>
											<h4>1000<i>元</i> <span>永久VIP</span></h4>
										</div>
										<ul class="pricing-content unstyled">
											<li><i class="icon-globe"></i> 当天下载额度 600 次</li>
											<li><i class="icon-minus-sign"></i> 没有弹窗广告</li>
											<li><i class="icon-cloud-upload"></i> 文件高速上传</li>
											<li><i class="icon-cloud-download"></i> VIP高速下载</li>
											<li><i class="icon-time "></i> 下载免等待</li>
										</ul>
										<div class="pricing-footer">
											<p></p>
											<button type="button" onclick="buy_alert();">立即购买</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'vip',
	data() {
		return {}
	},
	filters: {
		// timeStyle(createTime) {
		// 	return String(createTime).match(/.{10}/)[0];
		// }
	},
	methods: {
		getData() {
			// this.$http({
			// 	url: 'https://cnodejs.org/api/v1/topics',
			// 	method: 'get',
			// 	params: {
			// 		page: 1,
			// 		limit: 20,
			// 	}
			// })
			// 	.then((response) => {
			// 		if (response.data.success === true) {
			// 			this.posts = response.data.data;
			// 			this.loading = true;
			// 		}
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
		}
	},
	beforeMount() {
		// this.loading = true;
		// this.getData();
	}
}
</script>

<style scoped>
.payment_list li {
	width: 145px;
	float: left;
}

.payment_list li img {
	width: 126px;
}

.center-me {
	text-align: center;
}

</style>

<script type="text/javascript">
				buy_alert = function(){
		ajerror("请先登录");
	}
</script>