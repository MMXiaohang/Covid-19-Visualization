import { Divider } from 'antd-mobile';
import { Key, useEffect, useState } from 'react';
import Category, { CategoryProps } from './components/Category';
import DataTable from './components/DataTable';
import MapComponent from './components/MapComponent';
import style from './CovidMap.module.css';
import dayjs from 'dayjs'
import * as echarts from 'echarts'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
type EChartsOption = echarts.EChartsOption;

const CovidMap = (props: { staticCount: any; time: any; dataForMap:any; dataForTable:any}) => {
  let {staticCount, time, dataForMap, dataForTable} = props
  console.log(dataForMap)
  const mapOption = () => {
    let option:EChartsOption
    option = {
      tooltip: {//提示框组件
        formatter:function(params,ticket, callback){//提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
          return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
      },
      geo:{
        map:'China',
        zoom: 1.23,
        roam:false,
        label:{
          normal:{
            show:true,
            fontSize:'8',
            color:'rgba(0,0,0,0.7)'
          }
        },
        itemStyle: {
          normal:{
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis:{
            areaColor: '#F3B329',//鼠标选择区域颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      visualMap: {
        show:true,
        left: 'left',//位置
				top: 'bottom',//位置
        itemWidth:12,
        orient:'horizontal',
        // top:0,
        min:0,
        max:10000,
        showLabel:true,
        textStyle: {
          color:'rgba(0,0,0,0.65)'
        },
        pieces:[{
          gte:1000,
          label:'>=1000',
          color:'#9B0302'
        },{
          gte:500,
          lte:999,
          color:'#D91312'
        },{
          gte:100,
          lte:499,
          color:'#F75244'
        },{
          gte:10,
          lte:99,
          color:'#FF9981'
        },{
          gte:1,
          lte:9,
          color:'#FFC3B4'
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
    <DataTable tableData={dataForTable}></DataTable>
  </div>
  )
}

export default CovidMap;
