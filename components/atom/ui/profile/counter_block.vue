<script setup lang="ts">

</script>

<template>
  <div class="counter-block">
    <slot/>
  </div>
</template>

<style scoped>
.counter-block {
  display: flex;
  padding: 17px 16px;
  width: calc(100% - 32px);
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--theme-secondary-bg-color-white);
}

</style>