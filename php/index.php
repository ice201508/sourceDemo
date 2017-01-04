<?php

//PHP面向对象， 构造函数，析构函数
class Site {
	public $url;
	var $title;

	//为对象的成员变量赋初始值
	function __construct($par1, $par2){
		print "构造函数" . "<br>";
		$this->url = $par1;
		$this->title = $par2;
	}

	//对象的生命周期结束时(如函数调用完毕)，系统自动执行析构函数
	public function __destruct() {
		print "销毁" . $this->title . "<br>";
	}

	public function getUrl(){
		echo $this->url . "<br>";;
	}

	public function getTitle(){
		echo $this->title;
	}
}

//$runoob = new Site("www.rooble.com", '菜鸟教程');
//$taobao = new Site("www.taobao.com", '淘宝');
$google = new Site("www.google.com", '谷歌');

$google->getUrl();
$google->getTitle();
echo $google->url;


//继承 extends
class Child_Site extends Site {
	public $category;

	function getCategory(){
		echo "派生类： " . $this->category . "<br>";
	}

	//方法的重写(override)，覆盖
	function getUrl(){
		echo "继承重写的方法的：" . $this->url . "<br>";
	}

	function setUrl($par1) {
		$this->url = $par1;
	}
}

$childSide = new Child_Site("ssss", "构造函数的继承");
//$childSide->setUrl("www.baidu.com");
$childSide->getUrl();


// 接口  定义interface 实现implements，指定某个类必须实现哪些方法
interface iTemplate {
	public function setVariable($name, $var);
	public function getHtml($template);
}

class Template implements iTemplate {
	const constant= "常量值";
	
	private $vars = array();

	public function setVariable($name, $var){
		$this->vars[$name] = $var;
	}
	public function getHtml($template){
		forEach($this->vars as $name => $value){
			$template = str_replace('{' . $name . '}', $value, $template);
		}

		return $template;
	}
}

?>
