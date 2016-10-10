<?php
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
 */
$x = 0x13;
var_dump($x);

// 数组，php中都是关联型数组，类似其它语言中的哈希表或字典
$arr = array('one' => 1, 'Two' => 'three', 'Three' => 3);
$arr1 = ['one' => 1, 'Two' => 'three', 'Three' => 3];  // php5.4+
$arr2 = ['one', 'two', 'three'];   //常规数组，索引从0开始
echo $arr['Two'];
echo "<br>";

//*************************************函数
function add($x, $y = 1){
	$result = $x + $y;
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







echo "<br>";
?> 标签外的语句



















<html>
	<body>
		<h3>php文件中写html</h3>
	</body>
</html>
