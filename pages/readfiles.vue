<script setup lang="ts">
import { ref } from "vue";
import { EllipsisVertical } from "lucide-vue-next";

const files = ref<string[]>([]);

onMounted(async () => {
  const data = await fetch("/api/upload");
  files.value = await data.json();
});
</script>

<template>
  <div class="w-full">
    <ul class="grid grid-cols-5 gap-4">
      <li
        v-for="file in files"
        :key="file"
        class="text-black m-5 p-3 w-[200px] flex flex-col justify-end text-center rounded-3xl bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        <div class="bg-gray-200 min-h-full dark:bg-gray-900 rounded-2xl flex-row align-center">
          <EllipsisVertical class="w-9 h-9 pt-1" />
          <a :href="`/api/upload/${file}`" target="_blank" class="mb-2"
            ><img
              src="/preview_img.jpg"
              class="w-full rounded-2xl scale-90"
            />{{ file }}</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.file_layout {
    display: grid;
    grid-template-columns: repeat(auto, minmax(0, 1fr));
    grid-template-rows: repeat(auto, minmax(0, 1fr));
    gap: 1px;
}
</style>
