/**
 * 高德地图 amap
 * mapCenter 城市坐标
 * zoom 缩放层级
 * 地址：https://elemefe.github.io/react-amap/components/map
 */
import React from 'react';
import { Map } from 'react-amap';

class AMap extends React.Component {
    mapCenter: { longitude: number; latitude: number; };
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.mapCenter = { longitude: 104.06378, latitude: 30.54161 };
    }
    render() {
        return (
            <div style={{ width: '100%', height: '400px' }}>
                <Map center={this.mapCenter} resizeEnable={true} zoom={20} />
            </div>
        )
    }
}

export default AMap