<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie'
import duckJSON from '@/public/animations/duck-deactivate.json'
</script>

<template>
  <Vue3Lottie
      :animation-data="duckJSON"
      :height="200"
      :width="200"
  />
</template>
<style scoped>

</style>