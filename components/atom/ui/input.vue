<script lang="ts" setup>
import {ref} from 'vue';
import {addToast} from "~/composables/toast";
import {useWebAppClipboard} from 'vue-tg';

const {readTextFromClipboard} = useWebAppClipboard()

const props = defineProps({
  id: String,
  name: String,
  placeholder: String,
});

const inputValue = ref('');
globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};

async function pasteFromClipboard() {
  try {
    const text = readTextFromClipboard;
    inputValue.value = text;
  } catch (err) {
    showToast('Устройство не поддерживает вставку из буфера по кнопке', 'error');
  }
}
</script>

<template>
  <div class="input-container">
    <input
        :id="props.id"
        v-model="inputValue"
        :name="props.name"
        :placeholder="props.placeholder"
        class="input third-text"
        maxlength="100"
        required
        type="text"
    />
    <button class="paste-button third-text" @click="pasteFromClipboard">Вставить</button>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.input {
  width: 100%;
  height: 50px;
  padding: 6px 90px 6px 12px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid var(--theme-section-separator-color-mint);
  background: var(--theme-secondary-bg-color-white);
  color: var(--theme-text-color-gray);
  overflow-x: scroll;
  white-space: nowrap;
}

.input::placeholder {
  opacity: 0.5;
  color: var(--theme-hint-color-gray);
}

.input:focus {
  outline: none;
}

.paste-button {
  position: absolute;
  right: 10px;
  height: 100%;
  user-select: none;
  padding: 0 12px;
  margin: 0;
  border-radius: 8px;
  font-size: 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
