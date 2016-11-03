const Name = "使用es6语法和API";
var odds = (i => i);
console.log(odds(Name));
let arr = [1,2,3].map(x => x*x)
arr.forEach(function(i){
	console.log(i);
})

Array.from(document.querySelectorAll("div")).forEach(function(p){
	console.log(p);
});
