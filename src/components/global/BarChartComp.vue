<template>
  <Line class="w-full" id="my-chart-id" :options="chartOptions" :data="chartData" :style="styleChart" />
</template>

<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineController, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineController, LineElement)

const chartData = ref({
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  datasets: [{
    backgroundColor: '#0B93DF',
    borderColor: '#0B93DF',
    borderWidth: 1,
    hoverBackgroundColor: '#0B93DF',
    hoverBorderColor: 'rgba(255, 99, 132, 1)',
    data: [40, 48, 47, 52, 55, 51, 52, 60, 66, 62, 67, 61, 67, 71, 72, 71, 70, 72, 73, 75, 73, 77, 78, 80, 79, 81, 91, 90, 82, 92],
    label: 'Nilai'
  }]
})

const chartOptions = ref({
  responsive: true
})

const styleChart = ref({
  width: `100%`
})

</script>