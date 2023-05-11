<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    class="flex h-screen items-center justify-center bg-white dark:bg-gray-800"
  >
    <button
      class="py-4 px-6 w-96 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600"
    >
      Hello Tailwind
    </button>
  </div>
</template>

<style scoped>
</style>
