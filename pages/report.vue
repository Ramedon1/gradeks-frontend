<script setup lang="ts">

</script>

<template>
  <div>
    <MoleculeReportDuck/>
    <AtomUiInput id="name-report" name="name-report" placeholder="Введите тему проблемы"/>
    <AtomUiTextArea id="description-report" name="description-report" placeholder="Опишите проблему"/>
    <AtomUiSubmitButton text="Отправить" name="report-button" id="report-button" label="Отправить"/>
  </div>
</template>

<style scoped>

</style>