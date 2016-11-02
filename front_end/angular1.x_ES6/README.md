
### Angularjs1.x模块

angularjs的module机制是一种框架是有的模块机制，采取的是依赖注入的形式，已现有的ES6/CommonJS/AMD 等规范的module机制不符

[模块说明](https://docs.angularjs.org/guide/module)，问题是能不能将一个个模块写成单独的文件，通过es6的方式导入
```
angular的module

angular.module('xml.service', [])
	.value('greeter', {..})
	.service('getNameService', function(){...this...});

angular.module('xml.directive', []);
angular.module('xml.filter', []);

angular.module('xml', ['xml.service', 'xml.directive', 'xml.filter'])
	.config(function(){
		$provider.value('a', 123);
		$provider.factory('a', function(){ return ...});
		$compileProvider.directive('dataRangePicker', ...);
		$filterProvider.register('filterName', ...);
	})
	.run(function(greeter, getNameService){
		....
	})
	.controller('listController', function(){
		....
	})
```

现在必须淡化angular自带的模块机制，将各功能的具体实现代码独立出来，module作为一个壳子，对功能模块进行包装，然后将壳子文件的module的name属性export出去
