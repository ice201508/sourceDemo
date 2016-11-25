import React from 'react';

import Side from './side.jsx';
import Content from './content.jsx';
import RealCom from './ref.jsx';
import StateConnect from './state.jsx';
import LifeCycle from './lifeCycle.jsx';

var Link = React.createClass({
	getInitialState () {
		return {liked: false}
	},
	handleClick (event) {
		this.setState({liked: !this.state.liked})
	},
	render() {
		var text = this.state.liked ? "喜欢change" : "不喜欢not";
		console.log(this.props.children);
		return (
			<div id="wrap">
				<h3 onClick={this.handleClick}>{this.props.site}, 切换状态: {text}</h3>
			</div>
		);
	}
})

var data = "string";

class App extends React.Component {
	render() {
		return (
			<div>
				hello world!!! <br />
				react文档-- {this.props.name}
				<Link site={this.props.site} />
				<Side>
					<span>组件的所有子节点1</span>
					<span>组件的所有子节点2</span>
					<span>组件的所有子节点3</span>
				</Side>
				<Content title={data} />
				<RealCom />
				<StateConnect />
				<LifeCycle name={"world"} />
			</div>
		)
	}
}

export default App;
