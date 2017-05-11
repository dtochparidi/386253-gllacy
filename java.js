var login = document.querySelector(".js");
var login_popup = document.querySelector(".feedback-container");
var input = document.querySelector("[name=your-name]");
var imail = document.querySelector(".js-mail");
var close = document.querySelector(".feedback-close");
var form = document.querySelector(".feedback");

login.addEventListener("click", function(evt){
 evt.preventDefault();
 login_popup.classList.add("content-show");
 input.focus();
});

close.addEventListener("click", function(evt){
 evt.preventDefault();
 login_popup.classList.remove("content-show");
});

form.addEventListener("submit", function(evt){
 if (!input.value || !imail.value)  {
  evt.preventDefault();
 }
});
