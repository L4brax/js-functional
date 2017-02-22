var expect = require('chai').expect;

var every = require('../src/every').every;

let greaterThan10 = function(value){
	return value > 10;
};

describe('every', function (){
	it('should return false with empty array',function(){
		expect(every([])).to.be.true;
	});

	it('should return false with one false element', function(){
		expect(every([7],greaterThan10)).to.be.false;
	});

	it('should return true with one true element', function(){
		expect(every([18],greaterThan10)).to.be.true;
	});

	it('should return true with one true element', function(){
		expect(every([18, 4, 21],greaterThan10)).to.be.false;
	});

	it('should return true with one true element', function(){
		expect(every([18, 12, 21],greaterThan10)).to.be.true;
	});
});