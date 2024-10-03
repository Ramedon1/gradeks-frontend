<script lang="ts" setup>
const props = defineProps({
  quarters: Array
});
</script>

<template>
  <div class="quarter-grades">
    <MoleculeDiaryAccordion
        v-for="(quarter, index) in props.quarters"
        :key="index"
        :quarter_date="quarter.quarterDate"
        :quarter_name="quarter.quarterName"
        :subjects="quarter.subjects"
    />
  </div>
</template>

<style scoped>
.quarter-grades {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}
</style>