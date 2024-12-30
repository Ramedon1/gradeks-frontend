<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  final_grades: Array
});

const filteredGrades = computed(() => {
  return props.final_grades?.filter((grade) => grade.info_grades && grade.info_grades.length > 0) || [];
});


</script>

<template>
  <div class="final-grades-container">
    <template v-if="filteredGrades.length > 0">
      <MoleculeDiaryAccordion
          v-for="(quarter, quarterIndex) in filteredGrades"
          :key="quarterIndex"
          :name="quarter.quarter_name"
      >
        <MoleculeFinalGradesContainer
            v-for="(subject, subjectIndex) in quarter.info_grades"
            :key="subjectIndex"
            :grade="subject.grade"
            :subject="subject.subject"/>
      </MoleculeDiaryAccordion>
    </template>
    <div v-else class="nothing-grades">
      <AtomUiNothingGrades/>
    </div>
  </div>
</template>

<style scoped>

</style>
