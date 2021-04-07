<template>
    <div id="connection">
        <Header/>
        <Connection/>
        <Footer/>  
    </div>
</template>

<script>
import Header from '../components/Header';
import connect from '../components/Connexion';
import Footer from '../components/Footer';

export default {
    name: 'connectionVue',
    components: {
        Header: Header,
        Connection: connect,
        Footer: Footer

    }
}
</script>