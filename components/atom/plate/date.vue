<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  date: String,
});

const fontFamily = computed(() => {
  return props.date.includes("-") ? "date-grades" : "PFEncoreSansPro-Medium";
});

const textColorClass = computed(() => {
  return props.date.includes("Итоговая") ? "final-text" : "default";
});
</script>

<template>
  <div class="date">
    <p class="date-text" :style="{ fontFamily }" :class="textColorClass">
      {{ props.date }}
    </p>
  </div>
</template>

<style scoped>
@media (max-width: 374px) {
  .date-text {
    font-size: 10px;
  }
}

.date-text {
  text-align: center;
  font-family: "PFEncoreSansPro-Medium", serif;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
}

.final-text {
  color: #11241C;
}

.default {
  color: var(--theme-text-color-green);
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
