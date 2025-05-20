<script lang="ts" setup>
import {computed} from 'vue'

interface GradeEntry {
  coff: number
  grade: number
  date: string
}

interface Suggestion {
  grade: number
  count: number
}

const props = defineProps<{
  current: number
  target: number
  grades: GradeEntry[]
}>()

const flatGrades = computed<number[]>(() =>
    props.grades.flatMap(entry => Array(entry.coff).fill(entry.grade))
)

const N = computed(() => flatGrades.value.length)
const S = computed(() => flatGrades.value.reduce((sum, g) => sum + g, 0))

const gradeOptions = computed<number[]>(() => {
  const start = Math.ceil(props.target)
  const options: number[] = []
  for (let g = start; g <= 5; g++) {
    options.push(g)
  }
  return options
})

const suggestions = computed<Suggestion[]>(() => {
  const list: Suggestion[] = []
  const tgt = props.target
  const numerBase = tgt * N.value - S.value

  if (numerBase <= 0) {
    return list
  }

  for (const g of gradeOptions.value) {
    const denom = g - tgt
    if (denom <= 0) continue
    const count = Math.ceil(numerBase / denom)
    if (count > 0) {
      list.push({grade: g, count})
    }
  }
  return list
})

const topSuggestions = computed<Suggestion[]>(() =>
    suggestions.value
        .slice()
        .sort((a, b) => a.count - b.count || a.grade - b.grade)
        .slice(0, 3)
)
</script>

<template>
  <div class="required-grades" >
    <template v-if="topSuggestions.length">
      <AtomTextsHeaderBottomSheet class="text-count" header="Сколько нужно оценок?"
                                  style="margin-top: 20px; margin-bottom: 15px"/>
      <div class="grade-blocks-wrapper">
        <template v-for="(s, idx) in topSuggestions" :key="s.grade">
          <AtomTargetGradeBlockGrade :counter="s.count" :grade="s.grade"/>
          <span v-if="idx < topSuggestions.length - 1" class="or-text">или</span>
        </template>
      </div>
    </template>
    <template v-else>
    </template>
  </div>
</template>

<style scoped>

.grade-blocks-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 5px;
  justify-content: center;
}

.or-text {
  position: relative;
  top: -10px;
  font-size: 20px;
  color: var(--theme-accent-text-color-deep-green);
  font-family: 'PFEncoreSansPro-Regular', serif;
  margin: 0 4px;
}

.required-grades {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
