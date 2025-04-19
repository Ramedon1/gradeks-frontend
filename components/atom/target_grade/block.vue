<script lang="ts" setup>

import {hexToRgba} from "assets/js/functions";

const props = defineProps({
  label: String,
  grade: Number,
})

import { onMounted } from 'vue'


onMounted(() => {
  const rootStyles = getComputedStyle(document.documentElement);
  const hexColor = rootStyles.getPropertyValue('--theme-button-text-color-white').trim();

  const rgbaColor = hexToRgba(hexColor, 0.1);

  const blockGrades = document.querySelectorAll('.block-grade');
  blockGrades.forEach((el) => {
    (el as HTMLElement).style.borderColor = rgbaColor;
    (el as HTMLElement).style.boxShadow = `${rgbaColor} 1px 1px 30px`;
  });
});


</script>

<template>
  <div class="block-container">
    <div class="block-grade">
      <p class="block-grade-text">{{ props.grade }}</p>
    </div>
    <p class="block-label">{{ props.label }}</p>
  </div>
</template>

<style scoped>
.block-grade-text {
  color: var(--theme-text-color-green);
  font-family: 'date-grades', sans-serif;
  font-size: 20px;
  min-width: 30px;
  text-align: center;
  margin: 7px 0;
}

.block-label {
  text-align: center;
  color: var(--theme-text-color-green);
  font-family: "PFEncoreSansPro-Regular", serif;
  margin: 0;
}

.block-grade {
  text-align: center;
  border-width: 1px;
  box-shadow: 1px 1px 30px;
  border-style: solid;
  border-radius: 12px;
}

.block-container {
  display: flex;
  min-width: 70px;
  flex-direction: column;
  gap: 6px;
}

</style>