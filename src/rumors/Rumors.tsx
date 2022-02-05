import React from 'react';
import rumor from './Rumors.module.css';
import { ScrollView } from './ScrollView/ScrollView';

export default function Rumors(props) {
  const { rumorList, prerumorPage, updateRumorPage } = props;

  const handleClick = item => () => {
    window.location.href = item.url;
  };
  const handlePullUp = () => {
    updateRumorPage(Number(prerumorPage) + 1);
  };

  return (
    <div>
      <ScrollView
        wrapHeight="600px"
        prop={prerumorPage}
        onPullup={handlePullUp}>
        {rumorList.map(item => {
          let imgUrl = '';
          if (
            item.explain === '谣言' ||
            item.explain === '伪科学' ||
            item.explain === '有失实'
          ) {
            imgUrl =
              'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png';
          } else if (item.explain === '尚无定论') {
            imgUrl =
              'https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-y-big@2x.c0fd84da.png';
          }
          if (
            item.explain === '真' ||
            item.explain === '确实如此' ||
            item.explain === '确有此事'
          ) {
            return <div key={item.id}></div>;
          } else {
            return (
              <div
                key={item.id}
                className={rumor.cardbox}
                onClick={handleClick(item)}>
                <div className={rumor.card}>
                  <img
                    alt="rumor_img"
                    src={item.imgsrc}
                    className={rumor.image}
                  />
                  <div className={rumor.text}>
                    <p className={rumor.title}>{item.title}</p>
                    <p className={rumor.tag}>关键词：{item.tag}</p>
                    <p className={rumor.desc}>{item.desc}</p>
                  </div>
                  <img src={imgUrl} alt="" className={rumor.tip} />
                </div>
              </div>
            );
          }
        })}
      </ScrollView>
    </div>
  );
}
