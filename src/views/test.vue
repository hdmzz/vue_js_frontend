<template>
<div id="btnGetTest">
    <button id="btnGet" type="button" value="Récupérer quelquechose" @click="getThing">Test</button>
</div>    
</template>

<script>
export default {
    name: 'Test',
    methods: {
        getThing: function() {
            fetch('http://localhost:3000/api/test')
            .then(function(response){
                if(response.ok){
                    const data = response.json();
                    return data;
                } 
                if(!response.ok){
                    throw `Fonction Fetch get n'aboutit pas erreur ${response.status} ${response.statusText}`;
                }
            })
            .then(function(data){
                console.log(data[5])
            })
        }
    
    }
    }
</script>

<style>
#btnGetTest{
    height: 100%;
}
#btnGet {
    height: 100%;
}
</style>
