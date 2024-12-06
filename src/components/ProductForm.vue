<template>
  <div class="container">
    <h2>Edit product</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="" class="form-label">Product ID</label>
        <input v-model="productData.id" type="text" class="form-control" :disabled="!!product.id" required />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Product Name</label>
        <input v-model="productData.name" type="text" class="form-control" required />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Product Price</label>
        <input v-model="productData.price" type="number" class="form-control" min="1" required />
      </div>
      <button type="submit" class="btn btn-info btn-sm">
        {{product ? "Add": "Update"}}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['submit'])
const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});

const productData = ref({ ...props.product })
watch(
  () => props.product,
  (newProduct) => {
    productData.value = { ...newProduct }
  },
  { immediate: true }
)

const handleSubmit = () => {
  emit('submit', productData.value);
}
</script>