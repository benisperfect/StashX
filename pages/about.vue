<script setup lang="ts">
import { Cloud } from 'lucide-vue-next';
</script>

<template>
  <section class="max-w-2xl mx-auto mt-10 bg-white/80 rounded-xl shadow-lg overflow-hidden">
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <h1 class="text-4xl font-bold text-white font-serif tracking-tight drop-shadow-lg">
        About Us
      </h1>
    </header>
    <div class="flex flex-col gap-6 items-start p-8 font-serif text-gray-800">
      <p class="text-lg leading-relaxed">
        <span class="font-semibold text-indigo-700">StashX</span> is your personal cloud companion — a smart, secure, and seamless
        second drive on the web. Designed for simplicity and speed, StashX lets
        you stash away files of any kind — documents, media, backups, and more —
        all in one place, accessible anytime, anywhere. Whether you're a student,
        a creator, a developer, or just someone who needs extra digital space,
        StashX offers a clean, user-friendly interface with powerful functionality
        under the hood.
      </p>
      <p class="text-lg leading-relaxed">
        No more cluttered desktops or full hard drives — just
        <span class="font-semibold text-blue-600"> drag, drop, and stash</span>. With fast uploads, easy sharing options, and strong
        privacy controls, StashX helps you keep your digital life organized and
        under control. Whether you're storing files for work, saving projects, or
        backing up memories, StashX makes it effortless. Think of it as your
        always-there, always-private second drive — in the cloud, but fully yours.
      </p>
      <div class="w-full flex justify-center mt-2">
        <Cloud
          class="w-24 h-24 opacity-80"
        />
      </div>
    </div>
  </section>
</template>
