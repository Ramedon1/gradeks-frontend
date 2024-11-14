<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
  text: String,
});
</script>

<template>
  <button class="submit-button third-text" type="submit"
          :id="props.id" :name="props.name">
    {{ props.text }}
  </button>
</template>

<style scoped>
.submit-button {
  width: 100%;
  height: 55px;
  padding: 8px 12px;
  border: none;
  color: var(--theme-button-text-color-white);
  background-color: var(--theme-button-color);
  border-radius: 12px;
  font-size: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

@media (max-width: 381px) {
  .submit-button {
    font-size: 17px;
  }
}

@media (hover: hover) {
  .submit-button:hover {
    background-color: var(--theme-accent-text-color-green);
  }
}

@media (hover: none) {
  .submit-button:active {
    background-color: var(--theme-accent-text-color-green);
    transition: background-color 0.1s ease;
    outline: none;
  }
}
</style>