<template>
  <div class="container">
    <div class="row">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart">
      </ProductCard>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/services/api';
import { useStore } from 'vuex';

const store = useStore();
const products = ref([]);
const loading = ref(true)
const error = ref(null)

const loadProducts = async () => {
  try {
    const data = await fetchProducts();
    products.value = data;
  } catch (er) {
    error.value = er
    console.log(er)
  } finally {
    loading.value = false
  }
}
onMounted(loadProducts);

const addToCart = (product) => {
  store.commit('ADD_TO_CART', product);
}
</script>