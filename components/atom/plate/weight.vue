<script setup lang="ts">
const props = defineProps({
  weight: Number,
});

</script>

<template>
  <div class="weight-container">
    <p class="date-text">{{ props.weight}}</p>
  </div>
</template>

<style scoped>
.weight-container {
  display: flex;
  padding: 3px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: #d7e0e6;
}
.date-text {
  color: rgba(17, 36, 28, 0.65);
  text-align: center;
  font-family: "date-grades", serif;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
}

</style>