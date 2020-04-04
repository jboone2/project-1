// jshint esversion: 6
var main = function() {};

// Calculates average value of a numeric array.
let arrAvg = numList => {
  var total = 0;
  for (i = 0; i < numList.length; i++) {
    total += numList[i];
  }
  return total / numList.length;
};

// Determines largest number in a numeric array.
let arrMax = numList => {
  var maximum = numList[0];
  numList.forEach(function(element) {
    if (maximum < element) {
      maximum = element;
    }
  });
  return maximum;
};

// Calcuates sum of all even numbers in a numeric array.
let sumEvens = numList => {
  var totalEvens = 0;
  for (var element of numList) {
    if (element % 2 == 0) {
      totalEvens += element;
    }
  }
  return totalEvens;
};

// Determines alphabetical position of a char.
let alphaPosition = function(ch) {
  var charPosition = ch.charCodeAt(0);
  if (charPosition >= 65 && charPosition <= 90) {
    charPosition -= 64;
  } else if (charPosition >= 97 && charPosition <= 122) {
    charPosition -= 96;
  } else charPosition = "Not in the alphabet.";
  return charPosition;
};
