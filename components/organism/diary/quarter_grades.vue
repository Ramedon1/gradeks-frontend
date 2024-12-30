<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  quarters: Array
});

const filteredQuarters = computed(() => {
  return props.quarters.filter((quarter) => quarter.subjects && quarter.subjects.length > 0);
});
</script>

<template>
  <div class="quarter-grades">
    <template v-if="filteredQuarters.length > 0">
      <MoleculeDiaryAccordion
          v-for="(quarter, quarterIndex) in filteredQuarters"
          :key="quarterIndex"
          :name="quarter.quarter_name"
          :date="quarter.quarter_date"
      >
        <OrganismDiaryPanel
            v-for="(subject, subjectIndex) in quarter.subjects"
            :key="subjectIndex"
            :grades="subject.grades"
            :new_type_grade="subject.new_type_grade"
            :old_type_grade="subject.old_type_grade"
            :subject_name="subject.subject_name"
            :type_grade="quarter.type_grade"
        />
      </MoleculeDiaryAccordion>
    </template>
    <div v-else class="nothing-grades">
      <AtomUiNothingGrades />
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
