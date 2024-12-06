<template>
  <div class="container">
    <h1>Your card</h1>
    <div>
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" @remove="removeFromCart" @update="updateQuantity" />
    </div>
    <div class="text-end mt-3">
      <p><strong>Total:</strong>${{ cardTotal }}</p>
      <router-link to="/checkout" class="btn btn-primary">Proceed to checkout</router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import CartItem from '@/components/CartItem.vue';
import { computed } from 'vue';

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cardTotal = computed(() => store.getters.cartTotal);

function removeFromCart(productId) {
  store.commit('REMOVE_FROM_CART', productId)
}
function updateQuantity(payload) {
  store.commit('UPDATE_QUANTITY', payload)
}


</script>