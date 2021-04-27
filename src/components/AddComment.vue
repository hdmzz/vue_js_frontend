<template>
    <div id="addComment">
        <input type="text" value="Commentaire" name="comInput" id="comInput" v-model="comment">
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
        console.log('created addcomment')
    },
    methods:{
        async getInfo(){
            this.token = localStorage.getItem('token');
            this.userId = localStorage.getItem('userId');
        },
        async addComment(){
            console.log('ajouter commentaire')
            console.log(this.userId)
            await fetch("http://localhost:3000/api/comment/createComment",{
                method: "POST",
                headers: 
                {   
                    'Content-Type': 'application/json',
                    authorization : 'Bearer ' + this.token
                },
                body: JSON.stringify({
                    comment: this.comment,
                    userId: this.userId,
                    postId: this.$store.state.postId
                })
            }).then(response => {
                console.log(response)
                })
            .catch(err => {
                console.log(err)
            });
            this.$emit('commentsent', {
                    message: 'nouveau post',
                })
            document.getElementsByName('comInput')[0].value = null
        }
    }
}
</script>
<style lang="scss" scoped>
#addComment{
    display: flex;
}
#comInput{
    width: 70%;
}
button{
    width: fit-content;
}
</style>