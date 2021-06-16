import React, { useEffect, useState, useRef } from 'react';
import { createWS } from '~/service/socketIo';
import io from 'socket.io-client';
// import Pie from '~/components/echarts/pie';
// import Line from '~/components/echarts/line';
// import Bar from '~/components/echarts/bar';
// import Scatter from '~/components/echarts/scatter';
// import KLine from '~/components/echarts/kLine';
// import Radar from '~/components/echarts/radar';
// import Radar from '~/components/echarts/radar';

export default (props: any) => {

    useEffect(() => {
        createWS('home', (payload) => {
            console.log('payload', payload)
        })
    }, [])
    return (
        <>
            <div style={{ width: '50%', height: '400px' }}>
                {/* <Pie title={{ text: '测试名称', subtext: '123123' }} legend={{}} series={{
                    data: [
                        { value: 1048, name: '搜索引擎' },
                        { value: 735, name: '直接访问' },
                        { value: 580, name: '邮件营销' },
                        { value: 484, name: '联盟广告' },
                        { value: 300, name: '视频广告' }
                    ],
                    radius: ['50%', '70%']
                }} /> */}
                {/* <Line
                    titleText="测试"
                    areaStyle={[{ color: 'red' }, { color: 'green' }]}
                    legendData={['名称1', '名称2']}
                    xAxisData={['x1', 'x2']}
                    seriesData={[[100, 200, 300], [400, 500, 600]]}
                /> */}
                {/* <Bar
                    xAxisData={['x1', 'x2']}
                    legendData={['名称1', '名称2']}
                    seriesData={[
                        [100, 200],
                        [300, 400]
                    ]}
                /> */}
                {/* <Scatter data={[[10.0, 8.04]]} /> */}
                {/* <KLine XData={['1', '2']} YData={[[1, 2, 3, 4], [5, 6, 7, 8]]} titleText="k线图" legendData={['测试']} /> */}
                {/* <Radar
                    titleText="雷达图"
                    legendData={['名称1', '名称2']}
                    indicator={[
                        { name: '销售', max: 5000 },
                        { name: '管理', max: 5000 },
                        { name: '信息技术', max: 5000 },
                    ]}
                    data={[[1000, 1500, 2000], [2000, 2800, 3400]]}
                /> */}
            </div>
        </>
    )
}