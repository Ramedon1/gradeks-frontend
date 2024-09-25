<script lang="ts" setup>

const props = defineProps({
  grades: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<template>
  <div class="grade-list">
    <AtomQuarterGradesGradeBadge
        v-for="(grade, index) in props.grades"
        :key="index"
        :coff="grade.coff"
        :grade="grade.grade"
        :date="grade.date"
    />
  </div>
</template>

<style scoped>

.grade-list {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  height: 60px;
  gap: 8px;
  align-self: stretch;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.grade-list::-webkit-scrollbar {
  display: none;
}


</style>