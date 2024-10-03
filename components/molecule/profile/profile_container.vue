<script lang="ts" setup>
const props = defineProps({
  name: String,
  url_img: String
});
</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <div class="profile-info">
        <AtomUiProfileAvatar :size="65" :url_img="props.url_img" />
        <AtomTextsProfileName :name="props.name"/>
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