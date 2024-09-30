<script setup lang="ts">
const props = defineProps({
  id: String,
  name: String,
  label: String,
  href: String,
});
</script>

<template>
  <a
      class="submit-button third-text"
      :id="props.id"
      :href="props.href"
  >
    {{ props.label }}
  </a>
</template>

<style scoped>
.submit-button {
  width: 45%;
  height: 45px;
  border: 3px solid rgba(19, 79, 59, 0.4);
  color: rgba(89, 87, 87, 0.84);

  border-radius: 12px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}


</style>