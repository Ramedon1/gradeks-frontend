<template>
  <div class="profile-content">
    <OrganismProfileTopBar/>
    <MoleculeProfileContainer name="Алиса"
                              url_img="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
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