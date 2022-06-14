<template>
   <main>

       <section class="container">

           <h1>Restaurantes</h1>

            <section class="restaurantes">
                
                <div v-for="name in restaurantes" :key="name.id" class="restaurante">

                    <h5>{{ name.name }}</h5>

                    <p>Endereço: {{ name.endereco}}</p>
                    
                    <p>Horario: {{ name.horario}}</p>
                    
                    <p>Telefone: {{ name.telefone}}</p>

                
                
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
            restaurantes: []
        };
    },
    mounted() {
        fetch("http://localhost:3000/restaurantes")
        .then(resp => resp.json())
        .then(data => this.restaurantes = data)
        
    }
};


</script>


<style scoped>

main{
    align-items: center;
}

.restaurantes{
    display: flex;
    align-items: center; 
    flex-direction: column;

}

.restaurante{
    width: 80%;
    margin-bottom: 30px;
}

.restaurante img{
    width: 100vh;

}

.restaurante a{
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

@media (min-width: 700px){
    .restaurantes{
        flex-direction: row;
        align-items: flex-start; 
        flex-wrap: wrap;       

    }
    .restaurante{
        margin-right: 30px;
        width: 300px;

    }

    h1{
        align-items:flex-start;
        
    }

}

</style>