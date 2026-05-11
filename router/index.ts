import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Product from '../pages/Product.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/product/:id', name: 'Product', component: Product },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/login', name: 'Login', component: Login }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})