<template>
  <div class="content">
    <div class="top-bar">
      <AtomUiButtonsBack url_back="/profile"/>
      <AtomTextsHeaderText text="Политика конфиденциальности"/>
    </div>
    <ContentPrivacyPolicy/>
  </div>

</template>


<style scoped>
.top-bar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>