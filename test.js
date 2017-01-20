var assert = require('chai').assert
var computePrice = require('index.js').computePrice

//Jeu de donnée
let prices = {banana:1, potato:2, tomato:3, cucumber:4, salad:5, apple:6,
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
		expect(computePrice([])).to.be.a('Number')
		expect(computePrice([])).to.equal(0)
	})
	it('Basket with only one product should return the price of the product', function(){
		expect(computePrice(['tomato'])).to.be.a('Number')
		expect(computePrice(['tomato'])).to.equal(3)
	})
})

