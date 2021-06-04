/**
 * 饼状图
 * 
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    title: {
        text?: string;
        subtext?: string;
        left?: string;
    }
    legend: {
        orient?: string;
        legend_left?: string;
    }
    series: {
        name?: string;
        data?: { value: number, name: string }[]
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
                    radius: '50%',
                    data,
                    emphasis: {
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