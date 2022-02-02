import { Tabs } from 'antd-mobile';
import CovidNews from '@/covidNews/CovidNews';
import CovidMap from '@/covidMap/CovidMap';
import './Home.css';

const Home = () => (
  // <Skeleton>
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
        辟谣信息
      </Tabs.Tab>
      <Tabs.Tab title="疫情趋势" key="covidTrend">
        疫情趋势
      </Tabs.Tab>
    </Tabs>
  </div>

  // </Skeleton>
);

export default Home;
