<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "#11241C"
  }
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 29 29" fill="none">
    <path d="M23.8333 4H5.16667C4.52233 4 4 4.52233 4 5.16667V11C4 11.6443 4.52233 12.1667 5.16667 12.1667H23.8333C24.4777 12.1667 25 11.6443 25 11V5.16667C25 4.52233 24.4777 4 23.8333 4Z" :stroke="props.color" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3333 16.8333H5.16667C4.52233 16.8333 4 17.3557 4 18V23.8333C4 24.4777 4.52233 25 5.16667 25H13.3333C13.9777 25 14.5 24.4777 14.5 23.8333V18C14.5 17.3557 13.9777 16.8333 13.3333 16.8333Z" :stroke="props.color" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.8333 16.8333H20.3333C19.689 16.8333 19.1667 17.3557 19.1667 18V23.8333C19.1667 24.4777 19.689 25 20.3333 25H23.8333C24.4777 25 25 24.4777 25 23.8333V18C25 17.3557 24.4777 16.8333 23.8333 16.8333Z" :stroke="props.color" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
