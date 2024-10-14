<script lang="ts" setup>
import {ref} from 'vue';
import {Vue3Lottie} from 'vue3-lottie'
import duckJSON from '@/public/animations/duck-link.json'

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()


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
  <div v-if="data" class="diary-content">
    <OrganismDiaryTopBar :notifications="notifications"
                         avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <OrganismDiaryQuarterGrades :quarters="data"/>
  </div>
  <div v-else class="none-link">
    <p class="primary-text none-link-text">Кажется вы не подключили ваш электронный дневник к нашей системе</p>
    <Vue3Lottie :animation-data="duckJSON"
                :height="200"
                :width="200"
    />
    <AtomUiButtonsEdit class="button-edit" style="width: 70%" text="Настроить" @click="openBottomSheet"/>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <AtomTextsHeaderBottomSheet header="Редактирование профиля"/>
      <div class="edit-content-container">
        <AtomUiInput id="student_id" placeholder="Ссылка на список оценок"/>
        <AtomUiButtonsSubmit style="width: 100%" text="Сохранить" @click="closeBottomSheet"/>
      </div>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.button-edit {
  margin: 20px auto 0;
}

.none-link-text {
  font-size: 25px;
  text-align: center;
  margin: 0;
}


.none-link {
  justify-content: center;
  align-items: center;

  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 30px auto auto;
}
.edit-content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}



.diary-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
</style>