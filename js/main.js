//Arrays

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
var correctMatches = [];

//Variables
var score = 0;
var scoreboard = document.getElementById('scoreboard');
var reset = document.getElementById('reset');


//Functions
var clearScore = function() {
	score = 0;
	scoreboard.innerHTML = 'Your Score: ' + score;
};

var updateScore = function() {
	score += 1;
	scoreboard.innerHTML = 'Your Score: ' + score;
};

var matchedPair = function() {
	var match = cardsInPlay.splice(0, 2);
	correctMatches.push(match);
	updateScore();
};

var checkForMatch = function() {
	if(cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			matchedPair();
		}else{alert("Sorry, try again.");
			createBoard();
		}
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	if(this.className === 'flipped') {
		this.removeAttribute('class');
		cardsInPlay.splice(cards[cardId].rank); 
	}else{this.className = 'flipped';
		cardsInPlay.push(cards[cardId].rank);
	}
	checkForMatch();		
};

var createBoard = function() {
	var gameBoard = document.getElementById('game-board');
	gameBoard.innerHTML = '';
	cardsInPlay = [];
	clearScore();
	for(var i = 0; i < cards.length; i++) {
	
	//new method for rendering board to include 3d card flip	
	//create div that will hold each card
	var cardDiv = document.createElement('div');
	cardDiv.setAttribute('data-id', i);
	cardDiv.setAttribute('id', 'card');
	cardDiv.addEventListener('click', flipCard);
	gameBoard.appendChild(cardDiv);
	
	//create visible backside of card
	var cardBack = document.createElement('img');
	cardBack.setAttribute('src', '../wdi-fundamentals-memorygame/images/back.png');
	cardBack.className = 'front';
	cardDiv.appendChild(cardBack);
	
	//create invisible frontside of card
	var cardFront = document.createElement('img');
	var whichCard = cardDiv.getAttribute('data-id');
	cardFront.setAttribute('src', cards[whichCard].cardImage);
	cardFront.className = 'back';
	cardDiv.appendChild(cardFront);
	}
};

var init = function() {
  var card = document.getElementById('card');
  card.addEventListener('click', flipCard);
};

reset.addEventListener('click', createBoard);

createBoard();

window.addEventListener('DOMContentLoaded', init, false);

