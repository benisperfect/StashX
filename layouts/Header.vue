<template>
  <div
    class="bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-4 pb-4"
  >
    <div class="flex flex-row items-center justify-center">
      <h1 class="text-5xl font-bold">StashX</h1>
    </div>
    <div class="flex flex-row items-center justify-center gap-6 mt-6">
      <NuxtLink to="/">
        <a class="hover:underline">Home</a>
      </NuxtLink>
      <NuxtLink to="/upload">
        <a class="hover:underline">Upload</a>
      </NuxtLink>
      <NuxtLink to="/settings">
        <a class="hover:underline">Setting</a>
      </NuxtLink>
      <NuxtLink to="/about">
        <a class="hover:underline">About</a>
      </NuxtLink>
    </div>
  </div>
</template>
