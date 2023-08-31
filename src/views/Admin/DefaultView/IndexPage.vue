<template>
  <div class="flex flex-wrap w-full h-full content-start">
    <div class="w-full h-36 bg-white mb-6 rounded-lg flex">
      <StrokeAnimation/>
    </div>
    <div class="w-full h-auto lg:h-96 flex flex-col lg:flex-row mb-6">
      <div class="h-96 lg:flex-1 bg-white rounded-lg">
        <FrontendSkill/>
      </div>
      <div class="h-6 lg:w-6"></div>
      <div class="h-96 lg:flex-1 bg-white rounded-lg">
        <WeatherStatistic/>
      </div>
    </div>
    <div class="w-full h-auto lg:h-96 flex flex-col lg:flex-row mb-6">
      <div class="h-96 lg:flex-1 bg-white rounded-lg">
        <StackedArea/>
      </div>
      <div class="h-6 lg:w-6"></div>
      <div class="h-96 lg:flex-1 bg-white rounded-lg">
        <ScatterPlot/>
      </div>
    </div>
    <div class="w-full h-24"></div>
  </div>
</template>

<script>
import StrokeAnimation from './Echarts/StrokeAnimation.vue'
import FrontendSkill from './Echarts/FrontendSkill.vue';
import WeatherStatistic from './Echarts/WeatherStatistic.vue';
import StackedArea from './Echarts/StackedArea.vue';
import ScatterPlot from './Echarts/ScatterPlot.vue';
export default {
  components: {
    StrokeAnimation, FrontendSkill, WeatherStatistic, StackedArea, ScatterPlot
  }
}
</script>

<style>

</style>