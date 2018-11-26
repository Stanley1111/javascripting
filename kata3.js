var talkingCalendar = function(date) {
  // Your code here
  var month;
  var day;
  var year;
  var calMonth, calDay;

  var parse = date.split('/');
  year = parse[0];
  month = Number(parse[1]);
  day = Number(parse[2]);

  var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

  calMonth = months[month];

  if(day === 1 || day === 21 || day === 31){
    calDay = day.toString() + "st";
  }
  else if(day === 2 || day === 22){
    calDay = day.toString() + "nd";
  }
  else if(day === 3 || day === 23){
    calDay = day.toString() + "rd";
  }
  else {
    calDay = day.toString() + "th";
  }

  return calMonth + " " + calDay + ", " + year;
};


// testing
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/08/01"));
console.log(talkingCalendar("1987/08/23"));

