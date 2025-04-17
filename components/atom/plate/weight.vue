<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  weight: {
    type: [Number, String],
    required: true,
  },
  textColor: {
    type: String,
    default: "var(--theme-subtitle-text-color-green)",
  },
});

const fontFamily = computed(() => {
  return Number.isInteger(Number(props.weight)) ? "date-grades" : "PFEncoreSansPro-Medium";
});
</script>

<template>
  <div class="weight-container">
    <p
        class="weight-text"
        :style="{ color: props.textColor, fontFamily }"
    >
    {{ props.weight }}
    </p>
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
  text-align: center;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
  color: var(--theme-subtitle-text-color-green);
}
</style>
