
var signinData = JSON.parse(localStorage.getItem("signinData")) || []

var ID = document.querySelector("#inputid").value;
var user = undefined;
var cineID = document.querySelector("#submit");
cineID.addEventListener("click", function () {
    var flag = false;
    for (var i = 0; i < signinData.length; i++) {
        if (signinData[i].email == ID) {
            user = signinData[i].fname + " " + signinData[i].lname;
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