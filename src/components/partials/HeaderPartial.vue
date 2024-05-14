<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="container-layout w-full py-6 px-8 flex items-center justify-between">
    <div>MDBots - Botlist</div>
    <div class="space-x-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>
