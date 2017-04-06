// Sum Of Digits

function sumOfDigits(x) {
	var str = x.toString();
	var sum = 0;

	for (var i = 0; i < str.length; i++) {
		sum += parseInt(str.charAt(i), 10);
	}	
		return sum;
}

// Harshad

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

// Hailstone Sequence 

function hailStoneSeq(integer) {
    var seq = [integer];
    while (integer > 1) {
        integer = integer % 2 ? 3 * integer + 1 : integer / 2;
        seq.push(integer);
    }
    return seq.toString()
}

function startup() {

	document.getElementById("sumButton").addEventListener("click", handleButtonClickS); 
	document.getElementById("harshadButton").addEventListener("click", handleButtonClickH);
	document.getElementById("hailstoneButton").addEventListener("click", handleButtonClickI);
	document.getElementById("lengthButton").addEventListener("click", handleButtonClickL);
};

function handleButtonClickS() {
	 var x = Number(document.getElementById("integer").value);
	 document.querySelector("div").innerHTML = "<h3>" + sumOfDigits(x) + "</h3>";
};

function handleButtonClickH() {
	 var integer = Number(document.getElementById("integer").value);
	 document.querySelector("div").innerHTML = "<h3>" + isHarshad(integer) + "</h3>";
};

function handleButtonClickI() {
	 var integer = Number(document.getElementById("integer").value);
	 document.querySelector("div").innerHTML = "<h3>" + hailStoneSeq(integer) + "</h3>";
};

function handleButtonClickL() {
	 var str = document.getElementById("div1").innerHTML;
	 document.getElementById("div2").innerHTML = "<h3> Hailstone Sequence Length = " + str.split(",").length + "</h3>";
};

window.addEventListener("load", startup);