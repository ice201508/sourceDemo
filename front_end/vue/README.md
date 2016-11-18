[vuejs2.0](https://vuefe.cn/guide)
[vuejs 2.0](http://cn.vuejs.org/v2/guide/)
[vue生态系统](https://github.com/vuejs/awesome-vue#libraries--plugins)


vuejs表达式

$index is not defined 在vuejs2.0中 已经去掉了默认的$index属性，(<li v-for="todo in todos">，没有$index属性)，循环之前手动指定(<li v-for="(todo, index) in todos">)

v-前缀在模板中是一个vue特殊属性的标识，2个常见的指令v-bind,v-on提供了缩写形式`v-bind:href="url" --> :href="url"，`v-on:click="doSomething --> @click="do`


插值       --- (文本中，属性中)
过滤器    --- 只能再mustache绑定中使用
指令       ---  一个指令只能接受一个“参数”，指令后用冒号标识，v-bind 用来响应更新HTML属性，v-on用来监听 DOM事件。指令的参数后面用.半角句号指明特殊后缀，叫修饰符modifiers
修饰符   --- v-model.lazy   v-model.trim  v-model.number

自定义按键修饰符别名
```
Vue.config.keyCodes.f1 = 112; 
v-on:keyup.f1 = doSomething
```


"string".split('').reverse().join('')  字符串倒序

计算属性
在模板中放入太多的逻辑会让模板过重且难以维护。
计算属性 是基于它的依赖缓存, 和使用方法有区别。
实例对象的$watch回调

class,style的绑定
条件渲染 template v-if/v-else/v-show
列表渲染  `v-for="(item, index) in/of items"`, 也支持template语法

### vue-loader


### Vue 组件

 W3C规则自定义标签名:小写，并且包含一个短杠

组件可以再全局注册，也可以再局部注册(使用组件实例的选项components关键字)
父子组件的通信，父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息(静态props，动态props需要用ng-bind:)
字面量语法 vs 动态语法 
<comp some-prop="1"></comp> 传递了一个字符串"1"
<comp v-bind:some-prop="1"></comp>   传递实际的数字

在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。

DOM模板， 字符串模板
