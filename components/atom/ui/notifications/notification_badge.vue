<script setup lang="ts">
const props = defineProps<{
  headline: string
  message: string
}>()
</script>

<template>
  <div class="notification-badge-container">
    <AtomUiNotificationsHeadline :text="props.headline"/>
    <AtomUiNotificationsMessage :text="props.message"/>
  </div>
</template>

<style scoped>
.notification-badge-container {
  display: flex;
  border-radius: 10px;
  background: #EDF1EF;
  padding: 16px 23px;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 8px;
  align-self: stretch;
}
</style>