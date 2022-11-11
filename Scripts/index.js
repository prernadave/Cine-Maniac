

var body = document.querySelector("body");
var backdrop = document.querySelector(".backdrop")
var popUpBox = document.querySelector(".pop-up-box");
var popUpFrame = document.querySelector("#popup-iframe")
var closebtn = document.querySelector(".close-Btn")
var advert = document.querySelector("#advertisement");
var signIn = document.querySelector(".signin");
// top
var topBtn = document.querySelector(".top-button");


function open() {
    backdrop.style.display = "block";
    popUpBox.style.display = "block";
    body.style.overflow = "hidden";
    popUpFrame.style.src = "sign-in.html";
}

function close() {
    backdrop.style.display = "none";
    popUpBox.style.display = "none";
    body.style.overflow = "none";
    popUpFrame.style.src = "sign-in.html";
}

// adding clickfunction in start free trial
// we are adding sign in page for opening everytime we click on it
// for top section button --> start free trial
topBtn.addEventListener("click", function () {
    open();
    popUpFrame.src = "sign-in.html"
});

// for advertisement
advert.addEventListener("click", function () {
    open();
    popUpFrame.src = "sign-in.html"

});

// for signinButton

signIn.addEventListener("click", function () {
    open();
    popUpFrame.src = "sign-in.html"
    console.log(1)

});

backdrop.addEventListener("click", function () {
    close();
    popUpFrame.src = "sign-in.html"

});

closebtn.addEventListener("click", function () {
    close();
    popUpFrame.src = "sign-in.html"

});

$(document).scroll(function () {
    var myID = document.getElementById("advertisement");
    var footer = document.querySelector("#footer");
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 100) {
            myID.className = "advertisement show";
            footer.style.paddingBottom = "5rem";
        } else {
            myID.className = "advertisement hide";
            footer.style.paddingBottom = "";
        }
    };
    window.addEventListener("scroll", myScrollFunc);

})


