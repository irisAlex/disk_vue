<template>
    <div>
        <div class="container-fluid" id="main-container">
            <div class="alert alert-error hide" id="alertMsg">
                <button type="button" onclick="$('#alertMsg').hide();" class="close">×</button>
                <strong>错误!</strong> <span id="alert_content">提示信息。</span>
            </div>
            <a href="#" id="menu-toggler"><span></span></a><!-- menu toggler -->
            <side></side>
            <div id="main-content" class="clearfix">
                <div v-if="loading" class="loading-overlay">
                    <div class="loader"></div>
                    <div v-if="loading">{{ load_data }}</div>
                </div>
                <manager v-show="mg_show"></manager>
                <upload v-show="ul_show"></upload>
                <member v-show="mm_show"></member>
            </div>
        </div>
    </div>
</template>

<script>
import Side from './Side.vue'
import Manager from './Manager.vue'
import Upload from './Upload.vue'
import Member from './Member.vue'
import router from '../../router'
export default {
    name: 'disk',
    data() {
        return {
            mg_show: false,
            ul_show: false,
            mm_show: false,
            loading: false,
            load_data : null
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

                    if (this.$route.name === "dashboard") {
                        this.mm_show = true
                    }
                    if (this.$route.name === 'manager') {
                        this.mg_show = true
                    }

                    if (this.$route.name === 'upload') {
                        this.ul_show = true
                    }
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
        }
    },
    components: {
        Side,
        Manager,
        Upload,
        Member
    },
    mounted() {
        this.verifyToken()
        this.load()
    },
    beforeMount() {
      //  this.verifyToken()

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