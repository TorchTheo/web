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


$(function() {
    $("span.login").click(function() {
        location.href="login";
    });
    $("span.register").click(function() {
        location.href="register";
    });
})