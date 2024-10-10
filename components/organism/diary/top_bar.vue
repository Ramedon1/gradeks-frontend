<script lang="ts" setup>
const props = defineProps({
  notifications: {
    headline: String,
    message: String
  }
});
</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar">
      <AtomTextsHeaderText text="Успеваемость"/>
      <!-- <OrganismNotificationBellBottomSheet :notifications="notifications" header="Оповещения"/> -->
    </div>
    <AtomTextsDiaryPraiseText/>
  </div>
</template>

<style scoped>
.top-bar-container {
  gap: 15px;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
}
</style>