

## 前端模块化ES6模块

开发阶段和部署阶段 [systemJS教程](https://www.zfanw.com/blog/jspm-systemjs.html)

	+ 开发阶段：第三方包的安装、依赖、维护，自有代码的依赖关系及使用
	+ 部署阶段：css文件的合并、压缩；js文件的合并、压缩、混淆。


### JSPM

安装浏览器端包管理器 `npm install jspm -g` ，

项目初始化`jspm init`

安装第三方库(从github上安装)`jspm install jquery`,或者(从npm上下载安装)`jspm install npm:jquery`

systemjs 是通用模块加载器，支持AMD、CommonJS、ES6等各种格式的js模块加载
es6-module-loader 是ES6模块加载器，systemjs自动加载
traceur  是ES6转码器，将ES6代码转换为当前浏览器支持的ES5代码，system自动加载
