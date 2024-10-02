<script lang="ts" setup>

</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="65" url_img="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg" />
        <AtomTextsProfileName name="Алиса"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  padding: 17px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: #EDF1EF;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>