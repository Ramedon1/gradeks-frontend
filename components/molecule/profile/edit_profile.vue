<script lang="ts" setup>
import {ref, computed, watch} from 'vue';
import {useDiaryState} from "~/state/diary";

const {spec_diary} = storeToRefs(useDiaryState());
const {connectDiary} = useDiaryState();
const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet();

const urlInput = ref('');
const isButtonDisabled = ref(true);

const isUrlValid = computed(() => {
  const urlPattern = /^https:\/\/de\.edu\.orb\.ru\/edv\/actions\/subjects\/\?participant=[\w\d]+&.+$/;
  return urlPattern.test(urlInput.value);
});

watch(isUrlValid, (newVal) => {
  isButtonDisabled.value = !newVal;
});

const handleInputChange = (event: Event) => {
  urlInput.value = (event.target as HTMLInputElement).value;
};

function sendDiaryID(urlInput: string) {
  const participantMatch = urlInput.match(/participant=([\w\d]+)/);
  if (participantMatch) {
    const response = connectDiary(`/participant=${participantMatch[1]}/`);
    if (response.status === 'ok') {
      spec_diary.value.diary_id = participantMatch[1];
      spec_diary.value.diary_link = true;
      isButtonDisabled.value = true;
    }
  }
  closeBottomSheet();
}

const diaryIdInputValue = computed(() => spec_diary.value.diary_id ? `https://de.edu.orb.ru/edv/actions/subjects/?participant=${spec_diary.value.diary_id}` : 'Ссылка на список оценок');
</script>

<template>
  <div class="edit-profile-container">
    <div @click="openBottomSheet">
      <slot></slot>
    </div>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <AtomTextsHeaderBottomSheet header="Редактирование профиля"/>
      <div class="edit-content-container">
        <AtomUiInput
            id="student_id"
            :placeholder="diaryIdInputValue"
            v-model="urlInput"
            @input="handleInputChange"
        />
        <AtomUiButtonsSubmit
            class="button-save"
            text="Сохранить"
            @click="sendDiaryID(urlInput)"
            :disabled="isButtonDisabled"
        />
      </div>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.edit-content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.edit-profile-container {
  margin-top: 5px;
  margin-right: 5px;
}

.button-save:disabled {
  background-color: #d3d3d3;
  cursor: not-allowed;
}
</style>
