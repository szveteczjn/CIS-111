"use strict";

function pizzaPSI(x, y) {
	return (x / (Math.pow(( y / 2), 2) * Math.PI)).toFixed(2);
}

//statUp
function startUp() {

	document.querySelector("button").addEventListener("click", getPizzaPSI);
};

function getPizzaPSI() {
	var x = Number(document.getElementById("Cost").value);
	var y = Number(document.getElementById("Diameter").value);
	    document.querySelector("div").innerHTML = "<h3> Cost PSI = $" + pizzaPSI(x, y) + "</h3>";
}

window.addEventListener("load", startUp);