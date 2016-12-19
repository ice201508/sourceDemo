
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


## 3个核心文件

app.component.ts   根组件，组件树
app.module.ts         根模块，声明如何组装应用,  其他模块叫特性模块
main.ts                    启动应用


### 装饰器Decorator

装饰器是一种特殊的类型声明，前面有@都是装饰器
定义模块用 @NgModule()    ---- 属于 interface类型(API)  (@Component属于装饰器类型)
angular2中的模块是指用@NgModule修饰的class

```
@NgModule({
	imports: [BrowserModule, FormsModule ],  //导入其他module，使用它们的指令、组件、管道
	declarations: [AppComponent, HighlightDirective, TitleComponent],  // 模块内部的组件、指令、管道(不能加入其他模块的)
	providers: [UserService ]   //提供给所有组件使用，注册为根级别的依赖注入
})

NgIf来自@angular/common的CommonModule中声明的，导入BrowserModule，它导入了CommonModule
NgModel是在FormsModule模块中声明的，RouteLink是在RouteModule模块中声明的，在使用之前必须导入对应的模块(在imports中)
```

### 事件

```
#addValue  ref-newValue  模板变量
[value]="firstName" 绑定属性

(click) = "fAddList()"
(click)="newHero(); heroForm.reset()"
(keyup) = "fAddList()"
(keyup.enter) = "fAddList()"
(blur) = "fAddList()"
(ngSubmit)="onSubmit()"
```


HTML attribute 和 DOM property 也不是同一样东西,angularjs的模板绑定是通过property和事件来工作的









### 第三方库

[ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap)
[useAge](http://valor-software.com/ng2-bootstrap/#/)
npm install ng2-bootstrap bootstrap --save

需要再systemjs.config.js里面引入这2个文件
```
'moment':               'npm:ng2-bootstrap/node_modules/moment/moment.js',
//引入这个库的冒号前后的写法
'ng2-bootstrap/ng2-bootstrap':    'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
```
