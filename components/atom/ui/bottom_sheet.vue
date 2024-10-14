<script lang="ts" setup>
import {ref, watch} from 'vue';

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();

const bottomSheetRef = ref<HTMLElement | null>(null);
const initialY = ref(0);
const currentY = ref(0);
const translateY = ref(0);
const isDragging = ref(false);
const isAnimating = ref(false);

function close() {
  emit('update:visible', false);
}

function handleTouchStart(event: TouchEvent) {
  if (event.touches.length > 0) {
    isDragging.value = true;
    isAnimating.value = false;
    initialY.value = event.touches[0].clientY;
    currentY.value = initialY.value;
    if (bottomSheetRef.value) {
      bottomSheetRef.value.style.transition = 'none';
    }
  }
}

function handleTouchMove(event: TouchEvent) {
  if (isDragging.value && event.touches.length > 0) {
    const touchY = event.touches[0].clientY;
    translateY.value = Math.max(0, touchY - initialY.value);
    if (bottomSheetRef.value) {
      bottomSheetRef.value.style.transform = `translateY(${translateY.value}px)`;
    }
  }
}

function handleTouchEnd() {
  isDragging.value = false;
  isAnimating.value = true;

  if (bottomSheetRef.value) {
    bottomSheetRef.value.style.transition = 'transform 0.5s ease';
  }

  if (translateY.value > 180) {
    requestAnimationFrame(() => {
      close();
    });
  } else {
    requestAnimationFrame(() => {
      if (bottomSheetRef.value) {
        bottomSheetRef.value.style.transform = 'translateY(0)';
      }
    });
  }

  translateY.value = 0;
}

watch(() => props.visible, (newVal) => {
  if (!newVal && bottomSheetRef.value) {
    bottomSheetRef.value.style.transform = 'translateY(100%)';
  }
});
</script>

<template>
  <transition name="bottom-sheet-fade">
    <div v-if="visible" class="bottom-sheet-overlay" @click="close">
      <transition name="bottom-sheet-slide">
        <div v-if="visible" ref="bottomSheetRef" class="bottom-sheet" @touchend="handleTouchEnd"
             @touchmove="handleTouchMove" @touchstart="handleTouchStart" @click.stop>
          <!-- Indicator -->
          <div class="indicator">
            <AtomIconsIndicator/>
          </div>
          <!-- Card Content -->
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.bottom-sheet {
  position: relative;
  display: flex;
  width: 100%;
  padding: 35px 25px 40px 25px;
  margin-top: 6rem;
  min-width: 200px;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  transition: transform 0.3s ease;
  will-change: transform;
}

.bottom-sheet-overlay {
  visibility: visible;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5em);
  display: flex;
  align-items: flex-end;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

.indicator {
  display: flex;
  justify-content: center;
}

.bottom-sheet-fade-enter-active,
.bottom-sheet-fade-leave-active {
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  & .bottom-sheet {
    transition: all 0.3s ease-in-out;
  }
}

.bottom-sheet-fade-enter-from,
.bottom-sheet-fade-leave-to {
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

  & .bottom-sheet {
    transform: translateY(100%);
  }
}

</style>
