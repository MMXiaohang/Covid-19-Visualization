import { Divider } from 'antd-mobile';
import { Key, useEffect, useState } from 'react';
import Category, { CategoryProps } from './components/Category';
import MapComponent from './components/MapComponent';
import style from './CovidMap.module.css';
import dayjs from 'dayjs'
import * as echarts from 'echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'

type EChartsOption = echarts.EChartsOption;

const CovidMap = (props: { staticCount: any; time: any; dataForMap:any}) => {
  const {staticCount, time, dataForMap} = props
  const mapOption = () => {
    let option:EChartsOption
    option = {
      geo:{
        map:'China',
        zoom: 1.2,
        roam:false
      },
      visualMap: {
        itemWidth:4,
        min:0,
        max:10000,
        showLabel:true,
        textStyle: {
          color:'rgba(0,0,0,0.65)'
        },
        pieces:[{
          gte:1000,
          label:'>=1000',
          color:'#FF7C32'
        },{
          gte:500,
          lte:999,
          color:'#FDCC1A'
        },{
          gte:100,
          lte:499,
          color:'#5AD7D8'
        },{
          gte:10,
          lte:99,
          color:'#4174FE'
        },{
          gte:1,
          lte:9,
          color:'#f5f5f5'
        }]
      },
      series: [{
        name:'现有确诊',
        type:'map',
        geoIndex:0,
        data: dataForMap,
        map:''
      }]
    }
    return option
  }
  useEffect(()=>{
    mapOption()
  })
  return (
    <div className={style.map}>
    <span className={style.allCountry}>全国</span>
    <span>截至{dayjs(time).format('YYYY年MM月DD日 HH:mm')}(北京时间)统计</span>
    <div className={style.category}>
      {staticCount.map((item: CategoryProps, index: Key | null | undefined) => (
        <Category key={index} info={item} />
      ))}
    </div>
    <Divider />
    <MapComponent option={mapOption()}></MapComponent>
  </div>
  )
}

export default CovidMap;
