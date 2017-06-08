

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: src="../images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: src="../images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: src="../images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: src="../images/king-of-diamonds.png"
	}
];

var cardsInPlay = []
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match");
			} else {
			alert("Sorry, try again.");
			};
	};
};
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log("of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();		
};


flipCard(3);
flipCard(2);

