// jshint esversion: 7

//define helper functions here

// Generate a random integer from 1 to 6
let dieRoller = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let controller = function() {
  let targetNumber; // input from user
  let dieOne; // first die result
  let dieTwo; // second die result
  let dieRolls = 0; // number of rolls elapsed
  // get target number from HTML
  targetNumber = document.querySelector("input").value;
  if ((targetNumber >= 2) && (targetNumber <= 12)) {
    do {
      //roll the dice
      dieOne = dieRoller();
      dieTwo = dieRoller();
      //increment roll counter
      dieRolls++;
      //log dice and counter
      console.log(`d1 = ${dieOne}  d2 = ${dieTwo}`);
    } while (dieOne + dieTwo != targetNumber);
    //update images on web page
    die1URL = `images/die${dieOne}.gif`;
    imgElem1 = document.querySelectorAll("img")[0];
    imgElem1.setAttribute("src", die1URL);
    die2URL = `images/die${dieTwo}.gif`;
    imgElem2 = document.querySelectorAll("img")[1];
    imgElem2.setAttribute("src", die2URL);
    //display number of rolls on the web page
    console.log(`You hit your number in ${dieRolls} roll${(dieRolls == 1)?"":"s"}!`);
    document.getElementById("finalResult").innerHTML = `You hit your number in ${dieRolls} roll${(dieRolls == 1)?"":"s"}!`;
  } else {
    console.log("The dice will roll forever without success.");
    document.getElementById("finalResult").innerHTML = "The dice will roll forever without success.";
  }
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");
  //register the click handler for the button
  button.addEventListener("click", controller);
});
