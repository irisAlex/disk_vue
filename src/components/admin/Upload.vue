<template>
    <div id="page-content" class="clearfix">
        <div class="page-header position-relative row-fluid">
            <div class="span6">
                <h1>文件上传</h1>
            </div>
            <div class="span6 text-right">
            </div>
        </div>
        <div class="wrapper-md" ng-controller="FormDemoCtrl">
            <fieldset>
                <div class="alert alert-info">
                    <button type="button" class="close" data-dismiss="alert">× </button>
                    <p><span style="color:#E56600;">【声明】严禁利用xunniun 网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理</span></p>
                    <p>【提示】上传单文件只允许10Mb以上 1Gb以下。</p>
                    <p>【注意】如上传速度慢重启路由器或者把下载工具关闭。</p>
                </div>
                <div class="td_line">
                    <file-upload ref="fileUploadDialog"  :billType="10"
                        @input="getAttachList" :limit-num="5"></file-upload>
                    <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
                        :disabled="notEdit">上传文件</el-button>
                </div>
            </fieldset>
        </div><!-- #main-content -->
    </div>
</template>
<style scope>
.tab-content>.tab-pane {
    display: none;
}

.tab-content>.active {
    display: block;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

.col-md-12 {
    width: 100%;
    padding: 10px;
    margin: 20px;
}
</style>

<script>
import FileUpload from '@/components/admin/FileUpload.vue'
export default {
    name: 'upload',
    data() {
        return {
            form: {noticeId: 2},
            notEdit : false
        }
    },
    components: {
        FileUpload
    },
    methods: {
        handleAdd() {
            this.$refs.fileUploadDialog.show()
        },
        getAttachList() {
           // router.push('manager');
            // console.log(s)
            // console.log(66666)
            // this.loading = true
            // this.attachQuery.billId = this.form.noticeId
            // this.attachQuery.billType = 10
            // listAttachment(this.attachQuery).then(response => {
            //     this.attachList = response.rows
            //     this.attachList.forEach(el => {
            //         // 转为kb，取小数点后2位
            //         el.fileSize = parseFloat(el.fileSize / 1024).toFixed(2)
            //     })
            //     this.attachTotal = response.total
            //     this.loading = false
            // }).catch(() => { })
        }
    },
    // mounted() {
    //     localStorage.setItem("sideMenu" , JSON.stringify(this.items))
    //     console.log(88888)
    // },
    watch: {
        $route() {
            // localStorage.setItem("sideMenu", JSON.stringify(this.items))
            // console.log(99999)

        }
    }
}
</script>