<script setup lang="ts">

</script>

<template>
  <div>
    <div class="deactivate">
      <MoleculeAccountAnimation/>
      <div class="text-alert">
        <AtomTextsHeaderText text="Удаление аккаунта"/>
        <div class="subtitle">
          <AtomSettingsSubheading text="Вы точно хотите удалить аккаунт?"/>
          <AtomSettingsSubheading text="Ваши данные будут, а оценки больше не будут приходить"/>
        </div>
      </div>
    </div>
    <div class="buttons-container">
      <AtomUiSubmitButton id="deactivate" label="Удалить аккаунт" name="deactivate"/>
      <AtomUiRedirectButton href="/profile" label="Отмена"/>
    </div>
  </div>
</template>

<style scoped>
.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  flex-direction: column;
  gap: 20px;
  text-decoration: none;
  color: #11241C;
}
.deactivate {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
}

</style>