<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  position: {
    type: Number,
    required: true,
    default: 0
  }
});
</script>

<template>
  <div class="active-dot" :style="{ left: `${props.position}px` }"></div>
</template>

<style scoped>
.active-dot {
  position: absolute;
  bottom: -10px;
  width: 7px;
  height: 7px;
  background-color: #134f3b;
  border-radius: 50%;
  transition: left 0.5s ease;
  pointer-events: none;
}
</style>
