<script lang="ts" setup>
const props = defineProps({
  new_grade_plane: Array
});
</script>

<template>
  <p class="subheading">Новые оценки</p>
  <div class="grade-container">
    <MoleculeNewGradePlate
        v-for="(grade, index) in props.new_grade_plane"
        :key="index"
        :date="grade.date"
        :new_grade="grade.new_grade"
        :old_grade="grade.old_grade"
        :subject="grade.subject"
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