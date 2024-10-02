<script setup lang="ts">
const props = defineProps<{
  notifications: {
    headline: string
    message: string
  }[]
}>()
</script>

<template>
  <div class="notification-container">
    <div v-for="notification in props.notifications">
      <AtomUiNotificationsNotificationBadge :headline="notification.headline" :message="notification.message"/>
    </div>
  </div>
</template>

<style scoped>
.notification-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}
</style>