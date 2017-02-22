// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {
    return _.chain(input)
    	.reduce((acc, person, index, collection) => {
    		acc.average += acc + ();
    		return acc;
    	},{	'average':0,
    		'underperform':[],
    		'overperform':[]
    	})
    	.value();
};

// export the worker function as a nodejs module
module.exports = worker;