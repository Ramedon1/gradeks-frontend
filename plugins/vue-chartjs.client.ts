// plugins/vue-chartjs.client.ts
import { defineNuxtPlugin } from '#app'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default defineNuxtPlugin(() => {
})
