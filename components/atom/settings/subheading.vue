<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <p class="third-text"> {{ props.text }}</p>
</template>

<style scoped>
.third-text {
  margin: 0;
  font-size: 14px;
}
</style>