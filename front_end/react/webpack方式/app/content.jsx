import React from 'react';

var MyTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	getDefaultProps (){
		return {
			title: "设置组件默认的属性值"  //在使用组件的地方不传值 也不会报错
		}
	},
	render(){
		return <h4>验证组件实例的属性类型：{this.props.title}</h4>
	}
})

export default MyTitle;
