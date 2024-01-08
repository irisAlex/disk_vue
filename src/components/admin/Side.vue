<template>
    <div id="sidebar1">
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
<style scoped>
#sidebar1>#nav-search {
    position: relative;
    text-align: center;
    background-color: #fafafa;
    height: 35px;
    padding-top: 5px;
    border-bottom: 1px solid #DDD
}

#sidebar1>#nav-search>.form-search #nav-search-input {
    width: 130px!important;
    border-radius: 0!important;
    max-width: 130px!important;
    opacity: 1!important
}

#sidebar1>#nav-search #nav-search-input+.dropdown-menu {
    text-align: left
}

#sidebar1.menu-min>#nav-search>.form-search {
    position: absolute;
    left: 5px;
    z-index: 14
}

#sidebar1.menu-min>#nav-search>.form-search #nav-search-input {
    width: 0!important;
    max-width: 0!important;
    opacity: 0!important
}

#sidebar1.menu-min>#nav-search:hover #nav-search-input,#sidebar.menu-min>#nav-search #nav-search-input:focus,#sidebar.menu-min>#nav-search #nav-search-input:hover,#sidebar.menu-min>#nav-search #nav-search-input:active {
    width: 130px!important;
    max-width: 130px!important;
    opacity: 1!important
}

#sidebar1.menu-min>#nav-search>.form-search #nav-search-icon {
    border: 1px solid;
    border-radius: 32px;
    background-color: #FFF;
    padding: 0 5px
}

#sidebar1>#nav-search>.form-search #nav-search-icon,#sidebar.menu-min>#nav-search:hover #nav-search-icon,#sidebar.menu-min>#nav-search>.form-search #nav-search-input:focus ~ #nav-search-icon,#sidebar.menu-min>#nav-search>.form-search #nav-search-input:hover ~ #nav-search-icon,#sidebar.menu-min>#nav-search>.form-search #nav-search-input:active~#nav-search-icon {
    border: 0;
    border-radius: 0;
    padding: 0 3px
}

#sidebar1:before {
    position:absolute;
    content: "";
    display: block;
    width: 189px;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-color: #f2f2f2;
    border-right: 1px solid #CCC
}

#sidebar1 {
    height: auto;
    width: 189px;
    position: absolute;
    margin-left: 0;
    margin-top: 0;
    border-right: 1px solid #CCC;
    background-color: #FFF
}

</style>
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