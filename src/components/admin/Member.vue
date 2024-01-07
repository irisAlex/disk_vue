<template>
    <div id="page-content" class="clearfix">
        <div class="page-header position-relative row-fluid">
            <div class="span6">
                <h1>会员中心</h1>
            </div>
            <div class="span6 text-right">
            </div>
        </div>

        <div class="row-fluid">
            <div class="span6">
                <div class="panel panel-default">
                    <div class="panel-heading">账户概览</div>
                    <div class="panel-body">
                        <ul style="margin-left:0px;">
                            <a href="http://www.xunniuwp.com/mydisk.php?item=profile&amp;menu=pwd&amp;action=mod_pwd"><span
                                    style="font-size:18px;color:#337FE5;"><strong>若共享账户密码被修改无法找回</strong></span></a>
                            <li style="line-height: 35px;"><b>用户名</b>：alex123456 <a href="vip.php" title="VIP"><img
                                        src="images/vip.gif" align="absmiddle" border="0"
                                        class="vip_icon"></a>，<b>当前网赚套餐：</b>1</li>
                            <li style="line-height: 35px;"><b>VIP结束时间</b>：<span
                                    class="txt_r">2024-01-11</span>&nbsp;&nbsp;<a href="vip.php">购买/续费VIP</a></li>
                            <li style="line-height: 35px;" class="clear"><b>个人主页</b>：<input type="text" class="span8"
                                    size="50" id="myspace_url" value="http://www.xunniuwp.com/space_alex123456.html"
                                    onclick="$('#myspace_url').select();ie_copy_text('myspace_url','个人主页链接复制成功');"
                                    readonly=""><input type="button" value="复制链接"
                                    onclick="$('#myspace_url').select();ie_copy_text('myspace_url','个人主页链接复制成功');"
                                    class="btn btn-small"></li>
                            <li style="line-height: 35px;"><b>联系邮箱</b>：libin_kongjie@126.com</li>
                            <li style="line-height: 35px;"><b>可提现金额</b>：<span class="txt_r">￥0</span>&nbsp;&nbsp;<a
                                    href="mydisk.php?item=profile&amp;menu=income&amp;action=to_income">【申请提现】</a>&nbsp;<a
                                    href="pay.php"></a></li>
                            <li style="line-height: 35px;"><b>占用空间</b>：<span id="myspace_stat">
                                    B</span>/<b>不限</b>&nbsp;&nbsp;<a href="javascript:myspace_stat();" title="更新"><img
                                        src="images/reload.gif" align="absmiddle" border="0"></a></li>
                            <li style="line-height: 35px;"><b>文件违规举报</b>：xunniu@outlook.com</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="span6">
                <div class="panel panel-default">
                    <div class="panel-heading">网站公告</div>
                    <div class="panel-body">
                        <ul style="margin-left:0px;">

                            <li style="padding: 4px;"><a href="ann_list-1.html" target="_blank"><span
                                        style="color:#E53333;font-size:18px;"><strong>净网2020 ·
                                            严打不良信息传播行为</strong></span></a><span class="badge pull-right">2020-07-10</span>
                            </li>

                            <li style="padding: 4px;"><a href="ann_list-2.html" target="_blank"><span
                                        style="font-size:18px;">每天支付一次</span></a><span
                                    class="badge pull-right">2021-03-22</span></li>

                            <li style="padding: 4px;"><a href="ann_list-3.html" target="_blank"><span
                                        style="font-size:18px;">周二、周四、周六、周日双倍</span></a><span
                                    class="badge pull-right">2020-08-13</span></li>

                            <li style="padding: 4px;"><a href="ann_list-4.html" target="_blank"><span
                                        style="font-size:18px;">关于出租共享账户</span></a><span
                                    class="badge pull-right">2020-07-13</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div><!-- #main-content -->
    </div><!--/.fluid-container#main-container-->
</template>

<script>
export default {
    name: 'member',
    data() {
        return {}
    },
    components: {
    }
}
</script>