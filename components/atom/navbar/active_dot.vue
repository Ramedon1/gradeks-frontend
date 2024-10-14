<script setup>
const props = defineProps({
  position: Number,
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
