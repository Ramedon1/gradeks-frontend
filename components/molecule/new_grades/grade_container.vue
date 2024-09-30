<script setup lang="ts">
</script>

<template>
  <p class="subheading">Новые оценки</p>
  <div class="grade-container">
    <MoleculeNewGradesCard date="12.12.2024" subject="Вероятность и статистика" :new_grade="5"/>
    <MoleculeNewGradesCard date="12.12.2024" subject="Основы безопасности и защиты Родины" :new_grade="5"/>
    <MoleculeNewGradesCard date="12.12.2024" subject="Подготовка к ЕГЭ по биологии" :new_grade="5"/>
    <MoleculeNewGradesCard date="12.12.2024" subject="Подготовка к ЕГЭ по обществознанию" :new_grade="5"/>
    <MoleculeNewGradesCard date="12.12.2024" subject="Информатика" :new_grade="5"/>

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
