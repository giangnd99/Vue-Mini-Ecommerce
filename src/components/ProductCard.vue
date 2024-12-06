<template>
    <div class="d-flex justify-content-center align-items-center product-card card container h-100 shadow-sm">
        <div class="card-body text-center">
            <h5 class="card-title" v-html="product.name">
    
            </h5>
            <p class="card-text">Price:{{ product.price }}</p>
            <button class="btn btn-primary w-100" @click="$emit('add-to-cart',product)">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>