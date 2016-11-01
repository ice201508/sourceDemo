
## ES6使用条件

各浏览器对ES6的支持度还没达到100%，我们不能在浏览器上直接执行ES6的代码。需要借助一些shim，babel可以把ES5代码转换成ES5，(babel转码ES6后为CMD规范浏览器还是不认识)bowserify对代码进行构建，构建工具采用gulp

`npm install gulp gulp-babel babel-preset-es2015 --save-dev`,
安装其他gulp工具 `npm install gulp-rename gulp-concat gulp-uglify gulp-minify-css browserify vinyl-source-stream gulp-load-plugins --save-dev`

前端使用库流程： 
网站下载jquery库,页面使用   -->  网站手动下载          <script src="/path/js/jquery.js"></script>
后来使用bower包管理工具    -->  bower install jquery  <script src="/bower_component/jquery/jquery.js"></script>
目前又有新选择                     -->  npm install jquery      在使用它的js代码中 var $ = require("jquery");

在git-bash里面 bower init 会报错，应该去cmd下面，新建.bowerrc对bower install 安装进行配置，路径等

convertJS --> 转换成了额ES5的代码后，里面含有require，exports，浏览器依旧不认识。
bowserify打包js并使用CommonJS模块在浏览器中运行node模块

ES6中是 export --> import    bowserify中的是module.exports --> require

### [ES6语法](http://es6.ruanyifeng.com/)

运行时加载 与 编译时加载


### .gitignore

配置文件用于配置不需要加入版本管理的文件

### [browserify官网](http://browserify.org/)
