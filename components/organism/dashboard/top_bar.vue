<script setup lang="ts">
const props = defineProps({
  avatar_size: Number,
  avatar_url: String,
  notifications: {
    headline: String,
    message: String
  }
});

</script>

<template>
  <div class="greeting-bar">
    <div class="top-bar">
      <AtomUiProfileAvatar :size="props.avatar_size" :url_img="props.avatar_url"/>
      <!-- <OrganismNotificationBellBottomSheet :notifications="notifications" header="Оповещения"/> -->
     </div>
     <AtomTextsWelcome name="Алиса"/>
   </div>
 </template>

 <style scoped>
 .greeting-bar {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 24px;
   align-self: stretch;
   width: 100%;
 }

 .top-bar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   align-self: stretch;
   width: 100%;
 }
 </style>
