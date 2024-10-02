<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <p class="message third-text"> {{ props.text}}</p>
</template>

<style scoped>
.message {
  margin: 0;
  font-size: 15px;
}
</style>