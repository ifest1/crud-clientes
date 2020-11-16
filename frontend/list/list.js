window.onload = () => {
    listClients();
}

function listClients() {
    fetchAllClients((data) => {
        var data = JSON.parse(data);
        var ul = document.getElementById('client-list');
        data.forEach(function(item) {
            var node = buildListElement(item);
            ul.appendChild(node);
          });
    });
}

function deleteClientById(id) {
    var listElement = document.getElementById('container' + id);
    listElement.remove();
    deleteClient(id, () => {});
}

function updateClientById(id) {
    var data = {}
    var listElement = document.getElementById('element' + id);
    var elements = Array.from(listElement.children);
    
    elements.forEach((item, index) => {
        if (index % 2 == 0) {
            data[item.id] = elements[index + 1].value;
        }
    })

    updateClient(id, data, (response) => {
        console.log(response);
    })
    
}


function buildListElement(item) {
    var node = document.createElement('li');
    node.innerHTML += '<div id="container'+ item.id +'" class="container-main">\
    <div class="container-list"><h2 id="name">'+ item.name +'</h2>\
    <div class="container-btns">\
    <button onclick="updateClientById(this.id)" id="'+ item.id +'"" class="common-btn">Atualizar</button>\
    <button onclick="deleteClientById(this.id)" id="'+ item.id +'"class="common-btn">Deletar</button></div></div>\
    <div id="'+ 'element' + item.id +'" class="container-credentials">\
    <span id="city" class="key">Cidade</span>\
    <input class="data" value="'+ item.city +'">\
    <span id="address" class="key">Endereço</span>\
    <input class="data" value="'+ item.address +'">\
    <span id="neighborhood" class="key">Bairro</span>\
    <input class="data" value="'+ item.neighborhood + '">\
    <span id="cep" class="key">CEP</span>\
    <input class="data" value="'+ item.cep +'">\
    <span id="email" class="key">Email</span>\
    <input class="data" value="'+ item.email +'">\
    <span id="state" class="key">Estado</span>\
    <input class="data" value="'+ item.state +'">\
    </div></div>';
    return node;
}
