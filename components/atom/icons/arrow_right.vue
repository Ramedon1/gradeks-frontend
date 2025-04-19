<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#11241C',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '17px',
  },
});

</script>


<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 16 17" fill="none">
    <path d="M6 12.5L10 8.5L6 4.5" :stroke="props.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>