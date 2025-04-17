<script lang="ts" setup>
const props = defineProps({
  prelast_grade: Number,
  last_grade: Number,
})

</script>

<template>
  <div v-if="props.last_grade > props.prelast_grade" class="arrow-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 408 308" fill="none">
      <path
          d="M398.073 269.349C346 321.422 60.4943 320 9.84359 269.349C-40.8071 218.698 137.099 0 208.299 0C279.5 0 450.146 217.276 398.073 269.349Z"
          fill="#10C72B"
      />
    </svg>
  </div>

  <div v-else-if="props.last_grade < props.prelast_grade" class="arrow-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 407 308" fill="none">
      <path
          d="M397.171 38.5235C345.098 -13.5496 59.5922 -12.1277 8.94149 38.5235C-41.7092 89.1747 136.197 307.872 207.397 307.872C278.598 307.872 449.244 90.5966 397.171 38.5235Z"
          fill="#D52B2E"
      />
    </svg>
  </div>

</template>

<style scoped>
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
