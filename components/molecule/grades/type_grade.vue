<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import getGradeColor from "assets/js/functions";

const props = defineProps({
  new_type_grade: Number,
  old_type_grade: Number,
  type_grade: String,
});

const emit = defineEmits(['gradeSelected']);

const is_new_type_grade = ref(props.type_grade === 'new');

function toggleGrade(gradeType: 'new' | 'old') {
  if (gradeType === 'new') {
    is_new_type_grade.value = true;
    emit('gradeSelected', 'new');
  } else {
    is_new_type_grade.value = false;
    emit('gradeSelected', 'old');
  }
}

const newGradeColor = computed(() => (is_new_type_grade.value ? getGradeColor(props.new_type_grade) : 'gray'));
const oldGradeColor = computed(() => (!is_new_type_grade.value ? getGradeColor(props.old_type_grade) : 'gray'));

watch(() => props.type_grade, (newTypeGrade) => {
  is_new_type_grade.value = newTypeGrade === 'new';
});
</script>

<template>
  <div class="grade-container">
    <AtomUiTooltip id="tooltip1" text="Средневзвешенный балл (СВ) – автоматически подсчитываемый показатель успеваемости обучающегося, учитывающий степень важности каждого вида работы, за которые выставлены оценки.">
      <p :style="{ color: newGradeColor }" class="average-grade" @click="toggleGrade('new')">
        {{ props.new_type_grade ?? '__' }}
      </p>
    </AtomUiTooltip>

    <p class="average-grade" style="color: #9D9D9D">/</p>

    <AtomUiTooltip id="tooltip2" text="Средняя оценка (СО) – это оценка, которая высчитывается сложением всех оценок ученика и делением их получившуюся сумму на количество оценок.">
      <p :style="{ color: oldGradeColor }" class="average-grade" @click="toggleGrade('old')">
        {{ props.old_type_grade ?? '__' }}
      </p>
    </AtomUiTooltip>
  </div>
</template>

<style scoped>
.grade-container {
  display: flex;
  align-items: center;
}

.average-grade {
  text-align: left;
  font-family: "date-grades", serif;
  line-height: 20px;
  margin: 10px 0;
  cursor: pointer;
}
</style>