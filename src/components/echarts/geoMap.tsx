import React, { useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import china from 'echarts/map/json/china.json';
import { mapData, pointData } from './data';


export default () => {
    useEffect(() => {
        //@ts-ignore
        getMap("china");
    }, [])
    // const registerChinaMap = () => {
    //     if (registerMap && getMap) {
    //         const map = getMap("china");
    //         if (!map) {
    //             //@ts-ignore
    //             registerMap('china', chinaData);
    //         }
    //     } else {
    //         console.log('ECharts is not Loaded');
    //     }
    // }
    const creatBarOption = () => {
        return {
            title: {
                text: '中国地图',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (p / km2)'
            },
            visualMap: {
                min: 800,
                max: 50000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china', // 自定义扩展图表类型
                    label: {
                        show: true
                    },
                    data: [
                    ],
                    // 自定义名称映射
                    nameMap: {
                    }
                }
            ]
        }
    }
    return (
        <ReactEcharts option={creatBarOption()} style={{ height: '100%', width: '100%' }} />
    )
}