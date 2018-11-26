function makeCase(string, casing){
  var output = string;

  if(Array.isArray(casing)){
    var styles = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];

    for (var i = 0; i < styles.length; i++){
      if(styles.lastIndexOf(casing[i]) >= 0){
      output = makeCase(output, styles[styles.lastIndexOf(casing[i])]);
      }
    }


  }
  else if (casing === "camel"){
    output = camelCase(string);
  }
  else if (casing === "pascal"){
    output = pascalCase(string);
  }
  else if (casing === "snake"){
    output = snake(string);
  }
  else if (casing === "kebab"){
    output = kebab(string);
  }
  else if (casing === "title"){
    output = titleCase(string);
  }
  else if (casing === "vowel"){
    output = vowel(string);
  }
  else if (casing === "consonant"){
    output = consonant(string);
  }
  else if (casing === "upper"){
    output = string.toUpperCase();
  }
  else if (casing === "lower"){
    output = string.toLowerCase();
  }
  console.log(output);

  return output;

}


function camelCase(input){
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
}

function pascalCase(input){
  var pacal = "";
  //create and array of strings separeted by spaces.
  var words = input.split(" ");

  for ( var i = 0; i < words.length; i++){
    pacal = pacal + words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  return pacal;
}

function snake(input){
  var outputSnake = input.replace(/ /g, "_"); //replace all spaces, globally in the string, with a '_'
  return outputSnake;
}

function kebab(input){
  var outKebab = input.replace(/ /g, "-"); //replace all spaces, globally in the string, with a '-'
  return outKebab;
}

function titleCase(input){
  var title = "";
  //create and array of strings separeted by spaces.
  var words = input.split(" ");

  for ( var i = 0; i < words.length; i++){
    title = title + words[i].charAt(0).toUpperCase() + words[i].substring(1);

    //Preserve spacing between words.
    if(i < words.length-1){
      title += " ";
    }
  }

  return title;
}

function vowel(input){
  var vowels = [[/a/g,'A'], [/e/g,'E'], [/i/g,'I'], [/o/g,'O'], [/u/g,'U'], [/y/g,'Y']];
  for (var i = 0; i < vowels.length; i++){
    input = input.replace(vowels[i][0], vowels[i][1]);
  }

  return input;
}

function consonant(input){
  var cons = [[/b/g,'B'], [/c/g,'C'], [/d/g,'D'], [/f/g,'F'], [/g/g,'G'], [/h/g,'H'], [/j/g,'J'], [/k/g,'K'], [/l/g,'L'], [/m/g,'M'], [/n/g,'N'], [/p/g,'P'], [/q/g,'Q'], [/r/g,'R'], [/s/g,'S'], [/t/g,'T'], [/v/g,'V'], [/w/g,'W'], [/x/g,'X'], [/z/g,'Z']];
  for (var i = 0; i < cons.length; i++){
    input = input.replace(cons[i][0], cons[i][1]);
  }

  return input;
}


//testing
// console.log(makeCase("this is a string", "camel") === "thisIsAString");
// console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
// console.log(makeCase("this is a string", "snake") === "this_is_a_string");
// console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
// console.log(makeCase("this is a string", "title") === "This Is A String");
// console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
// console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
// console.log(makeCase("this is a string", "upper") === "THIS IS A STRING");
// console.log(makeCase("THIS IS a String", "lower") === "this is a string");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");
console.log(makeCase("this is a string", ["pacal", "snake"]) === "THIS_IS_A_STRING");
console.log(makeCase("this is a string", ["title", "upper"]) === "THIS_IS_A_STRING");
