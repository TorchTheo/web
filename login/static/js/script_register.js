$(function() {
    $(".error_check").hide()
    username_flag = false, password_flag = false, repassword_flag = false;
    username_check = /^[a-zA-Z0-9]{4,20}$/
    password_check = /^[a-zA-Z0-9]{8,16}$/
    $("input.username").blur(function() {
        if ($("input.username").val() == '') {
            $("span.error_username").text("用户名不能为空");
            $("div.error_info_username").show();
            username_flag = false;
        }else if (!username_check.test($("input.username").val())) {
            $("span.error_username").text("用户名不符合规则");
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
        } else if (!password_check.test($("input.password").val())) {
            $("span.error_password").text("密码不符合规则");
            $("div.error_info_password").show();
            password_flag = false;
        } else {
            $("div.error_info_password").hide();
            password_flag = true;
        }
        if ($("input.password").val() != $("input.repassword").val() && $("input.repassword").val() != "") {
            $("div.error_info_repassword").show();
            repassword_flag = false;
        } else if ($("input.password").val() != $("input.repassword").val() && $("input.repassword").val() == "") {
            $("div.error_info_repassword").hide();
            repassword_flag = false;
        } else {
            $("div.error_info_repassword").hide();
            repassword_flag = true;
        }
    });

    $("input.repassword").blur(function() {
        if ($("input.password").val() != $("input.repassword").val()) {
            $("div.error_info_repassword").show();
            repassword_flag = false;
        } else {
            $("div.error_info_repassword").hide();
            repassword_flag = true;
        }
    });

    $("form.register").submit(function(event) {
        if (password_flag == false || username_flag == false || repassword_flag == false) {
            if (username_flag == false) {
                if ($("input.username").val() == '') {
                    $("span.error_username").text("用户名不能为空");
                    $("div.error_info_username").show();
                } else if (!username_check.test($("input.username").val())) {
                    $("span.error_username").text("用户名不符合规则");
                    $("div.error_info_username").show();
                }
            }
            if (password_flag == false) {
                if ($("input.password").val() == '') {
                    $("span.error_password").text("密码不能为空");
                    $("div.error_info_password").show();
                } else if (!password_check.test($("input.password").val())) {
                    $("span.error_password").text("密码不符合规则");
                    $("div.error_info_password").show();
                }
            }
            if (repassword_flag == false) {
                $("div.error_info_repassword").show();
            }
            event.preventDefault();
        }
    });
});
