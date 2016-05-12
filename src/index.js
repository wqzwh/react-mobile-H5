import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Jquery from 'jquery';
import App from './components/Main';

require('../node_modules/fullpage/build/fullpage.min.js');

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'),function(){
	console.log("加载完成");
});