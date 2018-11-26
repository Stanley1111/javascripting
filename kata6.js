var multiplicationTable = function(maxValue) {
  // Your code here

  var table = "";
  var maxDigits = getLength(maxValue * maxValue);


  for(var i = 1; i <= maxValue; i++){
    table += lineBreak(maxValue) + "\n";
    table += "|";

    for(var z = 1; z <= maxValue; z++){
      table += " " + i*z + " ";

      //add white space for lesser digits
      var currLength = getLength(i*z);
      if(currLength < maxDigits){

        for(var y = 0; y < (maxDigits - currLength); y++){
          table += " ";
        }
      }
      table += "|";

    }

    table += "\n";
  }

  return table;
};

//returns the number of digits in a number
function getLength(number) {
    return number.toString().length;
}

//input: same value as 'function multiplicationTable'
//output: linebreak to seperate rows
function lineBreak(number){
  var line = "";
  var spaces = getLength(number*number) + 2;
  for (var i = 0; i < number; i++){
    line += "+";
    for (var x = 0; x < spaces; x++){
      line += "-";
    }
  }
  line += "+";
  return line;
}

// Testing
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
