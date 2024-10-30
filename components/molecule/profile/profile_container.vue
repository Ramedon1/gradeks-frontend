<script lang="ts" setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="65"/>
        <AtomTextsProfileName :name="props.name"/>
      </div>
      <MoleculeProfileEditProfile>
        <AtomIconsPen/>
      </MoleculeProfileEditProfile>
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
  justify-content: space-between;
  align-self: stretch;
}
</style>