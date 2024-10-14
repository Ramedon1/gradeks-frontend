<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <div class="headline-container">
    <AtomIconsDot/>
    <p class="headline-text subheading"> {{ props.text }}</p>
  </div>
</template>

<style scoped>
.headline-text {
  margin: 0;
}

.headline-container {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
</style>