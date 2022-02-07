import { Card } from 'antd-mobile';
import React, { useState } from 'react';
import './CovidNews.css';
import {BetterScroll} from './components/BetterScroll'

const NewItem = (newItem: {
  news: {
    title: string | null | undefined;
    summary: string | null | undefined;
  };
}) => {
      // 跳转页面
    const openUrl = url => () => {
      const w = window.open('about:blank');
      w.location.href = url;
    };
    // 将时间戳转为字符串
    const getLocalTime = nS => {
      return new Date(parseInt(nS, 10)).toLocaleString().replace(/:\d{1,2}$/, ' ');
    }

    const { news } = newItem;
    return (
      <div className="newsItem" onClick={openUrl(news.sourceUrl)}>
        <div>
          <Card title={news.title} className="newsBody">
            <p className="newsContent">{news.summary}</p>
            <div>
              <p className="newsSource">
                来源：<span>{news.infoSource}</span>
              </p>
              <p className="newsTime">
                {getLocalTime(news.pubDate)}
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
};

const covidNews = ({ newsList, updateNewsList, deleteNewsList}) => {
  const [curDate] = useState(new Date())

  const initDate = () => {
    getCurDate();
  };

  React.useEffect(() => {
    initDate();
    // 卸载组件时需要删除新闻，否则会重复
    return () => {
      deleteNewsList()
    }
  }, []);
  // 获取当前时间
  const getCurDate = ()=>{
    let myDate = new Date();
    myDate.setDate(myDate.getDate())
  }

  // 获取昨天日期
  const getYesterDay = ()=>{
    curDate.setDate(curDate.getDate() - 1)
  }

  const handlePullUp = ()=>{
    getYesterDay();
    let date = curDate.toLocaleDateString().replaceAll("/", "-");
    let month = date.split('-')[1];
    let day = date.split('-')[2];
    if(parseInt(month) < 10)
      month = "0" + month;
    if(parseInt(day) < 10)
      day = "0" + day;
    date = date.split('-')[0] + "-" + month + "-" + day;
    console.log(date);
    updateNewsList(date)
    console.log("pull up");

  }

  return (
    <div>
        <BetterScroll
          wrapHeight="600px"
          onPullup={handlePullUp}>
          {newsList.map(item => (
            <NewItem key={item.id} news={item} />
          ))}
        </BetterScroll>

    </div>
  );
}


export default covidNews;
