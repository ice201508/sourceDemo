
### prototype,__proto__, constructor

[js原型和原型链](https://github.com/tsrot/study-notes)

js一切为对象，分为 普通对象和函数对象，Objcet,Funtion是js自带的函数对象。原型可理解为对象的默认属性和方法。
prototype：    函数对象才有prototype，它是一个普通对象(唯一一个特殊的是Function.prototype，它是空函数对象)，里面始终包含__proto__属性和constructor属性
__proto__：   所有对象都有 __proto__属性，指向创建当前对象的构造函数的原型
constructor ：当前对象的构造函数，当自定义构造函数的prototype属性后，实例的constructor默认指向Object，需重新赋值对应的constructor。任何一个prototype属性(任何一个实例也有constructor函数)都有一个constructor属性，指向它的构造函数



```
console.log(Object.prototype); Object函数对象的原型是一个对象，里面包含一些对象的全局方法和属性，如toString
console.log(Array.prototype);  Array函数对象的原型，里面包含数组的一些全局方法，如push
console.log(Function.prototype); Function函数对象的原型 是一个空函数， 特殊

var o = new Object() // {}
console.log(o.prototype);  普通对象没有prototype属性，只有__proto__，它指向对象o的构造函数Object的原型

自定义函数(函数对象一定有prototype)
function hello(){
	console.log('hello');
}
console.log(hello.prototype);  不手动指定hello的prototype，默认自定义函数的原型是Object.prototype，里面只有2个属性 constructor 和 __proto__
hello.prototype = "hello world";  手动指定函数prototype，及给它添加默认的属性和方法
console.log(hello);
```

### 原型链

js中每个对象都有一个指向它原型prototype对象的内部链接 __proto__ (简称每个js对象都有一个__proto__属性，值为当前对象的构造函数的原型)，这个原型对象又有自己的原型，直到null，这种一级一级的链结构就成为原型链

```
原型链就是逐级向上找构造函数，null为止
console.log(Array.prototype.__proto__.__proto__);   Array.prototype返回一个对象，包含一些数组的全局方法，对象里面含有一个__proto__属性，指向Array的构造函数Object的原型 即 Object.prototype
console.log(Array.__proto__)    这里的Array是被当做一个函数(不是对象)，值为Array的构造函数(Function)的原型，上面的是被当做一个函数(因为函数才有prototype属性)

js查找对象的属性是根据原型链从下到上 arr --> Array.prototype --> Object prototype --> null
```

### 自定义函数

```
function Parent(){
	this.name = "Lucy";
}

Parent.prototype = {age: 24};

var p = new Parent();
console.log(p.__proto__);  返回{age: 24},即创建当前对象p的构造函数Parent的原型prototype，即p.__proto__ == Parent.prototype

function Child(){
	this.name = "this is child";
}

Child.prototype = new Parent();
//Child.prototype.constuctor = Child;

var child = new Child();k

``
