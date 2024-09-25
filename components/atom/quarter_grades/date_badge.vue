<script lang="ts" setup>
const date = defineProps({
  date: String,
});
</script>

<template>
  <div class="date-badge date-grades">
    {{ date.date }}
  </div>
</template>

<style scoped>
.date-badge {
  display: flex;
  padding: 6px 8px;
  font-size: 14px;
  line-height: 16px;
  font-family: "date-grades", serif;
  align-items: center;
  border-radius: 8px;
  background: #14795A;
  white-space: nowrap;
}

@media (max-width: 420px) {
  .date-badge {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>