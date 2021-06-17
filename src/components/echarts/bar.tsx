/**
 * 柱状图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-bar
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    titleText?: string; // 柱状图一级标题
    titleSubtext?: string; // 柱状图二级标题
    alignWithLabel?: boolean // 柱形是否与坐标轴刻度对其
    legendData?: string[], // 顶部标记名称 [] 
    xAxisData?: string[], // x轴 轴间距名称
    seriesData?: any[], // 柱形图数据 格式可以为单个number或者object { value, itemStyle: { color } }  
}

export default function Pie(props: pageProps) {
    const {
        titleText,
        titleSubtext,
        alignWithLabel = true,
        legendData,
        xAxisData,
        seriesData,
    } = props;
    const creatBarOption = () => {
        return {
            title: {
                text: titleText,
                subtext: titleSubtext
            },
            tooltip: { // 移入显示
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: legendData,
                textStyle: {
                    color: '#fff'
                },
                top: 35
            },
            grid: {
                top: '25%',
                left: '3%',
                right: '4%',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisTick: {
                    alignWithLabel
                }
            },
            yAxis: {
                type: 'value',
            },
            series: seriesData?.map((item, index) => {
                return {
                    name: legendData !== undefined ? legendData[index] : '',
                    data: item,
                    type: 'bar'
                }
            })
        }

    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}