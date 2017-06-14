

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: src="../wdi-fundamentals-memorygame/images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: src="../wdi-fundamentals-memorygame/images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: src="../wdi-fundamentals-memorygame/images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: src="../wdi-fundamentals-memorygame/images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var score = 0;

var updateScore = function() {
	var scoreboard = document.getElementById('scoreboard');
	score += 1
	scoreboard.innerHTML = 'Your Score: ' + score;
};

var checkForMatch = function() {
	if(cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
			updateScore();
			} else {
			alert("Sorry, try again.");
			createBoard();
		};
	};
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();		
};

var createBoard = function() {
	var gameBoard = document.getElementById('game-board');
	gameBoard.innerHTML = '';
	cardsInPlay = [];
	cardsInPlay.innerHTML = [];
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', '../wdi-fundamentals-memorygame/images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	};
};

var reset = document.getElementById('reset');
reset.addEventListener('click', createBoard);

createBoard();


