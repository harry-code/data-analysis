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
                trigger: 'item',
                formatter: '{a} <br/>{b}人 : {c} ({d}%)'
            },
            legend: {
                top: 30,
                // orient,
                left: legend_left,
                // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    name,
                    type: 'pie',
                    radius,
                    center: ['50%', '60%'],
                    data,
                    roseType: 'area',
                }
            ]
        }
    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}