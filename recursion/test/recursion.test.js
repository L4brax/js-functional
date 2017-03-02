/*global describe it: true */
var expect = require('chai').expect
var getDependencies = require('../recursion.js')

describe('Function getDependencies', function(){
  it('should return an empty array if the tree is empty', function(){
    expect(getDependencies(
      {
        'dependencies':{ }
      }))
      .to.be.eql([])
  })
  it('should return an array with one dependency if the tree contain one dependency', function(){
    expect(getDependencies(
      {
        'dependencies':{
          'aSuperDependency': {
            'version': '12.87.7'
          }
        }
      }))
      .to.be.eql(['aSuperDependency@12.87.7'])
  })
  it('should return an array with two dependencies if the tree contain two dependencies', function(){
    expect(getDependencies(
      {
        'dependencies':{
          'optimist': {
            'version': '0.1.65'
          },
          'aSuperDependency': {
            'version': '12.87.7'
          }
        }
      }))
      .to.be.eql(['aSuperDependency@12.87.7','optimist@0.1.65'])
  })
})
