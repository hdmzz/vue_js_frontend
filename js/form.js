function sendData() {
    let data = [
        {
        firstName: document.getElementById('prenom').value,
        lastName: document.getElementById('nom').value,
        price: document.getElementById('price').value,
        color: document.getElementById('color').value
        }
    ];
    console.log(data);
}