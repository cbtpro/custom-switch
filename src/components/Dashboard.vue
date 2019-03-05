<template>
  <div>
      <div id="weatherDashboard"></div><div id="airDashboard"></div>
  </div>
</template>

<script>
import CircleDashboard from '../packages/dashboard/circle-dashboard'

export default {
  components: { CircleDashboard },
  data() {
    return {
      weatherDashboard: null,
      airDashboard: null
    }
  },
  mounted() {
    let weatherDashboardConfig = { id: 'weatherDashboard', width: 200, height: 200, dataset: [9,8,7,6,5] }
    this.weatherDashboard = new CircleDashboard(weatherDashboardConfig)
    this.weatherDashboard.initialize()


    let airDashboardConfig = { id: 'airDashboard', width: 200, height: 200, dataset: [1,2,3,4,5] }
    this.airDashboard = new CircleDashboard(airDashboardConfig)
    this.airDashboard.initialize()
  },
  destroyed() {
    this.weatherDashboard.destroy()
    this.airDashboard.destroy()
  }
}
</script>

<style scoped>
</style>