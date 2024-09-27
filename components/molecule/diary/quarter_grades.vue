<script lang="ts" setup>
const getRandomGrade = () => {
  const grades = ['5', '4', '3', '2'];
  return grades[Math.floor(Math.random() * grades.length)];
};

const getRandomDate = () => {
  const year = Math.floor(Math.random() * 3) + 2021;
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  return `${day}.${month}.${year} - ${day}.${month}.${year + 1}`;
};

const grades = Array.from({ length: 5 }, () => ({
  grade: getRandomGrade(),
  date: getRandomDate(),
  coff: String(Math.floor(Math.random() * 5) + 1)
}));

const quarterName = `${Math.floor(Math.random() * 4) + 1} Четверть`;
const quarterDate = getRandomDate();
</script>

<template>
  <div class="quarter-grades">
    <AtomQuarterGradesAccordion
      :quarter_name="quarterName"
      :quarter_date="quarterDate"
      :grades="grades"
      subject="Информатика"
      type_grade="new"
      :old_type_grade="2.2"
      :new_type_grade="3"
    />
    <AtomQuarterGradesAccordion
        :quarter_name="quarterName"
        :quarter_date="quarterDate"
        :grades="grades"
        subject="Информатика"
        type_grade="new"
        :old_type_grade="2.2"
        :new_type_grade="3"
        :open="false"
    />
  </div>
</template>

<style scoped>
.quarter-grades {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}
</style>