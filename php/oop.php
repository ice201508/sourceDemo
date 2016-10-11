<?php
header("Content-type:text/html; charset=utf-8");
//echo "<h3>PHP面向对象</h3>";

//-----------------------------------------------------类
class Site {
	/* 成员变量*/
	var $url;  // public $url;
	var $title;

	/* 成员函数*/

	//构造函数：创建对象时初始化对象，为对象的成员变量赋初始值，和new一起
	function __construct($par1, $par2){
		echo "子类不会自动调用父类的构造函数";
		$this->url = $par1;
		$this->title = $par2;
	}

	//析构函数：当对象的生命周期结束时(如对象所在的函数已调用完毕)，系统会自动执行析构函数
	function __destruct(){
		print "销毁". $this->url . "\n";
	}

	function getUrl(){
		echo $this->url . PHP_EOL . __LINE__;
	}

	function getTitle(){
		echo $this->title . PHP_EOL . __LINE__;
	}
}

$obj = new Site('Lucy', '姓名');
$obj->getUrl();


//---------------------------------------------继承
class Child_site extends Site{   //Child_site(子类)继承Site(父类)，
	public $category;
	function __construct(){
		//parent::__construct();  //子类需要手动调用父类的构造方法
		echo "子类构造方法";
		$this->$url = "SSS";
	}
	//子类对父类进行扩展(即新增自己需要的功能)
	function setCategory($par){
		$this->$category = $par;
	}

	function getCategory(){
		echo $this->$category;
	}
}

$child_site = new Child_site();
$child_site->setCategory('饮料');
$child_site->getCategory();

?>
