<script lang="ts" setup>
const props = defineProps({
  header: String,
});
</script>

<template>
  <div class="container-header">
    <p class="primary-text header-text"> {{ props.header }}</p>
  </div>
</template>

<style scoped>

.container-header {
  display: flex;
  height: 36px;
  align-items: center;
  margin-bottom: 20px;
  color: black;
  justify-content: center;
  align-self: stretch;
}


.header-text {
  margin: 0;
  text-align: center;
  font-size: 24px;
}

</style>