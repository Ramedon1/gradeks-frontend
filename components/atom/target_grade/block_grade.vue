<script lang="ts" setup>
import {getGradeColor, hexToRgba} from "assets/js/functions";
import {onMounted} from "vue";

const props = defineProps({
  grade: Number,
  counter: Number,
})


onMounted(() => {
  const rootStyles = getComputedStyle(document.documentElement);
  const hexColor = rootStyles.getPropertyValue('--theme-button-text-color-white').trim();

  const rgbaColor = hexToRgba(hexColor, 0.1);

  const blockGrades = document.querySelectorAll('.container-grade');
  blockGrades.forEach((el) => {
    (el as HTMLElement).style.borderColor = rgbaColor;
  });
});

</script>

<template>
  <div class="grade-container-req">
    <div class="container-grade">
      <p :style="{ color: getGradeColor(props.grade) }" class="primary-text grade-text"> {{ props.grade }}</p>
      <p class="primary-text coff-text"> 1 </p>
    </div>
    <p class="counter-more subheading"> еще {{ props.counter }} </p>
  </div>

</template>

<style scoped>
.counter-more {
  text-align: center;
  font-size: 12px;
  margin: 10px 0 0;
}

.grade-text {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  line-height: 20px;
}

.container-grade {
  position: relative;
}

.coff-text {
  position: absolute;
  top: 0;
  margin: 0;
  right: 0;
  padding-top: 3px;
  padding-right: 5px;
  font-size: 1.1em;
}

.grade-container-req {
  display: flex;
  flex-direction: column;
}


.container-grade {
  border-radius: 6px;
  display: flex;
  border: 1px solid;
  color: var(--theme-text-color-green);
  font-family: 'date-grades', sans-serif;
  text-align: center;
  max-height: 60px;
  min-height: 60px;
  max-width: 60px;
  min-width: 60px;
}
</style>