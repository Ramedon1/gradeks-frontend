<script lang="ts" setup>
const props = defineProps({
  active_bell: Boolean,
});
</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar">
      <AtomTextsHeaderText text="Успеваемость"/>
      <AtomUiNotificationBell :active="props.active_bell"/>
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