<script lang="ts" setup>
import {computed} from 'vue'
import {getGradeColor} from '@/assets/js/functions.js'

const props = defineProps<{
  type_grade?: 'new' | 'old'
  new_type_grade?: number
  old_type_grade?: number
  last_grade?: number
  prelast_grade?: number
}>()

const hexToRgba = (hex: string, alpha = 0.6): string => {
  let h = hex.replace('#', '')
  if (h.length === 8) h = h.slice(0, 6)
  if (h.length === 3) h = h.split('').map(c => c + c).join('')
  const num = parseInt(h, 16)
  const r = (num >> 16) & 0xff
  const g = (num >> 8) & 0xff
  const b = num & 0xff
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const newGradeColor = computed(() =>
    props.type_grade === 'old'
        ? '#9D9D9D'
        : getGradeColor(props.new_type_grade ?? 0)
)
const oldGradeColor = computed(() =>
    props.type_grade === 'new'
        ? '#9D9D9D'
        : getGradeColor(props.old_type_grade ?? 0)
)

const backgroundColor = computed(() => {
  const baseHex =
      props.type_grade === 'old'
          ? getGradeColor(props.old_type_grade ?? 0)
          : getGradeColor(props.new_type_grade ?? 0)
  return hexToRgba(baseHex, 0.2)
})
</script>

<template>
  <div
      :style="{ backgroundColor: backgroundColor }"
      class="grade-container"
  >
    <AtomQuarterGradesCourseArrow :last_grade="props.last_grade" :prelast_grade="props.prelast_grade"/>
    <div class="grades-row">
      <p :style="{ color: newGradeColor }" class="average-grade">
        {{ props.new_type_grade ?? '__' }}
      </p>
      <p class="average-grade separator">/</p>
      <p :style="{ color: oldGradeColor }" class="average-grade">
        {{ props.old_type_grade ?? '__' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.grade-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
}

.grades-row {
  display: flex;
  align-items: center;
}

.separator {
  color: #9D9D9D;
  margin: 0 4px;
}

.average-grade {
  text-align: left;
  font-family: "date-grades", serif;
  line-height: 20px;
  margin: 0;
}
</style>
