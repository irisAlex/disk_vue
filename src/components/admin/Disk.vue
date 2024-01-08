<template>
    <div class="container-fluid" id="main-container">
        <div class="alert alert-error hide" id="alertMsg">
            <button type="button" onclick="$('#alertMsg').hide();" class="close">×</button>
            <strong>错误!</strong> <span id="alert_content">提示信息。</span>
        </div>
        <a href="#" id="menu-toggler"><span></span></a><!-- menu toggler -->
        <side></side>
        <div id="main-content" class="clearfix">
            <manager v-show="mg_show"></manager>
            <upload v-show="ul_show"></upload>
            <member v-show="mm_show"></member>
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
            mm_show: false
        }
    },
    methods: {
        verifyToken() {
            this.$http({
                url: `http://8.140.252.134:8088/verify`,   //ES6语法，引入组件内的 route object（路由信息对象） 
                method: 'post',
                data: JSON.stringify({
                    Token: localStorage.getItem('token')
                })
            }).then((response) => {
                console.log(response)
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
        }
    },
    components: {
        Side,
        Manager,
        Upload,
        Member
    },
    beforeMount() {
        this.verifyToken()
    },
    watch: {
        $route() {

        }
    }

}
</script>