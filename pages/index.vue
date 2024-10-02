<script lang="ts" setup>
import {ref} from 'vue';

const notifications = ref([
  {headline: 'New Message', message: 'You have received a new message.'},
  {headline: 'Update Available', message: 'A new update is available for download.'}
]);


</script>

<template>
  <div class="main-content">
    <OrganismDashboardTopBar :avatar_size="40"
                             :notifications="notifications"
                             avatar_url="https://ss.sport-express.ru/userfiles/materials/202/2021794/full.jpg"/>
    <OrganismDashboardPlatesGrid/>
  </div>

</template>

<style scoped>
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>