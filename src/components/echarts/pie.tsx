/**
 * 饼状图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-pie
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    title: {
        text?: string; // 一级标题
        subtext?: string; // 二级标题
        left?: string; // 标题位置
    }
    legend: {
        orient?: string;
        legend_left?: string;
    }
    series: {
        name?: string;
        data?: {}[]
        radius?: string[]
    }
}

export default function Pie(props: pageProps) {
    const {
        title: {
            text, subtext, left = "center"
        },
        legend: {
            orient = 'vertical',
            legend_left = 'left',
        },
        series: {
            name = '饼状图',
            radius = ['0%', '50%'],
            data
        }
    } = props;
    const creatBarOption = () => {
        return {
            title: {
                text,
                subtext,
                left
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient,
                left: legend_left,
            },
            series: [
                {
                    name,
                    type: 'pie',
                    radius,
                    data,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}