<script lang="ts" setup>

import {getIconColor} from "assets/js/functions";
import {addToast} from '@/composables/toast';

const props = defineProps({
  friendsNum: Number,
  user_id: Number,
});

globalThis.addToast = addToast;

const showToast = (text: string, type: 'success' | 'error' | 'info') => {
  globalThis.addToast(text, type);
};


const link = computed(() => 't.me/gradeksbot?start=r_' + props.user_id);

function copyMe() {
  navigator.clipboard.writeText("https://" + link.value);
  showToast('Ссылка скопирована', 'success');
}
</script>

<template>
  <div class="share-link">
    <p class="top-text">Твоя пригласительная ссылка</p>
    <div class="badges-container">
      <AtomSettingsBadge :text="link" @click="copyMe()">
        <AtomIconsLink :color="getIconColor('--theme-secondary-bg-color-white')"/>
      </AtomSettingsBadge>
      <AtomSettingsBadge text="Копировать ссылку" @click="copyMe()">
        <AtomIconsShare :color="getIconColor('--theme-secondary-bg-color-white')"/>
      </AtomSettingsBadge>
    </div>
    <p class="counter-text">Ты пригласил/a {{ props.friendsNum }} друзей</p>
  </div>
</template>

<style scoped>
.counter-text {
  font-size: 12px;
  margin: 15px 0 0;
  font-family: "PFEncoreSansPro-Regular", serif;
  color: var(--theme-text-color-green);
}

.badges-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.top-text {
  margin: 0;
  font-size: 15px;
  font-family: "PFEncoreSansPro-Medium", serif;
  color: var(--theme-text-color-green);
  padding-bottom: 10px;
}

.share-link {
  width: 100%;
}
</style>