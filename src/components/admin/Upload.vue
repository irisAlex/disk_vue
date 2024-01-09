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
                    <p><span style="color:#E56600;">【声明】严禁利用迅牛网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理</span></p>
                    <p>【提示】上传单文件只允许10Mb以上 2Gb以下。</p>
                    <p>【注意】如上传速度慢重启路由器或者把下载工具关闭。</p>
                </div>
                <table align="center" width="100%" cellpadding="4" cellspacing="0" border="0" class="td_line">
                    <tbody>
                        <tr>
                            <td width="600" colspan="2" valign="top">
                                <div class="container">

                                    <div class="tab-content">
                                        <div class="row" style="margin-top: 20px;">
                                            <input type="hidden" id="domain" value="http://upload.qiniu.com/">
                                            <input type="hidden" id="uptoken_url"
                                                value="token.inc.php?folder_id=0&amp;cate_id=0">
                                            <div class="col-md-12">
                                                <div id="container" style="position: relative;">
                                                    <a class="btn btn-default btn-lg " id="pickfiles" href="#"
                                                        style="position: relative; z-index: 1;">
                                                        <i class="glyphicon glyphicon-plus"></i>
                                                        <span>选择文件</span>
                                                    </a>
                                                    <a class="btn btn-success btn-lg" id="qiniu_upbtn" href="#">
                                                        <span>确认上传</span>
                                                    </a>
                                                    <div id="html5_1hjfje5pn1oio198f132b3vj1qqr3_container"
                                                        class="moxie-shim moxie-shim-html5"
                                                        style="position: absolute; top: 0px; left: 20px; width: 122px; height: 46px; overflow: hidden; z-index: 0;">
                                                        <input id="html5_1hjfje5pn1oio198f132b3vj1qqr3" type="file"
                                                            style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"
                                                            multiple="" accept=""></div>
                                                </div>
                                            </div>
                                            <div style="margin-left:20px; clear:both">
                                                <div id="sel_box" style="padding:5px;">设置上传目录：
                                                    <span id="cate_list"><select id="folder_id" name="folder_id">
                                                            <option value="0">根目录</option>
                                                        </select></span><a href="javascript:;" onclick="chg_cate();"
                                                        title="新增目录">[+]</a>
                                                </div>
                                                <div id="add_box" style="display:none;padding:5px;">新增目录：
                                                    <input type="text" id="cate_name" value="" style="padding:4px;"><input
                                                        type="button" style="padding:5px;" value="添加"
                                                        onclick="add_cate();"><input type="button" style="padding:5px;"
                                                        value="返回" onclick="chg_cate();">
                                                </div>

                                            </div>
                                            <div style="display:none" id="success" class="col-md-12">
                                                <div class="alert-success">
                                                    队列全部文件处理完毕
                                                </div>
                                            </div>
                                            <div class="col-md-12 ">
                                                <table class="table table-striped table-hover text-left"
                                                    style="margin-top:20px;display:none">
                                                    <thead>
                                                        <tr>
                                                            <th width="30%">文件名称</th>
                                                            <th width="20%">文件大小</th>
                                                            <th width="50%">详细状态</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="fsUploadProgress">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </fieldset>
    </div><!-- #main-content -->
</div>

</template>
<style scope>
.tab-content > .tab-pane {
    display: none;
  }
  .tab-content > .active {
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
export default {
    name: 'upload',
    data() {
        return {
            items2 :  [
                { message: '文件上传', 'link':"upload"}
            ]
        }
    },
    components: {
    },
    // mounted() {
    //     localStorage.setItem("sideMenu" , JSON.stringify(this.items))
    //     console.log(88888)
    // },
    watch: {
        $route() {
           // localStorage.setItem("sideMenu", JSON.stringify(this.items))
            console.log(99999)

        }
    }
}
</script>