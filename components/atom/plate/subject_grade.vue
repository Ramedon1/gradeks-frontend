<script setup lang="ts">
const props = defineProps({
  subject: String,
});
</script>

<template>
  <p class="subject-grade subject"> {{ props.subject }} </p>
</template>

<style scoped>
.subject {
  margin: 0;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  text-align: left;
}
</style>