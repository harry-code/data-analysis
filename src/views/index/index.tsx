import React, { useEffect, useState, useRef } from 'react';
import EchartsItem from '~/components/common/EchartsItem/index';
import { createWS } from '~/service/socketIo';
import Pie from '~/components/echarts/pie';
import Line from '~/components/echarts/line';
import Bar from '~/components/echarts/bar';
import Scatter from '~/components/echarts/scatter';
import KLine from '~/components/echarts/kLine';
// import GeoMap from '../../components/echarts/geoMap';
import Radar from '~/components/echarts/radar';
import Carousel from '~/components/common/carousel';
import './index.less';

export default () => {
    const [pieData, setPie] = useState();
    const [lineData, setLine] = useState<any[]>();
    const [barData, setBar] = useState<any[]>();
    const [radarData, setRadar] = useState<any[]>();
    const [newsData, setNews] = useState<any[]>();
    useEffect(() => {
        try {
            createWS('pie', (data) => {
                setPie(data)
            })
            createWS('line', (data) => {
                const arr = [
                    data.map((ite: any) => { return ite.num1 }),
                    data.map((ite: any) => { return ite.num2 }),
                    data.map((ite: any) => { return ite.num3 }),
                    data.map((ite: any) => { return ite.num4 }),
                    data.map((ite: any) => { return ite.num5 })
                ]
                setLine(arr)
            })
            createWS('bar', (data) => {
                setBar([
                    data.map((ite: any) => { return ite.d1 }),
                    data.map((ite: any) => { return ite.d2 }),
                    data.map((ite: any) => { return ite.d3 }),
                    data.map((ite: any) => { return ite.d4 })
                ])
            })
            createWS('radar', (data) => {
                setRadar([
                    data.map((ite: any) => { return ite.cost }),
                    data.map((ite: any) => { return ite.profit }),
                ])
            })
            createWS('news', (data) => {
                setNews(data)
            })
        } catch (error) {
            console.error(error)
        }
    }, [])
    return (
        <div className="main-container">
            <div className="main-container-row">
                <EchartsItem title={'国科饼状图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Pie title={{}} legend={{ legend_left: 'center' }} series={{
                        data: pieData,
                        radius: ['20', '140']
                    }} />
                </div>} />
                <EchartsItem title={'国科折线图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Line
                        legendData={['成都子公司', '西安子公司', '武汉子公司', '泉州子公司', '福州子公司']}
                        xAxisData={['1月', '2月', '3月', '4月', '5月']}
                        seriesData={lineData}
                    />
                </div>} />
                <EchartsItem title={'国科柱形图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Bar
                        xAxisData={['软件研发', '教育中心', '硬件服务']}
                        legendData={['第一季度', '第二季度', '第三季度', '第四季度']}
                        seriesData={barData}
                    />
                </div>} />

            </div>

            <div className="main-container-row">
                <EchartsItem title={'国科散点图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Scatter data={[[10.0, 8.04], [8, 2], [5, 7], [12, 17]]} />
                </div>} />
                <EchartsItem title={'国科K线图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <KLine XData={['1月', '2月', '3月', '4月', '5月']} YData={[[1, 2, 3, 4], [5, 6, 1, 8], [9, 10, 4, 12], [1, 5, 4, 10], [2, 15, 10, 19]]} legendData={['涨停']} />
                </div>} />
                <EchartsItem title={'国科雷达图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Radar
                        legendData={['预算成本', '实际利润']}
                        indicator={[
                            { name: '销售', max: 5000 },
                            { name: '管理', max: 5000 },
                            { name: '软件研发', max: 5000 },
                            { name: '教育', max: 5000 },
                            { name: '硬件服务', max: 5000 },
                        ]}
                        data={radarData !== undefined ? radarData : [[]]}
                    />
                </div>} />
            </div>

            <div className="main-container-row">
                <EchartsItem title={'国科新闻'} ComponentItem={<div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Carousel data={newsData} />
                </div>} />
                {/* <EchartsItem title={'国科K线图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <KLine XData={['1月', '2月', '3月', '4月', '5月']} YData={[[1, 2, 3, 4], [5, 6, 1, 8], [9, 10, 4, 12], [1, 5, 4, 10], [2, 15, 10, 19]]} legendData={['涨停']} />
                </div>} />
                <EchartsItem title={'国科雷达图'} ComponentItem={<div style={{ width: '100%', height: '400px' }}>
                    <Radar
                        legendData={['预算成本', '实际利润']}
                        indicator={[
                            { name: '销售', max: 5000 },
                            { name: '管理', max: 5000 },
                            { name: '软件研发', max: 5000 },
                            { name: '教育', max: 5000 },
                            { name: '硬件服务', max: 5000 },
                        ]}
                        data={radarData !== undefined ? radarData : [[]]}
                    />
                </div>} /> */}
            </div>


        </div>
    )
}