cards = ["queen","queen","king","king"];
cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[2];

var length;




cardsInPlay.push(cardOne);
length = cardsInPlay.length - 1;
console.log("User flipped " + cardsInPlay[length]);

cardsInPlay.push(cardTwo);
length = cardsInPlay.length - 1;
console.log("User flipped " + cardsInPlay[length]);


if (cardsInPlay.length === 2) {
  if (cardsInPlay[0]==cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
   alert("Sorry, try again.");  
  }

}
