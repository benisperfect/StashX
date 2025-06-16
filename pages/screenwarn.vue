<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Reactive flag for screen width condition
const isSmallScreen = ref<boolean>(false);

const checkScreenWidth = () => {
  isSmallScreen.value = window.innerWidth <= screen.width / 2;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenWidth);
});
</script>

<template>
  <div
    v-if="isSmallScreen"
    class="fixed inset-0 bg-white text-black flex items-center justify-center z-50 p-6"
  >
    <p class="font-bold text-center text-2xl sm:text-3xl">
      Change to PC or full screen for better experience.
    </p>
  </div>
</template>
