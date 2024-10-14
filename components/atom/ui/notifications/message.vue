<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <div class="message-container">
    <p class="message third-text"> {{ props.text }}</p>
  </div>
</template>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.message {
  margin: 0;
  justify-content: flex-start;
  font-size: 15px;
}
</style>
