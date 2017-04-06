function sumOddIints(n) {
if (n < 0) {
	return 0;
}
var sum = 0
for (var i = 0; i <= n; i++) {
	if ( i % 2 == 1 ) {
		sum = sum + i;
		}
}
return sum;
}
var input = prompt("What's the number?");

var sum = sumOddIints(input);

var output = "The sum of all odd numbers from 1 to " + input + " is " + sum
document.querySelector("div").innerHTML = output
