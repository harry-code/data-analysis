import React, { useEffect, useState, useRef } from 'react';
import Pie from '~/components/echarts/pie';

export default (props: any) => {
    return (
        <>
            <div style={{ width: '50%', height: '400px' }}>
                <Pie title={{ text: '测试名称', subtext: '123123' }} legend={{}} series={{
                    data: [{ value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' }]
                }} />
            </div>
        </>
    )
}