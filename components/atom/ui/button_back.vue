<script lang="ts" setup>
const props = defineProps({
  url_back: String,
});
</script>

<template>
  <NuxtLink :to="props.url_back">
    <AtomIconsArrowBack/>
  </NuxtLink>
</template>

<style scoped>

</style>