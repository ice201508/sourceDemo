//es6模块功能主要有个命令构成 export 和 import
//一个文件就是一个模块，可以导出模块中的任何值。 变量，函数，类等

var firstName = "Michael";
var lastName = "Jackson";
var year = 1965;

var getName = function(){
	return firstName + " : this is full name: " + lastName;
}

var default_value = "default";


export {firstName, lastName, year, getName as v1}   //导出语句异步放在脚本尾部

export default default_value;  //导出默认的值，import的时候不必指定特定的名称，可任意名称
