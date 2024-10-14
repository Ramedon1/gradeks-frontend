<script lang="ts" setup>
import getGradeColor from '@/assets/js/functions.js';

const props = defineProps({
  type_grade: String,
  new_type_grade: Number,
  old_type_grade: Number,
});

const newGradeColor = computed(() =>
    props.type_grade === 'old' ? '#9D9D9D' : getGradeColor(props.new_type_grade ?? 0)
);

const oldGradeColor = computed(() =>
    props.type_grade === 'new' ? '#9D9D9D' : getGradeColor(props.old_type_grade ?? 0)
);
</script>

<template>
  <div class="grade-container">
    <p :style="{ color: newGradeColor }" class="average-grade">{{ props.new_type_grade ?? '__' }}</p>
    <p class="average-grade" style="color: #9D9D9D">/</p>
    <p :style="{ color: oldGradeColor }" class="average-grade">{{ props.old_type_grade ?? '__' }}</p>
  </div>
</template>

<style scoped>
.grade-container {
  display: flex;
  align-items: center;
}

.average-grade {
  text-align: left;
  font-family: "date-grades", serif;
  line-height: 20px;
}
</style>
