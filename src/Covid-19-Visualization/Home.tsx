import { Tabs } from 'antd-mobile';
import axios from 'axios';
import React, { useState } from 'react';
import CovidNews from '@/covidNews/CovidNews';
import Rumors from '@/rumors/Rumors';
import './Home.css';
import CovidMap from '@/covidMap/CovidMap';
import {
  getRumor,
  getVirusDataOnTime,
  getAreaData,
  getVirusDataList,
  getForeignCovidData,
} from '@/api/getData';

import ForeignCovid from '@/foreignCovid/ForeignCovid';

const APIKEY = '964dc226dd5b57e892e6199735b6c55f';

const Home = () => {
  // state
  const [rumorList, setRumorList] = useState([]);
  const [rumorPage, setRumorPage] = useState(1);
  const [staticCount, setStaticCount] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [mapData, setMapData] = useState<any[]>([]);
  const [newsList, setNewsList] = useState([]);
  const [tableData, setTableData] = useState<any[]>([]);
  const [foreignList, setForeignList] = useState<any[]>([]);
  const [countryDataList, setCountryDataList] = useState<any[]>([]);

  // 记录当前生命周期中的rumorlist&page的值
  const ref = React.useRef({ rumorList, rumorPage });
  // 初始化/拉取and更改状态
  const initData = () => {
    getRumorList(rumorPage);
    getVirusData();
    getNewsList();
    getAreaDataList();
    getForeignData();
    getCountryDataList();
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

  // 获取概览数据
  const getVirusData = async () => {
    const response = await getVirusDataOnTime();
    const staticList = response.data.results[0];
    const currentTime = staticList.updateTime;
    const staticCount = [
      {
        title: '确诊',
        count: staticList.confirmedCount,
        addNumber: staticList.confirmedIncr,
        color: '#e57471',
      },
      {
        title: '疑似',
        count: staticList.suspectedCount,
        addNumber: staticList.suspectedIncr,
        color: '#dda451',
      },
      {
        title: '重症',
        count: staticList.seriousCount,
        addNumber: staticList.seriousIncr,
        color: '#5d4037',
      },
      {
        title: '死亡',
        count: staticList.deadCount,
        addNumber: staticList.deadIncr,
        color: '#919399',
      },
      {
        title: '治愈',
        count: staticList.curedCount,
        addNumber: staticList.curedIncr,
        color: '#7ebe50',
      },
    ];
    setStaticCount(staticCount);
    setCurrentTime(currentTime);
  };

  // 获取所有地区的疫情情况
  const getAreaDataList = async () => {
    interface mapItem {
      name: string;
      value: number;
    }
    interface talbleItem {
      area: string;
      curConfirm: number;
      allConfirm: number;
      allDead: number;
      allCure: number;
      subList: any;
    }
    const response = await getAreaData();
    const dataList = response.data.retdata;
    const dataForMap: mapItem[] = dataList.map(
      (item: { xArea: any; curConfirm: any }) => ({
        name: item.xArea,
        value: parseInt(item.curConfirm),
      }),
    );

    const dataForTable: talbleItem[] = dataList.map(
      (
        item: {
          xArea: any;
          curConfirm: any;
          confirm: any;
          died: any;
          heal: any;
          subList: any;
        },
        index,
      ) => {
        const { subList } = item;
        // console.log(subList)
        const subData: talbleItem[] = subList.map(
          (
            item: {
              city: any;
              curConfirm: string;
              confirm: string;
              died: string;
              heal: string;
            },
            key: any,
          ) => ({
            key: item.city,
            area: item.city,
            curConfirm: parseInt(item.curConfirm),
            allConfirm: parseInt(item.confirm),
            allDead: parseInt(item.died),
            allCure: parseInt(item.heal),
          }),
        );
        return {
          key: index,
          area: item.xArea,
          curConfirm: parseInt(item.curConfirm),
          allConfirm: parseInt(item.confirm),
          allDead: parseInt(item.died),
          allCure: parseInt(item.heal),
          children: subData,
        };
      },
    );
    setMapData(dataForMap);
    setTableData(dataForTable);
  };

  // 获取最新消息网络请求
  const getNewsList = async () => {
    const response = await axios.get(
      `http://api.tianapi.com/ncov/index?key=${APIKEY}`,
    );
    const { newslist } = response.data;
    setNewsList(newslist[0].news);
  };

  // 获取国外疫情数据
  const getForeignData = async () => {
    const response = await getVirusDataList();
    const foreignList = response.data.newslist[0].desc.foreignStatistics;
    setForeignList(foreignList);
  };

  const getCountryDataList = async () => {
    const response = await getForeignCovidData();
    const countryDataList = response.data.newslist;
    setCountryDataList(countryDataList);
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
          <CovidMap
            staticCount={staticCount}
            time={currentTime}
            dataForMap={mapData}
            dataForTable={tableData}
          />
        </Tabs.Tab>
        <Tabs.Tab title="最新消息" key="news">
          <CovidNews newsList={newsList} />
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
        <Tabs.Tab title="国外疫情" key="foreignCovid">
          <ForeignCovid
            foreignList={foreignList}
            countryDataList={countryDataList}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
  // </Skeleton>
};

export default Home;
