<script lang="ts" setup>

</script>

<template>
  <div class="profile-content">
    <MoleculeProfileTopBar/>
    <MoleculeProfileContainer/>
    <div class="settings-container">
      <MoleculeSettingsList/>
      <MoleculeSettingsAdvancedSettings/>
    </div>
    <AtomUiAuthor/>
  </div>
</template>

<style scoped>
.profile-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

</style>