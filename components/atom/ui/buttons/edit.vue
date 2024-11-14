<script lang="ts" setup>
import {getIconColor} from "assets/js/functions";

const props = defineProps({
  text: String
});

</script>

<template>
  <div class="edit-button-container">
    <AtomIconsPen :color="getIconColor('--theme-button-text-color-black') ?? '#EDF1EF'"/>
    <p class="primary-text edit-text">{{ props.text ?? 'Изменить' }}</p>
  </div>
</template>

<style scoped>
.edit-text {
  font-size: 16px;
  color: var(--theme-button-text-color-black);
}

.edit-button-container {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 10px;
  background: var(--theme-button-color);
}
</style>