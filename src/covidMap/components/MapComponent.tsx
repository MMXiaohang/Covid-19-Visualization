import * as echarts from 'echarts'
import ChinaGeo from './map/json/china.json'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import { useEffect } from 'react';
type EChartsOption = echarts.EChartsOption;

const MapComponent = () => {

  const initChart = ()=> {
    echarts.registerMap('China', ChinaGeo)
    let element = document.getElementById('mapChart')!;
    let myChart = echarts.init(element);
    myChart.clear()
    let option: EChartsOption;
    option = {
      geo:{
        map:'China',
        zoom: 1.2,
        roam:false
      }
    }
    option && myChart.setOption(option)
  }
  useEffect(()=>{
    initChart()
  },[])

  return (
      <div id='mapChart' style={{ width: '100%', height: '300px' }}></div>
  )
};


export default MapComponent
