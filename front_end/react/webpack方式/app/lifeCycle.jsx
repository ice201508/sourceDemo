import React from 'react';

var ComCycle = React.createClass({
	getInitialState (){
		return {
			opacity: 0.9
		};
	},
	componentDidMount (){
		this.timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity -= 0.5;
			if(opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({opacity})
		}.bind(this), 600)
	},
	render () {
		return (
			<div className="bac" style= {{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		)
	}
})

export default ComCycle;
