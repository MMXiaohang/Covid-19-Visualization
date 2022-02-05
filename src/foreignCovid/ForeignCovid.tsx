import { Divider } from 'antd-mobile';
import React, { useState, Key } from 'react';
import { getVirusDataList } from '@/api/getData';
import Category, { CategoryProps } from './components/Category';
import style from './foreignCovid.module.css';
import dayjs from 'dayjs'


const ForeignCovid = () =>{

  const [staticCount, setStaticCount] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('')

  const initData = () => {
    getVirusData();
  };

  const getVirusData = async () =>{
    const response = await getVirusDataList()
    const staticList = response.data.newslist[0].desc.foreignStatistics
    const currentTime = staticList.createTime
    const staticCount = [
      { title: '现有确诊', count: staticList.currentConfirmedCount, addNumber: staticList.currentConfirmedIncr, color: '#e34565'},
      { title: '确诊', count: staticList.confirmedCount, addNumber: staticList.confirmedIncr, color: '#e57471' },
      { title: '疑似', count: staticList.suspectedCount, addNumber: staticList.suspectedIncr, color: '#dda451' },
      { title: '死亡', count: staticList.deadCount, addNumber: staticList.deadIncr, color: '#919399' },
      { title: '治愈', count: staticList.curedCount, addNumber: staticList.curedIncr, color: '#7ebe50' },
    ];
    setStaticCount(staticCount)
    setCurrentTime(currentTime)
  }

  React.useEffect(() => {
    initData();
    // 隔xx时间重新拉取数据
  }, []);


  return (
    <div className={style.map}>
      <span className={style.foreign}>国外疫情情况</span>
      <span>截至{dayjs(currentTime).format('YYYY年MM月DD日 HH:mm')}(北京时间)统计</span>
      <div className={style.category}>
        {staticCount.map((item: CategoryProps, index: Key | null | undefined) => (
          <Category key={index} info={item} />
        ))}
      </div>
      <Divider />
    </div>
  )
}

export default ForeignCovid;
