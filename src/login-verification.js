function validateLogin() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "user") {

        alert("You succesfully login!");
        return true;
    }
    else {

        alert("Sorry, that's the wrong username and password!");
    }

    

}