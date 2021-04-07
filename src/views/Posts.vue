<template>
    <div id="app">
        <Header/>
        <Posts/>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

export default {
    name: 'PostsVue',
    components: {
        Header: Header,
        Posts: Posts,
        Footer: Footer
    }
}
</script>