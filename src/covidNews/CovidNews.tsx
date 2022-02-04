import { Card } from 'antd-mobile';
import './CovidNews.css';

// 将时间戳转为字符串
const getLocalTime = nS =>
  new Date(parseInt(nS, 10)).toLocaleString().replace(/:\d{1,2}$/, ' ');

// 跳转页面
const openUrl = url => () => {
  const w = window.open('about:blank');
  w.location.href = url;
};

const NewItem = (newItem: {
  news: {
    title: string | null | undefined;
    summary: string | null | undefined;
  };
}) => {
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
              {getLocalTime(news.pubDate)}({news.pubDateStr})
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

const covidNews = ({ newsList }) => (
  <div>
    {newsList.map(item => (
      <NewItem key={item.id} news={item} />
    ))}
  </div>
);

export default covidNews;
