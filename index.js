function randomNumberGenerator(topNumber) {
  // var randomNumber = Math.random();
  // randomNumber = randomNumber * topNumber;
  // randomNumber = Math.floor(randomNumber) + 1;

  var randomNumber = Math.floor(Math.random() * topNumber) + 1;

  return randomNumber;
}

function updateH1(result) {
  var winText;
  if (result === 1) {
    winText = "Player 1 Wins! 🚩";
  } else if (result === 2) {
    winText = "Player 2 Wins! 🚩";
  } else if (result === 3) {
    winText = "It's a Tie!";
  }
  document.querySelector("h1").innerHTML = winText;
}

var randomNumber1 = randomNumberGenerator(6);
var randomNumber2 = randomNumberGenerator(6);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  updateH1(1);
} else if (randomNumber1 < randomNumber2) {
  updateH1(2);
} else {
  updateH1(3);
}
