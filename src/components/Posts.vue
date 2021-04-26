<template>
    <div id="container">
        <div id="posts">
            <div id="titleForum">
                <h1>Forum</h1>
                <p>Publiez quelque chose! : <a href="/createPost">Ciquez-ici</a></p>
            </div>
            <div id="postsContainer">
                <div v-for="post in posts" :key="post.post_id" id="card">
                        <div id="head"><p>{{post.firstName}} {{post.lastName}} a écrit :</p></div>
                        <router-link :to="{name: 'post', params: {id: post.post_id}}">
                            <div id="body"><p>{{post.comment}}</p></div>
                            <div v-if="post.imageurl">
                                <img :src="post.imageurl" alt="image du post">
                            </div>
                        </router-link>
                    <button v-if="userId == post.id" @click="deletePost(post.post_id, userDltRoute)" id="deleteBtn"><i class="fas fa-trash-alt"></i></button>
                    <button v-if="isadmin == 1" @click="deletePost(post.post_id, adminDltRoute)" id="adminDelete">Modérer ce post</button>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'posts',
    data(){
        return{
            posts: [],
            userId: null,
            isadmin: 0,
            error: '',
            adminDltRoute: 'http://localhost:3000/api/admin/',
            userDltRoute: 'http://localhost:3000/api/post/'
        }
    },
    created(){
        console.log('created')
        this.userId = localStorage.getItem('userId');
        this.isadmin = localStorage.getItem('isadmin');
        this.getPosts();       
    },
    methods: {
        getPosts() {
            //envoyer une requête pour récupérer les posts avec le bearer token
            const token = localStorage.getItem('token');
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
        },
        deletePost(id, url) {
            const token = localStorage.getItem('token');
            console.log(token);
            fetch(url + id, {
                method: 'delete',
                headers: {
                    authorization : 'Bearer ' + token
                }
            }).then(res => {
                return res
            }).then(res => {
                if (res.status == 401){
                    alert('Vous ne pouvez pas supprimer ce post')
                }
                if(res.status == 200){
                document.location.reload();
                }
            })
        },

    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
#titleForum{
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}
a{
    text-decoration: none;
    color: black;
}
h1{
    font-family: 'Poppins';
}
#posts{
    background-color: #ebeef3;
}
#postsContainer{
    width: 40%;
    margin-right: auto;
    margin-left: auto;
}
#container{
    width: 100%;
}

#card{
    padding: 1rem;
    background-color: white;
    margin-top: 20px;
    border-radius: 1rem;
    img{
        max-height: 50%;
        max-width: 100%;
    }
}
#head, #body{
    text-align: start;
}

#head{
    font-family: franklin Gothic, Arial Bold
}
#adminDelete{
    background-color:crimson;
    color: whitesmoke;
}
</style>