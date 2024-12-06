<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />
  
    <!-- Main Content -->
    <main class="py-4">
      <router-view :cartItems="cartItems" @addToCart="addToCart" @updateCart="updateCartItem"
        @removeFromCart="removeCartItem" />
    </main>
  
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">© 2024 Mini E-commerce. All Rights Reserved.</p>
    </footer>
  </div>
</template>
  
  <script setup>
import Navbar from "./components/Navbar.vue";
import { ref, onMounted, watch } from "vue";

const cartItems = ref([]);

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartItems");
  cartItems.value = savedCart ? JSON.parse(savedCart) : [];
}

const saveCartToLocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
}

const addToCart = (product) => {
  const existingItem = cartItems.value.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.value.push({ ...product, quantity: 1 });
  }
}

const updateCartItem = ({ productId, quantity }) => {
  const item = cartItems.value.find((item) => item.id == productId);
  if (item) {
    item.quantity = quantity;
  }
}

const removeCartItem = (productId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== productId);
}

watch(cartItems, saveCartToLocalStorage, { deep: true });
onMounted(loadCartFromLocalStorage);



 </script>
  
  <style>
body {
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
  }
  
  main {
    min-height: 80vh;
  }
</style>
  