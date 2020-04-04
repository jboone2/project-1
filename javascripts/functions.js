// jshint esversion: 6
var main = function () {
};

let arrAvg = (numList) => {
  var x = 0;
  for(i=0; i < numList.length; i++){
    x += numList[i];
    }
  return (x/numList.length);
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

//var x = arrMax([-1,-5,-3,-4.663,-2]);
//document.getElementById("demo").innerHTML = x;
