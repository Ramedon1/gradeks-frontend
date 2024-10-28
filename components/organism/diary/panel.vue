<script lang="ts" setup>
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
</script>

<template>
  <MoleculeDiaryItemSubject
      :new_type_grade="props.new_type_grade"
      :old_type_grade="props.old_type_grade"
      :subject="props.subject_name"
      :type_grade="props.type_grade"
  />
  <MoleculeDiaryGradeList v-if="props.grades.length > 0" :grades="props.grades"/>
</template>
