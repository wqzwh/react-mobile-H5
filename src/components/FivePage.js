require('styles/SecondPage.css');

import React from 'react';
import Echarts from 'echarts';

function ThirdPageEcharts (data) {
    
    let myChart = Echarts.init(document.getElementById('FivePage_charts'));

    let option = {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [
	        {
	            name: '业务指标',
	            type: 'gauge',
	            detail: {formatter:'{value}%'},
	            data: [{value: 50, name: '完成率'}]
	        }
	    ]
	};

	app.timeTicket = setInterval(function () {
	    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
	    myChart.setOption(option, true);
	},2000);

        myChart.setOption(option);
}

class FivePage extends React.Component {
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
        <div className="fp-section FourPage">
            <div id="FivePage_charts" style={ Objstyle }></div>
        </div>
    );
  }
}

FivePage.defaultProps = {
};
export default FivePage;