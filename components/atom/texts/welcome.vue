<script setup lang="ts">

const props = defineProps({
  name: String,
});
</script>

<template>
  <p class="primary-text-greeting">Привет, {{ props.name }}! 👋</p>
</template>

<style scoped>
.primary-text-greeting {
  margin: 0;
  color: var(--theme-text-color-green);
  font-family: "PFEncoreSansPro-Black", serif;
  font-size: 26px;
  font-weight: 600;
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  line-height: 26px;
}
</style>