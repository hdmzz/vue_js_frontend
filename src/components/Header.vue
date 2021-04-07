<template>
    <header>
        <div class="main">
            <img src="../assets/logo/icon-left-font.png" alt="logo de groupomania" id="logo">
            <h1 id="titreHeader">Réseau social de Groupomania</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
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
</style>