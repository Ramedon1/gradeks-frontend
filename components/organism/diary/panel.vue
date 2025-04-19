<script lang="ts" setup>
import {computed} from 'vue'

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

const last_grade = computed<number>(() =>
    props.grades.length
        ? props.grades[props.grades.length - 1].grade
        : 0
)

const prelast_grade = computed<number>(() =>
    props.grades.length > 1
        ? props.grades[props.grades.length - 2].grade
        : 0
)

</script>

<template>
  <MoleculeDiaryItemSubject
      :grades="props.grades"
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
