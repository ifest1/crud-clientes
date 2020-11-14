function list() {
    fetchAllClients((data) => {
        var data = JSON.parse(data);
        data.forEach(function(item) {
            // elements
            var li = document.createElement("li");
            var nameElement = document.createElement('h2');
            var phoneElement = document.createElement('span');
            var emailElement = document.createElement('span');
            var addressElement = document.createElement('span');
            var cepElement = document.createElement('span');
            var neighborhoodElement = document.createElement('span');
            var birthElement = document.createElement('span');
            var referenceElement = document.createElement('span');
            
            // labels
            var name = document.createTextNode(item.name);
            var phone = document.createTextNode(item.phone);
            var email = document.createTextNode(item.email);
            var address = document.createTextNode(item.address);
            var neighborhood = document.createTextNode(item.neighborhood);
            var cep = document.createTextNode(item.cep);
            var birth = document.createTextNode(item.birth);
            var reference_point = document.createTextNode(item.reference_point);

            // set the li id to the client id 
            li.id = item.id
            
            // append the data to the elements
            nameElement.appendChild(name);
            phoneElement.appendChild(phone);
            emailElement.appendChild(email);
            addressElement.appendChild(address);
            cepElement.appendChild(cep);
            neighborhoodElement.appendChild(neighborhood);
            birthElement.appendChild(birth);
            referenceElement.appendChild(reference_point);

            // append the elements to the li
            li.appendChild(nameElement);
            li.appendChild(phoneElement);
            li.appendChild(emailElement);
            li.appendChild(addressElement);
            li.appendChild(cepElement);
            li.appendChild(neighborhoodElement);
            li.appendChild(birthElement);
            li.appendChild(referenceElement);

            document.getElementById("client-list").appendChild(li);
          });
    });
}