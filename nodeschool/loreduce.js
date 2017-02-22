// include the Lo-Dash library
var _ = require("lodash");

var worker = function(articles) {
	return _.chain(articles)
		.map(function(value){
			return value.total_orders = value.quantity;
		})
		.reduce(function(acc,article){
			acc.push(article);
			return acc;
		},[])
		.value();
};

// export the worker function as a nodejs module
module.exports = worker;