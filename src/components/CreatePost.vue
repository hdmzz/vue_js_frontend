<template>
    <div id="postForm">
        <div id="postsContainer">
            <p>Publiez quelque chose !</p>
        </div>
        <form action="POST" @submit.prevent="createPost" id="myForm">
            <div id="comments" class="postInput">
                <label for="comment">Commentaire :</label>
                <textarea type="text" id="comment" name="comment" v-model="comment" rows="5" cols="33">Tapez votre texte ici!</textarea>
            </div>
            <div>
                <label for="file">Choisissez une image</label>
                <input type="file" ref="file" name="file" @change="onFileSelected">
            </div>
            <button type="submit">Publier!</button>
        </form>
    </div>
</template>

<script>
import router from '../router/index';
//import axios from 'axios';
export default {
    name: "CreatePost",
    data() {
        return{
            comment: null,
            file: null
        }
    },
    methods: {
        onFileSelected(){
            const file = this.$refs.file.files[0]
            console.log(file)
            this.file = file
            console.log(this.file)
        },
        async createPost() {
            console.log('create post running')
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('comment', this.comment);
            formData.append('file', this.file);
            fetch('http://localhost:3000/api/post/createPost', {
                method: "POST",
                headers: 
                {
                    authorization: 'Bearer ' + token
                },
                body: formData
            }).then(res => {
                if(res.status == 200){
                    router.push('/posts')
                }
            }).catch(error => console.log(error));
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
#postsContainer{
    font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;
}

#postForm{
    background-color: #ffffff;
    border-radius: 1rem;
    width: fit-content;
    padding: 1rem;
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    #comments{
        padding: 1rem;
    }
    button{
        border-radius: 1rem;
        background-color: #f0e6e6;
    }
}
label {
    display: block;
    margin-bottom: 10px;
}
#comment{
    text-align: center;
}
.postInput{
    margin-bottom: 1rem;
}
</style>