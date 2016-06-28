var app = function(event) {
  var playerBankroll = 100;
  document.getElementById("bankroll").innerHTML = "Your initial bankroll is " + "$" + playerBankroll + ".";

  var playerBet = prompt("Place a $5 or $10 bet: ");

  var playerGuess = prompt("Guess a number between 1 and 10: ");

  var gameNumber = Math.floor((Math.random() * 10) + 1);

  switch (validateGuess(playerGuess, gameNumber)) {
    case 0:
      alert("Good guess!");
      playerBankroll += playerBet;
      break;

    case 1:
      alert("Close but no cigar.");
      break;

    default:
      alert("PLAY AGAIN");
      playerBankroll -= playerBet;
  }

  document.getElementById("new-bankroll").innerHTML = "You now have " + "$" + playerBankroll + ".";

  // if (gameNumber === playerGuess) {
  //   var validateGuess = "Good guess!";
  //   alert(validateGuess);
  // }
  // else {
  //   var validateGuess = "NOPE TRY AGAIN";
  //   alert(validateGuess + "\nYou guessed " + playerGuess + ", but you should have guessed " + gameNumber + ".");
  //   if (gameNumber === playerGuess - 1 || gameNumber === playerGuess + 1) {
  //     playerBankroll = playerBankroll;
  //   }
  //   else {
  //     playerBankroll -= playerBet;
  //   }
  //   document.getElementById("new-bankroll").innerHTML = "You now have " + "$" + playerBankroll + ".";
  // }

}

var validateGuess = function(playerGuess, gameNumber) {
  return Math.abs(playerGuess - gameNumber);
}



document.addEventListener('DOMContentLoaded', app)
