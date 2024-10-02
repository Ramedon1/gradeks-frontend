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
    <div v-for="notification in props.notifications" class="container">
      <AtomUiNotificationsNotificationBadge :headline="notification.headline" :message="notification.message"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.notification-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  align-self: center;
}
</style>