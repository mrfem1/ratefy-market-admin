<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();

    console.log(route.params.uuid);
</script>
<template>
    <h1>Hello world</h1>
</template>