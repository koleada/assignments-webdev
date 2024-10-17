<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products';
import ProductCard from '@/components/ProductCard.vue';

const products = ref<Product[]>([]);
products.value = getAll().data

</script>

<template>
    <div class="shelf">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<style scoped>
.shelf {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4vh;
    padding-top: 4vh;
    background-color: black;
}

.box:hover{
    border: 1px solid #00d1b2;
    box-shadow: 0px 0px 10px #00d1b2;
    cursor: pointer;
}

.shelf .box {
    width: 300px;
    height: 500px;
}
</style>