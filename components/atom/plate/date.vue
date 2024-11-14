<script setup lang="ts">
const props = defineProps({
  date: String
});
</script>

<template>
  <div class="date">
    <p class="date-text">{{ props.date }}</p>
  </div>
</template>

<style scoped>
@media (max-width: 374px) {
  .date-text {
    font-size: 10px;
  }
}

.date-text {
  color: var(--theme-text-color-green);
  text-align: center;
  font-family: "date-grades", serif;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
}

.date {
  display: flex;
  padding: 3px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--theme-accent-text-color-mint);
}
</style>