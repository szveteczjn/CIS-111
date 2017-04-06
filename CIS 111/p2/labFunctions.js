/* Part 1 */

function doAlert(parameter) {
 	alert(parameter);
 }

doAlert("Hey!");
doAlert(45);
 
/* Part 2 */

function getDiagonal(x,y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
 var c = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
 var h = Math.sqrt(Math.pow(2, 2) + Math.pow(6, 2));

console.log(c);

console.log(Math.round(h));

/* Part 3 */

function compare_v1(x, y) {
	if (x > y) {
		return true ;
	}
	else {
		return false ;
	}
}

console.log(compare_v1(83, 40))
console.log(compare_v1(24, 15))
console.log(compare_v1(3, 4))

/* Part 4 */

function compare_v2(x, y) {
	if (x > y) {
		return true ;
	}
	else {
		return false ;

	}

	if (typeof(x) != "number") return false;
	if (typeof(y) != "number") return false;

}
console.log(compare_v2("three"));
console.log(compare_v2(24, 15));
console.log(compare_v2(3, 4));

