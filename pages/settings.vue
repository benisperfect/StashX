<script lang="ts" setup>
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";
import { Icon } from "@iconify/vue";
import { ref, onMounted, watch } from "vue";

const SliderValue = ref([20]);
const isDark = ref(true);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  isDark.value = savedTheme === "dark"; // if null or 'light', set to false
  document.documentElement.classList.toggle("dark", isDark.value);

const savedSlider = localStorage.getItem("sliderValue");
  if (savedSlider) {
    try {
      SliderValue.value = JSON.parse(savedSlider);
    } catch (e) {
      console.error("Failed to parse saved slider value:", e);
    }
  }
});
watch(SliderValue, (newVal) => {
  localStorage.setItem("sliderValue", JSON.stringify(newVal));
});
</script>

<template>
  <div
    class="h-120 bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-white p-2 m-4 rounded-lg"
  >
    <p>Volume</p>
    <div class="flex items-center gap-1">
      <Slider class="w-80" v-model="SliderValue" :max="100" :step="1" />
      <p class="w-10 text-left text-gray-600 dark:text-white">
        {{ SliderValue[0] }}
      </p>
    </div>
  </div>
</template>
