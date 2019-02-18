function randomNumberGenerator(topNumber) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * topNumber;
  randomNumber = Math.floor(randomNumber) + 1;

  return randomNumber;
}

var randomNumber1 = randomNumberGenerator(6);
var randomNumber2 = randomNumberGenerator(6);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Tie!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
