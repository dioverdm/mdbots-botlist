<script setup>
import { RouterView } from 'vue-router';
import HeaderPartial from './components/partials/HeaderPartial.vue';
import FooterPartial from './components/partials/FooterPartial.vue';
</script>

<template>
  <div :class="{ fadeoutHide: isLoading }">
    <div
      className="flex flex-col w-screen h-screen gap-2 z-[1000] opacity-90 bg-gradient-to-bl from-black to-[#191919] fixed items-center justify-center"
    >
      <span
        className="loading loading-spinner loading-lg text-gray-100 drop-shadow-lg"
      ></span>
    </div>
  </div>
  <header>
    <HeaderPartial />
  </header>
  <main class="flex grow container-layout">
    <RouterView />
  </main>
  <footer class="bg-black/10 border-t-4 border-l-black">
    <FooterPartial />
  </footer>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    isLoading: false,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  },
};
</script>

<style>
.fadeoutHide {
  animation: fadeoutHide 0.5s forwards;
}

@keyframes fadeoutHide {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
