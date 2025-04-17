<script lang="ts" setup>
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
  <NuxtImg :src="url"
           :style="{ width: props_avatar.size + 'px', height: props_avatar.size + 'px' }" alt="avatar"
           class="avatar"
           loading="lazy" preload
  />
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
