window.onload = function() {
  var playerBankroll = 100;
  document.getElementById("bankroll").innerHTML = "Your initial bankroll is " + "$" + playerBankroll + ".";

  var playerBet = prompt("Place a $5 or $10 bet.");

  console.log(playerBet);
}
