<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
  label: String,
});
</script>

<template>
  <button
      class="submit-button third-text"
      type="submit"
      :id="props.id"
      :name="props.name"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
.submit-button {
  width: 55%;
  height: 55px;
  padding: 8px 12px;
  border: none;
  color: rgba(255, 255, 255, 0.84);
  background-color: #134F3B;
  border-radius: 12px;
  font-size: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #155942;
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 20px rgb(30, 128, 94);
}
</style>