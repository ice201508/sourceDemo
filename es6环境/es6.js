'use strict';

var _dec, _class;

var f = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		return regeneratorRuntime.wrap(function _callee$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						throw new Error('出错啦');

					case 1:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee, this);
	}));

	return function f() {
		return _ref.apply(this, arguments);
	};
}();

var fn = function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		return regeneratorRuntime.wrap(function _callee2$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.prev = 0;
						_context4.next = 3;
						return Promise.reject('出错了1').catch(function (e) {
							return console.log(e);
						});

					case 3:
						_context4.next = 8;
						break;

					case 5:
						_context4.prev = 5;
						_context4.t0 = _context4['catch'](0);

						console.log('catch e : ', _context4.t0);

					case 8:
						_context4.prev = 8;
						_context4.next = 11;
						return Promise.reject('出错了2').catch(function (e) {
							return console.log(e);
						});

					case 11:
						_context4.next = 16;
						break;

					case 13:
						_context4.prev = 13;
						_context4.t1 = _context4['catch'](8);

						console.log('catch e : ', _context4.t1);

					case 16:
						_context4.prev = 16;
						_context4.next = 19;
						return Promise.reject('出错了3').catch(function (e) {
							return console.log(e);
						});

					case 19:
						_context4.next = 24;
						break;

					case 21:
						_context4.prev = 21;
						_context4.t2 = _context4['catch'](16);

						console.log('catch e : ', _context4.t2);

					case 24:
						_context4.next = 26;
						return Promise.resolve('promise resolve');

					case 26:
						return _context4.abrupt('return', _context4.sent);

					case 27:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee2, this, [[0, 5], [8, 13], [16, 21]]);
	}));

	return function fn() {
		return _ref2.apply(this, arguments);
	};
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _marked = [genFn, helloWorldGenerator].map(regeneratorRuntime.mark);

function genFn() {
	var x;
	return regeneratorRuntime.wrap(function genFn$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 2;

				case 2:
					x = _context.sent;
					_context.next = 5;
					return x;

				case 5:
					return _context.abrupt('return', "done or not");

				case 6:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var gen = genFn();

console.log(gen.next());

function helloWorldGenerator() {
	return regeneratorRuntime.wrap(function helloWorldGenerator$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return 'hello';

				case 2:
					_context2.next = 4;
					return 'world';

				case 4:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this);
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

f().then(function (v) {
	return console.log(v);
}, function (e) {
	return console.log(e);
});

fn().then(function (v) {
	return console.log(v);
});

var p1 = new Promise(function (resolve, reject) {
	console.log('p1 start -- ', new Date().getTime());
	setTimeout(function () {
		console.log('end: ', new Date().getTime());
		return reject(new Error('promise出错了'));
	}, 6000);
});

var p2 = new Promise(function (resolve, reject) {
	console.log('p2 start -- ', new Date().getTime());
	setTimeout(function () {
		console.log('start: ', new Date().getTime());
		resolve(p1);
	}, 3000);
});

p2.then(function (result) {
	return console.log(result);
}).catch(function (error) {
	return console.log(error);
});

//装饰器  (多个参数)修改装饰器的行为
function testTable(isTestTable) {
	return function (target) {
		target.isTestTable = isTestTable;
	};
}

var MyTestClass = (_dec = testTable('string'), _dec(_class = function MyTestClass() {
	_classCallCheck(this, MyTestClass);
}) || _class);

console.log('装饰器： ', MyTestClass.isTestTable);

[2, 3, 4, 56, 6].forEach(function (one_item) {
	console.log(one_item);
});
