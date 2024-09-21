<script setup lang="ts">
const { url_img, size } = defineProps({
  url_img: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 40
  }
});
</script>

<template>
  <img :src="url_img" :alt="'avatar'" :class="'avatar'" :style="{ width: size + 'px', height: size + 'px' }">
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>