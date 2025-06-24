<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { CircleUser } from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();

const userGreeeting = reactive({
  name: "",
});

const getUsergreeting = async () => {
  try {
    const res = await fetch("/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.username) {
      userGreeeting.name = data.username;
    } else {
      userGreeeting.name = "Guest";
    }
  } catch (error) {
    userGreeeting.name = "";
  }
};

onMounted(() => {
  if (route.path === "/") {
    getUsergreeting();
  }
});

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      getUsergreeting();
    }
  }
);

const navItems = ref([
  { name: "Home", path: "/" },
  { name: "Upload", path: "/upload" },
  { name: "Your Files", path: "/readfiles" },
  { name: "Settings", path: "/settings" },
  { name: "About", path: "/about" },
]);
const isActive = (path: string) => {
  return route.path === path;
};
</script>

<template>
  <div
    class="flex flex-row items-center justify-center bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-2"
  >
    <h1 class="text-5xl font-bold">StashX</h1>
  </div>

  <div
    class="navbar sticky top-0 z-50 shadow transition-shadow bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-1 pb-4"
  >
    <div class="flex flex-row justify-center items-center">
      <CircleUser class="mr-2" />
      <p>Hi, {{ userGreeeting.name }}</p>
    </div>
    <div class="flex flex-row items-center justify-center gap-1 mt-6">
      <NuxtLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="px-4 py-2 border-b-2 transition-all duration-200"
        :class="{
          'dark:bg-gray-800 border-white bg-gray-200': isActive(item.path),
          'border-transparent hover:dark:bg-gray-800 hover:bg-gray-200 hover:border-white':
            !isActive(item.path),
        }"
      >
        {{ item.name }}</NuxtLink
      >
    </div>
  </div>
</template>
