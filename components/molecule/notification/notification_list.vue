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
    <div class="con" v-for="notification in props.notifications">
      <AtomUiNotificationsNotificationBadge :headline="notification.headline" :message="notification.message"/>
    </div>
  </div>
</template>

<style scoped>
.con {
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