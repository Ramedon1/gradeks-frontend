<script lang="ts" setup>
const props = defineProps({
  new_grade: Number,
  old_grade: Number
});

const newGradeColor = computed(() => {
  switch (props.new_grade) {
    case 3:
      return '#FC0';
    case 2:
      return '#D16262';
    case 4:
      return '#FF9500';
    case 5:
      return '#116A28';
    default:
      return '#9D9D9D';
  }
});
</script>

<template>
  <p class="grade">
    <span v-if="props.old_grade !== undefined" :style="{ color: '#9D9D9D' }">
      {{ props.old_grade }} →
    </span>
    <span :style="{ color: newGradeColor }">
      {{ props.new_grade }}
    </span>
  </p>
</template>

<style scoped>
.grade {
  margin: 0;
  text-align: left;
  font-family: "date-grades", serif;
  font-size: 17px;
  line-height: 20px;
}
</style>