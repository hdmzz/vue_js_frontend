<template>
    <div id="logoContainer">
        <img src="../assets/logo/icon-left-font.png" alt="logo Groupomania" class="acceuilLogo">
        <SignUpForm/>
    </div>
</template>
<script>
import SignUpForm from './SignUpForm'
export default {
    name: "Acceuil",
    components: {
        SignUpForm
    }
}
</script>

<style>
#logoContainer{
    width: 100%;
}
.acceuilLogo{
    width: 30%;
}
</style>