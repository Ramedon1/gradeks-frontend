<script lang="ts" setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="profile-name">
    <p class="primary-text name"> {{ props.name }}</p>
  </div>
</template>

<style scoped>
.name {
  margin: 0;
  text-align: center;
  font-size: 24px;
}
</style>