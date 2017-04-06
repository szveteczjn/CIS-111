/* Part A */

function avg3(x, y, z) {
return (x + y + z) / 3 ; 
}

/* Part B */

function getTip(x, y) {
	return "$" + (x * y).toFixed(2);
}

/* Part C */

function pizzaPSI(x, y) {
	return "$" + (x / (Math.pow(( y / 2), 2) * Math.PI)).toFixed(2);
}

/* Part D */

function isAlpha(a) {
	
if (/^[a-zA-Z]+$/.test(a)) {
	return true ;
}
	else {
		return false ;
	}
}

/* Part E */

function sumNumbers(n) {

var i = 0;

var sum = 0;

if (0 <= n) {
		while (i <= n) {
			if (n != 0) {
		sum = sum + i;	
		i++;
		}
	}
}
else{
	while (i >= n) {
	if (n != 0 ) {
		sum = sum + i;	
		i--;
		}
	}
}
	return sum;
}