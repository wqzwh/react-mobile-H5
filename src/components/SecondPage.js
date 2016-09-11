require('styles/SecondPage.css');

import React from 'react';
import Echarts from 'echarts';

class SecondPage extends React.Component {
  // 定义内容组件自己的状态
  constructor(props) {
      super(props);
      this.state = {
        data:[]
      };
  }

  // 在渲染dom之前调用，获取数据
  componentWillMount(){
    // 引入json数据
    let Details=require('../data/SecondPage.json');
    this.setState({
      data:Details
    });
  }

  SecondPagEcharts(){
    let myChart = Echarts.init(document.getElementById('SecondPage_charts'));

    var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['电影','电视剧','综艺','动漫','短视频']
            },
            xAxis: {
                data: ["电影","电视剧","综艺","动漫","短视频"]
            },
            yAxis: {},
            series: [
              {
                name: '电影',
                type: 'bar',
                data: [5,30]
              },
              {
                name: '电视剧',
                type: 'bar',
                data: [5,20]
              }
            ]
        };

        myChart.setOption(option);

  }

  componentDidMount(){
    // this.SecondPagEcharts();
    window._this=this;
  }

  render() {
    let Objstyle={
      width:'100%',
      height:'500px',
      marginTop:'6rem'
    }
    return (
        <div className="fp-section SecondPage">
            <div id="SecondPage_charts" style={ Objstyle }></div>
        </div>
    );
  }
}

SecondPage.defaultProps = {

};
export default SecondPage;