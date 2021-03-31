<template>
    <div id="app">
        <form id="form" class="m-4" method="POST">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="prenom">Prénom :</label>
                    <input type="text" name="prénom" id="prenom" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="nom">Nom :</label>
                    <input type="text" name="nom" id="nom" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="price">Prix :</label>
                    <input type="text" name="price" id="price" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label for="color">Couleur :</label>
                    <input type="text" name="color" id="color" class="form-control">
                </div>
            </div>
            <input id="formButton" type="button" value="faire le test" class="btn btn-primary" @click="sendData">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpForm',
    methods: {
        sendData() {
    fetch('http://localhost:3000/api/test',
    {
        method: 'POST',
        headers: 
        {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            firstName: document.getElementById('prenom').value,
            lastName: document.getElementById('nom').value,
            price: document.getElementById('price').value,
            color: document.getElementById('color').value
        })
    })
    .then(function (resp){
        if (resp.ok){
            return resp.text();
        } if (!resp.ok) {
            throw `fonction fetch post ne fonctionne pas ${resp.status}, ${resp.statusText}`
        }
    })
    .catch(error => console.log(error));

        }
    }
    }
</script>



<style>
#form {
    flex-direction: column;
}
</style>