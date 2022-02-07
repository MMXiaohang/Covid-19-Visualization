import { Divider } from 'antd-mobile';
import React, { useState, Key } from 'react';
import dayjs from 'dayjs';
import { NumberKeyboardProps } from 'antd-mobile/es/components/number-keyboard';
import Category, { CategoryProps } from './components/Category';
import DataTable from './components/DataTable';
import style from './foreignCovid.module.css';
import { getVirusDataList, getForeignCovidData } from '@/api/getData';

const ForeignCovid = (props: { foreignList: any; countryDataList: any }) => {
  const { foreignList, countryDataList } = props;
  const [foreignCount, setForeignCount] = useState<any[]>([]);
  const [foreignTable, setforeignTable] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('');

  const initData = () => {
    getForeignCount();
    getForeignTable();
  };

  const getForeignCount = () => {
    const currentTime = foreignList.createTime;
    const foreignCount = [
      {
        title: '现有确诊',
        count: foreignList.currentConfirmedCount,
        addNumber: foreignList.currentConfirmedIncr,
        color: '#e34565',
      },
      {
        title: '确诊',
        count: foreignList.confirmedCount,
        addNumber: foreignList.confirmedIncr,
        color: '#e57471',
      },
      {
        title: '疑似',
        count: foreignList.suspectedCount,
        addNumber: foreignList.suspectedIncr,
        color: '#dda451',
      },
      {
        title: '死亡',
        count: foreignList.deadCount,
        addNumber: foreignList.deadIncr,
        color: '#919399',
      },
      {
        title: '治愈',
        count: foreignList.curedCount,
        addNumber: foreignList.curedIncr,
        color: '#7ebe50',
      },
    ];
    setForeignCount(foreignCount);
    setCurrentTime(currentTime);
  };

  const getForeignTable = () => {
    interface tableItem {
      country: string;
      allConfirm: number;
      curConfirm: number;
      allDead: number;
      allCure: number;
    }

    const dataForTable: tableItem[] = countryDataList.map(
      (
        item: {
          country: any;
          curConfirm: any;
          confirm: any;
          died: any;
          heal: any;
        },
        index,
      ) => ({
        key: index,
        country: item.provinceName,
        curConfirm: parseInt(item.currentConfirmedCount),
        allConfirm: parseInt(item.confirmedCount),
        allDead: parseInt(item.deadCount),
        allCure: parseInt(item.curedCount),
      }),
    );
    setforeignTable(dataForTable);
  };

  React.useEffect(() => {
    initData();
    // 隔xx时间重新拉取数据
  }, []);

  return (
    <div className={style.covid}>
      <span className={style.foreign}>国外疫情情况</span>
      <span>
        截至{dayjs(currentTime).format('YYYY年MM月DD日 HH:mm')}(北京时间)统计
      </span>
      <div className={style.category}>
        {foreignCount.map(
          (item: CategoryProps, index: Key | null | undefined) => (
            <Category key={index} info={item} />
          ),
        )}
      </div>

      <DataTable tableData={foreignTable} />
      <Divider />
    </div>
  );
};

export default ForeignCovid;
