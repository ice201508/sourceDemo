

## 前端模块化ES6模块

开发阶段和部署阶段 [systemJS教程](https://www.zfanw.com/blog/jspm-systemjs.html)

	+ 开发阶段：第三方包的安装、依赖、维护，自有代码的依赖关系及使用
	+ 部署阶段：css文件的合并、压缩；js文件的合并、压缩、混淆。


### JSPM

安装浏览器端包管理器 `npm install jspm -g` ，

项目初始化`jspm init`

安装第三方库(从github上安装)`jspm install jquery`,或者(从npm上下载安装)`jspm install npm:jquery`，卸载`jspm uninstall jquery`

```
jspm install bootstrap  -->  import bootstrap from 'bootstrap'
jspm install css   -->  import 'bootstrap/css/bootstrap.css!'   !表示经过插件处理
```

用本地服务器启动，不能用文件协议直接打开index.html，请求有点多，这时就要打包，分开为js打包和css打包。

在config.js里添加`separateCSS: true`，这样就是分开打包，执行`jspm bundle-sfx app build.js --minify`，再去index.html文件中引入build.js,build.css



systemjs 是通用模块加载器(是一个垫片库polyfill)，可以导入任何流行格式的模块（CommonJS、UMD、AMD、ES6）
es6-module-loader 是ES6模块加载器，systemjs自动加载
traceur  是ES6转码器，将ES6代码转换为当前浏览器支持的ES5代码，system自动加载


### generator-systemjs

[angular2 Demo](https://github.com/amcdnl/angular2-demo)
[system-seed](https://github.com/lookfirst/systemjs-seed)

项目启动,使用yeoman脚手架

```
npm install -g generator-systemjs
yo systenjs
gulp run
```

### ES6模块的转码

目前的浏览器还不支持es6模块，为了现在能使用，可以将其转化为 es5的写法，可用的方法有systemJS搭配 (traceur，babel，typescript)

[system配置](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md)

`npm install system` 另一个 `npm install systemjs`
还要安装es6转码器 `npm install systemjs-plugin-traceur`，
