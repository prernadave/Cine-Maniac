var SigninData = JSON.parse(localStorage.getItem("signinData")) || [];
var user = localStorage.getItem("user");

var parentDocument = window.parent.document;
var body = parentDocument.querySelector("body");
var popupbox = parentDocument.querySelector(".pop-up-box");
var backdrop = parentDocument.querySelector(".backdrop");
var closebtn = parentDocument.querySelector(".close-Btn");
var advert = parentDocument.querySelector("#advertisement");
var signBtn = parentDocument.querySelector(".signin");


var signBtnText = parentDocument.querySelector("#signin-btn-text");
var topBtn = parentDocument.querySelector(".top-button")
var info = parentDocument.querySelector(".info")
var iframe = parentDocument.querySelector("#popup-iframe")

var passwordInp = document.querySelector("#password");
var passSubmit = document.querySelector("#passSubmit");

function open() {
    backdrop.style.display = "block"
    popupbox.style.display = "block"
    body.style.overflow = "hidden"

}

function close() {
    backdrop.style.display = "none"
    popupbox.style.display = "none"
    body.style.overflow = "auto"
}

passSubmit.addEventListener("click", function () {
    var flag = false;
    for (var i = 0; i < signinData.length; i++) {
        if (signinData[i].pass == passwordInp) {
            flag = true;
            break;
        }
    }
    if (flag) {
        close();
        advert.style.display = "none";
        topBtn.style.display = "none";
        info.forEach(function (element) {
            element.style.display = "none";
        });
        signBtn.classList.remove("class", "signin");
        signBtn.setAttribute("id", "signout");
        signBtnText.innerHTML = '<i class="fa-solid fa-user fa-sm"></i>&nbsp&nbsp' + person;

        var signOutBtn = parentDocument.querySelector("#signout")
    }

})