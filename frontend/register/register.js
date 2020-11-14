// sends data to backend then execute a callback
function submitData() {
    var data = {};

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        data[inputs[index].id] = inputs[index].value;
    }

    console.log(data);

    postClient((data), (response) => {
        console.log(response);
    });
}