/*

  CHALLENGE:

  - If the number of flipped cards is equal to 2,
    see if their text matches.

  - If they do match, give yourself a point.

  - If you've selected 2 cards, regardless of whether or not
    they match, flip them back over. You can use the following
    code to execute code after 500 milliseconds.

    setTimeout(function () {
      console.log("This message will appear after 500 milliseconds");
    }, 500);


  BONUS:

  - If the cards match, keep them flipped over.

  - The game is over when you've matched all of the cards.

*/

var points = 0;
var score = $("h2");

$(".game li").click(function () {
  
  /* Toggle the flip class */
  $(this).toggleClass("flipped");
  
  /* Get all of the currently flipped cards */
  var flipped = $(".flipped");
  
  /* Check to make sure at least 2 are flipped */  
  if ( flipped.length === 2 ) {
    /* Select the first and second cards from the collection */
    var firstCard = flipped.first();
    var secondCard = flipped.last();

    /* Compare to see if the first and second in our collection are equal */
    if ( firstCard.text() === secondCard.text() ) {
      points++;
      score.text("You've found " + points + " matches.");
    }
  
    setTimeout(function () {
      $(".flipped").removeClass("flipped");
    }, 1000);
  }
  
});












