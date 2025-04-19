<script lang="ts" setup>
import { Doughnut } from 'vue-chartjs'
import { computed, defineProps } from 'vue'
import type { ChartData, ChartOptions, Plugin } from 'chart.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { getGradeColor, getIconColor } from 'assets/js/functions'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  current: number
  total: number
}
const props = defineProps<Props>()

const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, width, height } = chart
    ctx.save()

    const text = props.total.toString()
    const fontSizeNumber = (height / 90).toFixed(2)
    ctx.font = `${fontSizeNumber}em date-grades`
    ctx.textBaseline = 'middle'
    const textX = (width - ctx.measureText(text).width) / 2
    const textY = height / 2 - 10
    ctx.fillStyle = getGradeColor(props.total.toString())
    ctx.fillText(text, textX, textY)

    const fontSizeLabel = (height / 200).toFixed(2)
    ctx.font = `${fontSizeLabel}em PFEncoreSansPro-Medium`
    ctx.fillStyle = getIconColor('--theme-text-color-green')
    const label = 'Цель'
    const labelX = (width - ctx.measureText(label).width) / 2
    const labelY = height / 2 + 10
    ctx.fillText(label, labelX, labelY)

    ctx.restore()
  }
}

const chartData = computed<ChartData<'doughnut'>>(() => {
  const prog = Math.min(props.current, props.total)
  return {
    labels: [],
    datasets: [
      {
        data: [prog, props.total - prog],
        backgroundColor: [
          getGradeColor(props.total),
          'rgba(200,200,200,0.3)'
        ],
        borderWidth: 0
      }
    ]
  }
})

const chartOptions = computed<ChartOptions<'doughnut'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  rotation: Math.PI,
  animation: {
    animateRotate: true,
    duration: 1000,
    easing: 'easeOutCubic'
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
}))

const plugins = computed(() => [centerTextPlugin])
</script>


<template>
  <client-only>
    <Doughnut
        :data="chartData"
        :options="chartOptions"
        :plugins="plugins"
        :key="props.total"
    />
  </client-only>
</template>
