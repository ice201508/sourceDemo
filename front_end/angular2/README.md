
### 

angular-cli 


注解，装饰器

文件内的@等特殊语言现在浏览器还不能识别，需要借助解析器，Babel、Traceur、TypeScript(常见的解析器)都可以来解析注解。

首页引入的`reflect-metadata/Reflect.js`，这个文件提供的是装饰器功能，它不再ES6标准中，但ts会用到。简单的说装饰器就是 @ 符号。
zone.js提供的是一个异步的上下文，rxjs(Reactive Extensions)也跟异步有关系。
system.src.js是动态模块加载器

开发工具 `lite-server  concurrently` 前者是一个简易的服务器，后者方便在命令行同时运行多个命令

angular2通过ts来编写，运行tsc会在源文件的目录下生成响应的js文件，但是ts无法识别js的类库，如jquery，angularjs，需要提前在ts上定义，typings将完成这部分工作
