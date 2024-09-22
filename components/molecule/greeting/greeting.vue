<script setup lang="ts">

</script>

<template>
  <div class="greeting-bar">
    <div class="top-bar">
      <AtomAvatar :size="40" url_img="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
      <AtomUiNotificationBell :active="true"/>
    </div>
    <AtomTextsHeaderText name="Алиса"/>
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