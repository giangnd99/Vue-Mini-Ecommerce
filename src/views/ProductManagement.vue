<template>
    <div class="conatiner">
        <h1 v-if="products.length === 0">
            No Products Found
        </h1>
        <div v-else>
            <h1>Product Management</h1>
            <div class="table-responsive-sm">
                <table class="table table-success">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
    
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id" class="">
                            <td scope="row">{{ product.id }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <div class="row">
                                    <div class="col-5">
                                        <button type="button" class="btn btn-primary"
                                            @click="selectedProductEditing(product)">
                                            edit
                                        </button>
    
                                    </div>
                                    <div class="col-5">
                                        <button type="button" class="btn btn-danger" @click="submitDeleteForm(product.id)">
                                            remove
                                        </button>
    
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container">
                <div v-if="selectedProduct">
                    <ProductForm :product="selectedProduct" @submit="submitUpdateForm" />
                </div>
            </div>
        </div>
        <div class="mt-4">
            <button class="btn btn-success" @click="showAddForm">Add New Product</button>
        </div>
        <div v-if="showAddProduct">
            <ProductForm @submit="submitAddForm" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts, addProduct, updateProduct, removeProduct } from '../services/api';
import ProductForm from '@/components/ProductForm.vue';
const products = ref([]);
const selectedProduct = ref(null);
const showAddProduct = ref(false);

const loadProducts = async () => {
  try {
    const response = await fetchProducts();
    products.value = response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

onMounted(loadProducts);

const showAddForm = () => {
  showAddProduct.value = true;
  selectedProduct.value = null;
};

const submitAddForm = async (newProduct) => {
  try {
    const response = await addProduct(newProduct);
    if (response) {
      showAddProduct.value = false;
      products.value.push(response);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

const submitUpdateForm = async (updatedProduct) => {
  try {
    const response = await updateProduct(updatedProduct);
    if (response) {
      const index = products.value.findIndex(p => p.id === response.id);
      if (index !== -1) {
        products.value.splice(index, 1, response);
      }
      selectedProduct.value = null;
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

const submitDeleteForm = async (productId) => {
  try {
    const response = await removeProduct(productId);
    if (response) {
      alert("Delete successfully");
      products.value = products.value.filter(p => p.id !== productId);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

const selectedProductEditing = (product) => {
  selectedProduct.value = product;
  showAddProduct.value = false;
};
</script>