// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
	let result = {hot:[],warm:[]};

	_.forEach(items,(item,key)=>{
		if (_.every(item, (temp) => {return temp > 19;})){
			result.hot.push(key);
		} else if (_.some(item, (temp) => {return temp > 19;})){
			result.warm.push(key);
		}
	});
    return result;
};

// export the worker function as a nodejs module
module.exports = worker;