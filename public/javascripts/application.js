window.onload = function() {
  var playerBankroll = 100;
  document.getElementById("bankroll").innerHTML = "Your initial bankroll is " + "$" + playerBankroll + ".";

  var playerBet = prompt("Place a $5 or $10 bet: ");

  var playerGuess = prompt("Guess a number between 1 and 10: ");

  var gameNumber = Math.floor((Math.random() * 10) + 1);

  if (gameNumber === playerGuess) {
    var validateGuess = "Good guess!";
    alert(validateGuess);
  }
  else {
    var validateGuess = "NOPE TRY AGAIN";
    alert(validateGuess + "\nYou guessed " + playerGuess + ", but you should have guessed " + gameNumber + ".");
  }

}
