<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <main class="app-main">
    <div class="container">
      <RouterView />
    </div>
  </main>
  
</template>

<style scoped>
.app-main {
  min-width: 800px;
  max-width: 1440px;
  height: auto;
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  margin: auto !important;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}
</style>
