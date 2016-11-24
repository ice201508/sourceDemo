import React from 'react';

import Side from './side.jsx';

var Link = React.createClass({
	getInitialState () {
		return {liked: false}
	},
	handleClick (event) {
		this.setState({liked: !this.state.liked})
	},
	render() {
		var text = this.state.liked ? "喜欢" : "不喜欢";
		console.log(this.props.children);
		return (
			<div id="wrap">
				<h3 onClick={this.handleClick}>{this.props.site}, 切换装: {text}</h3>
			</div>
		);
	}
})

class App extends React.Component {
	render() {
		return (
			<div>
				hello world!!! <br />
				react文档-- {this.props.name}
				<Link site={this.props.site} />
				<Side />
			</div>
		)
	}
}

export default App;
