<script setup lang="ts">
import ScreenWarn from "@/pages/screenwarn.vue";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
</script>

<template>
  <ScreenWarn />
  <div
    class="min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors pb-4"
  >
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
