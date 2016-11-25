import React from 'react';

var ConnctUser = React.createClass({
	getInitialState() {
		return {show: false, value: 'Hello!'};
	},
	handleClick (event) {
		this.setState({show: !this.state.show, value: event.target.value});
	},
	handleChange (event) {
		this.setState({value: event.target.value});
	},
	render(){
		var h1 = "<p>showssssss</p>";
		var h2 = "<p>hiddennnnnn</p>";
		var text = this.state.show? 'show': 'hidden';
		if(this.state.show) {
			return (
				<div>
					<p onClick={this.handleClick}>
						show--> {text} --> {h1} --{this.state.value}
					</p>
					<p>{this.state.value}</p>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</div>
			)
		} else {
			return (
				<div>
					<p onClick={this.handleClick}>
						hidden--> {text} --> {h1} --{this.state.value}
					</p>
					<p>{this.state.value}</p>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</div>
			)
		}
		
	}
})

export default ConnctUser;
