/**
 * 折线图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-line
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    titleText?: string; // 折线图一级标题
    smooth?: boolean // 是否为平滑的折线
    areaStyle?: {
        color: string // 面积区域颜色
    }[],
    legendData?: string[], // 顶部标记名称 [] 
    xAxisData?: string[], // x轴 轴间距名称
    seriesData?: any[], // 折线图数据
}

export default function Line(props: pageProps) {
    const {
        titleText,
        smooth = false,
        areaStyle,
        legendData,
        xAxisData,
        seriesData,
    } = props;
    const creatBarOption = () => {
        return {
            title: {
                text: titleText
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
            },
            legend: {
                data: legendData,
                textStyle: {
                    color: "#fff"
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
                boundaryGap: false,
                data: xAxisData
            },
            yAxis: [{
                type: 'value'
            }],
            series: seriesData?.map((item, index) => {
                return {
                    name: legendData !== undefined ? legendData[index] : '',
                    data: item,
                    stack: '总量',
                    type: 'line',
                    smooth,
                    // areaStyle: areaStyle !== undefined ? areaStyle[index] : '',
                    emphasis: {
                        focus: 'series'
                    },
                }
            })
        }

    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}