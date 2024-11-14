<script setup lang="ts">
const props = defineProps({
  weight: Number,
});

</script>

<template>
  <div class="weight-container">
    <p class="weight-text">{{ props.weight}}</p>
  </div>
</template>

<style scoped>
.weight-container {
  display: flex;
  padding: 3px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--theme-section-bg-color-light-blue);
}

.weight-text {
  color: var(--theme-subtitle-text-color-green);
  text-align: center;
  font-family: "date-grades", serif;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
}

</style>