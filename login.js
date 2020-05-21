
window.onload=function(){
  let viewMore = document.querySelector(".view-more");
  let question = document.querySelector(".more");


  viewMore.addEventListener('click', function(){
    question.classList.add("show");
  });

  let pswshow = document.getElementById("pswshow");
  let pswToggle = document.getElementById("psw-toggle");
  function myFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
      pswToggle.parentElement.style.width = "66px";
      pswToggle.parentElement.style.left = "calc(100% - 66px)";
      pswToggle.innerHTML = "숨기기";
      pswToggle.style.width = "42px";
    } else {
      x.type = "password";
      pswToggle.style.width = "26px";
      pswToggle.parentElement.style.width = "52px";
      pswToggle.parentElement.style.left = "calc(100% - 52px)";
      pswToggle.innerHTML = "표시";
      pswToggle.style.width = "28px";
    }
  }
  pswshow.addEventListener('click', myFunction);
}