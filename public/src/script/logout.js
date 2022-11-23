// handling submite
document.querySelector("form")
.addEventListener("submit", function(event) {
    setCookie("token",null,-15*60*1000);
    setCookie("refresh_token",null,-30*12*60*60*1000);
    window.location.replace("login.html");
  });