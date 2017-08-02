var cards = [
{
	card: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	card: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	card: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	card: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForAMatch = function () {
	if(cardsInPlay[0] === cardsInPlay[1]){
	console.log("Well Done! You found a match!!!");
	alert("You found a match!!!");
	} else { 
	  console.log("Sorry, try again!");
	  alert("Sorry, try again!");
	}
}

var flipCard = function (cardId) {
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	this.setAttribute('src',cards[cardId].cardImage);
	console.log ("User flipped " + cards[cardId].card);
	cardsInPlay.push(cards[cardId].card);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForAMatch ();
		cardsInPlay = [];
	}
};

var createBoard = function () {
	for (var i = 0; i< cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

