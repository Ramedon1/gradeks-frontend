<script lang="ts" setup>
import {computed} from 'vue';

const props = defineProps({
  quarters: Array
});

const filteredQuarters = computed(() => {
  return props.quarters.filter(quarter => quarter.subjects.length > 0);
});
</script>

<template>
  <div class="quarter-grades">
    <template v-if="filteredQuarters.length > 0">
      <MoleculeDiaryAccordion
          v-for="(quarter, index) in filteredQuarters"
          :key="index"
          :quarter_name="quarter.quarter_name"
          :quarter_date="quarter.quarter_date"
          :type_grade="quarter.type_grade"
          :subjects="quarter.subjects"
      />
    </template>
    <div v-else class="nothing-grades">
      <AtomUiNothingGrades/>
    </div>
  </div>
</template>

<style scoped>
.quarter-grades {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}
</style>
