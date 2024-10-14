<script lang="ts" setup>
import {computed} from 'vue';
import {useTooltip} from "~/composables/tooltip";

const {
  activeId,
  toggle,
} = useTooltip();

const props = defineProps({
  text: String,
  id: String,
});

const showTooltip = computed(() => activeId.value === props.id);
</script>

<template>
  <div class="tooltip-container" @touchstart="toggle(props.id)">
    <slot></slot>
    <transition name="show-tooltip">
      <div v-if="showTooltip" class="tooltip third-text">{{ props.text }}</div>
    </transition>
  </div>
</template>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1d2e25;
  color: #fff;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
  z-index: 10;
  opacity: 0.9;
  font-size: 9px;
  min-width: 300px;
  white-space: normal;
  word-wrap: break-word;
}

.show-tooltip-enter-active,
.show-tooltip-leave-active {
  transition: all 0.3s ease;
}

.show-tooltip-enter-from,
.show-tooltip-leave-to {
  opacity: 0;
}

@media (max-width: 386px) {
  .tooltip {
    font-size: 8px;
    min-width: 180px;
  }
}
</style>
