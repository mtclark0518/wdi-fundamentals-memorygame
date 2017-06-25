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
//var shuffledID = [];

//Variables
var score = 0;
var scoreboard = document.getElementById('scoreboard');
var reset = document.getElementById('reset');
var gameBoard = document.getElementById('game-board');


//Functions
var shuffleDeck =function (){
    var max = cards.length;
    var shuffledID = [];
    for(var i = 0;i<max ; i++){
    	var cardDiv = document.createElement('div');
    	cardDiv.setAttribute('id', 'card');
        var randCard = Math.floor(Math.random()*max);
        if(shuffledID.indexOf(randCard) === -1){
            shuffledID.push(randCard);
            cardDiv.setAttribute('data-id', randCard);
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
        else
            i--;
    }
    console.log(shuffledID);
};
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
	gameBoard.innerHTML = '';
	cardsInPlay = [];
	clearScore();
	shuffleDeck();
};

var init = function() {
  var card = document.getElementById('card');
  card.addEventListener('click', flipCard);
};

reset.addEventListener('click', createBoard);

createBoard();

window.addEventListener('DOMContentLoaded', init, false);



//shuffle deck


