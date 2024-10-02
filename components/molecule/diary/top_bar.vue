<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps({
  active_bell: Boolean,
});


const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);
</script>

<template>
  <div class="top-bar-container">
    <div class="top-bar">
      <AtomTextsHeaderText text="Успеваемость"/>
      <MoleculeNotificationBellDropdown :notifications="notifications"/>
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