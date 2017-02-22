var expect = require('chai').expect;

describe('Function myReduce', function(){
  it('should return true when getDependencies() is called', function(){
    expect(getDependencies()).to.be.eql(true);
  });
  it('should return an empty array if the tree is empty', function(){
    expect(getDependencies(
      {
        "dependencies":{}
      }))
      .to.be.eql([]);
  });
});
