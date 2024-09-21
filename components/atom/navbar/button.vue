<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props_nav_button = defineProps({
  url_to: {
    type: String,
    required: true
  },
  text_button: {
    type: String,
    required: true
  }
});

const route = useRoute();
const isActive = computed(() => route.path === props_nav_button.url_to);
const textClass = computed(() => isActive.value ? 'primary-text' : 'third-text');
</script>

<template>
  <NuxtLink :to="props_nav_button.url_to" class="container-button">
    <div class="icon-button">
      <slot :isActive="isActive"></slot>
    </div>
    <div :class="textClass">{{ props_nav_button.text_button }}</div>
  </NuxtLink>
</template>

<style scoped>
.container-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
</style>