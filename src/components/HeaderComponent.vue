<template>

 <header>
        <nav class="container">
            <a href="/"><img alt="Sistema de apoio ao turista" id="logo" src="../imagens/world-png.webp"></a>
            <img v-on:click="abrirMenu" alt="Abrir menu" id="menu-button" src="../imagens/menu-icon-5.png">
            <div v-on:click="fecharMenu" id="menu-aberto" v-if="menuAtivo"></div> 
            <div id="menu-itens" :class="{ativo:menuAtivo}">
                <a href="/"><img alt="Sistema de apoio ao turista" id="menu-logo" src="../imagens/world-png.webp"></a>
                 <ul>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Inicio">Inicio</a></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Hospitais">Hospitais</a></li>
                     <li v-on:click="fecharMenu"><router-link to="/Delegacias" title="Link da pagina Delegacias">Delegacias</router-link></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Pontos Turisticos">Pontos Turisticos</a></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Praias">Praias</a></li>
                     <li v-on:click="fecharMenu"><router-link to="/Restaurantes" title="Link da pagina Restaurantes">Restaurantes</router-link></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Hotéis">Hotéis</a></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Eventos">Eventos</a></li>
                     <li v-on:click="fecharMenu"><a href="/" title="Link da pagina Banheiros">Banheiros</a></li>
                </ul>
            </div> 
        </nav>

    </header>

 
</template>

<script>


export default{

    name:'Header-item',
    data(){
        return{
           menuAtivo: false 
        }
    },
    methods:{
        abrirMenu: function(){
            this.menuAtivo = true;
        },
        fecharMenu: function(){
            this.menuAtivo = false;
    }

  }

}

</script>



<style scoped>

header{
    background-color: var(--color-background-nav);
    width:100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display:flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;


}

#logo{
    width:50px;
}

#menu-button{
    width: 50px;
}

#menu-aberto{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-logo{
    width: 50px;
    margin-top: 30px;
    margin-bottom: 10px;

}

#menu-itens{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-itens.ativo{
    display: flex;

}

ul{
    list-style: none;
    text-align: center;

}

ul li{
    margin: 20px 0px;
}

ul li a{
    color: var(--color-text-light);

}

p{
     color: var(--color-text-light);
}

@media (min-width: 700px){
    #menu-button,
    #menu-logo,
    #menu-aberto{
        display: none;

    }
    #menu-itens{
        display: flex;
        position: static;
        height: 60px;
        width: auto;  

    }

    ul{
        display: flex;
        /* flex-direction: row; */
        height: 60px;
        align-items: center;

    }

    ul li{
        margin: 0;
        margin-left: 20px;

    }

}


</style>