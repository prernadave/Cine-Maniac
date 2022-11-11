
var signInData = JSON.parse(localStorage.getItem("signInData")) || []

var inputID = document.querySelector("#inputid").value;
var person = undefined;
var cineID = document.querySelector("#submit");
cineID.addEventListener("click", function () {
    var flag = false;
    for (var i = 0; i < signInData.length; i++) {
        if (signInData[i].email == ID) {
            user = signInData[i].firstName + " " + signInData[i].lastName;
            window.location.href = "login-password.html";
            flag = true;
            break;

        }
    }

    if (flag == false) {
        alert("Enter a valid Cine ID");
    }
    localStorage.setItem("user", user);


});