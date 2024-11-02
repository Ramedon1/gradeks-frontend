<script setup lang="ts">
const props = defineProps({
  subject: String,
});
</script>

<template>
  <p class="subject-grade subject"> {{ props.subject }} </p>
</template>

<style scoped>
@media (max-width: 374px) {
  .subject-grade {
    font-size: 16px;
  }
}

.subject {
  margin: 0 0 2%;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  text-align: left;
}
</style>