// INSERTING HTML USING JS

  // 1
  document.addEventListener('DOMContentLoaded', function(event) {
    
  });

  // 2 cheat way
  document.body.innerHTML += '<p>hello!</p>';
  // this is bad because strings of HTML inside JS

  // better way but LONG
  // THIS IS WHY WE HAVE JQUERY
  var p = document.createElement('p');
  var text = document.createTextNode('hello!');

  p.appendChild(text);
  document.bodoy.appendChild(p);

  /* 3 WE NEED EVENT HANDLING
  - registering functions to be called when events occur */

    


