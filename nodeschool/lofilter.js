// include the Lo-Dash library
var _ = require("lodash");

var worker = function(col) {
    return _.filter(col, {'active':true});
};

// export the worker function as a nodejs module
module.exports = worker;