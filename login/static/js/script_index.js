let landInTexts = document.querySelectorAll(".landIn");
landInTexts.forEach(landInText => {
  let letters = landInText.textContent.split("");
  landInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    span.style.fontFamily = "微软雅黑体";
    landInText.append(span);
  });
});


$(function () {
  $("span.login").click(function () {
    location.href = "login";
  });
  $("span.register").click(function () {
    location.href = "register";
  });
  $("span.game1").click(function () {
    $("#game1_info_overlay").show();
  });
  $(".cancel_button1").click(function () {
    $("#game1_info_overlay").hide();
  });
  $(".enter_game1").click(function () {
    location.href = "http://127.0.0.1:8001";
  });

  $("span.game2").click(function () {
    $("#game2_info_overlay").show();
  });
  $(".cancel_button2").click(function () {
    $("#game2_info_overlay").hide();
  });
  $(".enter_game2").click(function () {
    location.href = "http://127.0.0.1:8002";
  });

  $("span.game3").click(function () {
    $("#game3_info_overlay").show();
  });
  $(".cancel_button3").click(function () {
    $("#game3_info_overlay").hide();
  });
  $(".enter_game3").click(function () {
    location.href = "http://127.0.0.1:8003";
  });
})