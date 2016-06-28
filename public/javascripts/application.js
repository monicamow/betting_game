var app = function() {

  do {

    $( "#player-input" ).submit(function( event ) {
      event.preventDefault();

      playerBet = parseInt($('input[name="player-bet"]:checked').val());
      playerGuess = parseInt($("#player-guess").val());

      var gameNumber = Math.floor((Math.random() * 10) + 1);

      $( "#bet" ).text( "Your bet is " + playerBet ).show();
      $( "#guess" ).text( "Your guess is " + playerGuess + "." ).show();
      $( "#game-number" ).text( "The actual number is " + gameNumber + "." ).show();      
    

      switch (validateGuess(playerGuess, gameNumber)) {
        case 0:
          $( "#result" ).text( "You are CORRECT!" ).show();
          playerBankroll += playerBet;
          $('#player-input').trigger("reset");
          break;

        case 1:
          $( "#result" ).text( "Close but no cigar." ).show(); 
          playerBankroll = playerBankroll;
          $('#player-input').trigger("reset");
          break;

        default:
          $( "#result" ).text( "Sorry, that was not even close..." ).show(); 
          playerBankroll -= playerBet;
          $('#player-input').trigger("reset");
          break;
        }
      $( "#player-bankroll" ).text( "Bankroll: " + playerBankroll ).show(); 
      if (playerBankroll == 0) {
        $( "#game-over").text("GAME OVER").show();
      }
      })
  } while (playerBankroll > 0);

};

var validateGuess = function(playerGuess, gameNumber) {
  console.log(playerGuess);
  return Math.abs(playerGuess - gameNumber);
}

var resetForm = function() {
  $(':input','#player-input')
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
}

$(document).ready(function() {
  playerBankroll = 0;
  console.log("The DOM is now loaded.");
  app();
  playerBankroll = 15;
});