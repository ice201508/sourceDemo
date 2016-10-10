<?php
//命名空间(必须在脚本的最前面)
//解决用户编写的代码和php内部的类/函数/常量 或者 第三方类/函数/常量 之间的名字冲突

//declare(encoding="UTF-8");  只有这一句可以写在namespace前面
namespace MyProject {

};

namespace MyProject2{  //全局代码

}
header("Content-type: text/html; charset=utf-8");   //避免php 中文为乱码
/*
 * php语法必须写在 <php ... ?> 之中
 * 文件的编码与浏览器索引的编码要一致
 * 这个php文件 经过apache服务器处理后 输出的客户端是浏览器
 * 所有语句必须分号 ; 结尾， 不然会干扰下一条语句
 */
print ('括号');  //括号可有可无
print "hello\n";
echo "World"."<br>";  //字符串需要用. 来连接
echo ('world中文');


/**************************
 * 类型与变量
 * 变量以$开头，变量名只能为字母，数字，_
 * 变量不需要声明，变量在第一次赋值的时候被创建
 */
$x_global = 0x13;
var_dump($x_global);

//变量的作用域,  local(局部),global(全局，函数外定义的变量),static,parameter
//static, 当一个函数完成时，所有的变量都会被删除，如果需要保存，需要用static声明
//参数作用域，是函数的局部变量

// 数组，php中都是关联型数组，类似其它语言中的哈希表或字典
$arr = array('one' => 1, 'Two' => 'three', 'Three' => 3);
$arr1 = ['one' => 1, 'Two' => 'three', 'Three' => 3];  // php5.4+
$arr2 = ['one', 'two', 'three'];   //常规数组，索引从0开始
echo $arr['Two'].count($arr).count($arr2);
echo "<br>";

//遍历关联数组
foreach($arr as $x=>$x_value){
	echo "Key=".$x.", Value=".$x_value;
	echo "<br>";
}

//超级全局变量
//$GLOBALS 是php的超级全局变量数组，变量名就是数组的键

//魔术变量  __LINE__  __FILE__  __DIR__
echo '这是第" ' .__LINE__ .' "行';
echo '这是第" ' .__FILE__ .' "行';



//*************************************函数
//超过1000个内建函数，名称应该显示功能，字母或者_开头
$x = 0x13;
function add($x, $y = 1){
	static $str = 1;
	global $x_global, $x;  //使用全局作用域中的$x
	echo $x_global.",static,".$str;
	echo "<br>";
	$result = $x + $y;
	$str++;
	return $result;
}

echo add(4);
echo "<br>";
echo add(4,2);
echo "<br>";
//php 5.3+ 支持匿名函数
$inc = function($x){
	return $x+1;
};

echo $inc(2);



//*********************************导入
//include 'my-file.php';  //不存在或导入失败 会抛出警告
//include_once 'my_file.php';   //不会重复导入

//require 'my-file.php';  //导入失败会抛出错误
//require_once 'my-file.php';

//$value = include 'my-include.php';  //include，require函数也有返回值


//************************************类
//$this代表自身对象
class MyClass
{
	const MY_CONST       = 'value';  //常量
	static $staticVar          = 'static';

	//属性必须声明其作用域
	public $property = 'public';
	public $instanceProp;
	protected $prot  = 'protected';  //当前类和子类可以访问
	private $priv = 'private';  //仅当前类可访问

	//通过自定义函数__construct 来定义构造函数
	public function __construct($instanceProp){
		//通过$this访问当前对象
		$this->instanceProp = $instanceProp;
	}

	//方法就是类中定义的函数
	public function myMethod(){
		print "myclass";
	}

	final static function youCannotOverrideMe()
	{	
	}

	public static function myStaticMethod(){
		print 'i am static';
	}
}

echo MyClass::MY_CONST;
echo MyClass::$staticVar;
//MyClass::myMethod();  会报错，只能打印static修饰的方法，必须用实例才能访问这个方法
MyClass::myStaticMethod();

//通过new 来新建实例, -> 来访问成员
$my_class = new MyClass('an instance property!');
echo $my_class-> property; 
echo $my_class->instanceProp;
echo $my_class->myMethod();


//************************************扩展子类extends
class MyOtherClass extends MyClass
{
	function printProtectedProperty()
	{
		echo $this->prot;
	}

	//方法覆盖
	function myMethod()
	{
		parent::myMethod();
		print '> MyOtherClass';
	}
}

$my_other_class = new MyOtherClass('Instance prop');
$my_other_class->printProtectedProperty();
echo "<br>";
$my_other_class->myMethod();


//abstract抽象类，implements，interface接口

//php面向对象(成员变量，成员函数，继承，父类，子类，多态，重载，构造函数，析构函数，抽象，封装)





echo "<br>";
?> 标签外的语句




<html>
	<body>
		<h3>php文件中写html</h3>
	</body>
</html>
