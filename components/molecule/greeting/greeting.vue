<script setup lang="ts">

</script>

<template>
  <div class="greeting-bar">
    <div class="top-bar">
      <AtomUiAvatar :size="40" url_img="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
      <AtomUiNotificationsBell :active="true">
        <AtomUiNotificationsNotificationBadge text="У вас новые оценки"/>
      </AtomUiNotificationsBell>
    </div>
    <AtomTextsGreetingText name="Алиса"/>
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