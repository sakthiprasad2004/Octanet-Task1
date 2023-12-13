function validateLogin() {
    //simply check if the username and password are not empty
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username !== "" && password !== "") {
        // Redirect to the home page (replace 'homepage.html' with your actual home page)
        window.location.href = "homepage.html";
    } else {
        alert("Please enter both username and password.");
    }
}
