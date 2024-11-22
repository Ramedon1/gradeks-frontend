<script setup lang="ts">
import {useAuthStore} from "~/state/auth";

const props_avatar = defineProps({
  size: {
    type: Number,
    default: 40
  }
});

const {userInfo} = storeToRefs(useAuthStore());

const url = computed(() => userInfo.value?.photo_url);
</script>

<template>
  <img @click="window.Telegram.WebApp.addToHomeScreen();" :src="url"
       alt="avatar" class="avatar"
       :style="{ width: props_avatar.size + 'px', height: props_avatar.size + 'px' }">
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
