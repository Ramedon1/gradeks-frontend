<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  notifications: {
    headline: string
    message: string
  }[]
}>()

const hasNotifications = computed(() => props.notifications.length > 0);
</script>

<template>
  <AtomUiNotificationsBell :active="hasNotifications">
    <MoleculeNotificationBottomContainer :notifications="props.notifications" header="Notifications"/>
  </AtomUiNotificationsBell>
</template>

<style scoped>

</style>