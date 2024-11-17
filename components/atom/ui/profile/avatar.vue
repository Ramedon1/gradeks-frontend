<script setup lang="ts">
import { useAuthStore } from "~/state/auth";
const { userInfo } = storeToRefs(useAuthStore());

const props_avatar = defineProps({
  size: {
    type: Number,
    default: 40
  }
});

const avatarKey = `avatar_${userInfo.value.id}`;
let cachedAvatar = localStorage.getItem(avatarKey);
let timestamp = Date.now();
let url = `https://api.gradeks.xyz/user/avatar/${userInfo.value.id}`;

if (!cachedAvatar || !cachedAvatar.includes(userInfo.value.id)) {
  cachedAvatar = `${url}?t=${timestamp}`;
  localStorage.setItem(avatarKey, cachedAvatar);
}

</script>

<template>
  <img :src="cachedAvatar"
       alt="avatar" class="avatar"
       :style="{ width: props_avatar.size + 'px', height: props_avatar.size + 'px' }">
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
