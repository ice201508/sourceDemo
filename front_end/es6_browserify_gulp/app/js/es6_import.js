//只能导入通过export命令定义了模块对外接口的文件

import {firstName, lastName, year, v1} from "./es6_class.js"
//import * as all from "./es6_class.js"  可以用*整体加载

console.log(firstName, v1());
