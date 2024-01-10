<template>
    <div>
        <div class="container-fluid" id="main-container">
            <a href="#" id="menu-toggler"><span></span></a><!-- menu toggler -->
            <cn-side ref="sideMenu"></cn-side>
            <div id="main-content" class="clearfix">
                <div v-if="loading" class="loading-overlay">
                    <div class="loader"></div>
                    <div v-if="loading">{{ load_data }}</div>
                </div>
                <cn-manager v-show="mg_show"></cn-manager>
                <cn-upload v-show="ul_show"></cn-upload>
                <cn-member v-show="mm_show"></cn-member>
            </div>
        </div>
    </div>
</template>
<script>
import cnSide from '@/components/admin/Side'
import cnManager from '@/components/admin/Manager'
import cnMember from '@/components/admin/Member'
import cnUpload from '@/components/admin/Upload'
import router from '../../router'
export default {
    name: 'disk',
    data() {
        return {
            mg_show: false,
            ul_show: false,
            mm_show: false,
            loading: false,
            load_data : null,
            sideMenuList : []
        }
    },
    methods: {
        verifyToken() {
            this.$http({
                url: `/verify`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    Token: localStorage.getItem('token')
                })
            }).then((response) => {
                if (response.status === 200) {
                  //  console.log(44444)
                    // ajsuccess("请先登陆，在访问。");
                    // $("#alertMsg").show(); 
                }
            }).catch(function (error) {
                ajerror("请先登陆，在访问。");
                $("#alertMsg").show();
                router.push('/vip')
                console.log(error);
            });
        },
        load() {
            this.loading = true;
            this.load_data = "数据正在加载，请稍等...";
            // 模拟数据加载
            setTimeout(() => {
                this.loading = false;
               // this.verifyToken()
            }, 1000);
        },
        setSideMenuAndContainer() {
            switch (this.$route.name) {
                case 'dashboard':
                    this.mm_show = true
                    this.sideMenuList = [
                        { message: '会员中心', link: "dashboard" }
                    ]
                    break;
                case 'upload':
                this.ul_show = true
                    this.sideMenuList = [
                        { message: '文件上传', 'link': "upload" }
                    ]
                    break;
                case 'manager':
                    this.mg_show = true
                    this.sideMenuList = [
                        { message: '文件管理', 'link': "manager" }
                    ]
                    break;
                default:
                this.mm_show = true
                    this.sideMenuList = [
                        { message: '会员中心', link: "dashboard" },
                    ]

            }
        }
    },
    components: {
        cnSide,
        cnManager,
        cnUpload,
        cnMember
    },
    mounted() {
        this.verifyToken()
        this.load()
        this.setSideMenuAndContainer()
        this.$refs.sideMenu.getMenuList(this.sideMenuList)
    },
    beforeMount() {
    },
    watch: {
        $route() {
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
    background-color: rgba(255, 255, 255, 0.7);
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
}</style>