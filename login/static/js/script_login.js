$(function() {
    username_flag = false, password_flag = false;
    $("input.username").blur(function() {
        if ($("input.username").val() == '') {
            $("span.error_username").text("用户名不能为空");
            $("div.error_info_username").show();
            username_flag = false;
        } else {
            $("div.error_info_username").hide();
            username_flag = true;
        }
    });

    $("input.password").blur(function() {
        if ($("input.password").val() == '') {
            $("span.error_password").text("密码不能为空");
            $("div.error_info_password").show();
            password_flag = false;
        } else {
            $("div.error_info_password").hide();
            password_flag = true;
        }
    });

    $("form.login").submit(function(event) {
        if (password_flag == false || username_flag == false) {
            alert("不可提交")
            event.preventDefault();
        }
    });
});