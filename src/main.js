import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Pedidos from './view/Pedidos.vue'

// 1. Create a router instance with routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/pedidos', component: Pedidos }
  ]
})

// 2. Create the Vue app instance and mount it with the router
const app = createApp(App)
app.use(router)
app.mount('#app')

