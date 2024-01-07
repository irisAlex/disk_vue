<template>
    <div id="page-content" class="clearfix">
        <div class="page-header position-relative row-fluid">

            <div class="span6">
                <h1>文件管理</h1>
            </div>
            <div id="upload_btn_place" class="span6 text-right">

                <a href="javascript:add_folder(0);" class="btn btn-pink"><i class="icon-folder-close-alt bigger-125"></i>
                    新建文件夹</a>
            </div>
        </div>
        <!--/page-header-->
        <div style="padding:10px 0;">当前路径：<a href="mydisk.php?item=profile&amp;menu=file&amp;action=files">文件管理</a>» </div>
        <div class="alert alert-danger"><img src="images/light.gif" align="absmiddle" border="0">选中批量编辑文件</div>
        <div class="table-header hide file-control">
            <ul class="inline">
                <li>已选中 <span class="selected_files_count"></span> 个文件 </li>
                <li>
                    <button class="btn btn-yellow" onclick="onShare()">批量分享</button>
                    <button class="btn btn-primary" onclick="onMove()">批量移动</button>
                    <button class="btn btn-success" onclick="on_in_Share()">批量共享</button>
                    <button class="btn btn-purple" onclick="on_un_Share()">批量取消共享</button>
                    <button class="btn btn-danger" onclick="onDelete()">批量删除</button>
                </li>


            </ul>
        </div>
        <div class="row-fluid">
            <div class="dataTables_wrapper table_files_wrapper" role="grid">
                <div class="row-fluid">
                    <div class="span5">
                        <div id="table_files_length" class="dataTables_length">
                            <label>每页显示 <select name="pn" id="pn" size="1" aria-controls="table_files" onchange="chg_pn();">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select> 个文件</label>
                        </div>
                    </div>
                    <div class="span7">
                        <div class="dataTables_filter" id="table_files_filter">
                            <form method="get" action="mydisk.php" onsubmit="return dosearch(this);">
                                <input type="hidden" name="item" value="profile">
                                <input type="hidden" name="menu" value="file">
                                <input type="hidden" name="action" value="files">
                                <input type="hidden" name="task" value="search">
                                搜索网盘:<input type="text" name="word" placeholder="请输入关键词"
                                    onfocus="$(this).animate({width:'200px'});" onblur="$(this).animate({width:'100px'});"
                                    aria-controls="table_files" style="padding:5px; width:100px;" value=""><select
                                    name="folder_id" style="width:120px; padding:4px;">
                                    <option value="0"> - 所有目录 - </option>
                                </select>
                                <input type="submit" class="btn btn-small btn-info" value="搜索">
                            </form>
                        </div>
                    </div>
                </div>

                <table id="table_files" class="table table-hover dataTable table-striped table-bordered"
                    aria-describedby="table_files_info">
                    <thead>
                        <tr role="row">
                            <th class="center sorting_disabled" role="columnheader" rowspan="1" colspan="1"
                                style="width: 30px;" aria-label=" ">
                                <label><input type="checkbox" class="hide"><span class="lbl"></span></label>
                            </th>
                            <th style="width:50%">文件(夹)名</th>
                            <!--th class="center">售价</th-->
                            <th class="center">大小</th>
                            <th class="center">下载次数</th>
                            <th class="center">添加时间</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colspan="6" class="dataTables_empty center">暂无文件</td>
                        </tr>
                    </tbody>
                </table>
                <div class="table-header hide file-control" style="margin-top:10px;">
                    <ul class="inline">
                        <li>已选中 <span class="selected_files_count"></span> 个文件 </li>
                        <li>
                            <button class="btn btn-yellow" onclick="onShare()">批量分享</button>
                            <button class="btn btn-primary" onclick="onMove()">批量移动</button>
                            <button class="btn btn-success" onclick="on_in_Share()">批量共享</button>
                            <button class="btn btn-purple" onclick="on_un_Share()">批量取消共享</button>
                            <button class="btn btn-danger" onclick="onDelete()">批量删除</button>
                        </li>


                    </ul>
                </div>
                <div class="table_files_wrapper">
                    <div class="row-fluid">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'manager',
    data() {
        return {}
    },
    components: {
    }
}
</script>