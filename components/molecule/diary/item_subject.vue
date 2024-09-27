<script lang="ts" setup>
const props = defineProps({
  subject: String,
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number,
});
</script>

<template>
  <div class="item_subject">
    <AtomQuarterGradesSubjectName :subject="props.subject"/>
    <AtomQuarterGradesAverageGrade :new_type_grade="props.new_type_grade"
                                   :old_type_grade="props.old_type_grade"
                                   :type_grade="props.type_grade"
    />
  </div>
</template>

<style scoped>
.item_subject {
  display: flex;
  height: 28px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
</style>