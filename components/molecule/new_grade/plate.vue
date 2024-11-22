<script lang="ts" setup>
const card_info = defineProps({
  date: String,
  subject: String,
  new_grade: Number,
  weight: Number,
  old_grade: Number,
});

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet();

const addToHomeScreen = () => {
  if (window.Telegram?.WebApp?.addToHomeScreen) {
    window.Telegram.WebApp.addToHomeScreen();
  } else {
    console.error("Telegram WebApp SDK is not available");
  }
};
</script>


<template>
  <div @click="addToHomeScreen()" class="plate">
    <div class="header">
      <AtomPlateDate :date="card_info.date" class="date-grade"/>
      <AtomPlateWeight :weight="card_info.weight" @click="openBottomSheet"/>
      <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
        <AtomTextsHeaderBottomSheet header="Вес оценки"/>
        <p class="third-text" style="margin: 0; font-size: 15px; text-align: center">
          Вес оценки - это коэффициент, который учитывает влияние оценки на итоговую оценку за четверть. Используется в
          системе СВ.
          Чем выше вес, тем больше оценка влияет на итоговую.
        </p>
      </AtomUiBottomSheet>
    </div>
    <div class="spacer"></div>
    <div class="grade-change">
      <AtomPlateSubjectGrade :subject="card_info.subject"/>
      <AtomGradesGrade :new_grade="card_info.new_grade" :old_grade="card_info.old_grade"/>
    </div>
    <!-- Add To Home Screen Button -->
    <button @click="addToHomeScreen()" class="add-to-home-btn">
      Add to Home Screen
    </button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
}

.plate {
  display: flex;
  width: 170px;
  background-color: var(--theme-secondary-bg-color-white);
  border-radius: 10px;
  height: 150.333px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.spacer {
  flex-grow: 1;
}

@media (max-width: 374px) {
  .plate {
    width: 100px;
    height: 196.333px;
  }

  .grade-change {
    width: 80%;
  }
}
</style>