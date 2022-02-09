import BScroll from '@better-scroll/core';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import Pullup from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';
import ObserveDOM from '@better-scroll/observe-dom';

import React, { useState, useEffect, useRef } from 'react';

export const ScrollView = ({ wrapHeight, onPullup, children }) => {
  BScroll.use(PullDown);
  BScroll.use(Pullup);
  BScroll.use(ObserveDOM);

  //  外层的wrap实例
  const wrapRef = useRef<HTMLDivElement>(null);

  //  存储better-scroll的实例
  const [scrollObj, setscrollObj] = useState<BScrollConstructor>();
  //  better-scroll的配置参数
  const initBScroll = () => {
    const scroll = new BScroll(wrapRef.current as HTMLDivElement, {
      // probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
      probetype: 3,
      //  可以使用原生的点击
      click: true,
      //  检测dom变化
      observeDOM: true,
      //  滚动条
      scrollY: true,
      //  过度动画, 在下载更多的时候滚动条会有个过度动画
      useTransition: true,
      //  上拉加载更多
      pullUpLoad: {
        threshold: 20,
        stop: 10,
      },
    });
    setscrollObj(scroll);
  };
  //  对象初始化
  useEffect(() => {
    initBScroll();
    return () => {
      //  组件卸载时将其销毁
      scrollObj?.destroy();
    };
  }, []);

  //  上拉加载
  const pullup = () => {
    onPullup();
    setTimeout(() => {
      scrollObj?.finishPullUp();
      scrollObj?.refresh();
    }, 500);
  };

  //  对象事件挂载/
  useEffect(() => {
    //  上拉加载
    //  每次更新都需要先把之前的pullingUp事件清除，不然会累加
    scrollObj?.off('pullingUp');
    scrollObj?.once('pullingUp', pullup);
  });

  return (
    <div
      className="scroll-warpper"
      ref={wrapRef}
      style={{ height: wrapHeight, overflow: 'hidden' }}>
      <div className="scroll-content">{children}</div>
    </div>
  );
};
