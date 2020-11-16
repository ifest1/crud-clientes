
const CEP_API_URL = 'https://viacep.com.br/ws/';
const API_URL = 'http://127.0.0.1:8000/clients/';
const Http = new XMLHttpRequest();

function fetchResidentialData(cep, callback) {
    var url = CEP_API_URL + cep + '/json/';
    Http.open("GET", url);
    Http.send();
    executeCallback(Http, callback);
}

// post a new client
function postClient(data, callback) {
    var data = JSON.stringify(data);
    Http.open("POST", API_URL, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(data);
    executeCallback(Http, callback);
}

// fetch all clients data
function fetchAllClients(callback) {
    Http.open("GET", API_URL);
    Http.send();
    executeCallback(Http, callback);
}

// fetch client data
function fetchClient(id, callback) {
    var url = API_URL + id + '/';
    Http.open("GET", url);
    Http.send();
    executeCallback(Http, callback);
}

// delete client
function deleteClient(id, callback) {
    var url = API_URL + id + '/';
    Http.open("DELETE", url);
    Http.send();
    executeCallback(Http, callback);
}

function updateClient(id, data, callback) {
    var url = API_URL + id + '/';
    var data = JSON.stringify(data);
    Http.open("PATCH", url);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(data);
    executeCallback(Http, callback);
}

function executeCallback(Http, callback) {
    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4) {
            callback(Http.responseText);
        }
    }
}