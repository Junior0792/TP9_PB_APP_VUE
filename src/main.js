//importaçoes 
import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'

import App from './App.vue'


//componenets

import InicioComponent from '../src/components/InicioComponent'
import DelegaciasComponent from '../src/components/DelegaciasComponent'
import RestaurantesComponent from '../src/components/RestaurantesComponent'


//Definir as rotas
const routes = [
    {
        path:'/', component: InicioComponent
    },
    {
        path:'/Delegacias', component: DelegaciasComponent

    },
    {
        path:'/Restaurantes', component: RestaurantesComponent

    }
]

//Criar objeto rotas de vue router

const router = createRouter({
    history: createWebHashHistory(),
    routes 
})


//instancia de vue 

const app = createApp(App)

app.use(router)


app.mount('#app');
