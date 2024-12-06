<template>
    <div class="d-flex justify-content-between align-tiems-center border-bottom py-3">
        <div>
            <h6 v-html="item.name"></h6>
            <p class="text-muted">Price: {{ item.price }}</p>
        </div>
        <div class="d-flex align-items-center">
            <div class="mb-3">
                <input type="number" class="form-control me-3" placeholder="" style="width: 80px;" min="1"
                    v-model="item.quantity" @change="updateQuantity" />
                <small id="helpId" class="form-text mb-0 me-3 text-muted">${{ item.price * item.quantity }}</small>
                <button type="button" @click="removeItem" class="btn btn-danger btn-sm">
                    Remove
                </button>
    
            </div>
    
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['remove', 'update'])
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
}
);
const removeItem = () => {
  emit('remove', props.item.id)
}
const updateQuantity = () => {
  emit('update', { productId: this.item.id, quantity: quantity.value });
}
</script>