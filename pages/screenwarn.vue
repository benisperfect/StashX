<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    const ScreenWidth = ref(false);

    const CheckScreenWidth = () => {
        ScreenWidth.value = window.innerHeight <= 704
    }
    onMounted(() => {
        CheckScreenWidth();
        window.addEventListener('resize', CheckScreenWidth);
    });
    onBeforeUnmount(() => {
        CheckScreenWidth();
        window.removeEventListener('resize', CheckScreenWidth);
    });
</script>

<template>
  <div v-if="ScreenWidth" class="fixed h-full w-full bg-white text-black p-3 z-50">
    <p class="font-bold text-center fixed top-70 text-3xl">Change to PC or full screen for better experience.</p>
  </div>
</template>
