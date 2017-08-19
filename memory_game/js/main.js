
var cards = [
   {
       rank: 'queen',
       suit: 'hearts',
       cardImage: 'images/queen-of-hearts.png'
   },
   {
       rank: 'queen',
       suit: 'diamonds',
       cardImage: 'images/queen-of-diamonds.png'
   },
   {
       rank: 'king',
       suit: 'hearts',
       cardImage: 'images/king-of-hearts.png'
   },
   {
       rank: 'king',
       suit: 'diamonds',
       cardImage: 'images/king-of-diamonds.png'
   },
];


cardsInPlay = [];


var cardID = 1;
var length;

function flipCard (cardId){
  cardsInPlay.push(cards[cardId]);
  length = cardsInPlay.length-1;
  console.log("User flipped " + cardsInPlay[length].rank);
  console.log(cardsInPlay[length].suit);
  console.log(cardsInPlay[length].cardImage);
}


function checkForMatch (length){
  if (length === 2) {
    if (cardsInPlay[0]==cardsInPlay[1]){
      alert("You found a match!");
    }
  }
    else{
     alert("Sorry, try again.");
   }

}
flipCard(cardID);
checkForMatch(length);
