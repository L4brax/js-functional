var expect = require('chai').expect
var computePrice = require('./index.js').computePrice

//Jeu de donnée
var prices = {banana:1, potato:2, tomato:3, cucumber:4, salad:5, apple:6,
				getBanana: function(){return this.banana},
				getPotato: function(){return this.potato},
				getTomato: function(){return this.tomato},
				getCucumber: function(){return this.cucumber},
				getSalad: function(){return this.salad},
				getApple: function(){return this.apple}	
				}

let products = ['tomato', 'cucumber', 'salad', 'cucumber', 'tomato', 'salad', 'tomato', 'cucumber',
				'salad', 'cucumber', 'banana', 'banana']


//Les TESTS
describe('computePrice', function() {
	it('Empty basket should return 0 for each value', function(){
		var result = computePrice([])
		expect(result[0]).to.be.a('Number')
		expect(result[1]).to.be.a('Number')
		expect(result[0]).to.equal(0)
		expect(result[1]).to.equal(0)
	})
	it('Basket with only one product should return the price of the product', function(){
		var result = computePrice(['tomato'])
		expect(result[0]).to.be.a('Number')
		expect(result[1]).to.be.a('Number')
		expect(result[0]).to.equal(3)
		expect(result[1]).to.equal(1)
	})
	it('Basket with two different products should return the price of the two products', function(){
		var result = computePrice(['tomato','salad'])
		expect(result[0]).to.be.a('Number')
		expect(result[1]).to.be.a('Number')
		expect(result[0]).to.equal(8)
		expect(result[1]).to.equal(2)
	})
})

