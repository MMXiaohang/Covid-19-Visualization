import { Divider } from 'antd-mobile';
import { Key } from 'react';
import Category, { CategoryProps } from './components/Category';
import MapComponent from './components/MapComponent';
import style from './CovidMap.module.css';
import dayjs from 'dayjs'


const dayTime = '2022-01-13';

const CovidMap = (props: { staticCount: any; time: any; }) => {
  const {staticCount, time} = props
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
    <MapComponent></MapComponent>
  </div>
  )
}

export default CovidMap;
