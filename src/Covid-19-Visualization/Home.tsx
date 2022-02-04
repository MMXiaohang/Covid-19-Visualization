import { Tabs } from 'antd-mobile';
import axios from 'axios';
import React, { useState } from 'react';
import CovidNews from '@/covidNews/CovidNews';
import Rumors from '@/rumors/Rumors';
import './Home.css';
import CovidMap from '@/covidMap/CovidMap';
import { getVirusDataOnTime,getAreaData  } from '@/api/getData';
const APIKEY = '964dc226dd5b57e892e6199735b6c55f';

const Home = () => {
  // state
  const [rumorList, setRumorList] = useState([]);
  const [staticCount, setStaticCount] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('')
  const [mapData, setMapData] = useState<any[]>([])
  const [newsList, setNewsList] = React.useState([]);
  // 初始化/拉取and更改状态
  const initData = () => {
    getRumorList();
    getVirusData();
    getNewsList();
    getAreaDataList();
  };

  const getRumorList = async () => {
    const response = await axios.get(
      `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`,
    );
    const { newslist: rumorlist } = response.data;
    setRumorList(rumorlist);
  };

  // 获取概览数据
  const getVirusData = async () =>{
    const response = await getVirusDataOnTime()
    const staticList = response.data.results[0]
    const currentTime = staticList.updateTime
    const staticCount = [
      { title: '确诊', count: staticList.confirmedCount, addNumber: staticList.confirmedIncr, color: '#e57471' },
      { title: '疑似', count: staticList.suspectedCount, addNumber: staticList.suspectedIncr, color: '#dda451' },
      { title: '重症', count: staticList.seriousCount, addNumber: staticList.seriousIncr, color: '#5d4037' },
      { title: '死亡', count: staticList.deadCount, addNumber: staticList.deadIncr, color: '#919399' },
      { title: '治愈', count: staticList.curedCount, addNumber: staticList.curedIncr, color: '#7ebe50' },
    ];
    setStaticCount(staticCount)
    setCurrentTime(currentTime)
  };

  // 获取所有地区的疫情情况
  const getAreaDataList =async () => {
    interface mapItem {
      name:string,
      value:number
    }
    const response = await getAreaData()
    const dataList = response.data.retdata
    let dataForMap:mapItem[] = dataList.map((item: { xArea: any; curConfirm: any; }) => {
      return {name:item.xArea, value:parseInt(item.curConfirm)}
    })
    console.log(mapData)
    setMapData(dataForMap)
    console.log(mapData)
  };

  // 获取最新消息网络请求
  const getNewsList = async () => {
    const response = await axios.get(
      `http://api.tianapi.com/ncov/index?key=${APIKEY}`,
    );
    const { newslist } = response.data;
    setNewsList(newslist[0].news);
  };

  React.useEffect(() => {
    initData();
    // 隔xx时间重新拉取数据
  }, []);

  // <Skeleton>
  return (
    <div>
      <div className="top">
        <p className="title">新型冠状病毒肺炎疫情</p>
        <p className="tip">实时动态</p>
      </div>
      <Tabs>
        <Tabs.Tab title="疫情地图" key="covidMap">
          <CovidMap staticCount={staticCount} time={currentTime} dataForMap={mapData}/>
        </Tabs.Tab>
        <Tabs.Tab title="最新消息" key="news">
          <CovidNews newsList={newsList} />
        </Tabs.Tab>
        <Tabs.Tab title="辟谣信息" key="rumorInfo">
          <Rumors rumorList={rumorList} />
        </Tabs.Tab>
        <Tabs.Tab title="疫情趋势" key="covidTrend">
          疫情趋势
        </Tabs.Tab>
        <Tabs.Tab title="国外疫情" key="foreignCovid">
          国外疫情
        </Tabs.Tab>
      </Tabs>
    </div>
  );
  // </Skeleton>
};

export default Home;
