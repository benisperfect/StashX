<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import Feedback from "@/pages/feedback.vue";
import webDemo from "@/pages/web_demo.vue";
import { items, ActivateItem } from "@/composables/toggleHFVisibility";
</script>

<template>
  <div class="p-2 m-3 grid grid-cols-2">
    <div>
      <h1 class="text-4xl text-left font-bold ml-3 mb-4">
        Your second drive in the cloud.
      </h1>
      <p class="text-left col-span-1 ml-3 mr-3">
        StashX lets you store, access, and manage your files from anywhere —
        fast, secure, and always on.
      </p>
      <div class="flex flex-row gap-2">
        <NuxtLink v-for="(item, i) in items" :key="item.name" :to="item.path">
          <Button
            class="p-6 mt-4 ml-6"
            :class="
              item.isActive
                ? 'bg-gray-300 text-black'
                : 'bg-gray-300 text-black'
            "
            @click="ActivateItem(i)"
            >{{ item.name }}</Button
          >
        </NuxtLink>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-6">
        <div class="bg-gray-500 p-4 rounded-lg shadow-md m-2">
          <h1 class="font-bold">📂 Unlimited File Types</h1>
          <p>
            Upload documents, videos, images, code, and more — all in one place.
          </p>
        </div>
        <div class="bg-gray-500 p-4 rounded-lg shadow-md m-2">
          <h2 class="font-bold">🔐 Secure & Private</h2>
          <p>End-to-end encryption to ensure your files stay private.</p>
        </div>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-6">
        <div class="bg-gray-500 p-4 rounded-lg shadow-md m-2">
          <h3 class="font-bold">⚡ Instant Access</h3>
          <p>Access files from any device, instantly.</p>
        </div>
        <div class="bg-gray-500 p-4 rounded-lg shadow-md m-2">
          <h4 class="font-bold">↺ Drag & Drop Simplicity</h4>
          <p>Just drag and stash — as simple as it gets.</p>
        </div>
      </div>
    </div>
    <img src="/App preview.jpg" class="h-auto rounded-lg" />
  </div>
  <webDemo class="p-6" />
  <Feedback />
</template>
