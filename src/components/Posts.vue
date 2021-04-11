<template>
    <div id="container">
        <h1>Forum</h1>
        <div id="postsContainer">
            <p><a href="/createPost">Publiez quelque chose!</a></p>
            <!-- <p v-for="post in  posts"></p> -->
        </div>
        <div v-for="post in posts" :key="post.post_date" id="main">
            <div id="head"><p>{{post.firstName}} {{post.lastName}} a écrit :</p></div>
            <div id="body"><p>{{post.comment}}</p></div>
        </div>
        <button type="button" @click="getPosts">Bouton recupération de données production</button>
        <p>{{posts}}</p>
    </div>
</template>

<script>
export default {
    name: 'posts',
    data(){
        return{
            posts: []
        }
    },
    methods: {
        getPosts() {
            //envoyer une requête pour récupérer les posts avec le bearer token
            const token = localStorage.getItem('token');
            console.log(token)
            fetch("http://localhost:3000/api/post/getPosts",
            {
                headers: 
                {
                    authorization : 'Bearer ' + token
                }
            }).then(response => {
                const data = response.json();
                return data
            }).then(data => this.posts = data);
        }
    }
}
</script>
<style lang="scss" scoped>
#main{
    border: solid;
    background-color: aliceblue;
    margin-top: 20px;
    width: 50%;
}
#head, #body{
    text-align: start;
}
</style>