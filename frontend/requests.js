
const CEP_API_URL = 'https://viacep.com.br/ws/';
const API_URL = 'http://127.0.0.1:8000/';
const Http = new XMLHttpRequest();

function fetchResidentialData(cep) {
    var url = CEP_API_URL + cep + '/json/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    }
}

function fetchAllClients(callback) {
    var url = API_URL + 'clients/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4) {
            callback(Http.responseText);
        }
    }
}


function fetchClient(id) {
    var url = API_URL + 'clients' + '/' + id + '/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    }
}


function deleteClient(id) {
    var url = API_URL + 'clients/' + id + '/';
    Http.open("DELETE", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    }
}
