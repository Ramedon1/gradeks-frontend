<script setup lang="ts">
const props = defineProps({
  label: String,
  href: String,
});
</script>

<template>
  <NuxtLink class="submit-button third-text" :to="props.href">
    {{ props.label }}
  </NuxtLink>
</template>

<style scoped>
.submit-button {
  width: 45%;
  height: 45px;
  border: 3px solid rgba(19, 79, 59, 0.4);
  color: rgba(89, 87, 87, 0.84);

  border-radius: 12px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
</style>