var repeatNumbers = function(data) {
  // Put your solution here
  var length = data.length;
  var numbers = "";

  //for loop to iterate through given array
  for (var i = 0; i < length; i++){

    //for loop to create string of numbers
    for (var y = 0; y < data[i][1]; y++){
      numbers = numbers + data[i][0];
    }

    //add ', ' to string if not at end of array
    if(i < length-1){
      numbers+= ", ";
    }
  }

  return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
