webpack，browserify，rollup

[webpack入门](http://www.jianshu.com/p/42e11515c10f#)
[webpack高级](http://pinkyjie.com/2016/03/05/webpack-tips/#more)

webpack优势
代码分割：webpack支持两种依赖加载(同步和异步)
Loaders： 默认情况下webpack只能处理js文件，通过加载器可以将其他类型的资源转换为js输出

常见配置
```
module.exports = {
	devtool: "",
	entry: "",
	output: {},
	module: {
		loaders: []
	},
	plugins: [],
	resolve: {},
	devServer: {}
}

```


### 调试的 Source Maps
config文件属性  devtool:
devtool: 'eval-source-map' 调试的属性，值有4种选择


### webpack-dev-server 本地服务器
config文件属性  devServer:

```
devServer {
	contentBase: "./public",//本地服务器所加载的页面所在的目录, 默认当前目录
	port: 9000,  //默认8080
	colors: true,//终端中输出结果为彩色
	historyApiFallback: true,//不跳转
	inline: true//实时刷新
}
```

### Loaders
config文件关键字  modules:

默认情况下webpack只认识js模块，安装对应的loaders处理不同类型的文件(模块)，如css，json，fonts，图片等

npm install json-loader --save-dev  这是可以处理json文件的loader

```
modules {
	test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
	loader：loader的名称（必须）
	include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
	query：为loaders提供额外的设置选项（可选）
}

有些loader的使用比较复制，如babel(可以编译es6/7，JSX等)
Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

test: /\.js$/,
exclude: /node_modules/,
loader: 'babel',
query: {
	presets: ['es2015', 'react']
}
现在的配置以及可以使用 es6，jsx的语法了

为了防止webpack.config.js文件过于复杂，可以将一些babel的配置放在单独的文件中 .babelrc
webpack和babel是独立的工具
```

处理css模块，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。前者负责将CSS文件变成文本返回，并处理其中的url()和@import()，而后者将CSS以style标签的形式插入到页面中去
npm install --save-dev style-loader css-loader

```
 {
	test: /\.css$/,
	loader: 'style!css'  感叹号可以使同一文件使用不同的loader，顺序为从右到左，从上到下
}

webpack只有单一入口，新建的css文件必须通过(import，require，url)导入相关位置
通常情况下css和js会打包到一个文件，不会生成一个单独的css文件，可以通过配置生成独立的css文件。这只是webpack将css当做模块而已，现在已经有了真正的css module
sass-loader
postcss
css module
```

分离css和js文件 npm install --save-dev extract-text-webpack-plugin

### resolve
在webpack中都是用require(‘react’)的方式引入reactjs，默认的require()方法会去遍历reactjs及其依赖，增加的打包的时间

```
resolve: {
	// require时省略的扩展名，如：require('module') 不需要module.js
	extensions: ['', '.js', '.vue'],
	// 别名，可以直接使用别名来代表设定的路径以及其他
	alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
	}
},
```


### Plugins
loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。既有内置插件也有第三方插件

```
plugins: [
	new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了, 在bundle文件中加入版权声明
],
```

npm install --save-dev html-webpack-plugin 根据模板自动生成html文件，自动引入打包后的js文件
```
new HtmlWebpackPlugin({
		template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
	})
```

常用插件
OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID


### lazy load
