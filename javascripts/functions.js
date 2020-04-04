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
