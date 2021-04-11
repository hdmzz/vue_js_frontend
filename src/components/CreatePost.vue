<template>
    <div id="postForm">
        <h1>Nouvelle publication</h1>
        <form action="POST" @submit.prevent="createPost">
            <div id="comments">
                <label for="comment">commentaire: </label>
                <input type="text" name="comment" v-model="comment">
            </div>
            <button type="submit">Publier!</button>
        </form>
        <p>{{ comment }}</p>
    </div>
</template>

<script>
export default {
    name: "CreatePost",
    data() {
        return{
            comment: ""
        }
    },
    methods: {
        createPost() {
            console.log('create post running')
            const token = localStorage.getItem('token');
            const userId = JSON.parse(localStorage.getItem('userId'));
            console.log(token)
            fetch('http://localhost:3000/api/post/createPost', {
                method: "POST",
                headers: 
                {
                    'Content-Type' : 'application/json',
                    authorization: 'Bearer ' + token
                },
                body: JSON.stringify({
                    comment: this.comment,
                    userId:  userId
                }),
            }).then(res => {
                console.log(res)
            }).catch(error => console.log(error));
        }
    }
}
</script>