<template>
    <main class="shelf">
        <!-- anytime we do a v-for we should have a key, basically just a unique Id if theres nothing use the index -->
        <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </main>
</template>

<script setup lang="ts">
//ref is needed for anything dynamic 
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products';
import { ProduceCard } from '../../components/ProductCard.vue'

const products = ref<Product[]>([]);
products.value = getAll().data
</script>

<style scoped>
    .shelf, .box{
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem
    }
</style>