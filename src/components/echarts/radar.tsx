/**
 * 雷达图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-radar
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    titleText?: string; // 雷达图标题
    indicator: {
        name: string;
        max: number;
    }[]; // 雷达图端点名称
    shape?: string; // 雷达图形状
    legendData?: string[]; // legend标题
    data: number[][]; // 雷达图数据
}

export default function KLine(props: pageProps) {
    const {
        titleText,
        indicator,
        legendData,
        shape = 'circle', // 默认圆形
        data
    } = props;
    const creatBarOption = () => {
        return {
            title: {
                text: titleText
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legendData
            },
            radar: {
                shape,
                indicator
            },
            series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {},
                data: legendData?.map((ite, index) => {
                    return {
                        value: data[index],
                        name: ite
                    }
                })
            }]

        };
    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}