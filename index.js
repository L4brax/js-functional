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

function computePrice(basket){
	let price = 0
	let productCount = 0
	productsFinal = []
	
	basket.forEach(function(product){
		price += prices[product]
		productCount += 1
	})
	return [price,productCount]
	// let price
	// price = basket.map((product)=> price + prices[product])
	// console.log(price)
}

console.log(computePrice(products))

module.exports = {
	computePrice : computePrice
}