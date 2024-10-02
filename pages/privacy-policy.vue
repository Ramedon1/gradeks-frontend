<template>
  <div class="top-bar">
    <AtomUiButtonBack url_back="/profile"/>
    <AtomTextsHeaderText text="Политика конфиденциальности"/>
  </div>
  <ContentPrivacyPolicy/>
</template>


<style scoped>
.top-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>