<script lang="ts" setup>
import {useDiaryState} from '~/state/diary';
import {getSettings} from "~/composables/useLocalStorage";

const {distribution} = storeToRefs(useDiaryState())
const {activateDistribution, deactivateDistribution, getGrades} = useDiaryState();


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