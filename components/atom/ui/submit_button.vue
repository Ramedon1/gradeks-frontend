<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
  label: String,
});
</script>

<template>
  <button
      class="submit-button"
      type="submit"
      :id="props.id"
      :name="props.name"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
.submit-button {
  width: 50%;
  height: 35px;
  border: none;
  color: rgba(255, 255, 255, 0.84);
  background-color: #1f2937;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #374151;
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 20px rgb(87, 113, 156);
}
</style>