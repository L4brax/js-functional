var addSubstract = (numbers,acc,indexin) => {
  let result = acc | acc
  let index = 0 | indexin

  if(index >= numbers.length){
    return result
  } else {
    if (index%2 == 0) {
      result = result + numbers[index]
    } else {
      result = result - numbers[index]
    }
    return addSubstract(numbers,result,index+1)
  }
}

module.exports = {
  addSubstract : addSubstract
}
