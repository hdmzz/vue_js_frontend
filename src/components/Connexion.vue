<template>
    <div id="container">
        <p>Pas encore inscrit ? <a href="/">Inscrivez-vous</a></p>
        <form id="form" class="m-4" method="POST" @submit.prevent="connexion">
            <div class="form-row">
                <div class="ligneForm">
                    <label for="email">Adresse mail :</label>
                    <input type="email" name="email" v-model="email" class="form-control">
                </div>
                <div class="ligneForm">
                    <label for="password">Mot de passe :</label>
                    <input type="password" name="password" v-model="password" class="form-control">
                </div>
            </div>
            <input id="formButton" type="submit" value="Connexion" class="btnSend">
        </form>
        <p>Bienvenue : {{result}} </p>
    </div>
</template>
<script>
import router from '../router/index'; 
export default {
    name: 'connect',
    data() {
        return{
            result: null,
            email:'',
            password:''
        };
    },
    created() {
        this.connexion
    },
    methods: {
        connexion() {
            fetch("http://localhost:3000/api/test/connexionTest",{
                method: 'POST',
                headers: 
                {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
            .then(response => {
                if(response.status == 401){
                    this.result = "mot de passe incorrect" + response.statusText
                }
                const result = response.json()
                return result
            }) 
            .then(result => {
                this.result = result
                console.log(result.token)
                if(result.token == undefined){
                    alert('email ou mot de passe incorect');
                } else {
                localStorage.setItem('token', result.token)
                localStorage.setItem('userId', result.userId)
                router.push('/posts')
                }
            }) 
            .catch(error => console.log(error));
        }
    }
}
</script>
