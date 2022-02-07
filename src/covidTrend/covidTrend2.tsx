import React, { Component } from 'react';
// 引入 ECharts 主模块
import * as echarts from 'echarts';
// 引入折线图
import 'echarts/lib/chart/line';

class Echarts extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: { text: '世界疫情(人数/万)' },
      xAxis: {
        type: 'category',
        data: ['8月', '9月', '10月', '11月', '12月', '1月'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [6201.2, 6320.6, 6011.5, 5340.2, 4990.1, 5330.7, 5320.7],
          type: 'line',
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <div id="main" style={{ width: '100%', height: 400 }}></div>
      </div>
    );
  }
}
export default Echarts;
