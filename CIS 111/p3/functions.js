/* Part A */

function isVowel(ch) {
if (ch == "a" ||
	ch == "i" ||
	ch == "o" ||
	ch == "u" ||
	ch == "y" ||
	ch == "e" ||
	ch == "A" ||
	ch == "I" ||
	ch == "O" ||
	ch == "U" ||
	ch == "Y" ||
	ch == "E" ) {
	return true;
}
	else {
		return false ;
	}
}

/* Part B */

function isVowelR(ch) {
	if (/^[aeiouyAEIOUY]$/.test(ch)) {
	return true ;
}
	else {
		return false ;
	}
}

/* Part C */

function isDigit(ch) {
	if (/^[0-9]+$/.test(ch)) {
		return true ;
}
	else {
		return false ;
	}
}

/* Part D */

function isVowelR(ch) {
	if (/^[aeiouyAEIOUY]$/.test(ch)) {
	return true ;
}
	else {
		return false ;
	}
}

function countVowels(s) {
	var sum = 0;
	for (var i = 0; i < s.length; i++) {
	var c = s.charAt(i);
	if (isVowelR(c)) {
		sum++;
		}
	}
	 return sum;
}

/* Part E */

function reverseStr(s) {
	return s.split("").reverse().join("");
}
