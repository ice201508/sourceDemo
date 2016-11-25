import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './app.jsx';
import Left from './left.jsx';
import Right from './right.jsx';

// ReactDOM.render((
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App} />
// 		<Route path="/left" component={Left} />
// 		<Route path="/right" component={Right} />
// 	</Router>
// ), document.getElementById('app'));

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<Route path="/left"  component={Left} />
			<Route path="/right"  component={Right}/>
		</Route>
	</Router>
), document.getElementById('app'));
