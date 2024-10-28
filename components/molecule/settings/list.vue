<script setup lang="ts">
import { useDiaryState } from '~/state/diary';
const { distribution } = storeToRefs(useDiaryState())
</script>

<template>
  <div class="settings-list">
    <AtomSettingsButton :switch="distribution" icon-name="bell" text="Оповещение о новых оценках"/>
    <AtomSettingsButton :switch="null" redirect="https://t.me/ramedon" icon-name="alert" text="Сообщить о проблеме"/>
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