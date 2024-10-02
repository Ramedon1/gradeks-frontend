<script setup lang="ts">
const card_info = defineProps({
  date: String,
  subject: String,
  new_grade: Number,
  old_grade: Number,
});

</script>

<template>
  <div class="plate">
    <AtomPlateDate class="date-grade" :date="card_info.date"/>
    <div class="spacer"></div>
    <div class="grade-change">
      <AtomPlateSubjectGrade :subject="card_info.subject"/>
      <AtomGradesGrade :old_grade="card_info.old_grade" :new_grade="card_info.new_grade" />
    </div>
  </div>
</template>

<style scoped>
.plate {
  display: flex;
  width: 150px;
  background-color: #EDF1EF;
  border-radius: 10px;
  height: 126.333px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

}

.spacer {
  flex-grow: 1;
}

@media (max-width: 374px) {
  .plate {
    width: 100px;
    height: 196.333px;
  }
  .grade-change {
    width: 80%;
  }
}
</style>