<template>
    <header>
        <div class="main">
            <img src="../assets/logo/icon-left-font-monochrome-white.png" alt="logo de groupomania" id="logo">
            <h1 id="titreHeader">Réseau social de Groupomania</h1>
            <div id="logout">
                <a href="/account" class="menu">Mon compte</a>
                <a class="menu" @click="logout" id="btnLg" href="#">Déconnexion</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    mounted(){
        this.logoutButton()
    },
    methods: {
        logoutButton(){
            const token = localStorage.getItem('token');
            console.log(token);
            if(token == null){
                document.getElementById('logout').style.display = 'none';
            }
        },
        logout(){
            localStorage.clear();
            document.location.reload();
        }
    }
};
</script>
<style lang="scss" scoped>
header{
    color: white;
    margin-bottom: 1rem;
    border: solid 2px black;
}
#logout{
    color: white;
}
.main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #229954 ;
    height: fit-content;
}

ul{
    list-style: none;
}

#logo{
    height: 15vh;
}
.menu{
    margin: 0.5rem;
    text-decoration: none;
    color: white;
}
button{
padding:0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
text-align:center;
transition: all 0.2s;
}

</style>