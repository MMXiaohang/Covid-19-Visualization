import React, { useState, useEffect, useRef } from 'react';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down';
import ObserveDOM from '@better-scroll/observe-dom';

export const BetterScroll = ({ wrapHeight, onPullup, children })=>{
  BScroll.use(PullDown);
  BScroll.use(Pullup);
  BScroll.use(ObserveDOM);
  const wrapRef = useRef<HTMLDivElement>(null);


  const [bScroll, setBScroll] = useState<BScrollConstructor>();

  // 初始化函数
  const initBScroll = ()=>{

    const scroll = new BScroll(wrapRef.current as HTMLDivElement, {
      probetype: 3,
      scrollX: false,
      scrollY: true,
      useTransition: true,
      click: true,
      pullUpLoad: true,

    });
    setBScroll(scroll)
  }

  // 对象初始化
  useEffect(() => {
    initBScroll();
    return ()=>{
      // 组件卸载时进行摧毁
      bScroll?.destroy();
    }
  }, [])

  // 上拉加载
  const pullUp = () => {
    onPullup();
    setTimeout(() => {
      bScroll?.finishPullUp();
      bScroll?.refresh();
    }, 500);
  }

  //  对象事件挂载/
  useEffect(() => {
    //  上拉加载
    //  每次更新都需要先把之前的pullingUp事件清除，不然会累加
    bScroll?.off('pullingUp');
    bScroll?.once('pullingUp', pullUp);
  });

  return (
    <div
      className="scroll-warpper"
      ref={wrapRef}
      style={{ height: wrapHeight, overflow: 'hidden' }}>
      <div className="scroll-content">{children}</div>
    </div>
  );
}

