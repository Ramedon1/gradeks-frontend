<script lang="ts" setup>
const card_info = defineProps({
  date: String,
  subject: String,
  new_grade: Number,
  weight: Number,
  old_grade: Number,
  is_final: Boolean
});

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet();


</script>


<template>
  <div class="plate">
    <div
        v-if="card_info.is_final"
        class="final-header"
        style="gap: 5px; flex-direction: column; display: flex; justify-content: space-between;">
      <AtomPlateDate class="date-grade" date="Итоговая оценка"
                     style="background-color: var(--theme-accent-text-color-light-green)"/>
      <AtomPlateDate :date="card_info.date" class="date-grade"/>
    </div>
    <div class="header">
      <AtomPlateDate v-if="card_info.is_final === false" :date="card_info.date" class="date-grade"/>
      <AtomPlateWeight v-if="card_info.is_final === false" :weight="card_info.weight" @click="openBottomSheet"/>
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
  .grade-change {
    width: 80%;
  }
}
</style>