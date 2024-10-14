<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <p class="primary-text-greeting">{{ props.text }}</p>
</template>

<style scoped>
.primary-text-greeting {
  margin: 0;
  color: #11241C;
  font-family: "PFEncoreSansPro-Black", serif;
  font-size: 26px;
  font-weight: 600;
  width: 100%;
  line-height: 26px;
}
</style>