function repeat(operation, num) {
	while (num > 0){
		operation();
		num -= 1;
	}
}

// Do not remove the line below
module.exports = repeat;