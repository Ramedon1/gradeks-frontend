<script lang="ts" setup>
import {getGradeColor} from "assets/js/functions";

const props = defineProps({
  new_grade: Number,
  old_grade: Number
});

</script>

<template>
  <p class="grade">
    <span v-if="props.old_grade !== undefined" :style="{ color: '#9D9D9D' }">
      {{ props.old_grade }} →
    </span>
    <span :style="{ color: getGradeColor(props.new_grade) }">
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