var cards = [
["Clubs","Ace","Deuce","Tray","4","5","6","7","8","9","10","Jack","Queen","King"],
["Hearts","Ace","Deuce","Tray","4","5","6","7","8","9","10","Jack","Queen","King",],
["Spades","Ace","Deuce","Tray","4","5","6","7","8","9","10","Jack","Queen","King"],
["Diamonds","Ace","Deuce","Tray","4","5","6","7","8","9","10","Jack","Queen","King",]
]

// Individual function to get rank 
function getRank() {
	var s = document.querySelectorAll("input[name= 'suit']:checked")[0].getAttribute('value'); 
	var r = document.querySelectorAll("input[name= 'rank']:checked")[0].getAttribute('value');
	return cards[s][r];	
}

// Individual function to get suit
function getSuit() {
	var s = document.querySelectorAll("input[name= 'suit']:checked")[0].getAttribute('value');
	return cards[s][0];
}

// Individual function to get random rank 
function getRandomRank() {
	var s = Math.floor((Math.random() * 3) + 0); 
	var r = Math.floor((Math.random() * 13) + 1); 
	return cards[s][r];
}

// Individual function to get random suit
function getRandomSuit() {
	var s = Math.floor((Math.random() * 3) + 0); 
	return cards[s][0];
}

function getRandomHand() {
 var rank = [];
 var suit = [];
 var i = 0
	while (i < 5) {
	var s = getRandomSuit(); // Gets suit
	var r = getRandomRank(); // Gets rank
		if (rank.length == 0 && suit.length == 0) {
		rank.push(r)
		suit.push(s)
	}
		else {
			var draw = false;
			for (var j = 0; j < rank.length; j++) {  // Checks for repeats
				if (rank[j] == r && suit[j] == s) {
					draw = true;
					break  
				} 
			} 
			if ( draw == true )
				continue
		rank.push(r);
		suit.push(s);
		}
		i++
	}
	var Return = "";
	for (var j = 0; j < 5; j++) {
		Return = Return + " " + rank[j] + " of " + suit[j] + "<br>";
	}
	return Return;
}

function startup() {

	document.getElementById("dealCard").addEventListener("click", handleButtonClickDC); 
	document.getElementById("randomCard").addEventListener("click", handleButtonClickR);
	document.getElementById("randomHand").addEventListener("click", handleButtonClickRH);
	document.getElementById("reset").addEventListener("click", handleButtonClickRE);
};

// button functions 																				
function handleButtonClickDC() {
	 
	 document.querySelector("#div2").innerHTML = "<h3>" + getRank() + " of " + getSuit() + "</h3>";
};

function handleButtonClickR() {

	 document.querySelector("#div2").innerHTML = "<h3>" + getRandomRank() + " of " + getRandomSuit() + "</h3>"; 
};

function handleButtonClickRH() {

	 document.querySelector("#div2").innerHTML = "<h3>" + getRandomHand() + "</h3>";
};

function handleButtonClickRE() {
	return location.reload();
};

window.addEventListener("load", startup);
