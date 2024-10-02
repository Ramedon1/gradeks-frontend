<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps<{
  notifications: {
    headline: string
    message: string
  }[]
  header: string
}>()

const hasNotifications = computed(() => props.notifications.length > 0);
</script>

<template>

  <AtomUiNotificationsBell :active="hasNotifications">
    <AtomTextsHeaderBottomSheet :header="props.header"/>
    <MoleculeNotificationContainer :notifications="props.notifications"/>
  </AtomUiNotificationsBell>
</template>

<style scoped>
</style>