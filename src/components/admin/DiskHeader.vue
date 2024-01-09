<template>
    <div class="navbar">
        <div class="navbar-inner">
            <div id="ie_tips" style="display:none"></div>
            <div class="container-fluid" style="height: 80px;margin-bottom:0">
                <a class="brand" href="#"><img src="static/img/logo.png" style="width: 120px; height: 60px;"></a>
                <ul class="nav1 main-menu menu-left">
                    <li v-for="item in items" :key="item.key" @click="setSideMenu(item.link)">
                        <a :href="item.link">{{ item.message }}</a>
                    </li>
                </ul>
                <ul class="nav1 ace-nav pull-right">
                    <li class="green">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <i class="icon-envelope-alt icon-only"></i>
                            <span class="badge badge-success bold"></span>
                        </a>
                        <ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-closer">
                            <li class="nav-header">
                                <i class="icon-envelope"></i> 条未读信息
                            </li>
                            <li>
                                <a href="mydisk.php?item=profile&menu=cp&action=message">
                                    查看所有系统信息
                                    <i class="icon-arrow-right"></i>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li class="user-profile" style="background-color:f5f5f5">
                        <a class="user-menu dropdown-toggle" data-toggle="dropdown">
                            <span id="user_info"><small>{{ accountUser }}</small>欢迎回来</span><i
                                class="icon-caret-down"></i></a>
                        <ul class="pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-closer" id="user_menu">
                            <li><a href="dashboard"><i class="icon-home"></i> 会员中心</a></li>
                            <li><a href="manageer"><i class="icon-list"></i> 文件管理</a>
                            </li>
                            <li><a href="upload"> <i
                                        class="icon-cloud-upload"></i> 上传文件</a></li>
                            <!-- <li><a href="space_alex123456.html"> <i class="icon-hdd"></i> 网盘空间</a></li> -->
                            <li class="divider"></li>
                            <li><a href="#" @click="quit"><i class="icon-off"></i> 安全退出</a></li>
                        </ul>
                    </li>

                    <!--<li class="light-blue user-profile" data-rel="tooltip" data-placement="bottom" title="帮助信息">
                    <a class="user-menu dropdown-toggle" href="?item=help&action=index" >
                        <i class="icon-info"></i>
                    </a>
                </li>-->

                </ul>
                <!--div id="nav-search-top" class="pull-right"-->
            </div>
        </div><!--/.container-fluid-->
    </div><!--/.navbar-inner-->
</template>

<script>
export default {
    name: 'bdHeader',
    data() {
        return {
            items: [
                { message: '首页', 'link': "dashboard" },
                { message: '上传文件', 'link': "upload" },
                { message: '文件管理', 'link': "manager" },
                { message: '下载', 'link': "down" }
            ],
            accountUser: localStorage.getItem('user'),
            sideMenuList: []
        }
    },
    methods: {
        quit() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.$router.push('vip')
        },
        setSideMenu(s) {
            switch (s) {
                case 'dashboard':
                    this.sideMenuList = [
                        { message: '会员中心', link: "dashboard" }
                        // { message: '站内信息', link: "email" }
                    ]
                    break;
                case 'upload':
                    this.sideMenuList = [
                        { message: '文件上传', 'link': "upload" }
                    ]
                    break;
                case 'manager':
                    this.sideMenuList = [
                        { message: '文件管理', 'link': "manager" }
                    ]
                    break;
                default:
                    this.sideMenuList = [
                        { message: '会员中心', link: "dashboard" },
                        { message: '站内信息', link: "email" }
                    ]

            }
            localStorage.setItem("sideMenu", JSON.stringify(this.sideMenuList))
        }
    },
    mounted() {
        this.setSideMenu('')
    },
}
</script>

<style scoped>
.navbar .nav1 {
    position: relative;
    left: 0;
    display: block;
    float: left;
    margin: 0 10px 0 10px;
    margin-top: 30px;
    padding: 0 10px 0 10px;
}

.navbar .nav1.pull-right {
    float: right;
    margin-right: 0;
}

.navbar .nav1>li {
    float: left;
}

.navbar .nav1>li>a {
    float: none;
    padding: 10px 30px 10px;
    color: #000;
    text-decoration: none;
}

.navbar .nav1 .dropdown-toggle .caret {
    margin-top: 8px;
}

.navbar .nav1>li>a:focus,
.navbar .nav1>li>a:hover {
    color: #333;
    text-decoration: none;
    background-color: transparent;
}
</style>

