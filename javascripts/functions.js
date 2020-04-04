// jshint esversion: 6
var main = function () {
};

let arrAvg = (numList) => {
  var total = 0;
  for(i=0; i < numList.length; i++){
    total += numList[i];
    }
  return (total/numList.length);
};

let arrMax = (numList) => {
  var maximum = numList[0];
  numList.forEach(function(element){
    //console.log(element);
    if (maximum < element){
      maximum = element;
    }
  });
  return (maximum);
};

let sumEvens = (numList) => {
  var totalEvens = 0;
  for (var element of numList) {
    if (element % 2 == 0) {
      totalEvens += element;
    }
  }
  return (totalEvens);
};


//var x = sumEvens([1, 2, 3, 4, 5]);
//document.getElementById("demo").innerHTML = x;
