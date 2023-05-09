<script setup lang="ts">
import { inject } from 'vue'

const $http = inject('axios')
const healthCheck = async (): Promise<void> => {
  const response = await $http.get('http://localhost:3000/')
  console.log(response.data)
}
healthCheck()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
