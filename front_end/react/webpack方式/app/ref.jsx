import React from 'react';

var RealComponent = React.createClass({
	handleClick (){
		this.refs.myInput.value += "修改";
	},
	fClearText(){
		this.refs.myInput.value = "";
	},
	render (){
		return (
			<div>
				<input type="text" ref="myInput" />
				<input type="button" value="change" onClick={this.handleClick}/>
				<input type="button" value="clear" onClick={this.fClearText}/>
			</div>
		)
	}
})

export default RealComponent;
