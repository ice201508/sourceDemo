
### 

angular-cli 

a2启动至少需要一个根模块，一个根组件

注解，装饰器

文件内的@等特殊语言现在浏览器还不能识别，需要借助解析器，Babel、Traceur、TypeScript(常见的解析器)都可以来解析注解。使用es6/7,或者ts开发，都必须被转译 transpile 成es5

首页引入的`reflect-metadata/Reflect.js`，这个文件提供的是装饰器功能，它不再ES6标准中，但ts会用到。简单的说装饰器就是 @ 符号。
zone.js提供的是一个异步的上下文，rxjs(Reactive Extensions)也跟异步有关系。
system.src.js是动态模块加载器

开发工具 `lite-server  concurrently` 前者是一个简易的服务器，后者方便在命令行同时运行多个命令

angular2通过ts来编写，运行tsc会在源文件的目录下生成响应的js文件，但是ts无法识别js的类库，如jquery，angularjs，需要提前在ts上定义，typings将完成这部分工作

angular目录下都会有几个d.ts文件，这个是类型定义文件，很多库都没有d.ts文件，引用时必须用typings类型定义文件，告诉编译器要加载的库的类型定义

模块在其自身的作用域里执行，不是全局作用域，2个模块之间的关系是通过在文件级别上使用import和export建立的。多个模块的加载需要用到模块加载器(browserify，systemjs，webpack)，常见的js模块规范(CommonJs,AMD(require.js),CMD(sea.js),ES6)

静态加载：在编译阶段进行，将所有需要的依赖打包到一个文件中
动态加载：运行时加载
预编译    ：
即时编译：

之前都是在服务器端编译在发送html过来，现在是发送数据过来，在浏览器编译


import-export
export function abc(){ ...}
export default function(){...}
export var m =1;
export obj={};
export {obj as default};

import e from '/defalut_expo';
import {m,obj} from 'expt'
