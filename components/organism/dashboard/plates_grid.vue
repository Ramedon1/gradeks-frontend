<script lang="ts" setup>
const new_grade_plane = [
  { date: '2021-09-01', subject: 'Вероятность и статистика', new_grade: 5, old_grade: 4 },
  { date: '2021-09-02', subject: 'Алгебра', new_grade: 4 },
  { date: '2021-09-03', subject: 'Геометрия', new_grade: 5 },
  { date: '2021-09-04', subject: 'Физика', new_grade: 3, old_grade: 2 },
  { date: '2021-09-05', subject: 'Химия', new_grade: 4, old_grade: 3 }
];
</script>

<template>
  <p class="subheading">Новые оценки</p>
  <div class="grade-container">
    <MoleculeNewGradePlate
      v-for="(grade, index) in new_grade_plane"
      :key="index"
      :date="grade.date"
      :subject="grade.subject"
      :new_grade="grade.new_grade"
      :old_grade="grade.old_grade"
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