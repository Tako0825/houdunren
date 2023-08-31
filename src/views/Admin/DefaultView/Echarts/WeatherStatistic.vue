<template>
    <div id="WeatherStatistic" class="echarts w-full h-full"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  BarChart,
  CanvasRenderer
]);

export default {
    mounted() {
        var ROOT_PATH = 'https://echarts.apache.org/examples';
        var chartDom = document.getElementById('WeatherStatistic');
        var myChart = echarts.init(chartDom);
        var option;
        const weatherIcons = {
        Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
        Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
        Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
        };
        const seriesLabel = {
            show: false
        };
        option = {
        legend: {
            data: ['City Alpha', 'City Beta', 'City Gamma']
        },
        grid: {
            left: 100
        },
        xAxis: {
            type: 'value',
            name: 'Days',
            axisLabel: {
            formatter: '{value}'
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: ['Sunny', 'Cloudy', 'Showers'],
            axisLabel: {
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 20,
            rich: {
                value: {
                lineHeight: 30,
                align: 'center'
                },
                Sunny: {
                height: 40,
                align: 'center',
                backgroundColor: {
                    image: weatherIcons.Sunny
                }
                },
                Cloudy: {
                height: 40,
                align: 'center',
                backgroundColor: {
                    image: weatherIcons.Cloudy
                }
                },
                Showers: {
                height: 40,
                align: 'center',
                backgroundColor: {
                    image: weatherIcons.Showers
                }
                }
            }
            }
        },
        series: [
            {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint: {
                symbolSize: 1,
                symbolOffset: [0, '50%'],
                label: {
                formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                backgroundColor: 'rgb(242,242,242)',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                padding: [4, 10],
                lineHeight: 26,
                // shadowBlur: 5,
                // shadowColor: '#000',
                // shadowOffsetX: 0,
                // shadowOffsetY: 1,
                position: 'right',
                distance: 20,
                rich: {
                    a: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 18,
                    textShadowBlur: 2,
                    textShadowColor: '#000',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 1,
                    textBorderColor: '#333',
                    textBorderWidth: 2
                    },
                    b: {
                    color: '#333'
                    },
                    c: {
                    color: '#ff8811',
                    textBorderColor: '#000',
                    textBorderWidth: 1,
                    fontSize: 22
                    }
                }
                }
            }
            },
            {
            name: 'City Beta',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110]
            },
            {
            name: 'City Gamma',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63]
            }
        ]
        };

        option && myChart.setOption(option);

    }
}
</script>

<style>

</style>