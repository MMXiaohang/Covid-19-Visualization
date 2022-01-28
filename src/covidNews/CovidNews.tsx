import { Card } from 'antd-mobile';
import './CovidNews.css';

const newslist = [
  { title: '测试1', content: '内容1' },
  { title: '测试2', content: '内容2' },
];

const NewItem = (newItem: {
  news: {
    title: string | null | undefined;
    content: string | null | undefined;
  };
}) => {
  const { news } = newItem;
  return <Card title={news.title}>{news.content}</Card>;
};

const covidNews = () => (
  <div>
    {newslist.map((item, index) => (
      <NewItem key={index} news={item} />
    ))}
  </div>
);

export default covidNews;
