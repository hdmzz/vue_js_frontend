<template>
    <div id="app">
        <Header/>
        <CreatePost/>
        <Footer/>
    </div>

</template>

<script>
import Header from '../components/Header';
import CreatePost from '../components/CreatePost';
import Footer from '../components/Footer';
export default {
    name: "CreatePostVue",
    components: {
        Header: Header,
        CreatePost: CreatePost,
        Footer: Footer 
    }
}
</script>