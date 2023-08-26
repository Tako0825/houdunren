<template>
    <div id="FrontendSkill" class="echarts w-full h-full"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

export default {
    mounted() {
        var chartDom = document.getElementById('FrontendSkill');
        var myChart = echarts.init(chartDom);
        var option = {
        legend: {
            orient: 'vertical',
            left: 'right'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 580, name: 'HTML' },
                { value: 735, name: 'CSS' },
                { value: 1450, name: 'JavaScript' },
                { value: 256, name: 'AJAX' },
                { value: 588, name: 'Echarts' },
                { value: 910, name: 'Node.js' },
                { value: 1862, name: 'Vue' },
                { value: 725, name: 'TypeScript' },
                { value: 128, name: 'Nest.js' },
            ],
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
        };
        option && myChart.setOption(option);
    }
}
</script>

<style>

</style>