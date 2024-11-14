<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#11241C'
  },
});

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M11.3333 2.5001C11.5031 2.29946 11.7131 2.13614 11.95 2.02055C12.1869 1.90497 12.4454 1.83966 12.7091 1.82878C12.9728 1.81789 13.2359 1.86169 13.4816 1.95736C13.7273 2.05303 13.9502 2.19848 14.1362 2.38445C14.3221 2.57041 14.4671 2.79281 14.5617 3.03746C14.6563 3.28211 14.6985 3.54366 14.6857 3.80542C14.6729 4.06718 14.6053 4.32342 14.4872 4.55781C14.3692 4.7922 14.2032 4.99959 14 5.16677L4.99998 14.1668L1.33331 15.1668L2.33331 11.5001L11.3333 2.5001Z" :stroke="props.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
