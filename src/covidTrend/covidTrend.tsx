import React, { Component } from 'react';

import * as echarts from 'echarts';

import 'echarts/lib/chart/bar';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import './Trend.css';

class EchartsTest extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart1 = echarts.init(document.getElementById('local'));
    // 绘制图表
    myChart1.setOption({
      title: { text: '国内疫情' },
      tooltip: {},
      xAxis: {
        data: ['8月', '9月', '10月', '11月', '12月', '1月'],
      },
      yAxis: {},
      series: [
        {
          name: '人数',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    const myChart2 = echarts.init(document.getElementById('foreign'));
    // 绘制图表
    myChart2.setOption({
      title: { text: '国外疫情' },
      tooltip: {},
      xAxis: {
        data: ['8月', '9月', '10月', '11月', '12月', '1月'],
      },
      yAxis: {},
      series: [
        {
          name: '人数/千万',
          type: 'bar',
          data: [11.1, 9.3, 10.3, 10.6, 11, 9.1],
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <div id="local" style={{ width: '100%', height: 400 }}></div>
        <div id="foreign" style={{ width: '100%', height: 400 }}></div>
      </div>
    );
  }
}

export default EchartsTest;
