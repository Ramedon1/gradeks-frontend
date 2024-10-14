<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps({
  subject: String,
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number,
});

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()

const selectedGrade = ref(props.type_grade);

function handleGradeSelected(grade: number) {
  selectedGrade.value = grade;
}

function chooseGradeType() {
  if (selectedGrade.value != props.type_grade) {
    // TODO тут будет отправка запроса на сервер на изменение оценки
  }
  closeBottomSheet();
}
</script>

<template>
  <div class="item_subject">
    <AtomQuarterGradesSubjectName :subject="props.subject"/>
    <AtomQuarterGradesAverageGrade :new_type_grade="props.new_type_grade" :old_type_grade="props.old_type_grade"
                                   :type_grade="props.type_grade"
                                   @click="openBottomSheet"/>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <div class="grade-type-explanation">
        <AtomTextsHeaderText class="header" text="Тип оценивания"/>
        <div class="third-text info-text-grade">
          С нового учебного года в большинство школ Оренбуржья была введена новая система оценивания учеников.
          Но в некоторых школах была оставлена старая привычная система оценивания. Вы можете по желанию выбрать по
          какой системе будет высчитываться оценка для вас.
        </div>
        <div class="grade-content">
          <MoleculeGradesTypeGrade :new_type_grade="props.new_type_grade"
                                   :old_type_grade="props.old_type_grade"
                                   @gradeSelected="handleGradeSelected"/>
        </div>
        <div class="buttons-container">
          <AtomUiButtonsCancel @click="closeBottomSheet"/>
          <AtomUiButtonsEdit @click="chooseGradeType"/>
        </div>
      </div>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.item_subject {
  display: flex;
  height: 28px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.buttons-container {
  display: flex;
  height: 55px;
  align-items: flex-start;
  gap: 7px;
}

.grade-content {
  display: flex;
  justify-content: center;
  font-size: 40px;
}

.info-text-grade {
  text-align: center;
}

.grade-type-explanation {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  text-align: center;
}
</style>