function countWords(inputWords) {
  return inputWords.reduce((acc,item) => {
  	if(!acc[item]){
  		acc[item] = 1;
  	} else {
  		acc[item] += 1;
  	}
  	return acc;
  },{});
}
module.exports = countWords;