<template>
    <div class="container">
        <div class="row">
            <h2 class="mb-4">Order Form</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" v-model="formData.name" class="form-control" name=""
                        placeholder="Enter your full-name" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Email:</label>
                    <input type="text" v-model="formData.email" class="form-control" name=""
                        placeholder="Enter your email" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Address:</label>
                    <input type="text" v-model="formData.address" class="form-control" name=""
                        placeholder="Enter your full-name" />
                </div>
                <button type="submit" class="btn btn-success">
                    Order
                </button>
            </form>
    
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  address: '',
})
const submitForm = () => {
  this.$emit('submit', { ...formData });
}
</script>