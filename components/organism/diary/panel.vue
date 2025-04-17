<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  subject_name: String,
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number,
  grades: [{
    coff: Number,
    grade: Number,
    date: String
  }]
});

const sortedGrades = computed(() =>
    [...props.grades].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )
)

const lastGrade = computed(() =>
    sortedGrades.value.length
        ? sortedGrades.value[sortedGrades.value.length - 1]
        : null
)

const penultimateGrade = computed(() =>
    sortedGrades.value.length > 1
        ? sortedGrades.value[sortedGrades.value.length - 2]
        : null
)

const last_grade = computed(() => penultimateGrade.value?.grade ?? 0)
const prelast_grade = computed(() => lastGrade.value?.grade ?? 0)

console.log(last_grade.value, prelast_grade.value)
</script>

<template>
  <MoleculeDiaryItemSubject
      :last_grade="last_grade"
      :new_type_grade="props.new_type_grade"
      :old_type_grade="props.old_type_grade"
      :prelast_grade="prelast_grade"
      :subject="props.subject_name"
      :type_grade="props.type_grade"
  />
  <MoleculeDiaryGradeList
      v-if="props.grades.length > 0"
      :grades="props.grades"
  />
</template>
