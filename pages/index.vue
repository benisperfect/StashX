<script lang="ts" setup>
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="p-2 m-3">
    <h1 class="text-4xl text-left font-bold ml-3 mb-4">
      Your second drive in the cloud.
    </h1>
    <p class="text-left ml-3 mr-3">
      StashX lets you store, access, and manage your files from anywhere — fast,
      secure, and always on.
    </p>
    <div class="flex flex-row gap-2">
      <NuxtLink>
        <Button class="p-6 mt-4 ml-6">Get Started Free</Button>
      </NuxtLink>
      <NuxtLink>
        <Button class="p-6 mt-4 ml-6">Log In</Button>
      </NuxtLink>
    </div>
    <img src="/App preview.jpg" class="w-1/2 h-auto mt-6 rounded-lg" />
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class=""></div>
    </div>
  </div>
</template>
