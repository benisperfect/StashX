<script setup lang="ts">
import ScreenWarn from "@/pages/screenwarn.vue";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
import { useVisibilityControl } from "@/composables/toggleHFVisibility";
import { onMounted } from "vue";

useVisibilityControl();
</script>

<template>
  <ScreenWarn />
  <div
    class="min-h-screen bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors"
  >
    <Header v-if="!toggleVisibility" />
    <NuxtPage />
    <Footer v-if="!toggleVisibility" />
  </div>
</template>
