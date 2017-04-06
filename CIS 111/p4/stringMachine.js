// Length

function isAlpha(a) {
	
if (/^[a-zA-Z0-9 ]+$/.test(a)) {
	return true ;
}
	else {
		return false ;
	}
}

function countLetters(wordd) {
	var sum = 0;

for (var i = 0; i < wordd.length; i++) {
	var c = wordd.charAt(i);
	if (isAlpha(c)) {
		sum++;
		}
	}
	return sum;
}

// Reverse

function getReverse(worrd) {
	return worrd.split("").reverse().join("");
}

// Count vowels

function isVowelR(ch) {
	if (/^[aeiouyAEIOUY]$/.test(ch)) {
	return true ;
}
	else {
		return false ;
	}
}

function countVowels(wword) {
	var sum = 0;
	for (var i = 0; i < wword.length; i++) {
	var c = wword.charAt(i);
	if (isVowelR(c)) {
		sum++;
		}
	}
	 return sum;
}

// Count digits

function isNum(n) {
	
if (/^[0-9]+$/.test(n)) {
	return true ;
}
	else {
		return false ;
	}
}

function countDigits(woord) {
	var sum = 0;

for (var i = 0; i < woord.length; i++) {
	var c = woord.charAt(i);
	if (isNum(c)) {
		sum++;
		}
	}
	return sum;
}

// Punct

function isPunct(p) {
	if (/^[.,\/#!$%\^&\*;:{}=\-_`~()]+$/.test(p)) {
	return true ;
}
	else {
		return false ;
	}
}

// Compress

function isPunct(p) {
	if (/^[.,\/#!$%\^&\*;:{}=\-_`~()]+$/.test(p)) {
	return true ;
}
	else {
		return false ;
	}
}

function compress(str) {
	var result = "";
	for(var i = 0; i < str.length; i++) {
		if(isPunct(str.charAt(i)) || str.charAt(i) == " "); 
			else 
				result = result + str.charAt(i);
		}
		return result ;
}

// Pal

function isPal(pal) {
	if (pal == pal.split("").reverse().join("")) {
	return true ;
}
	else {
		return false ;
	}
}

function startup() {

	document.getElementById("lengthButton").addEventListener("click", handleButtonClickL); 
	document.getElementById("reverseButton").addEventListener("click", handleButtonClickR);
	document.getElementById("vowelsButton").addEventListener("click", handleButtonClickV);
	document.getElementById("digitsButton").addEventListener("click", handleButtonClickD);
	document.getElementById("punctButton").addEventListener("click", handleButtonClickP);
	document.getElementById("compressButton").addEventListener("click", handleButtonClickC);
	document.getElementById("palButton").addEventListener("click", handleButtonClickA);
};

function handleButtonClickL() {
	 var wordd = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3> Length = " + countLetters(wordd) + "</h3>";
};

function handleButtonClickR() {
	 var worrd = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3> Reverse = " + getReverse(worrd) + "</h3>";
};

function handleButtonClickV() {
	 var wword = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3> Number of vowels = " + countVowels(wword) + "</h3>";
};

function handleButtonClickD() {
	 var woord = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3> Number of digits = " + countDigits(woord) + "</h3>";
};

function handleButtonClickP() {
	 var p = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3>" + isPunct(p) + "</h3>";
};

function handleButtonClickC() {
	 var str = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3>" + compress(str) + "</h3>";
};
function handleButtonClickA() {
	 var pal = String(document.getElementById("string").value);
	 document.querySelector("div").innerHTML = "<h3>" + isPal(pal) + "</h3>";
};

window.addEventListener("load", startup);