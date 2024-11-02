<script setup lang="ts">
import { toasts, removeToast } from '~/composables/toast.ts';
</script>


<template>
  <transition-group name="toast" tag="div" class="toast-container">
    <MoleculeNotificationToast
        v-for="(toast, index) in toasts"
        :key="toast.id"
        :type="toast.type"
        :remove="() => removeToast(toast.id)"
    >
      {{ toast.message }}
    </MoleculeNotificationToast>
  </transition-group>
</template>


<style scoped>
.toast-container {
  margin-top: 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10000;
  gap: 1px;
}

@keyframes flyIn {
  0% {
    transform: translate3d(0, -150px, 0) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}

@keyframes flyOut {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0px, 0) scale(0.8);
    opacity: 0;
  }
}

.toast-enter-active {
  animation: flyIn 0.5s cubic-bezier(0, 1.5, 0.5, 1) both;
}

.toast-leave-active {
  animation: flyOut 0.5s cubic-bezier(0, 0, 0.3, -1) both;
}
</style>