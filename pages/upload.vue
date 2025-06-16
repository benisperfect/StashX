<script lang="ts" setup>
import { file, fileInput, fileHandle, upload } from "@/composables/useUploader";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="bg-color-white">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold mt-4">Upload Page</h1>
      <p class="text-gray-600 mt-2">
        This is the upload page where you can upload your files.
      </p>
      <div
        class="flex flex-col justify-center align-center mt-6 p-4 border-2 border-dashed border-white rounded-lg w-5/6 h-[300px] text-center"
      >
        <div
          class="ml-65 w-1/2 border-2 border-dashed rounded-3xl font-sans"
          v-if="!file"
        >
          <input
            ref="fileInput"
            type="file"
            @change="fileHandle"
            class="pl-25"
          />
          <p class="text-gray-500">Drag-n-drop or upload your files here.</p>
        </div>
        <div
          v-if="file"
          class="bg-gray-300 dark:bg-gray-800 text-gray-300 dark:text-black underline underline-offset-2"
        >
          <strong>{{ file.name }}</strong>
        </div>
        <Button class="w-1/7 text-black ml-105 mt-15" @click="upload" :disabled="!file">
          Upload
        </Button>
      </div>
    </div>
  </div>
</template>
