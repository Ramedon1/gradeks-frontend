<script setup lang="ts">
const bell = defineProps({
  active: Boolean,
});

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()
</script>

<template>
  <div class="bell-container">
    <div class="bell" @click="openBottomSheet">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path
            d="M10.2998 21.0955C10.4672 21.3999 10.7133 21.6538 11.0123 21.8307C11.3113 22.0075 11.6524 22.1008 11.9998 22.1008C12.3472 22.1008 12.6883 22.0075 12.9873 21.8307C13.2864 21.6538 13.5324 21.3999 13.6998 21.0955M6 8.09546C6 6.50416 6.63214 4.97804 7.75736 3.85282C8.88258 2.7276 10.4087 2.09546 12 2.09546C13.5913 2.09546 15.1174 2.7276 16.2426 3.85282C17.3679 4.97804 18 6.50416 18 8.09546C18 15.0955 21 17.0955 21 17.0955H3C3 17.0955 6 15.0955 6 8.09546Z"
            stroke="#11241C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <svg v-if="bell.active" class="dot" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"
         fill="none">
      <circle cx="5.5" cy="5.5" r="4.8" fill="#134F3B" stroke="#F4F8F6" stroke-width="1.4"/>
    </svg>
    <AtomUiBottomSheet :visible="isBottomSheetVisible" @update:visible="isBottomSheetVisible = $event">
      <slot></slot>
    </AtomUiBottomSheet>
  </div>
</template>

<style scoped>
.bell-container {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.bell {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.dot {
  position: absolute;
  top: 2px;
  right: 3px;
}
</style>