let myEvery = function(array, predicat){
	return array.reduce((acc,item) => {
		return acc && predicat(item);
	}, true);
};

module.exports = {
	every : myEvery
};