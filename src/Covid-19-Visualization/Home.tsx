import { Tabs } from 'antd-mobile';
import axios from 'axios';
import React, { useState } from 'react';
import CovidNews from '@/covidNews/CovidNews';
import Rumors from '@/rumors/Rumors';
import './Home.css';
import CovidMap from '@/covidMap/CovidMap';
import { getVirusDataOnTime } from '@/api/getData';
const APIKEY = '964dc226dd5b57e892e6199735b6c55f';

const Home = () => {
  // state
  const [rumorList, setRumorList] = useState([]);
  const [staticCount, setStaticCount] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('')
  // 初始化/拉取and更改状态
  const initData = () => {
    getRumorList();
    getVirusData();
  };

  const getRumorList = async () => {
    const response = await axios.get(
      `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`,
    );
    const { newslist: rumorlist } = response.data;
    setRumorList(rumorlist);
  };

  const getVirusData = async () =>{
    const response = await getVirusDataOnTime()
    const staticList = response.data.newslist[0].desc
    const currentTime = staticList.createTime
    const staticCount = [
      { title: '确诊', count: staticList.confirmedCount, addNumber: staticList.confirmedIncr, color: '#e57471' },
      { title: '疑似', count: 0, addNumber: staticList.seriousIncr, color: '#dda451' },
      { title: '重症', count: 0, addNumber: 0, color: '#5d4037' },
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

  // <Skeleton>
  return (
    <div>
      <div className="top">
        <p className="title">新型冠状病毒肺炎疫情</p>
        <p className="tip">实时动态</p>
      </div>
      <Tabs>
        <Tabs.Tab title="疫情地图" key="covidMap">
          <CovidMap staticCount={staticCount} time={currentTime}/>
        </Tabs.Tab>
        <Tabs.Tab title="最新消息" key="news">
          <CovidNews />
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
