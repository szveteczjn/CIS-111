var userInput1 = prompt("Enter width");
alert(userInput1);

var userInput2 = prompt("Enter area");
alert(userInput2);

var length = userInput2 / userInput1 ;

var perimeter = userInput1 * 2 + length * 2 ;

var diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(userInput1, 2));

alert("Length="+length+"\n"+
		"Perimeter="+perimeter+"\n"+
			"Diagonal="+diagonal+"\n");

console.log("Length="+length+"\n"+
		"Perimeter="+perimeter+"\n"+
			"Diagonal="+diagonal+"\n");