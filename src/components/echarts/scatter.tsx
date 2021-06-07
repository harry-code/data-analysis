/**
 * 散点图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-scatter
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    data: any[]
}

export default function Pie(props: pageProps) {
    const {
        data
    } = props;
    const creatBarOption = () => {
        return {
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data,
                type: 'scatter'
            }]
        }

    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}