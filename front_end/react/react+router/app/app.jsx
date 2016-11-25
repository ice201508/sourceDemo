import React from 'react';

// class App extends React.Component{  //React.component 会报错super... 大小写问题
// 	render(){
// 		return <div>page APP</div>
// 	}
// }

//export default App;
export default React.createClass({
	render() {
		//return <div>reee</div>
		return (
			<div>
				<div>
					<a href="./left">left</a><br />
					<a href="./right">right</a>
				</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
});
