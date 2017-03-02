var expect = require('chai').expect
var addSubstract = require('../index.js').addSubstract

describe('Function addSubstract', function(){
  it('should return 0 if the parrameter is an empty array', function(){
    expect(addSubstract([])).to.be.eql(0)
  })
  it('should return the only element of the array with one element in parrameter', function(){
    expect(addSubstract([12])).to.be.eql(12)
  })
  it('should return the addition of the only two elements in an array of two elements in parrameter', function(){
    expect(addSubstract([12,4])).to.be.eql(16)
  })
})
