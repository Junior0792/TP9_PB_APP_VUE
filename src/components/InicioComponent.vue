
<template>
    
    <main>
        <img alt="Rio de Janeiro" id="banner-inicio" src="../imagens/rio-de-janeiro-capa2019-01.jpg"> 
        <h1>Sistema de Apoio ao Visitante em Grandes Eventos</h1>
        <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235203.81500692177!2d-43.58841988251077!3d-22.9111720903467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio+de+Janeiro%2C+RJ!5e0!3m2!1spt-BR!2sbr!4v1476880758681"></iframe >
    </main>

    <!-- <router-link to="/">Inicio</router-link> -->



</template>

<script>

export default{
    name:'Inicio-item'
}

</script>

<style scoped>

main{
    background-color: var(--color-background-inicio);
    justify-content: center;
    align-items: center;
}

h1{
    background-color: var(--color-background-nav);
    width: 500px;
    text-align: center;
    color: var(--color-text-light);
}

#banner-inicio{
    width: 500px;
    height: 300px;
}

#iframe{
    width: 500px;
    height: 300px;
}

@media (min-width: 700px){
    #banner-inicio{
        width: 1410px;
        height: 350px;
    }
    h1{
        width: 1410px;
        height: 80px;
        font-size: 2em;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    #iframe{
        width: 1410px;
    }
}

</style>




 

