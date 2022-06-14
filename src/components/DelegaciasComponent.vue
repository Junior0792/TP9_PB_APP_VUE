<template>
   <main>

       <section class="container">

           <h1>Delegacias</h1>

            <section class="delegacias">
                
                <div v-for="name in delegacias" :key="name.id" class="delegacia">

                    <h5>{{ name.name }}</h5>

                    <p>Endereço: {{ name.endereco}}</p>
                    
                    <p>Responsavel: {{ name.responsavel}}</p>
                    
                    <p>Telefone: {{ name.telefone}}</p>

                    <img :src= "name.photo">
                
                </div>

            </section>

        
 
       </section>

   </main>
</template>

<script>

export default{
    data() {
        return{
            id: this.$route.params.id,
            delegacias: []
        };
    },
    mounted() {
        fetch("http://localhost:3000/delegacias")
        .then(resp => resp.json())
        .then(data => this.delegacias = data)
        
    }
};


</script>


<style scoped>

main{
    align-items: center;
}

.delegacias{
    display: flex;
    align-items: center; 
    flex-direction: column;

}

.delegacia{
    width: 80%;
    margin-bottom: 30px;
}

.delegacia img{
    width: 100vh;

}

.delegacia a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;

}

h1{
    align-items: center; 
    margin-bottom: 30px;
    flex-direction: column;
    display: flex;
    margin-top: 30px;
    font-size: 1.5em;
}

p{
     color: var(--color-text-dark);
}


@media (min-width: 700px){
    .delegacias{
        flex-direction: row;
        align-items: flex-start; 
        flex-wrap: wrap;       

    }
    .delegacia{
        margin-right: 30px;
        width: 300px;

    }

    h1{
        align-items:flex-start;
        
    }

}

</style>