<script lang="ts" setup>
import {themeParams} from "@telegram-apps/sdk";

const props = defineProps({
  url_back: String,
});


</script>

<template>
  <NuxtLink :to="props.url_back">
    <AtomIconsArrowBack :color="themeParams.buttonColor"/>
  </NuxtLink>
</template>

<style scoped>

</style>