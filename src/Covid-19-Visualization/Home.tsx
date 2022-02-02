import { Tabs } from 'antd-mobile';
import axios from 'axios';
import React from 'react';
import CovidNews from '@/covidNews/CovidNews';
import Rumors from '@/rumors/Rumors';
import './home.css';

const APIKEY = '964dc226dd5b57e892e6199735b6c55f';

const Home = () => {
  // state
  const [rumorList, setRumorList] = React.useState([]);

  // 初始化/拉取and更改状态
  const initData = () => {
    getRumorList();
  };

  const getRumorList = async () => {
    const response = await axios.get(
      `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`,
    );
    const { newslist: rumorlist } = response.data;
    setRumorList(rumorlist);
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
          疫情地图
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
      </Tabs>
    </div>
  );

  // </Skeleton>
};

export default Home;
