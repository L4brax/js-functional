// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    return _.chain(items)
    	.map((item)=> item+'chained')
    	.map((item)=> item.toUpperCase())
    	.sortBy()
    	.value();
};

// export the worker function as a nodejs module
module.exports = worker;