<script lang="ts" setup>
const props = defineProps({
  subject: String,
});
</script>

<template>
  <p class="subject-name third-text"> 📐 {{ props.subject }} </p>
</template>

<style scoped>
.subject-name {
  margin: 0;
  font-size: 16px;
}
</style>