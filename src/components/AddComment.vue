<template>
    <div id="addComment">
        <input type="text" value="Commentaire" id="comInput" v-model="comment">
        <button @click="addComment">Ajouter commentaire</button>
    </div>
</template>
<script>
export default {
    name: 'AddComment',
    props: ['id'],
    data(){
        return{
            comment: null,
            token: null, 
            userId: null
        }
    },
    created(){
        this.getInfo()
    },
    methods:{
        async getInfo(){
            this.token = localStorage.getItem('token');
            this.userId = localStorage.getItem('userId');
        },
        async addComment(){
            console.log('ajouter commentaire')
            console.log(this.userId)
            fetch("http://localhost:3000/api/comment/createComment",{
                method: "POST",
                headers: 
                {   
                    'Content-Type': 'application/json',
                    authorization : 'Bearer ' + this.token
                },
                body: JSON.stringify({
                    comment: this.comment,
                    userId: this.userId,
                    postId: this.id
                })
            }).then(response => console.log(response))
        }
    }
}
</script>