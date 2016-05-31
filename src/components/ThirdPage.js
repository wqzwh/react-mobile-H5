require('styles/SecondPage.css');

import React from 'react';
import Echarts from 'echarts';

function ThirdPageEcharts (data) {
    
    let myChart = Echarts.init(document.getElementById('ThirdPage_charts'));

    let option = {
		    title: {
		        text: 'Customized Pie',
		        left: 'center',
		        top: 20,
		        textStyle: {
		            color: '#fff'
		        }
		    },

		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },

		    visualMap: {
		        show: false,
		        min: 80,
		        max: 600,
		        inRange: {
		            colorLightness: [0, 1]
		        }
		    },
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:274, name:'联盟广告'},
		                {value:235, name:'视频广告'},
		                {value:400, name:'搜索引擎'}
		            ].sort(function (a, b) { return a.value - b.value}),
		            roseType: 'angle',
		            label: {
		                normal: {
		                    textStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    lineStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    },
		                    smooth: 0.2,
		                    length: 10,
		                    length2: 20
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#c23531',
		                    shadowBlur: 200,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

        myChart.setOption(option);
}

class ThirdPage extends React.Component {
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
  
  componentDidMount(){
    ThirdPageEcharts(this.state.data);
  }

  render() {
    let Objstyle={
      width:'100%',
      height:'500px',
      marginTop:'6rem'
    }
    return (
        <div className="fp-section ThirdPage">
            <div id="ThirdPage_charts" style={ Objstyle }></div>
        </div>
    );
  }
}

ThirdPage.defaultProps = {
};
export default ThirdPage;