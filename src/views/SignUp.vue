<template>
    <div class="inscription">
        <Header/>
        <SignUpForm/>
        <Footer/>
    </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
    name: 'inscription',
    components: {
        Header: Header,
        SignUpForm: SignUpForm,
        Footer: Footer
    }
}
</script>
