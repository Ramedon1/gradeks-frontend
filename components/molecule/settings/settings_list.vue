<script lang="ts" setup>

</script>

<template>
  <div class="settings-list">
    <AtomSettingsButton :switch="true" icon-name="bell" text="Оповещение о новых оценках"/>
    <AtomSettingsButton redirect="https://t.me/ramedon" icon-name="alert" text="Сообщить о проблеме"/>
    <AtomSettingsButton href="/deactivate" icon-name="trash" text="Удаление аккаунта"/>
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