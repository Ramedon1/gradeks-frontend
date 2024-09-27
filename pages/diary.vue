<script lang="ts" setup>

</script>

<template>
  <div class="diary-content">
    <MoleculeDiaryTopBar :active_bell="true"/>
    <MoleculeDiaryQuarterGrades/>
  </div>

</template>

<style scoped>
.diary-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
</style>