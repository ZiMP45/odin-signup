function passwordConfirmation() {
    let password = document.getElementById('pwd').value;
    let confirmation = document.getElementById('confirm').value;

    if (password == confirmation) {
        document.getElementById('message').style.color = 'green'
        document.getElementById('message').innerHTML = 'Matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Not Matching';
    }
};