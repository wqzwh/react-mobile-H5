require('styles/SecondPage.css');

import React from 'react';
import Echarts from 'echarts';

function ThirdPageEcharts (data) {
    
    let myChart = Echarts.init(document.getElementById('FourPage_charts'));

    let option = {
	    title: {
	        //text: '基础雷达图'
	    },
	    tooltip: {},
	    legend: {
	        data: ['预算分配', '实际开销']
	    },
	    radar: {
	        // shape: 'circle',
	        indicator: [
	           { name: '销售', max: 6500},
	           { name: '管理', max: 16000},
	           { name: '信息技术', max: 30000},
	           { name: '客服', max: 38000},
	           { name: '研发', max: 52000},
	           { name: '市场', max: 25000}
	        ],
	        name: {
            	textStyle: {
                	color:'#000'
            	}
        	}
	    },
	    series: [{
	        name: '预算 vs 开销（Budget vs spending）',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        data : [
	            {
	                value : [4300, 10000, 28000, 35000, 50000, 19000],
	                name : '预算分配'
	            },
	             {
	                value : [5000, 14000, 28000, 31000, 42000, 21000],
	                name : '实际开销'
	            }
	        ]
	    }]
	};

        myChart.setOption(option);
}

class FourPage extends React.Component {
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
            <div id="FourPage_charts" style={ Objstyle }></div>
        </div>
    );
  }
}

FourPage.defaultProps = {
};
export default FourPage;