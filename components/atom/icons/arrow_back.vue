<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#11241C',
  },
});

</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 19L5 12M5 12L12 5M5 12H19" :stroke="props.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>