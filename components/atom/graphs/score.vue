<script setup lang="ts">
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js'
import { getGradeColor } from 'assets/js/functions.js'

interface Props {
  grade: number
  dates: string[]
  grades: number[]
}

const props = withDefaults(defineProps<Props>(), {
  dates: () => [],
  grades: () => [],
})

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)

const themeWhite = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--theme-text-color-white')
    .trim()

const chartData = computed(() => ({
  labels: props.dates,
  datasets: [
    {
      data: props.grades,
      borderColor: getGradeColor(props.grade),
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      pointRadius: 6,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: getGradeColor(props.grade),
      pointBorderWidth: 2,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        color: '#EAEAEA',
        borderDash: [5, 5],
      },
      ticks: {
        color: themeWhite,
      },
    },
    y: {
      min: 1,
      max: 6,
      grid: {
        display: true,
        color: '#EAEAEA',
        borderDash: [5, 5],
      },
      ticks: {
        stepSize: 1,
        color: themeWhite,
      },
      title: {
        display: true,
        text: 'Средняя оценка',
        padding: { bottom: 10 },
        color: themeWhite,
      },
    },
  },
  plugins: {
    tooltip: { enabled: false },
    legend: {
      display: false,
      labels: {
        color: themeWhite,
      },
    },
  },
  animation: false,
}
</script>

<template>
  <div class="chart-container">
    <div style="display: flex; align-items: center; gap: 2px">
      <div class="chart-title third-text">Динамика</div>
      <AtomIconsChart style="margin-bottom: 10px" />
    </div>
    <div class="chart-content">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  position: relative;
  margin: 0 20px;
  background-color: var(--theme-accent-text-color-deep-green);
  border-radius: 15px;
  padding: 16px;
  box-sizing: border-box;
  height: 240px;
  display: flex;
  flex-direction: column;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 34px;
}

.chart-content {
  flex: 1;
}

@media (max-width: 500px) {
  .chart-container {
    margin: 0;
    padding: 10px 15px 10px 5px;
    height: 220px;
  }
}
</style>
