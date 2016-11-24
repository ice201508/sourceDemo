
### 项目环境搭建

`npm install react react-dom --save`
`npm install webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev`


### HTML标签 vs React组件
小写字母开头的是 html标签 <div className="foo" />;
大写字母开头的是react组件 <MyComponent someProperty={true} />;

### JSX语法

js中插入html 需要用 {}

React.createClass 方法用于生成一个组件类  HelloMessage
<HelloMessage /> 实例组件类并输出信息

使用 this.props 对象 向组件传递参数

### react state 状态

this.state可以根据与用户交互来改变，
this.props 表示哪些一旦定义，就不再改变的特性
一般是在父组件中设置state，并且通过子组件上使用props将其传递到子组件上



### 代码解释
ReactDOM.render() 用于将模板转换为HTML语言，并插入指定的DOM节点
React.createClass() 生成一个组件类
JSX语法， html写在js语言之中
