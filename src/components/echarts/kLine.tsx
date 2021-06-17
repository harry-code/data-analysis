/**
 * K线图
 * 线上api: https://echarts.apache.org/examples/zh/index.html#chart-type-candlestick
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface pageProps {
    titleText?: string; // k线图标题
    XData?: string[]; // 横坐标数据
    YData?: any[]; // 纵坐标数据
    legendData?: string[]; // legend标题
}

export default function KLine(props: pageProps) {
    const {
        titleText,
        XData,
        YData,
        legendData
    } = props;
    const creatBarOption = () => {
        return {
            title: {
                text: titleText
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            // legend: {
            //     data: legendData
            // },
            grid: {
                top: '25%',
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                data: XData
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                {
                    // type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    top: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: legendData?.map((ite) => {
                return {
                    name: ite,
                    type: 'k',
                    data: YData
                }
            })
        };

    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}