import { Divider } from 'antd-mobile';
import Category from './components/Category';
import MapComponent from './components/MapComponent';
import style from './CovidMap.module.css';

const infoColumn = [
  { title: '确诊', count: 0, addNumber: 0, color: '#e57471' },
  { title: '疑似', count: 0, addNumber: 0, color: '#dda451' },
  { title: '重症', count: 0, addNumber: 0, color: '#5d4037' },
  { title: '死亡', count: 0, addNumber: 0, color: '#919399' },
  { title: '治愈', count: 0, addNumber: 0, color: '#7ebe50' },
];

const dayTime = '2022-01-13';

const CovidMap: React.FC = () => (
  <div className={style.map}>
    <span className={style.allCountry}>全国</span>
    <span>截至{dayTime}(北京时间)统计</span>
    <div className={style.category}>
      {infoColumn.map((item, index) => (
        <Category key={index} info={item} />
      ))}
    </div>
    <Divider />
    <MapComponent></MapComponent>
  </div>
);

export default CovidMap;
