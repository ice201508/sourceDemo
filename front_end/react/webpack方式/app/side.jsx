import React from 'react';

class Side extends React.Component {
	render () {
		return (
			<div>
				<ol>
					{
						React.Children.map(this.props.children, function(child){
							return <li>{child}</li>
						})
					}
				</ol>
				<p>验证组件实例的属性：{this.props.title}</p>
			</div>
		)
	}
}

export default Side;
