<script setup lang="ts">
import { useAuthStore } from '~/state/auth';

const { userInfo } = storeToRefs(useAuthStore());

</script>

<template>
  <div class="profile-content">
    <OrganismProfileTopBar/>
    <MoleculeProfileContainer :name="userInfo?.first_name"/>
    <div class="settings-container">
      <MoleculeSettingsList/>
      <MoleculeSettingsAdvancedSettings/>
    </div>
    <AtomUiProfileAuthor/>
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