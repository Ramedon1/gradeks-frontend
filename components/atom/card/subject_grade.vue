<script setup lang="ts">
const props = defineProps({
  subject: {
    type: String,
    required: true
  }
});
</script>

<template>
  <p class="subject-grade subject"> {{ props.subject }} </p>
</template>

<style scoped>
.subject {
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;

}
</style>