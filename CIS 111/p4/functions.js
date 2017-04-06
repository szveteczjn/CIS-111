// Part A

function isPunct(p) {
	if (/^[.,\/#!$%\^&\*;:{}=\-_`~()]+$/.test(p)) {
	return true ;
}
	else {
		return false ;
	}
}

// Part B 

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
		return result
}

// Part C

function isPal(pal) {
	if (pal == pal.split("").reverse().join("")) {
	return true ;
}
	else {
		return false ;
	}
}

// Part D

function sumOfDigits(integer) {
	var str = integer.toString();
	var sum = 0;

	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str.charAt(i), 10);
	}	
		return sum;
}

// Part E

function sumOfDigits(integer) {
	var str = integer.toString();
	var sum = 0;

	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str.charAt(i), 10);
	}	
		return sum;
}

function isHarshad(integer) {

	if (integer % sumOfDigits(integer) == 0) {
		return true;
}
	else {
		return false 
	}
}

// Part F 

function hailStoneSeq(integer) {
    var seq = [integer];
    while (integer > 1) {
        integer = integer % 2 ? 3 * integer + 1 : integer / 2;
        seq.push(integer);
    }
    return seq.toString();
}