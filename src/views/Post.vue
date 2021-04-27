<template>
    <div id="onePost">
        <Header/>
        <div id="post">
            <div id="postContainer">
                <div id="card">
                    <div id="head">
                        <p>{{post.firstName}} {{post.lastName}} a écrit :</p>
                    </div>
                    <div id="body">
                        <p>{{post.comment}}</p>
                    </div>
                    <div v-if="post.imageurl">
                        <img :src="post.imageurl" alt="image du post">
                    </div>
                    <div id="comment">
                        <AddComment @commentsent="getComments"/>
                    </div>
                    <div id="commentSection">
                        <div v-for="comment in data" :key="comment.commentId" id="comments">
                            <div id="head"><p>{{comment.firstName}} {{comment.lastName}} à écrit:</p></div>
                            <div><p>{{comment.comment}}</p></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
import AddComment from '../components/AddComment';
export default {
    name: 'PostVue',
    props: ['id'],
    components: {
        Header: Header,
        AddComment: AddComment
    },
    data(){
        return{
            post: {},
            data: null,
            token: null,
            userId: null
        }
    },
    created(){
        this.$store.state.postId = this.id   
        this.getInfo()
        console.log(this.id)
        this.getPost(this.id) 
        this.getComments()

    },
    methods: {
        async getInfo(){
            this.token = localStorage.getItem('token');
            this.userId = localStorage.getItem('userId');
        },
        async getPost(id) {
            console.log('getPosts')
            //envoyer une requête pour récupérer les posts avec le bearer token
            fetch("http://localhost:3000/api/post/getOnePost/"+ id,
            {
                headers: 
                {
                    authorization : 'Bearer ' + this.token
                }
            }).then(response => {
                const data = response.json();
                return data
            }).then(data => this.post = data.result[0]);
        },
        async getComments(){
            console.log('getComments running')
            await fetch('http://localhost:3000/api/comment/getComments/' + this.id, {
                headers: {
                    authorization: 'Bearer ' + this.token
                }
            }).then(res => res.json())
            .then(data => this.data = data.result)
            .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss" scoped>
#onePost{
    width: 100%;
}
#post{
    margin: 2rem;
}
#postContainer{
    width: 70%;
    margin-right: auto;
    margin-left: auto;
}
#card{
    padding: 1rem;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgb(110, 107, 107),
                0px 0px 30px #777;
    img{
        max-height: 50%;
        max-width: 100%;
    }
}
#addComment{
    padding: 1rem;
    border-top: 1px black solid;
    border-bottom: 1px black solid;
}
button{
    width: fit-content;
}

#commentSection{
    background-color: #eeeeee;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    #comments{
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;
        margin: 10px;
    }
}
</style>
