<script lang="ts" setup>
const props = defineProps({
  new_grade_plane: Array
});
</script>

<template>
  <p class="subheading">Новые оценки за сегодня</p>
  <div class="grade-container">
    <MoleculeNewGradePlate
        v-for="(grade, index) in props.new_grade_plane"
        :key="index"
        :date="grade.date"
        :weight="grade.coff"
        :new_grade="grade.grade"
        :old_grade="grade.old_grade !== null ? grade.old_grade : undefined"
        :subject="grade.subject"
        :is_final="grade.is_final"
    />
  </div>
</template>

<style scoped>
.subheading {
  margin: 0;
}

.grade-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.grade-container > * {
  flex: 1 1 auto;
}
</style>