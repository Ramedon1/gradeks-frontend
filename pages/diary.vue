<script lang="ts" setup>
import {ref} from 'vue';

const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);

const data = ref([
  {
    quarterName: '1 четверть',
    quarterDate: '24-24-2024 - 12-12-2026',
    subjects: [
      {
        subject_name: 'Математика',
        grades: [
          {coff: 2, grade: 5, date: '24-24'},
          {coff: 2, grade: 4, date: '25-24'},
          {coff: 2, grade: 3, date: '27-24'},
          {coff: 2, grade: 2, date: '28-24'},
          {coff: 2, grade: 1, date: '29-24'}
        ],
        type_grade: 'new',
        new_type_grade: 4.87,
        old_type_grade: 5
      }
    ]
  },
  {
    quarterName: '2 четверть',
    quarterDate: '24-24-2024 - 12-12-2026',
    subjects: [
      {
        subject_name: 'Математика',
        grades: [
          {coff: 2, grade: 5, date: '24-24'},
          {coff: 2, grade: 4, date: '25-24'},
          {coff: 2, grade: 3, date: '27-24'},
          {coff: 2, grade: 2, date: '28-24'},
          {coff: 2, grade: 1, date: '29-24'}
        ],
        type_grade: 'new',
        new_type_grade: 4.87,
        old_type_grade: 5
      },
      {
        subject_name: 'Физика',
        grades: [
          {coff: 2, grade: 5, date: '24-24'},
          {coff: 2, grade: 4, date: '25-24'},
          {coff: 2, grade: 3, date: '27-24'},
          {coff: 2, grade: 2, date: '28-24'},
          {coff: 2, grade: 1, date: '29-24'}
        ],
        type_grade: 'new',
        new_type_grade: 4.87,
        old_type_grade: 5
      },
      {
        subject_name: 'Химия',
        grades: [
          {coff: 2, grade: 5, date: '24-24'},
          {coff: 2, grade: 4, date: '25-24'},
          {coff: 2, grade: 3, date: '27-24'},
          {coff: 2, grade: 2, date: '28-24'},
          {coff: 2, grade: 1, date: '29-24'}
        ],
        type_grade: 'old',
        new_type_grade: 4.87,
        old_type_grade: 5
      }
    ]
  },
  {
    quarterName: '3 четверть',
    quarterDate: '24-24-2024 - 12-12-2026',
    subjects: [
      {
        subject_name: 'Математика',
        grades: [
          {coff: 2, grade: 5, date: '24-24'},
          {coff: 2, grade: 4, date: '25-24'},
          {coff: 2, grade: 3, date: '27-24'},
          {coff: 2, grade: 2, date: '28-24'},
          {coff: 2, grade: 1, date: '29-24'}
        ],
        type_grade: 'new',
        new_type_grade: 4.87,
        old_type_grade: 5
      }
    ]
  }
]);
</script>

<template>
  <div class="diary-content">
    <OrganismDiaryTopBar :notifications="notifications"
                             avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <OrganismDiaryQuarterGrades :quarters="data"/>
  </div>
</template>

<style scoped>
.diary-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
</style>