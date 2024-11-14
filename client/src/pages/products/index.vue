<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products';
import ProductCard from '@/components/ProductComponents/ProductCard.vue';
import FlyoutPanel from '@/components/ProductComponents/FlyoutPanel.vue';
const products = ref<Product[]>([]);
getAll().then((data) => products.value = data.data)

</script>

<template>
    <div class="shelf">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <FlyoutPanel/>
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
    height: auto;
}
</style>