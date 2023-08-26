<template>
    <div id="StrokeAnimation" class="echarts w-full h-full"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GraphicComponent, CanvasRenderer]);

export default {
  mounted() {
    var chartDom = document.getElementById('StrokeAnimation');
    var myChart = echarts.init(chartDom);
    var option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: process.env.VUE_APP_NAME,
              fontSize: 80,
              fontWeight: 'bold',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#ee5253',
              lineWidth: 1
            },
            keyframeAnimation: {
              duration: 3000,
              loop: false,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: '#ee5253'
                  }
                }
              ]
            }
          }
        ]
      }
    }
      option && myChart.setOption(option);
  }
}
</script>

<style>

</style>