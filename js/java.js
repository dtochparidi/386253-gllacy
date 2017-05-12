var login = document.querySelector(".js");
var login_popup = document.querySelector(".feedback-container");
var input = document.querySelector("[name=your-name]");
var imail = document.querySelector(".js-mail");
var close = document.querySelector(".feedback-close");
var form = document.querySelector(".feedback");
var storage = localStorage.getItem("nick");
var storage2 = localStorage.getItem("storage_mail");
var feedback = localStorage.getItem(".feedback");

login.addEventListener("click", function(evt){
 evt.preventDefault();
 login_popup.classList.add("content-show");

 if (storage) {
   login.value = storage;
   imail.focus();
 } else {
   input.focus();
 }
});

close.addEventListener("click", function(evt){
 evt.preventDefault();
 login_popup.classList.remove("content-show");
 login_popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
 if (!input.value || !imail.value)  {
  evt.preventDefault();
  login_popup.classList.add("modal-error");
  console.log("Нужно ввести логин и пароль");
} else {
  localStorage.setItem("nick", input.value);
  localStorage.setItem("storage_mail", imail.value);
  console.log ("storage");
  console.log ("storage2");
}
});

window.addEventListener ("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (login_popup.classList.contains("content-show")) {
    login_popup.classList.remove("content-show");
   }
  }
});
