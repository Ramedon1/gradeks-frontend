<script lang="ts" setup>
import {useDiaryState} from '~/state/diary';
import {getSettings} from "~/composables/useLocalStorage";
import {addToast} from "~/composables/toast";

const {distribution} = storeToRefs(useDiaryState())
const {activateDistribution, deactivateDistribution, getGrades} = useDiaryState();

globalThis.addToast = addToast;
const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()

let type_period = ref(await getSettings('filter'));
if (type_period.value === 'semester') {
  type_period = true
} else {
  type_period = false
}

const addToHomeScreen = () => {
  const status = window.Telegram?.WebApp?.checkHomeScreenStatus();
  if (status === 'missed') {
    window.Telegram.WebApp.addToHomeScreen();
  } else if (status === 'added') {
    showToast('Уже добавлено на рабочий стол', 'info');
  } else if (status === 'unknown') {
    showToast('Невозможно определить статус ярылка', 'error');
  } else {
    showToast('Не поддерживается на данном устройстве', 'error');
  }
};
</script>

<template>
  <div class="settings-list">
    <AtomSettingsButton :action-active="activateDistribution" :action-deactive="deactivateDistribution"
                        :switch="distribution" icon-name="bell" text="Оповещение о новых оценках"/>
    <AtomSettingsButton :action-active="() => getGrades('semester')"
                        :action-deactive="() => getGrades('quarter')" :switch="type_period" icon-name="layout"
                        text="Распределение оценок по полугодиям"/>
    <AtomSettingsButton :switch="null" icon-name="star" text="Настройка темы" @click="openBottomSheet"/>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <AtomTextsHeaderBottomSheet header="Настройка темы"/>
      <MoleculeSettingsThemeList style="margin-top: 20px"/>
    </AtomUiBottomSheet>
    <AtomSettingsButton @click="addToHomeScreen()" :switch="null" icon-name="homescreen" text="Добавить на рабочий стол"/>
    <AtomSettingsButton :switch="null" icon-name="alert" redirect="https://t.me/gradeks_support_bot"
                        text="Сообщить о проблеме"/>
  </div>
</template>


<style scoped>
.settings-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  margin: 0 20px;
  border-radius: 16px;
}
</style>