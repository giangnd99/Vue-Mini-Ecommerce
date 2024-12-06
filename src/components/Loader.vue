<template>
    <div v-if="loading" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">...</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([{
  loading: {
    type: Boolean,
    required: true
  }
}])
</script>