import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import Home from '@/views/Home.vue'
import ProductManagement from '@/views/ProductManagement.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/product-management',
      name: 'product-management',
      component: ProductManagement,
    }
  ],
})

export default router
