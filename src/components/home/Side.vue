<template>
    <div class="span4 sidebar sidebar-right">
        <div class="inner">
            <div class="block">
                <h3 class="block-title sub-title"><span>信息栏</span></h3>
                <ul class="nav nav-list secondary-nav">
                    <li id="ann_list"  v-for="(item , index) of items" :key="item.message"
                    @click="checkPrice(index)">
                        <a :href="item.link"><i class="icon-chevron-right"></i>{{ item.message }}</a>
                      </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'side',
    data() {
        return {
            items: [
                { message: '隐私政策', link:"policy"},
                { message: '规则条款', link:"rule"},
                { message: '联系我们', link:"contact"},
                { message: '关于我们' , link:"about" }
 
            ]
        }
    },
    computed: {
        // postTab() {
        //     var type = this.post.tab.toString();
        //     if (type = 'ask') {
        //         return '问答';
        //     };
        //     if (type = 'share') {
        //         return '分享';
        //     };
        //     if (type = 'job') {
        //         return '招聘';
        //     };
        //     if (type = 'good') {
        //         return '精华';
        //     };
        // }
    },
    methods: {
        getData() {
            console.log(this.$route.path)
            //获取文章信息
            // this.$http({
            //     url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
            //     method: 'get',
            //     params: {
            //         mdrender: true
            //     }
            // })
            //     .then((response) => {
            //         if (response.data.success === true) {
            //             this.post = response.data.data;
            //             this.loading = false;
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },
        checkPrice(index) {
				this.currentIndex = index;
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
    