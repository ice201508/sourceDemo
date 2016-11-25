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
		return (<div>123{this.props.children}</div>)
	}
});
