<script lang="ts" setup>

import {adjustColorBrightness} from "assets/js/functions";
import {ref} from 'vue';

const props = defineProps({
  id: String,
  name: String,
  text: String,
});

const rootStyles = getComputedStyle(document.documentElement);
const buttonColor = rootStyles.getPropertyValue('--theme-button-color').trim();
const darkerButtonColor = ref(adjustColorBrightness(buttonColor, +2));


</script>

<template>
  <button :id="props.id" :name="props.name"
          class="submit-button third-text" type="submit">
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
    background-color: v-bind(darkerButtonColor);
  }
}

@media (hover: none) {
  .submit-button:active {
    background-color: v-bind(darkerButtonColor);
    transition: background-color 0.1s ease;
    outline: none;
  }
}
</style>