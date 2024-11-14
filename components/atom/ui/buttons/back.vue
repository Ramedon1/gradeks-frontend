<script lang="ts" setup>
import {useWebAppTheme} from "vue-tg";

const props = defineProps({
  url_back: String,
});

const {themeParams} = useWebAppTheme();

</script>

<template>
  <NuxtLink :to="props.url_back">
    <AtomIconsArrowBack :color="themeParams.button_color"/>
  </NuxtLink>
</template>

<style scoped>

</style>