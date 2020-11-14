window.onload = function() {
    var message = localStorage.getItem('status');
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function backButton() {
    window.location.replace('../register/register.html');
}

function listButton() {
    window.location.replace('../list/list.html');
}