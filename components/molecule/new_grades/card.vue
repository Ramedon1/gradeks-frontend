<script setup lang="ts">
const card_info = defineProps({
  date: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  new_grade: {
    type: Number,
    required: true
  },
  old_grade: {
    type: Number,
    required: false
  }
});

</script>

<template>
  <div class="card">
    <AtomCardDate class="date-grade" :date="card_info.date"/>
    <div class="spacer"></div>
    <div class="grade-change">
      <AtomCardSubjectGrade :subject="card_info.subject"/>
      <AtomCardGrade :old_grade="card_info.old_grade" :new_grade="card_info.new_grade" />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  width: 180px;
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
</style>