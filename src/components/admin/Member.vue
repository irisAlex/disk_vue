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
                            <li style="line-height: 35px;"><b>用户名</b>：{{userName}} <a href="vip.php" title="VIP"></a> <b
                                    style="margin-left: 20px;">当前网赚套餐：</b>1</li>
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
                        <art content="   为响应国家政策，净化网络环境，我们坚决严厉打击利用xunniun网盘传播色情、淫秽、暴恐、盗版等侵权或不良信息；对于相关的不良信息及严重违规帐号，将采取全面清理、永久封禁的措施，并若涉及法律纠纷的条件下保留对该用户行使配合相关部门进行取证的权益。

        再此呼吁大家对于侵权文件以及不良信息做到“三不原则”—不上传、不分享、不转存！请广大用户加强自律与监督，合法、合规使用迅牛网盘，与迅牛网络科技共同维护清朗的网络环境！">
                        </art>
                    </div>
                </div>
            </div>
        </div><!-- #main-content -->
    </div><!--/.fluid-container#main-container-->
</template>

<script>

import Art from '../home/Article.vue'
export default {
    name: 'member',
    data() {
        return {
            items: [
                { message: '会员中心', link: "dashboard" },
                { message: '站内信息', link: "email" }
            ],
            userName : localStorage.getItem('user')
        }
    },
    components: {
        Art
    },
    mounted() {
      //  localStorage.setItem("sideMenu", JSON.stringify(this.items))
    },
    watch: {
        $route() {
            console.log(444)
            //localStorage.setItem("sideMenu", JSON.stringify(this.items))
        }
    }
}
</script>