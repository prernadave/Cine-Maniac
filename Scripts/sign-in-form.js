var signInData = JSON.parse(localStorage.getItem("signInData")) || [];
;

var parentDocument = window.parent.document;
var popUpFrame = document.querySelector("#popup-iframe");

var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var birthday = form.birthday.value;
    var email = form.email.value;
    var pass = form.pass.value;
    var obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.birthday = birthday;
    obj.email = email;
    obj.pass = pass;
    signInData.push(obj);
    localStorage.setItem("signInData", JSON.stringify(signInData));
    popUpFrame.src = "sign-in.html";
});

