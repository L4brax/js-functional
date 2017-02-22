var expect = require('chai').expect;

var myReduce = require('./program');

var add = (a,b) => a + b;

describe('Function myReduce', function(){
  it('basic test with reduce when array is empty', function(){
    expect([].reduce(add,3)).to.be.equal(3);
  });
  it('should return acc if array is empty', function(){
    expect(myReduce([],add,3)).to.be.equal(3);
  });
  it('basic test with reduce when array contain one element', function(){
    expect([1].reduce(add,3)).to.be.equal(4);
  });
  it('should return acc if array contain one element', function(){
    expect(myReduce([1],add,3)).to.be.equal(4);
  });
  it('basic test with reduce when array contain three elements', function(){
    expect([9,10,15].reduce(add,3)).to.be.equal(37);
  });
  it('should return acc if array contain one element', function(){
    expect(myReduce([9,10,15],add,3)).to.be.equal(37);
  });
});
