<script setup lang="ts">
const props_avatar = defineProps({
  url_img: String,
  size: {
    type: Number,
    default: 40
  }
});
</script>

<template>
  <img :src="props_avatar.url_img" :alt="'avatar'" :class="'avatar'" :style="{ width: props_avatar.size + 'px', height: props_avatar.size + 'px' }">
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>