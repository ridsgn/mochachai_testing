const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function() {
	describe('sayHello()', function() {
		it('app should return hello', function() {
			assert.equal(sayHelloResult, 'hello');
		});

		it('sayHello should return type string', function() {
			//let result = sayHello();
			assert.typeOf(sayHelloResult, 'string');
		});
	});

	describe('addNumbers()', function() {
		it('addNumbers should be above 5', function() {
			//let result = addNumbers(5, 5);
			assert.isAbove(addNumbersResult, 5);
		});
	});
});
