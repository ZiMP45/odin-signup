function passwordConfirmation() {
    let password = document.getElementById('pwd').value;
    let confirmation = document.getElementById('confirm').value;

    if(password == "") {
        alert("Error: password field is empty");
    } else if (password == confirmation) {
        alert("Logged in")
    } else {
        alert("Please make sure your passwords match");
    }
};