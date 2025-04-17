<script lang="ts" setup>

import {getIconColor} from "assets/js/functions";
import {addToast} from '@/composables/toast';


globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};


const link = computed(() => 't.me/gradeksbot?startapp=r_' + props.user_id);

function copyMe() {
  navigator.clipboard.writeText("https://" + link.value);
  showToast('Ссылка скопирована', 'success');
}
</script>

<template>
  <div class="share-link">
    <div class="badges-container">
      <AtomIconsShare :color="getIconColor('--theme-text-color-green')" @click="copyMe()"/>
    </div>
  </div>
</template>

<style scoped>

.badges-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: right;
  cursor: pointer;
}


.share-link {
  width: 100%;
}
</style>