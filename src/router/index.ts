import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Product from '../pages/Product.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/product/:id', component: Product },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login }
  ]
})
