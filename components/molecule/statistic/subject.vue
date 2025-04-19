<script lang="ts" setup>
import { getIconColor } from 'assets/js/functions'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import Accordion from '~/components/molecule/diary/accordion.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const {
  isVisible: isBottomSheetVisible,
  open: openBottomSheet,
  close: closeBottomSheet
} = useBottomSheet()

const bottomSheet = ref<InstanceType<typeof AtomUiBottomSheet> | null>(null)

const props = defineProps({
  current: Number,
  subject: String,
  grades: {
    type: Array as PropType<{ coff: number; grade: number; date: string }[]>,
    default: () => []
  }
})

const dates = ref<string[]>([])
const grades = ref<number[]>([])

watch(
    () => props.grades,
    (newGrades) => {
      dates.value = newGrades.map(g => g.date)

      const cumulative: number[] = []
      let sumWeighted = 0
      let sumCoefficients = 0

      newGrades.forEach(({ coff, grade }) => {
        sumWeighted     += coff * grade
        sumCoefficients += coff
        const avg = sumWeighted / sumCoefficients
        cumulative.push(+avg.toFixed(2))
      })

      grades.value = cumulative
    },
    { immediate: true, deep: true }
)


const total = computed(() =>
    props.current < 5 ? Math.floor(props.current + 1) : Math.floor(props.current)
)

onMounted(() => {
  AOS.init({
    debounceDelay: 0,
    throttleDelay: 0
  })
})

watch(isBottomSheetVisible, async (visible) => {
  if (visible) {
    await nextTick()
    const sheetEl = (bottomSheet.value as any)?.$el ?? document
    sheetEl.querySelectorAll<HTMLElement>('[data-aos]').forEach(el => {
      el.classList.remove('aos-animate')
      void el.offsetWidth
      el.classList.add('aos-animate')
    })
  }
})
</script>


<template>
  <AtomIconsChart
      :color="getIconColor('--theme-text-color-green')"
      @click="openBottomSheet"
  />

  <AtomUiBottomSheet
      ref="bottomSheet"
      :visible="isBottomSheetVisible"
      @update:visible="isBottomSheetVisible = $event"
  >
    <AtomTextsHeaderBottomSheet
        :header="props.subject"
        style="margin-top: 10px; margin-bottom: 30px"
    />

    <div
        class="chart-wrapper"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-easing="ease"
    >
      <AtomGraphsCircle :current="props.current" :total="total"/>
    </div>

    <div class="contain">
      <div
          class="target-grades"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
          data-aos-easing="ease"
      >
        <AtomTargetGradeBlock :grade="props.current" label="Текущая"/>
        <AtomIconsArrowRight
            :color="getIconColor('--theme-accent-text-color-deep-green')"
            height="40"
            width="40"
        />
        <AtomTargetGradeBlock :grade="total" label="Нужно"/>
      </div>
    </div>

    <AtomTargetGradeRequiredGrades
        :availableWeights="[1,2,3,4,5,6]"
        :current="props.current"
        :grades="props.grades"
        :next="total"
        :target="total - 0.3"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="600"
        data-aos-easing="ease"
    />

    <AtomGraphsScore
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="600"
        data-aos-easing="ease"
        :grade="total"
        :grades="grades"
        :dates="dates"
    />

    <div
        class="accordion-container"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="600"
        data-aos-easing="ease"
    >
      <Accordion name="Как работает расчет количества оценок">
        <p class="help-text third-text">
          Подсчет количества оценок происходит до оценки, которую можно округлить и получить желанную оценку.
          <br/>
          <i>
            Например, нужно получить 5 — значит, можно получить 4,7 и выше, чтобы получить её.
          </i>
          <br/>
          Если практически невозможно получить оценку выше, результат не будет выводиться.
        </p>
      </Accordion>
    </div>
  </AtomUiBottomSheet>
</template>

<style scoped>
.accordion-container {
  max-width: 512px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.help-text {
  font-size: 16px;
  margin: 0;
}

.contain {
  display: flex;
  margin: 20px auto auto;
  justify-content: center;
}

.target-grades {
  display: flex;
  flex-direction: row;
  gap: 8px;
  max-height: 70px;
  align-items: center;
  justify-content: center;
}

.chart-wrapper {
  position: relative;
  width: 150px;
  display: flex;
  height: 150px;
  margin: auto;
  gap: 40px;
}
</style>