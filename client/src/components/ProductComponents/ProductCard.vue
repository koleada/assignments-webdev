<template>
    <div class="box">
        <div class="box-image">
            <img :src="product.thumbnail" alt="product.name">
        </div>
        <div class="box-content">
            <h3>{{ product.title }}</h3>
            <i>{{ product.brand }}</i>
            <p>{{ product.description }}</p>
            <div class="price-btn">
                <p class="price">{{ product.price }}</p>
                <button class="button is-primary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Product } from '@/models/products';

const props = defineProps<{
    product: Product
}>()
const { product } = props;

</script>

<style scoped>
    h3{
        font-weight: bold;
    }
    .price{
        font-size: 1.5rem;
        font-weight: bold;
        color: #00d1b2;
    }
    .price-btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 1rem;
    }
</style>