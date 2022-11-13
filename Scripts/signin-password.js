var signInData = JSON.parse(localStorage.getItem("signInData")) || [];
var user = localStorage.getItem("person");

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
var popUpFrame = parentDocument.querySelector("#popup-iframe")

var passwordInp = document.querySelector("#password");
var submitpass = document.querySelector("#passSubmit");

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

submitpass.addEventListener("click", function () {
    var flag = false;
    for (var i = 0; i < signInData.length; i++) {
        if (signInData[i].pass == passwordInp) {
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

        var signOutBtn = parentDocument.querySelector("#sign-out_btn");
        signOutBtn.addEventListener("mouseenter", function () {
            signBtnText.innerHTML =
                '<i class="fa-solid fa-arrow-right-from-bracket"></i>&nbspSign Out';
        });

        signOutBtn.addEventListener("mouseleave", function () {
            signBtnText.innerHTML =
                '<i class="fa-solid fa-user fa-sm"></i>&nbsp&nbsp' + person;
        });

        signOutBtn.addEventListener("mousedown", () => {
            advert.style.display = "";
            topBtn.style.display = "block";
            info.forEach(function (el) {
                el.style.display = "block";
            });
            signBtn.removeAttribute("id", "sign-out_btn");
            signBtn.classList.add("class", "sign-in_btn");
            popUpFrame.src = "sign-in.html";
            localStorage.removeItem("person");
            signBtnText.innerHTML =
                '<i class="fa-solid fa-user fa-sm"></i>&nbspSign In';
        });
    }

});