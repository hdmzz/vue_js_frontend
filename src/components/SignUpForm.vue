<template>
    <div id="app">
        <nav class="navigation">
            <p>Déjà Inscrit ? <a href="/connexion">Connectez-vous</a></p>
        </nav>
        <form id="form" class="m-4" method="POST" @submit.prevent="sendData">
            <div class="form-row">
                <div id="rowItem">
                    <div class="rowLign">
                        <label for="prenom">Prénom :</label>
                        <input type="text" name="prénom" v-model="firstName" class="form-control">
                    </div>
                    <div class="rowLign">
                        <label for="nom">Nom :</label>
                        <input type="text" name="nom" v-model="lastName" class="form-control">
                    </div>
                </div>
                <div class="ligneForm">
                    <label for="email">Adresse mail :</label>
                    <input type="email" name="email" v-model="email" class="form-control">
                </div>
                <div class="ligneForm">
                    <label for="password">Mot de passe :</label>
                    <input type="password" name="password" v-model="password" class="form-control">
                </div>
            </div>
            <input id="formButton" type="submit" value="S'inscrire" class="btnSend">
        </form>
        <p>votre prenom est {{firstName}}</p>
    </div>
</template>

<script>
import router from '../router/index';

export default {
    name: 'SignUpForm',
    data() {
        return{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
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
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                })
            })
            .then(function (resp){
                if (resp.ok){
                    router.push("connexion")
                    return resp.text()
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
#rowItem{
    display: flex;
    justify-content: center;
}
.rowLign{
    padding: 1vw;
}
.ligneForm{
    padding-bottom:1vw ; 
}
</style>