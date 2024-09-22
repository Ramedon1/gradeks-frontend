<script setup lang="ts">
const props = defineProps({
  date: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="date">
    <p class="date-text">{{ props.date }}</p>
  </div>
</template>

<style scoped>
.date-text {
  color: rgba(17, 36, 28, 0.65);
  text-align: center;
  font-family: "date-grades", serif;
  font-size: 14px;
  font-style: normal;
  margin: 0;
  font-weight: 900;
  line-height: 20px;
}

.date {
  display: flex;
  padding: 3px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: #D7E6DF;
}
</style>