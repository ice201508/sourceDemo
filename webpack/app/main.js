import "./main.css"

var greeter = require("./greeter.js");
//document.getElementsByTagName("body").appendChild(greeter());

let fGetName = i => "es6:" +i+":add:"

console.log(fGetName("Lucy"));

var aList = [12,13,14];
console.log(aList.map(x=>x*x));
