<script lang="ts" setup>

</script>

<template>
  <div class="top-bar">
    <AtomUiButtonBack url_back="/profile"/>
    <AtomTextsHeaderText text="Правила использования"/>
  </div>
  <ContentRules/>
</template>

<style scoped>

.top-bar {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>