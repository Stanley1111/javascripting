var calculateChange = function(total, cash) {
  // Your code here
  var breakDown = {};

  var change = cash - total;
  console.log(change);

  if (change / 2000 >= 1){
    breakDown.twentyDollars = Math.floor(change / 2000);
    change -= (breakDown.twentyDollars * 2000);
  }
  if (change / 1000 >= 1){
    breakDown.tenDollars = Math.floor(change / 1000);
    change -= (breakDown.tenDollars * 1000);
  }
  if (change / 500 >= 1){
    breakDown.fiveDollars = Math.floor(change / 500);
    change -= (breakDown.fiveDollars * 500);
  }
  if (change / 200 >= 1){
    breakDown.twoDollars = Math.floor(change / 200);
    change -= (breakDown.twoDollars * 200);
  }
  if (change / 100 >= 1){
    breakDown.oneDollar = Math.floor(change / 100);
    change -= (breakDown.oneDollar * 100);
  }
  if (change / 25 >= 1){
    breakDown.quarter = Math.floor(change / 25);
    change -= (breakDown.quarter * 25);
  }
  if (change / 10 >= 1){
    breakDown.dime = Math.floor(change / 10);
    change -= (breakDown.dime * 10);
  }
  if (change / 5 >= 1){
    breakDown.nickel = Math.floor(change / 5);
    change -= (breakDown.nickel * 5);
  }
  if (change / 1 >= 1){
    breakDown.penny = Math.floor(change / 1);
    change -= (breakDown.penny * 1);
  }

  return breakDown;
};

//testing
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(500, 1000));
