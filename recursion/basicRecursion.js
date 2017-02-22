function reduce(arr, fn, initial, index) {

  // Solution without index
  if(arr.length ===0){
    return initial;
  } else {
    var head = fn(arr[0], initial);
    var tail = arr.slice(1);
    return reduce(tail, fn, head);
  }

  // Version avec recursivité et index
  // if (!index) {index = 0};
  // if (index > arr.length -1){
  //   retuen initial
  // }else{
  //   return reduce(arr,fn,fn(arr[index],initial),index +1);
  // }

  // Version moche en itérant avec des if else
  // {
  //   return initial
  // } else if (arr.length === 1){
  //   return fn(arr[], initial);
  // } else if(arr.length === 2){
  //   return fn(arr[1], fn(arr[0], initial));
  // } else if (arr.length === 3){
  //   return fn(arr[2],fn(arr[1], fn(arr[0], initial)));
  // }
}

module.exports = reduce;
