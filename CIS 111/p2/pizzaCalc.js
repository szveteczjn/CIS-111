"use strict";

var pC = prompt("Enter cost");

var pS = prompt("Enter size");

function pizzaPSI(x, y) {
	
	return (pC / (Math.pow(( pS / 2), 2) * Math.PI)).toFixed(2);
	
}

var pizza = pizzaPSI(pC, pS);

var output = "Cost PSI: "+pizza+
	"<br>Cost: $"+pC+
		"<br>Diameter: "+pS;
document.querySelector("div").innerHTML = output