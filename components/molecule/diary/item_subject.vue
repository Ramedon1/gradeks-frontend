<script lang="ts" setup>
import {ref} from "vue";
import {useDiaryState} from '~/state/diary';
import {addToast} from "~/composables/toast";

const {newGradeType} = useDiaryState();

const props = defineProps({
  subject: String,
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number,
  last_grade: Number,
  prelast_grade: Number,
  grades: [{
    coff: Number,
    grade: Number,
    date: String
  }]
});

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()

const selectedGrade = ref(props.type_grade);

globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};


function handleGradeSelected(grade: number) {
  selectedGrade.value = grade;
}

async function chooseGradeType() {
  if (selectedGrade.value != props.type_grade) {
    try {
      const response = await newGradeType(selectedGrade.value);
      if (response.status === 'ok') {
        showToast('Тип оценок успешно изменен', 'success');
      } else {
        showToast(response.error, 'error');
      }
    } catch (error) {
      showToast('Ошибка при при изменении типа оценок', 'error');
    } finally {
      closeBottomSheet();
    }
  } else {
    showToast('Нельзя поменять тип оценок на тот же самый', 'info');
  }
}

const currentGrade = computed(() => {
  return props.type_grade === 'old' ? props.old_type_grade : props.new_type_grade;
});


</script>

<template>
  <div class="item_subject">
    <AtomQuarterGradesSubjectName class="subject-name" :subject="props.subject"/>

    <div class="contain">
      <MoleculeStatisticSubject :current="currentGrade" :grades="props.grades" :subject="props.subject"/>
      <AtomQuarterGradesAverageGrade :last_grade="props.last_grade" :new_type_grade="props.new_type_grade"
                                     :old_type_grade="props.old_type_grade" :prelast_grade="props.prelast_grade"
                                     :type_grade="props.type_grade"
                                     @click="openBottomSheet"/>
    </div>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <div class="grade-type-explanation">
        <AtomTextsHeaderText class="header" text="Тип оценивания"/>
        <div class="third-text info-text-grade">
          С нового учебного года в большинство школ Оренбуржья была введена новая система оценивания учеников.
          Но в некоторых школах была оставлена старая привычная система оценивания. Вы можете по желанию выбрать по
          какой системе будет высчитываться оценка для вас.
        </div>
        <div class="grade-content">
          <MoleculeGradesTypeGrade
              :new_type_grade="props.new_type_grade"
              :old_type_grade="props.old_type_grade"
              :type_grade="props.type_grade"
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
@media (max-width: 321px) {
  .subject-name {
    font-size: 14px;
  }

}

.contain {
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: center;
}

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
  color: var(--theme-subtitle-text-color-gray);
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