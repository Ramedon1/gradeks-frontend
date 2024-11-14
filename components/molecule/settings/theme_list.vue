<script lang="ts" setup>
import { ref } from 'vue';
import {applyTheme} from "assets/js/functions";
import {addToast} from "~/composables/toast";
import {useWebAppTheme} from "vue-tg";
const selectedTheme = ref<string | null>(getSettings('theme'));
const { themeParams } = useWebAppTheme();

globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};


const getStyle = (theme: string) => {
  return selectedTheme.value === theme
      ? { transform: 'scale(1.2)', transition: 'transform 0.3s ease' }
      : { transform: 'scale(1)', transition: 'transform 0.3s ease' };
};

const selectTheme = (theme: string) => {
  if (selectedTheme.value !== theme) {
    selectedTheme.value = theme;
  }
};

watch(() => selectedTheme.value, (newVal) => {
  if (newVal === 'telegram') {
    if (themeParams.value.hint_color) {
      applyTheme(`${newVal}`);
    } else {
      showToast('На твоем устройстве не поддерживается адаптивная тема', 'error');
    }
  } else {
    applyTheme(`${newVal}`);
  }
});
</script>

<template>
  <div class="theme-list-container">
    <AtomUiThemeBlock
        @click="selectTheme('white')"
        :style="getStyle('white')"
        name="Белая"
        theme="white"
    />
    <AtomUiThemeBlock
        @click="selectTheme('black')"
        :style="getStyle('black')"
        name="Тёмная"
        theme="black"
    />
    <AtomUiThemeBlock
        @click="selectTheme('telegram')"
        :style="themeParams.hint_color && getStyle('telegram')"
        name="Адаптивная"
        theme="telegram"
    />
  </div>
</template>

<style scoped>
.theme-list-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  margin-bottom: 5px;
}

AtomUiThemeBlock {
  cursor: pointer;
}
</style>
