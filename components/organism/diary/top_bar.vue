<script lang="ts" setup>
import {Vue3Lottie} from "vue3-lottie";
import Duck from "@/public/animations/duck-report.json";

const props = defineProps({
  notifications: {
    headline: String,
    message: String
  }
});
</script>

<template>
  <div class="top-bar-container">
    <Vue3Lottie
        :animation-data="Duck"
        :height="150"
        :width="150"
    />
    <div class="top-bar">
      <AtomTextsHeaderText style="text-align: center" text="Успеваемость"/>
      <!-- <OrganismNotificationBellBottomSheet :notifications="notifications" header="Оповещения"/> -->
    </div>
    <AtomTextsDiaryPraiseText style="text-align: center"/>
  </div>
</template>

<style scoped>
.top-bar-container {
  gap: 15px;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
}
</style>