import { Tabs } from 'antd-mobile';
import React from 'react';
import CovidNews from '@/covidNews/CovidNews';
import Rumors from '@/rumors/Rumors';
import './home.css';
import CovidMap from '@/covidMap/CovidMap';
import { getRumor } from '@/api/getData';

const Home = () => {
  // state
  const [rumorList, setRumorList] = React.useState([]);
  const [rumorPage, setRumorPage] = React.useState(1);

  const ref = React.useRef({ rumorList, rumorPage });

  // 初始化/拉取and更改状态
  const initData = () => {
    getRumorList(rumorPage);
  };

  const getRumorList = async (rumorPage_: number | number) => {
    const response = await getRumor(rumorPage_);
    const { newslist: rumorlist } = response.data;
    const newRumorList = [...rumorList, ...rumorlist];
    setRumorList(newRumorList);
  };

  const updateRumorPage = rumorPage_ => {
    setRumorPage(rumorPage_);
    // getRumorList(rumorPage);
  };

  React.useEffect(() => {
    initData();
  }, []);

  // 解决setRumorList异步调用导致不能及时拿到更新后的rumorList问题
  React.useEffect(() => {
    const { rumorList: prevrumorList, rumorPage: prevrumorPage } = ref.current;
    if (prevrumorList !== rumorList && prevrumorPage !== rumorPage) {
      getRumorList(rumorPage);
      ref.current = { rumorList, rumorPage };
    }
  }, [rumorList, rumorPage]);

  // <Skeleton>
  return (
    <div>
      <div className="top">
        <p className="title">新型冠状病毒肺炎疫情</p>
        <p className="tip">实时动态</p>
      </div>
      <Tabs>
        <Tabs.Tab title="疫情地图" key="covidMap">
          <CovidMap />
        </Tabs.Tab>
        <Tabs.Tab title="最新消息" key="news">
          <CovidNews />
        </Tabs.Tab>
        <Tabs.Tab title="辟谣信息" key="rumorInfo">
          <Rumors
            rumorList={rumorList}
            prerumorPage={rumorPage}
            updateRumorPage={updateRumorPage}
          />
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
