<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  notifications: {
    headline: string
    message: string
  }[]
}>()

const hasNotifications = computed(() => notifications.value.length > 0);
</script>

<template>
  <AtomUiNotificationsBell :active="hasNotifications">
    <MoleculeNotificationBottomContainer :notifications="notifications" header="Notifications"/>
  </AtomUiNotificationsBell>
</template>

<style scoped>

</style>