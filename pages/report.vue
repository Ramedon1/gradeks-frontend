<script lang="ts" setup>

</script>

<template>
  <div>
    <MoleculeReportDuck/>
    <div class="form">
      <AtomUiInput id="name-report" name="name-report" placeholder="Введите тему проблемы"/>
      <AtomUiTextArea id="description-report" name="description-report" placeholder="Опишите проблему"/>
      <AtomUiSubmitButton id="report-button" label="Отправить" name="report-button" text="Отправить"/>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
</style>