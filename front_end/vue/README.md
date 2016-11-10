[vuejs2.0](https://vuefe.cn/guide)
[vuejs 2.0](http://cn.vuejs.org/v2/guide/)
[vue生态系统](https://github.com/vuejs/awesome-vue#libraries--plugins)


+ vuejs表达式

$index is not defined 在vuejs2.0中 已经去掉了默认的$index属性，(<li v-for="todo in todos">，没有$index属性)，循环之前手动指定(<li v-for="(todo, index) in todos">)

v-前缀在模板中是一个vue特殊属性的标识，2个常见的指令v-bind,v-on提供了缩写形式`v-bind:href="url" --> :href="url"，`v-on:click="doSomething --> @click="do`


插值       --- (文本中，属性中)
过滤器    --- 只能再mustache绑定中使用
指令       ---  一个指令只能接受一个“参数”，指令后用冒号标识，v-bind 用来响应更新HTML属性，v-on用来监听 DOM事件。指令的参数后面用.半角句号指明特殊后缀，叫修饰符modifiers

"string".split('').reverse().join('')  字符串倒序

计算属性
在模板中放入太多的逻辑会让模板过重且难以维护
