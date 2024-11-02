<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie'

import approveJSON from '~/public/animations/approve.json'
import failedJSON from '~/public/animations/failed.json'
import infoJSON from '~/public/animations/info.json'

defineProps<{
  type: 'success' | 'error' | 'info';
  remove: () => void;
}>();

const animationData = {
  success: {
    data: approveJSON,
    height: 25,
    width: 25
  },
  error: {
    data: failedJSON,
    height: 40,
    width: 40
  },
  info: {
    data: infoJSON,
    height: 43,
    width: 43
  }
};
</script>

<template>
  <div class="toast" @click="remove">
    <Vue3Lottie
        v-if="animationData[type]"
        class="lottie"
        :animation-data="animationData[type].data"
        :height="animationData[type].height"
        :width="animationData[type].width"
        :loop="false"
    />
    <slot/>
  </div>
</template>

<style scoped>
.lottie {
  margin: 0 20px 0 0;
}

.toast {
  display: flex;
  padding: 10px 20px;
  margin: 2px 0;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  background-color: #11241c;
  cursor: pointer;
  z-index: 1002;
  width: 250px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>