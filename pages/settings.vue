<script lang="ts" setup>
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const SliderValue = ref([20]);
const isDark = ref(true);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};
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
    <div>
      <p>Dark/Light Toggle</p>
      <div class="mt-2">
        <Switch :model-value="isDark" @update:model-value="toggleTheme">
          <template #thumb>
            <Icon v-if="isDark" icon="lucide:moon" class="size-4" />
            <Icon v-else icon="lucide:sun" class="size-4" />
          </template>
        </Switch>
      </div>
    </div>
  </div>
</template>
