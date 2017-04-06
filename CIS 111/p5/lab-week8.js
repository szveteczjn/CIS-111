function addOrderedList() {
	var div = document.querySelector("div");
	var ol = document.createElement("ol");
	div.appendChild(ol);
};

function addListItem(){
	var li = document.createElement("li");
	li.innerHTML = document.getElementById("Coffee").value;
	var ol = document.querySelector("ol");
	ol.appendChild(li);
};

function changeListType() {
	var ol = document.querySelector("ol");
	var val = document.getElementById("Type").value;
	ol.setAttribute("type", val);
};

function removeLastItem(){
	var ol = document.querySelector("ol");
	var listNodes = ol.childNodes;
	var index = listNodes.length-1;
	var remChild = listNodes[index];
	ol.removeChild(remChild);
};
