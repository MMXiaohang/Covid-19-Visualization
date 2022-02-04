import * as echarts from 'echarts'
import ChinaGeo from './map/json/china.json'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import { useEffect } from 'react';


const MapComponent = (props: {option:any}) => {
  const initChart = ()=> {
    const {option} = props
    echarts.registerMap('China', ChinaGeo)
    let element = document.getElementById('mapChart')!;
    let myChart = echarts.init(element);
    myChart.clear()
    option && myChart.setOption(option,true)
  }
  useEffect(()=>{
    initChart()
  })

  return (
      <div id='mapChart' style={{ width: '100%', height: '300px' }}></div>
  )
};


export default MapComponent
