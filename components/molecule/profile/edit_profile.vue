<script lang="ts" setup>
import {computed, ref, watch} from 'vue';
import {useDiaryState} from "~/state/diary";
import {Vue3Lottie} from "vue3-lottie";
import loading_animation from '~/public/animations/loading-gray.json';
import {addToast} from '@/composables/toast';

const {spec_diary} = storeToRefs(useDiaryState());
const {connectDiary} = useDiaryState();
const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet();

const urlInput = ref('');
const isButtonDisabled = ref(true);
const loading = ref(false);


globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};


const isUrlValid = computed(() => {
  const urlPattern = /^https:\/\/de\.edu\.orb\.ru\/edv\/actions\/subjects\/\?participant=[\w\d]+&.+$/;
  return urlPattern.test(urlInput.value) && (urlInput.value.match(/participant=([\w\d]+)/)?.[1] !== spec_diary.value.diary_id);
});

watch(isUrlValid, (newVal) => {
  isButtonDisabled.value = !newVal;
});

const handleInputChange = (event: Event) => {
  urlInput.value = (event.target as HTMLInputElement).value;
};

async function sendDiaryID(urlInput: string) {
  const participantMatch = urlInput.match(/participant=([\w\d]+)/);
  if (participantMatch) {
    loading.value = true;
    try {
      const response = await connectDiary(`/participant=${participantMatch[1]}/`);
      if (response.status === 'ok') {
        isButtonDisabled.value = true;
        showToast('Электронный дневник успешно подключён', 'success');
      } else {
        showToast(response.error, 'error');
      }
    } catch (error) {
      showToast('Ошибка при подключении к дневнику', 'error');
    } finally {
      loading.value = false;
      closeBottomSheet();
    }
  }
}

const diaryIdInputValue = computed(() => spec_diary.value.diary_id ? `https://de.edu.orb.ru/edv/actions/subjects/?participant=${spec_diary.value.diary_id}` : 'Ссылка на список оценок');
</script>

<template>
  <div class="edit-profile-container">
    <div @click="openBottomSheet">
      <slot></slot>
    </div>
    <AtomUiBottomSheet :blocked="loading" :visible="isBottomSheetVisible"
                       @update:visible="isBottomSheetVisible = $event">
      <div v-if="loading == false" class="container-loading">
        <AtomTextsHeaderBottomSheet header="Редактирование профиля" style="text-align: center; margin-bottom: 15px"/>
        <NuxtLink class="instruction" target="_blank"
                  to="https://telegra.ph/Instrukciya-po-privyazke-ehlektronnogo-dnevnika-deeduorbru-k-Gradeks-12-15">
          <p style="margin-bottom: 20px; margin-top: 20px">Инструкция по привязке дневника к Gradeks</p>
        </NuxtLink>
        <div class="edit-content-container">
          <AtomUiInput
              id="student_id"
              v-model="urlInput"
              :placeholder="diaryIdInputValue"
              @input="handleInputChange"
          />
          <AtomUiButtonsSubmit
              :disabled="isButtonDisabled"
              class="button-save"
              text="Сохранить"
              @click="sendDiaryID(urlInput)"
          />
        </div>
      </div>
      <div v-else>
        <Vue3Lottie :animation-data="loading_animation"
                    :height="150"
                    :width="150"
        />
        <p class="loading-text">Этот процесс займет немного времени</p>
      </div>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.instruction {
  text-align: center;
  font-family: PFEncoreSansPro-Regular, serif;
  text-decoration: underline;
  color: var(--theme-hint-color-black);
}

.instruction:visited {
  color: var(--theme-hint-color-black);
}

.loading-text {
  text-align: center;
  color: var(--theme-text-color-white);
  font-family: PFEncoreSansPro-Regular, serif;
  opacity: 0.4;
}

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
  background-color: var(--theme-button-color);
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
