<template>
    <header>
        <div class="main">
            <img src="../assets/logo/icon-left-font.png" alt="logo de groupomania" id="logo">
            <h1 id="titreHeader">Réseau social de Groupomania</h1>
            <div id="logout">
                <button type="button" @click="logout">Déconnexion</button>
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
<style>
.main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

ul{
    list-style: none;
}
.main{
    display: flex;
    flex-wrap: wrap;
}
#logo{
    width: 25%;
}
#logout{
    display: inline;
}

</style>