<script lang="ts" setup>
import { getGradeColor } from "assets/js/functions";

// Function to convert hex color to RGBA
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const props = defineProps({
  subject: String,
  grade: Number,
});

const gradeColor = getGradeColor(props.grade);

console.log(gradeColor);
</script>

<template>
  <div class="final-grade-subject">
    <AtomQuarterGradesSubjectName
        :subject="props.subject"
    />
    <AtomPlateWeight
        :weight="props.grade === 0 ? 'Зачёт' : (props.grade === 1 ? 'Не зачёт' : props.grade)"
        :style="{ backgroundColor: hexToRgba(getGradeColor(props.grade), 1) }"
    />
  </div>
</template>

<style scoped>
.final-grade-subject {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
</style>
