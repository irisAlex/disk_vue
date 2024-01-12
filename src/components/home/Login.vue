<template>
    <div>
        <div v-if="loading" class="loading-overlay">
            <div class="loader"></div>
            <div v-if="loading">{{ data }}</div>
        </div>
        <!-- <div v-if="!loading && data">{{ data }}</div> -->
        <div id="content">
            <div class="container">
                <div class="alert alert-error hide" id="alertMsg">
                    <button type="button" onclick="$('#alertMsg').hide();" class="close">×</button>
                    <strong>错误!</strong> <span id="alert_content">提示信息。</span>
                </div>
                <div class="row" style="margin-top:150px;">

                    <div class="signin span6">
                        <p class="sign_title">
                            <span style="font-size:24px;color:#000000;font-family:SimSun;">登录您的账户</span>
                        </p>
                        <div style="margin:0px;padding:10px;font-size:16px;color:#FFFFFF;background:#ffffff;">
                            <strong></strong>
                        </div>
                        <br>
                        <p></p>
                        <form name="login_form" id="login_form" class="form-horizontal">
                            <div class="control-group">
                                <label class="control-label" for="inputusername">用户名</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" name="username" id="inputusername" placeholder="用户名" v-model="user">
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="inputPassword">密码</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="password" id="inputPassword" name="password" placeholder="密码"
                                        v-model="pwd">
                                </div>
                            </div>


                            <div class="forgot">
                                <label class="checkbox">
                                    <input type="checkbox" name="remember" value="0"> <span
                                        style="font-size:16px;">保持登录状态</span></label><a
                                    href="account.php?action=forget_pwd"></a><a href="#">忘记密码？</a>
                            </div>

                            <button type="button" class="btn btn-primary btn-large" id="login_btn"
                                @click="login()">立即登录</button>
                        </form>

                    </div>

                    <div class="signup span6">


                        <div class="social_sign">


                        </div>
                        <p class="sign_title">
                            <span style="font-size:24px;color:#000000;font-family:SimSun;">注册新的账户</span>
                        </p>
                        <form name="reg_form" id="reg_form" class="form-horizontal">
                            <div class="control-group">
                                <label class="control-label" for="r_username">用户名</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" id="r_username" name="username" placeholder="用户名" value=""
                                        maxlength="20" v-model="username"><span class="txtred" id="e_username">&nbsp;</span>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="r_email">邮箱</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="text" name="email" placeholder="邮箱" id="r_email" value="" maxlength="50"
                                        v-model="email" class="txtred"><span class="txtred" id="e_email">&nbsp;</span>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label" for="regpassword">密码</label>
                                <div class="controls" style="text-align: left;">
                                    <input type="password" id="regpassword" name="password" placeholder="密码"
                                        v-model="password">
                                </div>
                            </div>
                            <label class="checkbox">
                                <input type="checkbox" id="termandservice" style="margin-top: 3px;"> 我同意 <a target="_blank"
                                    href="rule">网站服务条款</a>
                            </label>
                            <button type="button" class="btn btn-success btn-large" id="reg_btn" @click="register()"
                                style="margin-top: 40px;">立即注册</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: "",
            password: "",
            email: "",
            user: "",
            pwd: "",
            loading: false,
            data: "",
            path : ''
        }
    },
    computed: {

    },
    components: {
    },
    methods: {
        chk_email() {
            const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (!regEmail.test(this.email)) {
                // 合法的邮箱
                ajerror('邮箱地址不合法，请输入合法的邮箱');
                $("#alertMsg").show();
                $('#e_email').addClass('txtred');
                return
            }
        },
        login() {
            if (this.user == '' || this.pwd == '') {
                ajerror('请输入正确的用户名和密码');
                $("#alertMsg").show();
                return
            }

            this.$http({
                url: `/login`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    user: this.user,
                    cipher: this.pwd
                })
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data)

                    localStorage.setItem('user', response.data.user)
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('email',response.data.email)
                    localStorage.setItem("set_meal",response.data.set_meal)
                    localStorage.setItem("expri_time",response.data.exri_time)
                    this.path = 'dashboard'
                    this.load()
                }
            }).catch(function (error) {
                ajerror('用户名或密码错误，请确认后登陆');
                $("#alertMsg").show();
                console.log(error);
            });
        },
        register() {
            if (!$("#termandservice").is(':checked')) {
                ajerror("请阅读并确认网站服务条款。");
                $("#alertMsg").show();
                return
            }
            const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (this.username == '' || this.password == '' || this.email == '') {
                ajerror('请输入正确的注册信息');
                $("#alertMsg").show();
                return
            }

            if (!regEmail.test(this.email)) {
                // 合法的邮箱
                ajerror('邮箱地址不合法，请输入合法的邮箱');
                $("#alertMsg").show();
                $('#e_email').addClass('txtred');
                return
            }
            this.$http({
                url: `/register`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    name: this.username,
                    cipher: this.password,
                    email: this.email
                })
            }).then((response) => {
             //   this.msg = response.data
                if (response.status === 200) {
                    localStorage.setItem('user', response.data.user)
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('email',response.data.email)
                    localStorage.setItem("set_meal",response.data.set_meal)
                    localStorage.setItem("expri_time",response.data.exri_time)
                    this.path = 'dashboard'
                    this.load()
                }
            }).catch(function (error) {
                ajerror('用户或email 已经存在，请修改后在重新注册');
                $("#alertMsg").show();
                console.log(error);
            });
        },
        load() {
            this.loading = true;
            this.data = "正在登陆，请稍等..."
            // 模拟数据加载
            setTimeout(() => {
                this.loading = false;
                this.$router.push(this.path);
            }, 1000);
        }

    },
    beforeMount() {
        // this.loading = true;
        // this.getData();
    },
    watch: {
        $route() {
            // this.getData();
        }
    }
}
</script> 

<style>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    border: 8px solid #f3f3f3;
    /* Light grey */
    border-top: 8px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
    