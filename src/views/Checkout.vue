<template>
  <div class="container">
    <h1>Checkout</h1>
    <div v-if="cartItems.length === 0">
      <p>No items in cart</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
        <CartItem :item="item"></CartItem>
      </div>
  
    </div>
    <p>Total: ${{ cartTotal }}</p>
    <CheckoutForm @submit="handleSubmit"></CheckoutForm>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CheckoutForm from '../components/CheckoutForm.vue';
import CartItem from '@/components/CartItem.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();

const router = useRouter();
const cartItems = computed(() => store.getters.cartItems)

const cartTotal = computed(() => cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0))

function handleSubmit(userInfo) {
  alert('Order submitted: ' + userInfo);
  router.push('/');
}
</script>