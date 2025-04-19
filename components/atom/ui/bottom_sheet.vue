<script lang="ts" setup>
import {onBeforeUnmount, ref, watch} from 'vue';

const props = defineProps({
  visible: Boolean,
  blocked: Boolean,
});
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();

const bottomSheetRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

const initialY = ref(0);
const translateY = ref(0);
const isDragging = ref(false);

function close() {
  if (!props.blocked) {
    emit('update:visible', false);
  }
}

function handleTouchStart(e: TouchEvent) {
  if (props.blocked || !e.touches.length) return;
  if (contentRef.value?.scrollTop! > 0) return;

  isDragging.value = true;
  initialY.value = e.touches[0].clientY;
  bottomSheetRef.value!.style.transition = 'none';
}

function handleTouchMove(e: TouchEvent) {
  if (!isDragging.value || props.blocked || !e.touches.length) return;
  const delta = e.touches[0].clientY - initialY.value;
  translateY.value = Math.max(0, delta);
  bottomSheetRef.value!.style.transform = `translateY(${translateY.value}px)`;
}

function handleTouchEnd() {
  if (props.blocked) return;
  isDragging.value = false;
  bottomSheetRef.value!.style.transition = 'transform 0.5s ease';

  if (translateY.value > 180) {
    requestAnimationFrame(close);
  } else {
    requestAnimationFrame(() => {
      bottomSheetRef.value!.style.transform = 'translateY(0)';
    });
  }
  translateY.value = 0;
}

watch(() => props.visible, visible => {
  document.body.style.overflow = visible ? 'hidden' : '';
  if (!visible && bottomSheetRef.value) {
    bottomSheetRef.value.style.transform = 'translateY(100%)';
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
</script>


<template>
  <transition name="bottom-sheet-fade">
    <div v-if="visible" class="bottom-sheet-overlay" @click="close">
      <transition name="bottom-sheet-slide">
        <div
            v-if="visible"
            ref="bottomSheetRef"
            class="bottom-sheet"
            @touchend="handleTouchEnd"
            @touchmove="handleTouchMove"
            @touchstart="handleTouchStart"
            @click.stop
        >
          <div class="indicator">
            <AtomIconsIndicator/>
          </div>

          <div ref="contentRef" class="bottom-sheet-content">
            <slot/>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>


<style scoped>
.bottom-sheet-content::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.bottom-sheet {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 6rem auto 0;
  padding: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: var(--theme-section-bg-color-white);
  transition: transform 0.3s ease;
  will-change: transform;
  max-height: calc(100vh - 4rem);
}

.bottom-sheet-content {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 35px 25px 40px;
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
