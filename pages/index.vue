<script lang="ts" setup>
import {ref} from 'vue';
import {Vue3Lottie} from "vue3-lottie";
import DuckSticker from "@/public/animations/duck-sticker.json";

const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);
const new_grade_plane = [
  { date: '2021-09-01', subject: 'Вероятность и статистика', new_grade: 5, old_grade: 4 },
  { date: '2021-09-02', subject: 'Алгебра', new_grade: 4 },
  { date: '2021-09-03', subject: 'Геометрия', new_grade: 5 },
  { date: '2021-09-04', subject: 'Физика', new_grade: 3, old_grade: 2 },
  { date: '2021-09-05', subject: 'Химия', new_grade: 4, old_grade: 3 }
];
</script>

<template>
  <div v-if="new_grade_plane" class="main-content">
    <OrganismDashboardTopBar :avatar_size="40"
                             :notifications="notifications"
                             avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <OrganismDashboardPlatesGrid :new_grade_plane="new_grade_plane"/>
  </div>
  <div v-else class="none-content">
    <OrganismDashboardTopBar :avatar_size="40"
                             :notifications="notifications"
                             avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <div class="none-new-grades">
      <Vue3Lottie :animation-data="DuckSticker" :height="200" :width="200"/>
      <p class="none-text subheading">Пока нету новых оценок</p>
    </div>
  </div>
</template>


<style scoped>
.none-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.none-new-grades {
  text-align: center;
  background-color: rgba(234, 234, 234, 0.57);
  border-radius: 20px;
  padding: 30px;
  margin: 30px auto auto;
}

.none-text {
  font-size: 25px;
}

.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>