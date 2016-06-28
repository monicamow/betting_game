$( document ).ready(function() {
  $( "#player-input" ).submit(function( event ) {
    event.preventDefault();
    
    $( "#bet" ).text( "Your bet is " + $('input[name="player-bet"]:checked').val() ).show();
    $( "#guess" ).text( "Your guess is " + $("#player-guess").val() + "." ).show();
  })
});