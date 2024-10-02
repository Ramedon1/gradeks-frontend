<script setup lang="ts">
const props = defineProps<{
  notifications: {
    headline: string
    message: string
  }[],
  header: string
}>()
</script>


<template>
  <AtomTextsHeaderBottomSheet :header="props.header"/>
  <MoleculeNotificationList :notifications="notifications" />
</template>

<style scoped>

</style>