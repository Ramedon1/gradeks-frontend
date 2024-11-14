<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  isActive: Boolean,
  color: String,
});

const arrowPath = computed(() => (props.isActive ? 'M6 10.5L9 7.5L12 10.5' : 'M6 7.5L9 10.5L12 7.5'));
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" class="chevron-arrow">
    <g clip-path="url(#clip0_27_8)">
      <path :d="arrowPath" :stroke="props.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-path"/>
      <path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" :stroke="props.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_27_8">
        <rect width="18" height="18" :fill="props.color"/>
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.chevron-path {
  transition: d 0.3s ease-in-out;
}

.chevron-arrow {
  transition: transform 0.3s ease-in-out;
}
</style>
