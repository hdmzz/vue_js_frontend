<template>
    <div id="container">
        <div id="post">
            <div id="postContainer">
                
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    data(){
        return{
            post: {}
        }
    },
    created(){     
        this.getPost() 
    },
    methods: {
        getPost() {
            //envoyer une requête pour récupérer les posts avec le bearer token
            const token = localStorage.getItem('token');
            fetch("http://localhost:3000/api/post/getOnePost/64",
            {
                headers: 
                {
                    authorization : 'Bearer ' + token
                }
            }).then(response => {
                const data = response.json();
                return data
            }).then(data => this.post = data);
        }
    }
}
</script>
<style lang="scss" scoped>

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

