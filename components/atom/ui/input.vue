<script lang="ts" setup>
const props = defineProps({
  id: String,
  name: String,
  placeholder: String,
});

const pasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText();
    const inputElement = document.getElementById(props.id) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = text;
    }
  } catch (err) {

  }
};
</script>

<template>
  <div class="input-container">
    <input :id="props.id" :name="props.name" :placeholder="props.placeholder" class="input third-text"
        required type="text" maxlength="100"
    />
    <button @click="pasteFromClipboard" class="paste-button third-text">Вставить</button>
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
  border: 1px solid #D7E6DF;
  background: #F4F8F6;
  color: #333;
  overflow-x: scroll;
  white-space: nowrap;
}

.input::placeholder {
  color: #aaa;
}

.input:focus {
  outline: none;
}

.paste-button {
  position: absolute;
  right: 10px;
  height: 100%;
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