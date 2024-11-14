<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: "#11241C",
  }
});
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M6.86654 14.4999C6.97812 14.7029 7.14217 14.8721 7.34153 14.99C7.54089 15.1079 7.76826 15.1701 7.99987 15.1701C8.23148 15.1701 8.45885 15.1079 8.65821 14.99C8.85757 14.8721 9.02161 14.7029 9.1332 14.4999M4 5.83325C4 4.77239 4.42143 3.75497 5.17157 3.00482C5.92172 2.25468 6.93913 1.83325 8 1.83325C9.06087 1.83325 10.0783 2.25468 10.8284 3.00482C11.5786 3.75497 12 4.77239 12 5.83325C12 10.4999 14 11.8333 14 11.8333H2C2 11.8333 4 10.4999 4 5.83325Z" :stroke="props.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>