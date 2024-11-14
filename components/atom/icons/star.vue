<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#11241C',
  }
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M8.00004 1.83325L10.06 6.00659L14.6667 6.67992L11.3334 9.92659L12.12 14.5133L8.00004 12.3466L3.88004 14.5133L4.66671 9.92659L1.33337 6.67992L5.94004 6.00659L8.00004 1.83325Z" :stroke="props.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>