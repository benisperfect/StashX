<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const navItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Upload', path: '/upload' },
  { name: 'Show Files', path: '/readfiles' },
  { name: 'Settings', path: '/settings' },
  { name: 'About', path: '/about' },
]);
const isActive = (path: string) => {
  return route.path === path;
};
</script>

<template>
  <div
    class="bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-4 pb-4"
  >
    <div class="flex flex-row items-center justify-center">
      <h1 class="text-5xl font-bold">StashX</h1>
    </div>
    <div class="flex flex-row items-center justify-center gap-1 mt-6">
      <NuxtLink
      v-for="item in navItems"
      :key="item.name"
      :to="item.path"
      class="px-4 py-2 border-b-2 transition-all duration-200"
      :class="{
        'bg-gray-800 border-white': isActive(item.path),
        'border-transparent hover:bg-gray-800 hover:border-white': !isActive(item.path)
      }">
      {{ item.name }}</NuxtLink>
    </div>
  </div>
</template>
