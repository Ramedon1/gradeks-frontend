<script lang="ts" setup>

</script>

<template>
  <div class="advanced-settings">
    <AtomSettingsSubheading text="Дополнительные настройки"/>
    <div class="advanced-buttons">
      <AtomSettingsButton text="Политика конфиденциальности"/>
      <AtomSettingsButton text="Правила и условия пользования"/>
    </div>
  </div>
</template>

<style scoped>
.advanced-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.advanced-settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  gap: 24px;
  align-self: stretch;
}
</style>