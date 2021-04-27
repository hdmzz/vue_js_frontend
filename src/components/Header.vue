<template>
    <header>
        <div class="main">
            <div class="return">
                <router-link to="/posts">Forum</router-link>
                <router-link to="/account">Mon compte</router-link>
            </div>
            <div id="logo">
                <img src="../assets/logo/icon-left-font.svg" alt="logo de groupomania" id="logo">
            </div>
            <div id="logout">
                <button class="menu" @click="logout" id="btnLg" href="#">Déconnexion</button>
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
.main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 10px rgb(110, 107, 107),
                0px 0px 30px #777;
    height: fit-content;
}

#logo{
    height: 20vh;
    width: 25vw;
}
.menu{
    margin: 0.5rem;
    text-decoration: none;
}

a{
    text-decoration: none;
    color: black;
    margin: 1rem;
}
.router-link-active{
    font-weight: bold;
    color: blueviolet;
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