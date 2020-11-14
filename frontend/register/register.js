window.onload = function() {
    const cepElement = document.getElementById('cep');
    cepElement.addEventListener('input', cepInputListener);
}

// sends data to backend then execute a callback
function submitData() {
    var data = {};

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        data[inputs[index].id] = inputs[index].value;
    }

    postClient((data), (response) => {
        var response = JSON.parse(response);
        localStorage.setItem('status', response.status);
        window.location.replace('../message_page/message_page.html');
    });
}

function cepInputListener(e) {
    var cep = e.target.value;
    if (cep.length == 8) {
        fetchResidentialData(cep, (data) => {
            var data = JSON.parse(data);
            var stateElement = document.getElementById('state');
            var cityElement = document.getElementById('city');
            var neighborhoodElement = document.getElementById('neighborhood');
            stateElement.value = data.uf;
            cityElement.value = data.localidade;
            neighborhoodElement.value = data.bairro;
        })
    }
}