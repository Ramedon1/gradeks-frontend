<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
  placeholder: String,
});
</script>

<template>
  <textarea class="textarea" :id="props.id" :name="props.name" :placeholder="props.placeholder" required></textarea>
</template>

<style scoped>
.textarea {
  width: 50%;
  height: 100px;
  border: none;
  color: rgba(255, 255, 255, 0.84);
  background-color: #1f2937;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.textarea::placeholder {
  color: #6b7280;
}

.textarea:focus {
  outline: none;
  box-shadow: 0 0 20px rgb(87, 113, 156);
}
</style>