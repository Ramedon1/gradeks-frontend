<template>
  <div class="content">
    <div class="top-bar">
      <AtomUiButtonBack url_back="/profile"/>
      <AtomTextsHeaderText text="Правила использования"/>
    </div>
    <ContentRules/>
  </div>
</template>

<style scoped>

.top-bar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>