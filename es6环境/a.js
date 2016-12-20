function *genFn() {
	var x = yield 2;
	yield x;
	return "done or not";
}

var gen = genFn();

console.log(gen.next());

function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	//return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());


async function f() {
	throw new Error('出错啦');
}

f().then(
	v => console.log(v),
	e => console.log(e)
);


async function fn() {
	try {
		await Promise.reject('出错了1')
				.catch(e => console.log(e));
	} catch (e){
		console.log ('catch e : ', e);
	}
	try {
		await Promise.reject('出错了2')
				.catch(e => console.log(e));
	} catch (e){
		console.log ('catch e : ', e);
	}
	try {
		await Promise.reject('出错了3')
				.catch(e => console.log(e));
	} catch (e){
		console.log ('catch e : ', e);
	}

	return await Promise.resolve('promise resolve');
}

fn().then( v => console.log(v));


var p1 = new Promise(
	function(resolve, reject) {
		console.log('p1 start -- ', new Date().getTime());
		setTimeout(() => {
			console.log('end: ', new Date().getTime());
			return reject(new Error('promise出错了'));
		}, 6000 );
	}
)

var p2 = new Promise(
	function(resolve, reject) {
		console.log('p2 start -- ', new Date().getTime());
		setTimeout( () => {
			console.log('start: ', new Date().getTime());
			resolve(p1)
		}, 3000);
	}
)

p2
	.then(result => console.log(result))
	.catch(error => console.log(error));


//装饰器  (多个参数)修改装饰器的行为
function testTable(isTestTable) {
	return function(target) {
		target.isTestTable = isTestTable;
	}
}

@testTable('string')
class MyTestClass {}
console.log('装饰器： ', MyTestClass.isTestTable);
