import { Tabs } from 'antd-mobile';
import CovidNews from '@/covidNews/CovidNews';

const App = () => (
  <Tabs>
    <Tabs.Tab title="疫情地图" key="covidMap">
      疫情地图
    </Tabs.Tab>
    <Tabs.Tab title="最新消息" key="news">
      最新消息
      <CovidNews />
    </Tabs.Tab>
    <Tabs.Tab title="辟谣信息" key="rumorInfo">
      辟谣信息
    </Tabs.Tab>
    <Tabs.Tab title="疫情趋势" key="covidTrend">
      疫情趋势
    </Tabs.Tab>
  </Tabs>
);

export default App;
