<template>
  <div class="button-cancel-container">
    <p class="primary-text cancel-text">Отмена</p>
  </div>
</template>

<style scoped>
.cancel-text {
  font-size: 16px;
  color: var(--theme-button-text-color-black);
}

.button-cancel-container {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 10px;
  background: var(--theme-secondary-bg-color-white);
  filter: brightness(2.5);
  flex: 1 0 0;
  align-self: stretch;
}
</style>