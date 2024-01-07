<template>
    <div id="sidebar">
        <ul class="nav nav-list">
            <li id="n_default"><a href="mydisk.php?item=profile&amp;menu=cp"><i
                        class="icon icon-user"></i><span>会员中心</span></a></li>

            <li id="n_message"><a href="mydisk.php?item=profile&amp;menu=cp&amp;action=message"><i
                        class="icon icon-envelope"></i><span>站内消息</span></a></li>
            <li id="n_chg_logo"><a href="mydisk.php?item=profile&amp;menu=cp&amp;action=chg_logo"><i
                        class="icon icon-cogs"></i><span>网盘设置</span></a></li>

        </ul><!--/.nav-list-->

        <div id="sidebar-collapse"><i class="icon-double-angle-left"></i></div>

    </div><!--/#sidebar-->
</template>

<script>
export default {
    name: 'b_side',
    data() {
        return {}
    }
}
function myspace_stat() {
    $('#myspace_stat').html("<img src=\"images/ajax_loading.gif\" align=\"absmiddle\" border=\"0\" /><span class=\"f14\">Loading...</span>");
    $.ajax({
        type: 'post',
        url: 'ajax.php',
        data: 'action=myspace_stat',
        dataType: 'json',
        success: function (cb) {
            if (cb.success) {
                $('#myspace_stat').html(cb.data.used_space);
            } else {
                $('#myspace_stat').html(cb.msg);
            }
        },
        error: function () {
        }

    });
}

$('#m_cp').addClass('current');
$('#n_').addClass('active');
</script>