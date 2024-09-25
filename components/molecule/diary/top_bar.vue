<script lang="ts" setup>
const props = defineProps({
  text_header: String,
  active_bell: Boolean,

});
</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar">
      <AtomTextsHeaderText :text="props.text_header"/>
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