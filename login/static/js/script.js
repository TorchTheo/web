$(function() {
    $("input.username").blur(function() {
        if ($("input.username").val() == '') {
            $("span.err_username").text = "用户名不能为空"
            $("span.err_username").show();
        } else {
            $("span.err_username").hide();
        }
    });

    $("input.password").blur(function() {
        if ($("input.password").val() == '') {
            $("span.err_password").text = "密码不能为空"
            $("span.err_password").show();
        } else {
            $("span.err_password").hide();
        }
    });
});
