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
    var listElement = document.getElementById('element' + id);
    listElement.remove();
    deleteClient(id, () => {});
}


function buildListElement(item) {
    var node = document.createElement('li');
    node.innerHTML += '<div id="'+ 'element' + item.id +'"class="container-main">\
    <div class="container-list"><h2 id="name">'+ item.name +'</h2>\
    <div class="container-btns"><button class="common-btn">Atualizar</button>\
    <button onclick="deleteClientById(this.id)" id="'+ item.id +'"class="common-btn">Deletar</button></div></div>\
    <div class="container-credentials">\
    <span class="key">Cidade</span>\
    <input class="data" value="'+ item.city +'">\
    <span class="key">Endereço</span>\
    <input class="data" value="'+ item.address +'">\
    <span class="key">Bairro</span>\
    <input class="data" value="'+ item.neighborhood + '">\
    <span class="key">CEP</span>\
    <input class="data" value="'+ item.cep +'">\
    <span class="key">Email</span>\
    <input class="data" value="'+ item.email +'">\
    <span class="key">Estado</span>\
    <input class="data" value="'+ item.state +'">\
    </div></div>';
    return node;
}
