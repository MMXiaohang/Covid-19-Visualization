import React, { Component } from 'react';
import { Card } from 'antd';
// import echarts from 'echarts'
// 按需导入
// import echartTheme from '../echartTheme'
import echarts from 'echarts/lib/echarts';
// 导入饼图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
// 引入样式
// import '../common.less'

export default class PieB extends Component {
  // componentWillMount(){
  //     echarts.registerTheme("Imooc", echartTheme) //注入主题
  // }
  getOption = () => {
    const option = {
      title: {
        text: '确诊比例',
        x: 'top',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        top: 20,
        right: 10,
        data: [],
      },
      series: [
        {
          name: '确诊人数',
          type: 'pie',
          radius: ['20%', '65%'],
          data: [
            { value: 190000, name: '美国' },
            { value: 59020, name: '加拿大' },
            { value: 200000, name: '印度' },
            { value: 25000, name: '日本' },
            { value: 30005, name: '英国' },
            { value: 23007, name: '法国' },
            { value: 62007, name: '俄罗斯' },
            { value: 16087, name: '意大利' },
            { value: 1330, name: '韩国' },
            { value: 16801, name: '阿根廷' },
            { value: 110022, name: '其他' },
          ],
        },
      ],
    };
    return option;
  };

  render() {
    return <ReactEcharts option={this.getOption()} />;
  }
}
