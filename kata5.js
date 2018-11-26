  var camelCase = function(input) {
  // Your code here
  var camel = "";
  //create and array of strings separeted by spaces.
  var words = input.split(" ");

  //if input is 1 word, then return input
  if (words.length === 1){
    return input;
  }

  camel += words[0];

  for ( var i = 1; i < words.length; i++){
    camel = camel + words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  return camel;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
