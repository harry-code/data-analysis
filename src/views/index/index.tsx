import React, { useEffect, useState, useRef } from 'react';
// import Pie from '~/components/echarts/pie';
// import Line from '~/components/echarts/line';
// import Bar from '~/components/echarts/bar';
// import Scatter from '~/components/echarts/scatter';

export default (props: any) => {
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
            </div>
        </>
    )
}