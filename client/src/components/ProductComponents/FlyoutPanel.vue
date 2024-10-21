<template>
    <div class="flyout">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .flyout{
        position: fixed;
        top: 7vh;
        right: 0;
        bottom: 0;
        width: 20rem;
        background-color: red;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        z-index: 1000;
        transform: translateX(85%);

    }
    .flyout:hover, .flyout.i-open{
        transform: translateX(0);
    }
</style>