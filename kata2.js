var conditionalSum = function(values, condition) {
  // Your code here
  if(values === undefined || values === null){
    return 0;
  }

  if(condition === "even"){
    return sumArray(values, 0);
  }
  else if (condition === "odd"){
    return sumArray(values, 1);
  }
  else {
    return 0;
  }

};

//return the sum of the array
//mod = 0 for even; mod = 1 for odd
function sumArray(array, mod){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    if (array[i] % 2 === mod){
      sum += array[i];
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
