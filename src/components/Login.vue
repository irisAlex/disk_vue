<template>
    <div>
        <div id="content" style="background:url(templates/phpdisk_new_blue/images/bg_body_res.jpg) center;margin-top:80px;">
            <div class="container">
                <div class="alert alert-error hide" id="alertMsg">
                    <button type="button" onclick="$('#alertMsg').hide();" class="close">×</button>
                    <strong>错误!</strong> <span id="alert_content">提示信息。</span>
                </div>
                <div class="row" style="margin-top:50px;">

                    <div class="signin span6">
                        <p class="sign_title">
                            <span style="font-size:24px;color:#000000;font-family:SimSun;">登录您的账户</span>
                        </p>
                        <div style="margin:0px;padding:10px;font-size:16px;color:#FFFFFF;background:#ffffff;">
                            <strong></strong>
                        </div>
                        <br>
                        <p></p>
                        <form name="login_form" id="login_form" action="account.php" method="post" class="form-horizontal">
                            <input type="hidden" name="action" value="login">
                            <input type="hidden" name="task" value="login">
                            <input type="hidden" name="ref" value="">
                            <input type="hidden" name="formhash" value="4bfcbb75">
                            <input type="hidden" name="verycode">
                            <div class="control-group">
                                <label class="control-label" for="inputusername">用户名</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" name="username" id="inputusername" placeholder="用户名">
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="inputPassword">密码</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="password" id="inputPassword" name="password" placeholder="密码">
                                </div>
                            </div>


                            <div class="forgot">
                                <label class="checkbox">
                                    <input type="checkbox" name="remember" value="1"> <span
                                        style="font-size:16px;">保持登录状态</span></label><a
                                    href="account.php?action=forget_pwd"></a><a
                                    href="http://www.xunniuwp.com/about.php?action=contactus">忘记密码？</a>
                            </div>

                            <button type="button" class="btn btn-primary btn-large" id="login_btn"
                                onclick="chkform_login();">立即登录</button>
                        </form>

                    </div>

                    <div class="signup span6">


                        <div class="social_sign">


                        </div>
                        <p class="sign_title">
                            <span style="font-size:24px;color:#000000;font-family:SimSun;">注册新的账户</span>
                        </p>
                        <form name="reg_form" id="reg_form" action="account.php" method="post" class="form-horizontal">
                            <input type="hidden" name="action" value="register">
                            <input type="hidden" name="task" value="register">
                            <input type="hidden" name="invite_uid" value="0">
                            <input type="hidden" name="formhash" value="4bfcbb75">
                            <input type="hidden" name="confirm_password">
                            <input type="hidden" name="verycode">
                            <div class="control-group">
                                <label class="control-label" for="r_username">用户名</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" id="r_username" name="username" placeholder="用户名" value=""
                                        maxlength="20" onblur="chk_username();"><span class="txtred"
                                        id="e_username">&nbsp;</span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="r_email">邮箱</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" name="email" placeholder="邮箱" id="r_email" value="" maxlength="50"
                                        onblur="chk_email();"><span class="txtred" id="e_email">&nbsp;</span>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label" for="regpassword">密码</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="password" id="regpassword" name="password" placeholder="密码">
                                </div>
                            </div>
                            <label class="checkbox">
                                <input type="checkbox" id="termandservice">我同意 <a target="_blank"
                                    href="about.php?action=protocol">网站服务条款</a>
                            </label>
                            <button type="button" class="btn btn-success btn-large" id="reg_btn" onclick="chkform_reg();"
                                style="margin-top: 40px;">立即注册</button>
                        </form>

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
        name: 'Login',
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
            postTab() {
                var type = this.post.tab.toString();
                if (type = 'ask') {
                    return '问答';
                };
                if (type = 'share') {
                    return '分享';
                };
                if (type = 'job') {
                    return '招聘';
                };
                if (type = 'good') {
                    return '精华';
                };
            }
        },
        methods: {
            getData() {
                //获取文章信息
                this.$http({
                    url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                    method: 'get',
                    params: {
                        mdrender: true
                    }
                })
                    .then((response) => {
                        if (response.data.success === true) {
                            this.post = response.data.data;
                            this.loading = false;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
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
    